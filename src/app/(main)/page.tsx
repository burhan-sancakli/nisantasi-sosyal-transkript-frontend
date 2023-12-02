import { Link } from "react-router-dom";
import { RootState } from "../../GlobalRedux/store";
import { useSelector } from "react-redux";

function Main() {
  const user = useSelector((state: RootState) => state.user);
  return (
    <>
      <div>
        <h1>Hoşgeldin {user.name}</h1>
      </div>
    </>
  );
}
export default Main;
