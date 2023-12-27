import { Link } from "react-router-dom";
import { RootState } from "../../GlobalRedux/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import StaffActivitiesTable from "../../components/StaffActivitiesTable";

interface Activity {
  name: "Social" | "Cultural" | "Scientific";
}

function StaffPage() {
  const user = useSelector((state: RootState) => state.user);
  return (
    <>
      <div>
        <h1>Hoşgeldin {user.name}</h1>
      </div>
      <div></div>
      <div>
        <StaffActivitiesTable></StaffActivitiesTable>
      </div>
    </>
  );
}
export default StaffPage;
