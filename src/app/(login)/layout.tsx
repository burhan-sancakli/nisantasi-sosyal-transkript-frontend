import "./layout.css";
import { Outlet } from "react-router-dom";
import LoginAnimation from "../../components/animations/LoginAnimation";

function LoginLayout() {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="row h-100 align-items-center">
        <div className="col-12 col-md-6 card p-4 m-auto my-auto shadow ">
          <div className="row">
            <div className="col-12 col-lg-8 mt-4 m-auto">
              <div className="text-center my-4">
                <LoginAnimation>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo-kucuk.png`}
                    width="240"
                    alt="logo"
                    style={{ viewTransitionName: "login-logo" }}
                  />
                </LoginAnimation>
              </div>

              <div className="text-center mb-4">
                <h4
                  className="opacity-50"
                  style={{ viewTransitionName: "login-title" }}
                >
                  Sosyal Transkript Sistemi
                </h4>
              </div>
              <Outlet />
              <div className="row g-0">
                <div className="col-12 text-center mt-5">
                  <small
                    className="opacity-50"
                    style={{ viewTransitionName: "login-footer" }}
                  >
                    Copyright İstanbul Nişantaşı Üniversitesi 2023
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
