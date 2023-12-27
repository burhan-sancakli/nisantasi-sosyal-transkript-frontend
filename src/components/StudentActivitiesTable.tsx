import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
interface Activity {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  status: string;
  score: number;
}
const activities: Activity[] = [
  {
    id: 1,
    name: "Sosyal Faaliyet",
    startDate: "2023-08-11",
    endDate: "2023-09-11",
    status: "Processing",
    score: 20,
  },
  {
    id: 2,
    name: "Girişimcilik",
    startDate: "2023-08-15",
    endDate: "2023-09-15",
    status: "Confirmed",
    score: 20,
  },
  {
    id: 3,
    name: "Firma Kurulması",
    startDate: "2023-08-20",
    endDate: "2023-09-28",
    status: "Confirmed",
    score: 30,
  },
  {
    id: 4,
    name: "Patent Başvurusu Yapılması",
    startDate: "2023-09-01",
    endDate: "2023-09-28",
    status: "Rejected",
    score: 10,
  },
  {
    id: 5,
    name: "Patent Alınması",
    startDate: "2023-10-01",
    endDate: "2023-10-15",
    status: "Rejected",
    score: 10,
  },
  {
    id: 6,
    name: "Öğrenci Topluluğu Faaliyeti",
    startDate: "2023-09-10",
    endDate: "2023-10-10",
    status: "Discarded",
    score: 20,
  },
];

const staffs = [
  {
    id: 1,
    name: "Prof. Dr. Habip Koçak",
  },
  {
    id: 2,
    name: "Doç. Dr. Mahmoud Aldababsa",
  },
  {
    id: 3,
    name: "Dr. Öğr. Üyesi Sibel BORAN",
  },
  {
    id: 4,
    name: "Doç. Dr. Fatma Tuğçe Şenberber Dumanlı",
  },
];

const StudentActivitiesTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );

  const handleClick = (activity: Activity) => {
    setSelectedActivity(activity);
    setShowModal(true);
  };

  const handleConfirm = () => {
    // Handle confirmation logic here
    setShowModal(false);
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
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.id}</td>
              <td>{activity.name}</td>
              <td>
                <a
                  href="https://sosyaltranskript.nisantasi.edu.tr/react/build/files/Sosyal%20Faaliyet__2023-09-11.pdf"
                  target="_blank"
                >
                  {activity.name + "__" + activity.endDate}.pdf
                </a>
              </td>
              <td>{activity.startDate}</td>
              <td>{activity.endDate}</td>
              <td
                className={
                  activity.status === "Confirmed"
                    ? "text-success"
                    : activity.status === "Rejected" ||
                      activity.status === "Discarded"
                    ? "text-danger"
                    : "text-black-50"
                }
              >
                <b>{activity.score}</b>
              </td>
              <td>
                <b
                  className={
                    activity.status === "Confirmed"
                      ? "text-success"
                      : activity.status === "Rejected" ||
                        activity.status === "Discarded"
                      ? "text-danger"
                      : "text-black-50"
                  }
                >
                  {activity.status === "Confirmed"
                    ? "Onaylandı"
                    : activity.status === "Processing"
                    ? "İşlenmekte"
                    : activity.status === "Rejected"
                    ? "Reddedildi"
                    : activity.status === "Discarded"
                    ? "Tekrar Reddedildi"
                    : "İşleniyor"}
                </b>
              </td>
              <td>
                {activity.status === "Rejected" ? (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleClick(activity)}
                  >
                    İtiraz Et
                  </button>
                ) : activity.status === "Discarded" ? (
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
              <b className="text-success">50</b>
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
            <label>
              Tekrar İnceleme İçin Tercih Edilen Akademisyen
              <select>
                <option></option>
                {staffs.map((staff) => (
                  <option key={staff.id} value={staff.id}>
                    {staff.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <br></br>
          <div>
            <label>İtiraz Sebebi</label>
            <br />
            <textarea cols={50} rows={10}></textarea>
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

export default StudentActivitiesTable;
