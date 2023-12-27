import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
interface Activity {
  id: number;
  studentUniversityId: string;
  studentName: string;
  name: string;
  startDate: string;
  endDate: string;
}

const activities: Activity[] = [
  {
    id: 1,
    studentUniversityId: "20202022083",
    studentName: "Burhan Sancaklı",
    name: "Sosyal Faaliyet",
    startDate: "2023-08-11",
    endDate: "2023-09-11",
  },
  {
    id: 2,
    studentUniversityId: "20202022083",
    studentName: "Burhan Sancaklı",
    name: "Girişimcilik",
    startDate: "2023-08-15",
    endDate: "2023-09-15",
  },
  {
    id: 3,
    studentUniversityId: "20202022083",
    studentName: "Burhan Sancaklı",
    name: "Firma Kurulması",
    startDate: "2023-08-20",
    endDate: "2023-09-28",
  },
  {
    id: 4,
    studentUniversityId: "20202022083",
    studentName: "Burhan Sancaklı",
    name: "Patent Başvurusu Yapılması",
    startDate: "2023-09-01",
    endDate: "2023-09-28",
  },
  {
    id: 5,
    studentUniversityId: "20202022083",
    studentName: "Burhan Sancaklı",
    name: "Patent Alınması",
    startDate: "2023-10-01",
    endDate: "2023-10-15",
  },
  {
    id: 6,
    studentUniversityId: "20202022083",
    studentName: "Burhan Sancaklı",
    name: "Öğrenci Topluluğu Faaliyeti",
    startDate: "2023-09-10",
    endDate: "2023-10-10",
  },
  {
    id: 7,
    studentUniversityId: "20202022083",
    studentName: "Burhan Sancaklı",
    name: "Sosyal Sorumluluk",
    startDate: "2023-09-15",
    endDate: "2023-10-15",
  },
  {
    id: 8,
    studentUniversityId: "20202022083",
    studentName: "Burhan Sancaklı",
    name: "Gönüllü Faaliyet",
    startDate: "2023-10-01",
    endDate: "2023-10-31",
  },
  {
    id: 9,
    studentUniversityId: "20202022083",
    studentName: "Burhan Sancaklı",
    name: "Kültürel Etkinlik",
    startDate: "2023-10-15",
    endDate: "2023-11-15",
  },
  {
    id: 10,
    studentUniversityId: "20202022083",
    studentName: "Burhan Sancaklı",
    name: "Sürdürülebilirlik",
    startDate: "2023-11-01",
    endDate: "2023-11-30",
  },
  {
    id: 11,
    studentUniversityId: "20202022083",
    studentName: "Burhan Sancaklı",
    name: "Spor Etkinliği",
    startDate: "2023-11-15",
    endDate: "2023-12-15",
  },
  {
    id: 12,
    studentUniversityId: "20202022083",
    studentName: "Burhan Sancaklı",
    name: "Bilimsel Etkinlik",
    startDate: "2023-12-01",
    endDate: "2023-12-31",
  },
  {
    id: 13,
    studentUniversityId: "20202022083",
    studentName: "Burhan Sancaklı",
    name: "Teknopark Stajı",
    startDate: "2023-12-10",
    endDate: "2024-01-10",
  },
  {
    id: 14,
    studentUniversityId: "20202022083",
    studentName: "Burhan Sancaklı",
    name: "Tübitak Projesi",
    startDate: "2023-12-15",
    endDate: "2024-02-29",
  },
];

const StaffActivitiesTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );
  const [isConfirmation, setIsConfirmation] = useState(true);

  const handleClick = (activity: Activity, confirmation = false) => {
    setIsConfirmation(confirmation);
    setSelectedActivity(activity);
    setShowModal(true);
  };

  const handleConfirm = () => {
    // Handle confirmation logic here
    setShowModal(false);
  };
  const handleReject = () => {
    // Handle rejection logic here
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
            <th>Öğrenci No</th>
            <th>Öğrenci Adı</th>
            <th>Faaliyet Adı</th>
            <th>Başvuru Dosyası</th>
            <th>Başvuru Başlangıç Tarihi</th>
            <th>Başvuru Bitiş Tarihi</th>
            <th colSpan={2}>Başvuru Aksiyonları</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.id}</td>
              <td>{activity.studentUniversityId}</td>
              <td>{activity.studentName}</td>
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
              <td className="p-0">
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick(activity, true)}
                >
                  Onayla
                </button>
              </td>
              <td className="p-0">
                <button
                  className="btn btn-danger"
                  onClick={() => handleClick(activity, false)}
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
          "{selectedActivity?.studentName}" adlı kullanıcının gönderdiği "
          {selectedActivity?.name}" adlı aktivite başvurusunu{" "}
          {isConfirmation ? "onaylamak" : "reddetmek"} istediğinizden emin
          misiniz?
        </Modal.Body>
        <Modal.Footer>
          {isConfirmation ? (
            <Button variant="primary" onClick={handleConfirm}>
              Onayla
            </Button>
          ) : (
            <Button variant="danger" onClick={handleReject}>
              Reddet
            </Button>
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
