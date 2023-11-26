import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <Link
          to="/akademisyen/giris"
          className="btn btn-primary-2 w-100 fw-semibold p-3"
        >
          AKADEMİSYEN GİRİŞİ
        </Link>
      </div>
      <div className="mt-3">
        <Link
          to="/ogrenci/giris"
          className="btn btn-success-2 w-100 fw-semibold p-3"
          role="button"
        >
          ÖĞRENCİ GİRİŞİ
        </Link>
      </div>
    </>
  );
}

export default Home;
