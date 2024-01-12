import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Application } from "../types";

const StaffActivitiesTable = ({
  data,
  token,
}: {
  data: Application[] | undefined;
  token: string;
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const [isConfirmation, setIsConfirmation] = useState(true);
  const [conclusion, setConclusion] = useState("");

  const handleClick = (application: Application, confirmation = false) => {
    setIsConfirmation(confirmation);
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
    fetch(
      `${process.env.REACT_APP_API_URL}/applications/${selectedApplication.id}/accept`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          accept: "application/json",
        },
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
  const handleReject = () => {
    // Handle rejection logic here
    setShowModal(false);
    if (!selectedApplication) {
      console.log("no selected application", selectedApplication);
      return;
    }
    // Create a FormData object and append the necessary data
    const formData = new FormData();
    formData.append("conclusion", conclusion);
    fetch(
      `${process.env.REACT_APP_API_URL}/applications/${selectedApplication.id}/reject`,
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
  return (
    <>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Öğrenci No</th>
            <th>Öğrenci Adı</th>
            <th>Faaliyet Adı</th>
            <th>Başvuru Dosyası</th>
            <th>Başvuru Başlangıç Tarihi</th>
            <th>Başvuru Bitiş Tarihi</th>
            <th>İtiraz Gerekçesi</th>
            <th colSpan={2}>Başvuru Aksiyonları</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((application) => (
            <tr key={application.id}>
              <td>{application.id}</td>
              <td>{application.studentUniversityId}</td>
              <td>{application.studentName}</td>
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
              <td>{application.objection}</td>
              <td className="p-0">
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick(application, true)}
                >
                  Onayla
                </button>
              </td>
              <td className="p-0">
                <button
                  className="btn btn-danger"
                  onClick={() => handleClick(application, false)}
                >
                  Reddet
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isConfirmation ? "Onaylama" : "Reddetme"} Aksiyonu
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          "{selectedApplication?.studentName}" adlı kullanıcının gönderdiği "
          {selectedApplication?.name}" adlı aktivite başvurusunu{" "}
          {isConfirmation ? "onaylamak" : "reddetmek"} istediğinizden emin
          misiniz?
        </Modal.Body>
        <Modal.Footer>
          {isConfirmation ? (
            <Button variant="primary" onClick={handleConfirm}>
              Onayla
            </Button>
          ) : (
            <>
              <Modal.Body>
                <div>
                  <label>Reddetme Sebebi</label>
                  <br />
                  <textarea
                    cols={50}
                    rows={10}
                    value={conclusion} // ...force the input's value to match the state variable...
                    onChange={(e) => setConclusion(e.target.value)} // ... and update the state variable on any edits!
                  ></textarea>
                </div>
              </Modal.Body>
              <Button variant="danger" onClick={handleReject}>
                Reddet
              </Button>
            </>
          )}
          <Button variant="secondary" onClick={handleCancel}>
            İptal Et
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StaffActivitiesTable;
