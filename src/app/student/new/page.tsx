import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../../GlobalRedux/store";

const activities = [
  {
    id: 1,
    name: "",
    children: [],
  },
  {
    id: 2,
    name: "Projeler",
    children: [
      { id: 3, name: "Patent başvurusunda bulunmak", points: 40 },
      { id: 4, name: "TÜBİTAK Lisans projeleri yürütücü", points: 30 },
      { id: 5, name: "TÜBİTAK Lisans projeleri araştırmacı", points: 20 },
      { id: 6, name: "TÜBİTAK Lisans projeleri bursiyer", points: 10 },
      { id: 7, name: "Tasarım başvurusu yapmak", points: 20 },
      { id: 8, name: "Faydalı model başvurusu yapmak", points: 20 },
      { id: 9, name: "BAP projelerinde araştırmacı", points: 10 },
      { id: 10, name: "Yeşil kampüs projeleri araştırmacı", points: 10 },
      {
        id: 11,
        name: "TÜBİTAK 2209 A-B Öğrenci Projeleri yürütücü",
        points: 20,
      },
      { id: 12, name: "BAP Projelerinde yürütücü", points: 20 },
      { id: 13, name: "Uluslararası hakemli dergilerde yazar", points: 30 },
      { id: 14, name: "Ulusal Kongrede bildiri sunmak", points: 20 },
      { id: 15, name: "Uluslararası Kongrede bildiri sunmak", points: 50 },
    ],
  },
  {
    id: 16,
    name: "Toplumsal Katkı",
    children: [
      { id: 17, name: "Faaliyetler", points: 60 },
      { id: 18, name: "Sosyal sorumluluk projelerinde yer almak", points: 20 },
      { id: 19, name: "TEKNOFEST yarışmasına katılmak", points: 15 },
      { id: 20, name: "Toplumsal katkı faaliyetlerinde yer almak", points: 10 },
      {
        id: 21,
        name: "Kamu yardım kuruluşlarının faaliyetlerine katılmak",
        points: 10,
      },
      {
        id: 22,
        name: "Sürdürülebilirlikle ilgili faaliyetlerde yer almak",
        points: 10,
      },
      {
        id: 23,
        name: "Ders kapsamında yapılan sosyal sorumluluk faaliyetlerinde yer almak",
        points: 5,
      },
      { id: 24, name: "Sertifika programlarına katılmak", points: 20 },
    ],
  },
  {
    id: 25,
    name: "Toplumsal Katkı",
    children: [
      {
        id: 26,
        name: "En az bir dönem süreyle yürütülen idari öğrenci görevleri",
        points: 50,
      },
      { id: 27, name: "İklim temsilcisi", points: 20 },
      {
        id: 28,
        name: "YÖKAK veya ulusal akreditasyon kuruluşlarında öğrenci temsilciliği",
        points: 20,
      },
      { id: 29, name: "Kalite Komisyonu öğrenci temsilciliği", points: 20 },
      {
        id: 30,
        name: "Strateji Geliştirme Kurulu öğrenci temsilciliği",
        points: 20,
      },
      { id: 31, name: "Öğrenci konseyi başkanlığı", points: 20 },
      { id: 32, name: "Akademik birim kalite ekibi temsilciliği", points: 15 },
      { id: 33, name: "Öğrenci konseyi yönetim kurulu üyesi", points: 10 },
      { id: 34, name: "Fakülte öğrenci temsilciliği", points: 10 },
    ],
  },
  {
    id: 35,
    name: "Kültür",
    children: [
      { id: 36, name: "Değişim programlarından faydalanmak", points: 60 },
      { id: 37, name: "Erasmus", points: 30 },
      { id: 38, name: "Değişim programları sorumlusu", points: 10 },
      {
        id: 39,
        name: "MoU üniversiteleri ile anlaşma kapsamında öğrenci değişim programına katılmak",
        points: 30,
      },
    ],
  },
  {
    id: 40,
    name: "Bilim, Kültür, Spor ve Sanat",
    children: [
      { id: 41, name: "Diğer faaliyetler", points: 60 },
      {
        id: 42,
        name: "Uluslararası düzeyde düzenlenen etkinliklerde ödül almak",
        points: 30,
      },
      {
        id: 43,
        name: "Uluslararası düzeyde düzenlenen etkinliklerde görev almak",
        points: 20,
      },
      {
        id: 44,
        name: "Ulusal düzeyde düzenlenen etkinliklerde ödül almak",
        points: 15,
      },
      {
        id: 45,
        name: "Ulusal düzeyde düzenlenen etkinliklerde görev almak",
        points: 10,
      },
      {
        id: 46,
        name: "Uluslararası düzeyde düzenlenen etkinliklere katılmak",
        points: 10,
      },
      {
        id: 47,
        name: "Ulusal düzeyde düzenlenen etkinliklere katılmak",
        points: 5,
      },
    ],
  },
];

interface Activity {
  name: "Social" | "Cultural" | "Scientific";
}

function StudentNewPage() {
  const user = useSelector((state: RootState) => state.user);

  const [activityType, setActivityType] = useState("");
  const [activity, setActivity] = useState("");
  const [activityFile, setActivityFile] = useState("");

  const handleSubmission = () => {
    // Handle form submission logic, e.g., send data to the server
    // Redirect to the transcript page
    // This is a placeholder, replace it with your actual logic
    console.log("Form submitted");
  };

  return (
    <div>
      <h1>Yeni Başvuru Sayfası</h1>

      <label>
        Faaliyet Türü
        <select
          value={activityType}
          onChange={(e) => setActivityType(e.target.value)}
        >
          {activities.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>

      <br />
      {activityType === "" ? (
        <></>
      ) : (
        <>
          <label>
            Faaliyet seçimi:
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              <option value=""></option>
              {activities
                .find((category) => category.id === parseInt(activityType))
                ?.children.map((subCategory) => (
                  <option key={subCategory.id} value={subCategory.id}>
                    {subCategory.name}
                  </option>
                ))}
            </select>
          </label>

          <br />
        </>
      )}
      {activity === "" ? (
        <></>
      ) : (
        <>
          <label>
            Belgeyi Yükle
            <input
              type="file"
              onChange={(e) => setActivityFile(e.target.value)}
              // You can use additional attributes like accept, multiple, etc., based on your requirements
            />
          </label>

          <br />
        </>
      )}

      {activityFile === "" ? (
        <></>
      ) : (
        <button onClick={handleSubmission}>Gönder</button>
      )}
    </div>
  );
}
export default StudentNewPage;
