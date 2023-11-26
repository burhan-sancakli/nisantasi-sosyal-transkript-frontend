import "./layout.css";
import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="col-md-6 card p-4 m-auto shadow">
      <Outlet />
      <div className="row g-0">
        <div className="col-12 text-center mt-5">
          <small className="opacity-50">
            Copyright İstanbul Nişantaşı Üniversitesi 2023
          </small>
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
