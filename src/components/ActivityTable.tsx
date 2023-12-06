import React from "react";

const activities = [
  {
    id: 1,
    name: "Social Activity",
    startDate: "2023-08-11",
    endDate: "2023-09-11",
  },
  {
    id: 2,
    name: "Entrepreneurship",
    startDate: "2023-08-15",
    endDate: "2023-09-15",
  },
  {
    id: 3,
    name: "Founding Company",
    startDate: "2023-08-20",
    endDate: "2023-09-28",
  },
  {
    id: 4,
    name: "Applying for Patent",
    startDate: "2023-09-01",
    endDate: "2023-09-28",
  },
  {
    id: 5,
    name: "Securing Patent",
    startDate: "2023-10-01",
    endDate: "2023-10-15",
  },
  {
    id: 6,
    name: "Student Community Event",
    startDate: "2023-09-10",
    endDate: "2023-10-10",
  },
  {
    id: 7,
    name: "Social Awareness",
    startDate: "2023-09-15",
    endDate: "2023-10-15",
  },
  {
    id: 8,
    name: "Voluntary Work",
    startDate: "2023-10-01",
    endDate: "2023-10-31",
  },
  {
    id: 9,
    name: "Cultural Activity",
    startDate: "2023-10-15",
    endDate: "2023-11-15",
  },
  {
    id: 10,
    name: "Environmentalism",
    startDate: "2023-11-01",
    endDate: "2023-11-30",
  },
  {
    id: 11,
    name: "Sports Activity",
    startDate: "2023-11-15",
    endDate: "2023-12-15",
  },
  {
    id: 12,
    name: "Scientific",
    startDate: "2023-12-01",
    endDate: "2023-12-31",
  },
  {
    id: 13,
    name: "Internship",
    startDate: "2023-12-10",
    endDate: "2024-01-10",
  },
  {
    id: 14,
    name: "Tübitak Project",
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
          <th>Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Apply</th>
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
                Apply
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ActivityTable;
