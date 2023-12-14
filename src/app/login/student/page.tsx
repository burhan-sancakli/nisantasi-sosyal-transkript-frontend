import { faPhone, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { User } from "../../../types";
import { setToken } from "../../../GlobalRedux/features/token/tokenSlice";
import { setUser } from "../../../GlobalRedux/features/user/userSlice";

function Student() {
  const dispatch = useDispatch();
  const [universityId, setUniversityId] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState<undefined | "error" | any>(
    undefined
  );

  const handleLogin = async () => {
    try {
      const request = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new URLSearchParams({
          university_id: universityId,
          password: password,
          is_staff: "0",
        }),
      });
      if (!request.ok) {
        setResponse("error");
      } else {
        const responseData = await request.json();
        setResponse(responseData);
      }
    } catch (error) {
      setResponse("error");
    }
  };

  useEffect(() => {
    if (response && response !== "error") {
      const user: User = response.user;
      const token: string = response.authorisation.token;
      dispatch(setUser(user));
      dispatch(setToken(token));
    }
  }, [response, dispatch]);
  return (
    <>
      <div className="input-group mt-4">
        <span className="input-group-text">
          <FontAwesomeIcon icon={faPhone} />
        </span>
        <input
          type="text"
          className="form-control telefon"
          name="university-id"
          placeholder="Üniversite ID"
          value={universityId}
          onChange={(e) => setUniversityId(e.target.value)}
        />
      </div>

      <div className="input-group mt-2">
        <span className="input-group-text">
          <FontAwesomeIcon icon={faShield} />
        </span>
        <input
          type="password"
          className="form-control"
          name="sifre"
          placeholder="Sanalkampüs şifresi"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="row mt-3 justify-content-between">
        <div className="col-12 col-md-6 col-lg-auto">
          <button
            type="submit"
            className="btn btn-primary-2 fw-semibold w-100 w-ml-auto"
            onClick={handleLogin}
          >
            <span style={{ viewTransitionName: "login-button" }}>
              GİRİŞ YAP
            </span>
          </button>
        </div>
        {response === "error" ? (
          <h5>Giriş bilgilerinizi kontrol edin!</h5>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Student;
