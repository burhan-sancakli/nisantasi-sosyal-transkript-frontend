import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Login() {
  const { t } = useTranslation();
  const [ogrenciClicked, setOgrenciClicked] = useState(false);
  const [akademisyenClicked, setAkademisyenClicked] = useState(false);
  return (
    <>
      <div>
        <Link
          to="/login/staff"
          className="btn btn-primary-2 w-100 fw-semibold p-3"
          unstable_viewTransition
          onClick={() => setAkademisyenClicked(true)}
          style={{
            viewTransitionName: akademisyenClicked ? "login-button" : "",
          }}
        >
          {t('loginPage.staff')}
        </Link>
      </div>
      <div className="mt-3">
        <Link
          to="/login/student"
          className="btn btn-success-2 w-100 fw-semibold p-3"
          role="button"
          unstable_viewTransition
          onClick={() => setOgrenciClicked(true)}
          style={{ viewTransitionName: ogrenciClicked ? "login-button" : "" }}
        >
          {t('loginPage.student')}
        </Link>
      </div>
    </>
  );
}

export default Login;
