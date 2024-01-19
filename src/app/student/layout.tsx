import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { clearToken } from "../../GlobalRedux/features/token/tokenSlice";
import { clearUser } from "../../GlobalRedux/features/user/userSlice";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import LoginAnimation from "../../components/animations/LoginAnimation";
import { useTranslation } from "react-i18next";

function StudentLayout() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <>
      <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">{t("studentLayout.universityName")}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-between w-100">
              <div></div>
              <LoginAnimation>
                <img
                  src={`${process.env.PUBLIC_URL}/images/logo-kucuk.png`}
                  height="43px"
                  alt="logo"
                  style={{ viewTransitionName: "login-logo" }}
                />
              </LoginAnimation>
              <div className="d-flex">
                <Link
                  to="/student/new/"
                  className="nav-link btn btn-primary text-white fw-semibold py-2 px-3 my-auto"
                  unstable_viewTransition
                >
                  {t("studentLayout.newApplication")}
                </Link>
                <Link
                  to="/student/"
                  className="nav-link btn btn-primary text-white fw-semibold py-2 px-3 my-auto"
                  unstable_viewTransition
                >
                  {t("studentLayout.myApplications")}
                </Link>

                <a
                  href="#"
                  className="nav-link btn btn-primary text-white fw-semibold py-2 px-3 my-auto"
                  style={{
                    viewTransitionName: "login-button",
                  }}
                  onClick={() => {
                    dispatch(clearToken());
                    dispatch(clearUser());
                  }}
                >
                  {t("studentLayout.logout")}
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-8 m-auto my-auto card shadow">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
export default StudentLayout;
