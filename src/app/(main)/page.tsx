import { Link } from "react-router-dom";
import { RootState } from "../../GlobalRedux/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import ActivityTable from "../../components/ActivityTable";

interface Activity {
  name: "Social" | "Cultural" | "Scientific";
}

function Main() {
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
  <style>
      
    .card {
      width: 100%;
      max-width: 400px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      background-color: #fff;
    }

    h1 {
      text-align: center;
      color: #007bff;
    }

    form {
      margin-top: 20px;
    }

    label {
      display: block;
      margin-bottom: 8px;
      color: #333;
    }

    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
    select,
    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
    }

    select {
      background-color: #f8f9fa;
    }
  </style>
      <div>
        <h1>Hoşgeldin {user.name}</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Sosyal Etkinlik Adı:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Not:
            <input
              type="text"
              name="note"
              value={formData.note}
              onChange={handleChange}
            />
          </label>
          <label>
            Gerekli Belge:
            <input type="file" name="file" onChange={handleFileChange} />
          </label>
           <label for="kategori">Kategori:</label>
              <select id="kategori" name="kategori">
              <option value="1">Seçenek 1</option>
              <option value="2">Seçenek 2</option>
              <option value="3">Seçenek 3</option>
              <option value="4">Seçenek 4</option>
              </select>
          <br />

          <button type="submit">Yükle</button>
        </form>
      </div>
    </>
  );
}
export default Main;
