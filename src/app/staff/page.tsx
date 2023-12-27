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
      max-width: 4000px;
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

    table {
      margin-top: 20px;
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
        <h1>Hoşgeldin CRISTIANO RONALDO</h1>
      </div>
      <div>
        <table class="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Öğrenci No</th>
              <th>Ad Soyad</th>
              <th>Fakülte</th>
              <th>Bölüm</th>
              <th>Başvuru No</th>
              <th>Sosyal Etkinlik Adı</th>
              <th>Kategori</th>
              <th>Başvuru Tarihi</th>
              <th>Başvuru Durumu</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20222022819</td>
              <td>GÖKTUĞ PALA</td>
              <td>Mühendislik - Mimarlık Fakültesi</td>
              <td>Yazılım Mühendisliği (İngilizce)</td>
              <td>27122300</td>
              <td>Test</td>
              <td>En az 3 sertifika programına katılmak</td>
              <td>2023-12-23</td>
              <td>İnceleme Bekliyor</td>
              <td><button class="btn btn-success">İncele</button></td>
            </tr>
            <tr>
              <td>20222022820</td>
              <td>SİDAR ERYILMAZ</td>
              <td>Mühendislik - Mimarlık Fakültesi</td>
              <td>Yazılım Mühendisliği (İngilizce)</td>
              <td>27122301</td>
              <td>Deneme 1</td>
              <td>Patent başvurusunda bulunmak</td>
              <td>2023-09-11</td>
              <td>İnceleme Bekliyor</td>
              <td><button class="btn btn-success">İncele</button></td>
            </tr>
            <tr>
              <td>20222022820</td>
              <td>SİDAR ERYILMAZ</td>
              <td>Mühendislik - Mimarlık Fakültesi</td>
              <td>Yazılım Mühendisliği (İngilizce)</td>
              <td>27122302</td>
              <td>Deneme 2</td>
              <td>BAP projelerinde araştırmacı olmak</td>
              <td>2023-09-15</td>
              <td>İnceleme Bekliyor</td>
              <td><button class="btn btn-success">İncele</button></td>
            </tr>
            <tr>
              <td>20234021241</td>
              <td>SİNEM ÇALIŞKAN</td>
              <td>İktisadi İdari Sosyal Bilimler Fakültesi</td>
              <td>Psikoloji (İngilizce)</td>
              <td>27122303</td>
              <td>Örnek</td>
              <td>İklim temsilcisi</td>
              <td>2023-11-02</td>
              <td>İtiraz İnceleme Bekliyor</td>
              <td><button class="btn btn-success">İncele</button></td>
            </tr>
          </tbody>
          </table>
      </div>
    </>
  );
}
export default Main;
