import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../GlobalRedux/store";

const StaffRoute = ({
  redirectPath = "/login",
  children,
}: {
  redirectPath?: string;
  children: any;
}) => {
  const user = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.token);
  if (user.id === -1 || token === "") {
    console.log(user.is_staff);
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
export default StaffRoute;
