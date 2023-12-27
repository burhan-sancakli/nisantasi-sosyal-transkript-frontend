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
              <option value="" disabled selected>Öğrenci toplulukları tarafından yapılan faaliyetlerde yer almak</option>
              <option value="1a">Düzenleyici</option>
              <option value="1b">Konuşmacı</option>
              <option value="1c">Katılımcı</option>
              <option value="" disabled selected>Üyelikler</option>
              <option value="2a">En az 3 ay süreyle uluslararası öğrenci topluluklarına üye olmak</option>
              <option value="2b">İstanbul Nişantaşı Üniversitesi öğrenci topluluklarında yönetim kurulunda olmak </option>
              <option value="2c">İstanbul Nişantaşı Üniversitesi öğrenci topluluklarına üye olmak</option>
              <option value="2d">En az 1 yıl süreyle uluslararası mesleki kuruluşlara veya sivil toplum kuruluşlarına üye olmak  </option>
              <option value="2e">En az 1 yıl süreyle ulusal mesleki kuruluşlara veya sivil toplum kuruluşlarına üye olmak </option>
              <option value="" disabled selected>Mesleki kuruluşların etkinliklerine katılmak</option>
              <option value="3a">Uluslararası mesleki kuruluşların etkinliklerine katılmak </option>
              <option value="3b">Ulusal mesleki kuruluşların etkinliklerine katılmak </option>
              <option value="" disabled selected>Staj Uygulamaları</option>
              <option value="4a">İstanbul Nişantaşı Üniversitesi uygulama ve araştırma merkezlerinde yapılan staj uygulamaları </option>
              <option value="4b">En az 2 haftalık (en az 10 iş günü) gönüllü yaz stajı </option>
              <option value="4c">Teknoparklarda yapılan (en az 20 iş günü) staj faaliyetleri</option>
              <option value="4d">Diğer kamu kurumlarında ve özel sektörde gönüllü olarak yürütülen staj faaliyetleri (en az 20 iş günü)</option>
              <option value="" disabled selected>Projeler</option>
              <option value="5a">Patent başvurusunda bulunmak</option>
              <option value="5b">TÜBİTAK Lisans projeleri kapsamında yürütülen projelerde yürütücü olmak</option>
              <option value="5c">TÜBİTAK Lisans projeleri kapsamında yürütülen projelerde araştırmacı olmak</option>
              <option value="5d">TÜBİTAK Lisans projeleri kapsamında yürütülen projelerde bursiyer olmak</option>
              <option value="5e">Tasarım başvurusu yapmak </option>
              <option value="5f">Faydalı model çalışmalarına başvuru yapmak</option>
              <option value="5g">BAP projelerinde araştırmacı olmak </option>
              <option value="5h">Yeşil kampüs projesi kapsamında yürütülen projelerde araştırmacı olmak </option>
              <option value="5i">TÜBİTAK 2209 A-B Öğrenci Projelerinde Yürütücü olmak</option>
              <option value="5k">BAP Projelerinde yürütücü olmak </option>
              <option value="5l">Uluslararası hakemli dergilerde yazar olarak yer almak</option>
              <option value="5m">Ulusal Kongrede bildiri sunmak</option>
              <option value="5n">Uluslararası Kongrede bildiri sunmak</option>
              <option value="" disabled selected>Faaliyetler</option>
              <option value="6a">Sosyal sorumluluk projelerinde yer almak</option>
              <option value="6b">TEKNOFEST yarışmasına katılmak </option>
              <option value="6c">Toplumsal katkı faaliyetlerinde yer almak </option>
              <option value="6d">Kamu yardım kuruluşlarının (AFAD, Kızılay vb) faaliyetlerine katılmak</option>
              <option value="6e">Sürdürülebilirlikle ilgili faaliyetlerde yer almak</option>
              <option value="6f">Ders kapsamında yapılan sosyal sorumluluk faaliyetlerinde yer almak</option>
              <option value="6h">En az 3 sertifika programına katılmak </option>
              <option value="" disabled selected>En az bir dönem süreyle yürütülen idari öğrenci görevleri</option>
              <option value="7a">İklim temsilcisi</option>
              <option value="7b">YÖKAK veya ulusal akreditasyon kuruluşlarında öğrenci temsilciliğ</option>
              <option value="7c">Kalite Komisyonu öğrenci temsilciliği </option>
              <option value="7d">Strateji Geliştirme Kurulu öğrenci temsilciliği</option>
              <option value="7e">Öğrenci konseyi başkanlığı </option>
              <option value="7f">Akademik birim kalite ekibi temsilciliği</option>
              <option value="7g">Öğrenci konseyi yönetim kurulu üyesi </option>
              <option value="7h">Fakülte öğrenci temsilciliği</option>
              <option value="" disabled selected>Değişim programlarından faydalanmak </option>
              <option value="8a">Erasmus </option>
              <option value="8b">Değişim programları sorumlusu</option>
              <option value="8c">MoU üniversiteleri ile anlaşma kapsamında öğrenci değişim programına katılmak </option>
              <option value="" disabled selected>Diğer faaliyetler</option>
              <option value="7a">Bilim, kültür, sanat ve spor alanında uluslararası düzeyde düzenlenen etkinliklerde ödül almak </option>
              <option value="7b">Bilim, kültür, sanat ve spor alanında uluslararası düzeyde düzenlenen etkinliklerde görev almak</option>
              <option value="7c">Bilim, kültür, sanat ve spor alanında ulusal düzeyde düzenlenen etkinliklerde ödül almak</option>
              <option value="7d">Bilim, kültür, sanat ve spor alanında ulusal düzeyde düzenlenen etkinliklerde görev almak </option>
              <option value="7e">Bilim, kültür, sanat ve spor alanında uluslararası düzeyde düzenlenen etkinliklere katılmak</option>
              <option value="7f">Bilim, kültür, sanat ve spor alanında ulusal düzeyde düzenlenen etkinliklere katılmak</option>
              </select>
          <br />

          <button type="submit">Yükle</button>
        </form>
      </div>
    </>
  );
}
export default Main;
