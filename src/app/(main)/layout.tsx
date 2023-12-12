import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { clearToken } from "../../GlobalRedux/features/token/tokenSlice";
import { clearUser } from "../../GlobalRedux/features/user/userSlice";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import LoginAnimation from "../../components/animations/LoginAnimation";
function MainLayout() {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Nişantaşı Üniversitesi</Navbar.Brand>
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

              <Nav.Link href="#link">
                <button
                  className="btn btn-primary w-100 fw-semibold p-0 px-3"
                  onClick={() => {
                    dispatch(clearToken());
                    dispatch(clearUser());
                  }}
                  style={{
                    viewTransitionName: "login-button",
                  }}
                >
                  Çıkış Yap
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-8  m-auto my-auto card shadow">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
export default MainLayout;
