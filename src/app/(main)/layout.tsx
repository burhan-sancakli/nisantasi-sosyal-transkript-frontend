import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { clearToken } from "../../GlobalRedux/features/token/tokenSlice";
import { clearUser } from "../../GlobalRedux/features/user/userSlice";
function MainLayout() {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button
          className="btn btn-primary-2 w-100 fw-semibold p-3"
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
      </div>
      <Outlet />
    </>
  );
}
export default MainLayout;
