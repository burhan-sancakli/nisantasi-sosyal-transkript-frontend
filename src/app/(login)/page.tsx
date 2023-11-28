import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [ogrenciClicked, setOgrenciClicked] = useState(false);
  const [akademisyenClicked, setAkademisyenClicked] = useState(false);
  return (
    <>
      <div>
        <Link
          to="/akademisyen/giris"
          className="btn btn-primary-2 w-100 fw-semibold p-3"
          unstable_viewTransition
          onClick={() => setAkademisyenClicked(true)}
          style={{
            viewTransitionName: akademisyenClicked ? "login-button" : "",
          }}
        >
          AKADEMİSYEN GİRİŞİ
        </Link>
      </div>
      <div className="mt-3">
        <Link
          to="/ogrenci/giris"
          className="btn btn-success-2 w-100 fw-semibold p-3"
          role="button"
          unstable_viewTransition
          onClick={() => setOgrenciClicked(true)}
          style={{ viewTransitionName: ogrenciClicked ? "login-button" : "" }}
        >
          ÖĞRENCİ GİRİŞİ
        </Link>
      </div>
    </>
  );
}

export default Login;
