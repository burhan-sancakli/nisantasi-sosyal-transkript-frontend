import { Link } from "react-router-dom";
import { RootState } from "../../GlobalRedux/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import StudentActivitiesTable from "../../components/StudentActivitiesTable";

interface Activity {
  name: "Social" | "Cultural" | "Scientific";
}

function StudentPage() {
  const user = useSelector((state: RootState) => state.user);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    file: null,
  });

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
  return (
    <>
      <div>
        <h1>Transkript Sayfası</h1>
      </div>
      <div>
        <StudentActivitiesTable></StudentActivitiesTable>
      </div>
    </>
  );
}
export default StudentPage;
