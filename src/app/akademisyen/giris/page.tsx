function AkademisyenGiris() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="card p-5 shadow">
          <form id="girisForm">
            <div className="text-center">
              <img src="/images/logo-kucuk.png" width="160" />
            </div>

            <div className="text-center mt-4">
              <h4 className="fw-semibold opacity-75">
                Sosyal Transkript Sistemi
              </h4>
              <h6 className="fw-semibold opacity-75">
                Akademisyen Giri&#351; Paneli
              </h6>
            </div>

            <div className="input-group mt-4">
              <span className="input-group-text">
                <i className="bi bi-phone"></i>
              </span>
              <input
                type="text"
                className="form-control telefon"
                name="telefon"
                placeholder="Telefon Numaras&#305;"
              />
            </div>

            <div className="input-group mt-2">
              <span className="input-group-text">
                <i className="bi bi-shield-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                name="sifre"
                placeholder="&#350;ifre"
              />
            </div>

            <div className="row mt-3">
              <div className="col-6 text-start d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  id="sifreGonder"
                  className="btn btn-sm fw-semibold btn-link text-dark text-decoration-none px-0"
                >
                  &#350;ifremi Unuttum
                </a>
              </div>
              <div className="col-6 text-end">
                <button type="submit" className="btn btn-info-2 fw-semibold">
                  G&#304;R&#304;&#350; YAP
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AkademisyenGiris;
