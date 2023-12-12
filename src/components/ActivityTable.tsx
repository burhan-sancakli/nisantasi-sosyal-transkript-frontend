import React from "react";

const activities = [
  {
    id: 1,
    name: "Sosyal Faaliyet",
    startDate: "2023-08-11",
    endDate: "2023-09-11",
  },
  {
    id: 2,
    name: "Girişimcilik",
    startDate: "2023-08-15",
    endDate: "2023-09-15",
  },
  {
    id: 3,
    name: "Firma Kurulması",
    startDate: "2023-08-20",
    endDate: "2023-09-28",
  },
  {
    id: 4,
    name: "Patent Başvurusu Yapılması",
    startDate: "2023-09-01",
    endDate: "2023-09-28",
  },
  {
    id: 5,
    name: "Patent Alınması",
    startDate: "2023-10-01",
    endDate: "2023-10-15",
  },
  {
    id: 6,
    name: "Öğrenci Topluluğu Faaliyeti",
    startDate: "2023-09-10",
    endDate: "2023-10-10",
  },
  {
    id: 7,
    name: "Sosyal Sorumluluk",
    startDate: "2023-09-15",
    endDate: "2023-10-15",
  },
  {
    id: 8,
    name: "Gönüllü Faaliyet",
    startDate: "2023-10-01",
    endDate: "2023-10-31",
  },
  {
    id: 9,
    name: "Kültürel Etkinlik",
    startDate: "2023-10-15",
    endDate: "2023-11-15",
  },
  {
    id: 10,
    name: "Sürdürülebilirlik",
    startDate: "2023-11-01",
    endDate: "2023-11-30",
  },
  {
    id: 11,
    name: "Spor Etkinliği",
    startDate: "2023-11-15",
    endDate: "2023-12-15",
  },
  {
    id: 12,
    name: "Bilimsel Etkinlik",
    startDate: "2023-12-01",
    endDate: "2023-12-31",
  },
  {
    id: 13,
    name: "Teknopark Stajı",
    startDate: "2023-12-10",
    endDate: "2024-01-10",
  },
  {
    id: 14,
    name: "Tübitak Projesi",
    startDate: "2023-12-15",
    endDate: "2024-02-29",
  },
];

const ActivityTable = () => {
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Faaliyet Adı</th>
          <th>Başvuru Başlangıç Tarihi</th>
          <th>Başvuru Bitiş Tarihi</th>
          <th>Başvurma Durumu</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity) => (
          <tr key={activity.id}>
            <td>{activity.id}</td>
            <td>{activity.name}</td>
            <td>{activity.startDate}</td>
            <td>{activity.endDate}</td>
            <td>
              <button className="btn btn-primary" disabled>
                Başvur
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ActivityTable;
