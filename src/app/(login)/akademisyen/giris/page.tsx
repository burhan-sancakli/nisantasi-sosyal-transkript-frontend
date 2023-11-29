import { faPhone, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AkademisyenGiris() {
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

export default AkademisyenGiris;
