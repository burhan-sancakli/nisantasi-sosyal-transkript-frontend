import { faPhone, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../GlobalRedux/features/user/userSlice";
import { User } from "../../../types";
import { setToken } from "../../../GlobalRedux/features/token/tokenSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../GlobalRedux/store";

function Student() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState<undefined | any>(undefined);

  const handleLogin = async () => {
    try {
      const request = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        body: new URLSearchParams({
          email: username,
          password: password,
        }),
      });

      if (!request.ok) {
        setResponse(undefined);
        alert("Giriş bilgileri yanlış, tekrar deneyin.");
      } else {
        const responseData = await request.json();
        setResponse(responseData);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Giriş bilgileri yanlış, tekrar deneyin.");
    }
  };

  useEffect(() => {
    if (response) {
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
          name="telefon"
          placeholder="Telefon Numarası"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="row mt-3 justify-content-between">
        <div className="col-12 col-md-6 col-lg-auto d-flex align-items-center">
          <a
            href="#"
            id="sifreGonder"
            className="btn btn-sm fw-semibold w-100 w-md-auto"
          >
            Şifremi Unuttum
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-auto">
          <button
            type="submit"
            className="btn btn-primary-2 fw-semibold w-100 w-md-auto"
            onClick={handleLogin}
          >
            <span style={{ viewTransitionName: "login-button" }}>
              GİRİŞ YAP
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Student;
