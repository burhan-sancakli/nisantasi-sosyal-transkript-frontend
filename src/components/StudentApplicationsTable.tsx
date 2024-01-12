import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Application } from "../types";

const StudentApplicationsTable = ({
  data,
  token,
}: {
  data: Application[] | undefined;
  token: string;
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const [objection, setObjection] = useState("");
  const handleClick = (application: Application) => {
    setSelectedApplication(application);
    setShowModal(true);
  };

  const handleConfirm = () => {
    // Handle confirmation logic here
    setShowModal(false);
    if (!selectedApplication) {
      console.log("no selected application", selectedApplication);
      return;
    }
    const formData = new FormData();
    formData.append("objection", objection);
    fetch(
      `${process.env.REACT_APP_API_URL}/applications/${selectedApplication.id}/object`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          accept: "application/json",
        },
        body: formData,
      }
    ) // Replace with the correct URL to your Laravel API
      .then((response) => response.json())
      .then((data) => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const handleCancel = () => {
    setShowModal(false);
  };
  let averageScore = 0;
  let acceptedApplications = 0;
  data?.forEach((application) => {
    if (application.status === "accepted") {
      acceptedApplications++;
      averageScore += application.score;
    }
  });
  if (acceptedApplications !== 0) {
    averageScore /= acceptedApplications;
  }
  console.log(averageScore);
  console.log(acceptedApplications);

  return (
    <>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Faaliyet Adı</th>
            <th>Başvuru Dosyası</th>
            <th>Faaliyet Başlangıç Tarihi</th>
            <th>Faaliyet Bitiş Tarihi</th>
            <th>Faaliyet Puanı</th>
            <th>Başvurma Durumu</th>
            <th>Aksiyon</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((application) => (
            <tr key={application.id}>
              <td>{application.id}</td>
              <td>{application.name}</td>
              <td>
                <a
                  href="https://sosyaltranskript.nisantasi.edu.tr/react/build/files/Sosyal%20Faaliyet__2023-09-11.pdf"
                  target="_blank"
                >
                  {application.name + "__" + application.endDate}.pdf
                </a>
              </td>
              <td>{application.startDate}</td>
              <td>{application.endDate}</td>
              <td
                className={
                  application.status === "accepted"
                    ? "text-success"
                    : application.status === "rejected" ||
                      application.status === "discarded"
                    ? "text-danger"
                    : "text-black-50"
                }
              >
                <b>{application.score}</b>
              </td>
              <td>
                <b
                  className={
                    application.status === "accepted"
                      ? "text-success"
                      : application.status === "rejected" ||
                        application.status === "discarded"
                      ? "text-danger"
                      : "text-black-50"
                  }
                >
                  {application.status === "accepted"
                    ? "Onaylandı"
                    : application.status === "evaluating"
                    ? "İşlenmekte"
                    : application.status === "reevaluating"
                    ? "Tekrar İşlenmekte"
                    : application.status === "rejected"
                    ? `Reddedildi: ${application.conclusion}`
                    : application.status === "discarded"
                    ? `Tekrar Reddedildi: ${application.conclusion}`
                    : "İşleniyor"}
                </b>
              </td>
              <td>
                {application.status === "rejected" ? (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleClick(application)}
                  >
                    İtiraz Et
                  </button>
                ) : application.status === "discarded" ? (
                  <button className="btn btn-primary" disabled>
                    İtiraz Et
                  </button>
                ) : (
                  <></>
                )}
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>Toplam Aktivite Puanı</td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <b className="text-success">{averageScore}</b>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Modal show={showModal} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>İtiraz Etme Aksiyonu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>İtiraz Sebebi</label>
            <br />
            <textarea
              cols={50}
              rows={10}
              value={objection} // ...force the input's value to match the state variable...
              onChange={(e) => setObjection(e.target.value)} // ... and update the state variable on any edits!
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConfirm}>
            İtiraz Et
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            İptal Et
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StudentApplicationsTable;
