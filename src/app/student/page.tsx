import { Link } from "react-router-dom";
import { RootState } from "../../GlobalRedux/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StudentApplicationsTable from "../../components/StudentApplicationsTable";
import { Application } from "../../types";

function StudentPage() {
  const user = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.token);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    file: null,
  });
  const [applications, setApplications] = useState<Application[]>();
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setFormData((prevData: any) => ({
      ...prevData,
      file,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your submit logic here
    console.log("Form submitted with data:", formData);
    // Reset the form if needed
    // setFormData({
    //   name: '',
    //   email: '',
    //   file: null,
    // });
  };
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/applications`) // Replace with the correct URL to your Laravel API
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
        <h1>Transkript Sayfası</h1>
      </div>
      <div>
        <StudentApplicationsTable
          data={applications}
          token={token}
        ></StudentApplicationsTable>
      </div>
    </>
  );
}
export default StudentPage;
