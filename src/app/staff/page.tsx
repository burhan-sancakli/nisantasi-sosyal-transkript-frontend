import { Link } from "react-router-dom";
import { RootState } from "../../GlobalRedux/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StaffActivitiesTable from "../../components/StaffActivitiesTable";
import { Application } from "../../types";

interface Activity {
  name: "Social" | "Cultural" | "Scientific";
}

function StaffPage() {
  const user = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.token);
  const [applications, setApplications] = useState<Application[]>();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/applications?is_staff=1`) // Replace with the correct URL to your Laravel API
      .then((response) => response.json())
      .then((data) => {
        setApplications(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  return (
    <>
      <div>
        <h1>Hoşgeldin {user.name}</h1>
      </div>
      <div></div>
      <div>
        <StaffActivitiesTable
          data={applications}
          token={token}
        ></StaffActivitiesTable>
      </div>
    </>
  );
}
export default StaffPage;
