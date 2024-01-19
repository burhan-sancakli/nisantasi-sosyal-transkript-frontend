import { faPhone, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User } from "../../../types";
import { setUser } from "../../../GlobalRedux/features/user/userSlice";
import { setToken } from "../../../GlobalRedux/features/token/tokenSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

function Staff() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
          is_staff: "1",
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
          placeholder={t("loginPageStaff.universityId")}
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
          placeholder={t("loginPageStaff.password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="row mt-3 justify-content-between">
        <div className="col-12 col-md-6 col-lg-auto d-flex align-items-center">
          {/*<a
            href="#"
            id="sifreGonder"
            className="btn btn-sm fw-semibold w-100 w-md-auto"
          >
            Şifremi Unuttum
          </a>*/}
        </div>
        <div className="col-12 col-md-6 col-lg-auto">
          <button
            type="submit"
            className="btn btn-primary-2 fw-semibold w-100 w-md-auto"
            onClick={handleLogin}
          >
            <span style={{ viewTransitionName: "login-button" }}>
              {t("loginPageStaff.login")}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Staff;
