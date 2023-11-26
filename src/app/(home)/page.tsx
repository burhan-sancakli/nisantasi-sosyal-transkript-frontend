import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="row g-0">
      <div className="col-12 text-center mt-4">
        <img src="/images/logo-kucuk.png" width="240" />
      </div>

      <div className="col-12 text-center mt-4">
        <h4 className="opacity-50">Sosyal Transkript Sistemi</h4>
      </div>

      <div className="col-md-8 mt-4 m-auto">
        <div className="col-md-12 col-lg-10 m-auto mt-3">
          <Link
            to="/akademisyen/giris"
            className="btn btn-info-2 w-100 d-flex align-items-center justify-content-center text-uppercase fw-semibold h-60px"
          >
            &#x0041;&#x006B;&#x0061;&#x0064;&#x0065;&#x006D;&#x0069;&#x0073;&#x0079;&#x0065;&#x006E;&#x0020;&#x0047;&#x0069;&#x0072;&#x0069;&#x015F;&#x0069;
          </Link>
        </div>

        <div className="col-md-12 col-lg-10 m-auto mt-3">
          <Link
            to="/akademisyen/giris"
            className="btn btn-success-2 w-100 d-flex align-items-center justify-content-center text-uppercase fw-semibold h-60px"
            role="button"
          >
            &#x00D6;&#x011F;&#x0072;&#x0065;&#x006E;&#x0063;&#x0069;&#x0020;&#x0047;&#x0069;&#x0072;&#x0069;&#x015F;&#x0069;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
