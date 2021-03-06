import React, { useState } from "react";
import "../css/index.css";
//videos
import idlePlanets from "../assets/videos/idle_planets.mp4";
import solutionsForward from "../assets/videos/solutions_forward.mp4";
import solutionsBack from "../assets/videos/solutions_back.mp4";
import solutionsIdle from "../assets/videos/solutions_idle.mp4";
import aboutUsBack from "../assets/videos/aboutus_back.mp4";
import aboutUsForward from "../assets/videos/aboutus_forward.mp4";
import aboutusIdle from "../assets/videos/aboutus_idle.mp4";
import aidiaBack from "../assets/videos/aidia_back.mp4";
import aidiaForward from "../assets/videos/aidia_forward.mp4";
import aidiaIdle from "../assets/videos/aidia_idle.mp4";
import projectForward from "../assets/videos/project_forward.mp4";
import projectsBack from "../assets/videos/projects_back.mp4";
import projectsIdle from "../assets/videos/projects_idle.mp4";
//images -->> projects
import news_1 from "../assets/images/news-1.jpg";
// import news_2 from "../assets/images/news-2.jpg";
// import news_3 from "../assets/images/news-3.jpg";
// import news_4 from "../assets/images/news-4.jpg";
// import news_5 from "../assets/images/news-5.jpg";
// import news_6 from "../assets/images/news-6.jpg";
// import news_7 from "../assets/images/news-7.jpg";
// import news_8 from "../assets/images/news-8.jpg";

//images -->> soluions
import project_1 from "../assets/images/project-1.jpg";
// import project_2 from "../assets/images/project-2.jpg";

function VideoPlanets() {
  const [buttonVis, setButtonVis] = useState("");
  const [mainVideoSource, setMainVideoSource] = useState(idlePlanets);
  const [isLoop, setIsLoop] = useState(false);

  const [videoSource, setVideoSource] = useState({
    idlePlanets: {
      isVisible: true,
      src: idlePlanets,
    },
    solutionsForward: {
      isVisible: false,
      src: solutionsForward,
    },
    solutionsBack: {
      isVisible: false,
      src: solutionsBack,
    },
    solutionsIdle: {
      isVisible: false,
      src: solutionsIdle,
    },
    aboutUsBack: {
      isVisible: false,
      src: aboutUsBack,
    },
    aboutUsForward: {
      isVisible: false,
      src: aboutUsForward,
    },
    aboutusIdle: {
      isVisible: false,
      src: aboutusIdle,
    },
    aidiaBack: {
      isVisible: false,
      src: aidiaBack,
    },
    aidiaForward: {
      isVisible: false,
      src: aidiaForward,
    },
    aidiaIdle: {
      isVisible: false,
      src: aidiaIdle,
    },
    projectForward: {
      isVisible: false,
      src: projectForward,
    },
    projectsBack: {
      isVisible: false,
      src: projectsBack,
    },
    projectsIdle: {
      isVisible: false,
      src: projectsIdle,
    },
  });

  const createNewSource = (key) => {
    setMainVideoSource(key);
    return Object.keys(videoSource).reduce((sources, source) => {
      sources[source] = {
        ...videoSource[source],
        isVisible: source == key,
      };
      return sources;
    }, {});
  };

  function goPlanet(e) {
    switch (e.target.value) {
      case "solutions":
        return (
          setVideoSource(createNewSource("solutionsForward")),
          setButtonVis("d-none"),
          setTimeout(() => {
            setVideoSource(createNewSource("solutionsIdle"));
            setIsLoop(true);
          }, 3905)
        );
      case "projects":
        return (
          setVideoSource(createNewSource("projectForward")),
          setButtonVis("d-none"),
          setTimeout(() => {
            setVideoSource(createNewSource("projectsIdle"));
            setIsLoop(true);
          }, 3700)
        );
      case "aboutUs":
        return (
          setVideoSource(createNewSource("aboutUsForward")),
          setButtonVis("d-none"),
          setTimeout(() => {
            setVideoSource(createNewSource("aboutusIdle"));
            setIsLoop(true);
          }, 3700)
        );
      case "aidia":
        return (
          setVideoSource(createNewSource("aidiaForward")),
          setButtonVis("d-none"),
          setTimeout(() => {
            setVideoSource(createNewSource("aidiaIdle"));
            setIsLoop(true);
          }, 2700)
        );
      case "backToHomefromSolutions":
        return (
          setVideoSource(createNewSource("solutionsBack")),
          setIsLoop(false),
          setTimeout(() => {
            setVideoSource(createNewSource("idlePlanets"));
            setIsLoop(true);
            setButtonVis("");
          }, 3900)
        );
      case "backToHomefromAidia":
        return (
          setIsLoop(false),
          setVideoSource(createNewSource("aidiaBack")),
          setTimeout(() => {
            setVideoSource(createNewSource("idlePlanets"));
            setIsLoop(true);
            setButtonVis("");
          }, 3905)
        );
      case "backToHomefromProjects":
        return (
          setIsLoop(false),
          setVideoSource(createNewSource("projectsBack")),
          setTimeout(() => {
            setVideoSource(createNewSource("idlePlanets"));
            setIsLoop(true);
            setButtonVis("");
          }, 3905)
        );
      case "backToHomefromAboutUs":
        return (
          setIsLoop(false),
          setVideoSource(createNewSource("aboutUsBack")),
          setTimeout(() => {
            setVideoSource(createNewSource("idlePlanets"));
            setIsLoop(true);
            setButtonVis("");
          }, 3905)
        );

      default:
        return "";
    }
  }

  return (
    <div id="video-planets-idle">
      {Object.keys(videoSource).map((source) => (
        <video
          className={`main-video ${!videoSource[source].isVisible && "d-none"}`}
          src={videoSource[source].src}
          loop={isLoop}
          autoPlay
          muted
        />
      ))}

      {mainVideoSource === "solutionsIdle" && (
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="card p-2  m-2" style={{ width: "20rem" }}>
                <img src={project_1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Mikro Sa??l??k Hizmetleri</h5>
                  <p className="card-text">
                    Anahtar Teslim Hastane Kurulumu Projelendirme
                  </p>
                  <a href="/" className="card-link">
                    Detayl?? bilgi i??in t??klay??n??z...
                  </a>
                </div>
              </div>
              {/* <div className="card p-2  m-2" style={{ width: "20rem" }}>
                <img src={project_2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    Sa??l??k Kurulu??lar??nda ??al????ma Sistemi Kurulumu -Outsource
                    Management-
                  </h5>
                  <p className="card-text">
                    Laboratuvar ve Radyoloji Merkezleri Kurulumu Projelendirme
                  </p>
                  <a href="/" className="card-link">
                    Detayl?? bilgi i??in t??klay??n??z...
                  </a>
                </div>
              </div> */}
            </div>
            <div className="col-6"></div>
            <div className="row">
              <div className="col">
                {" "}
                <button
                  className="btn btn-primary-outline"
                  onClick={goPlanet}
                  value="backToHomefromSolutions"
                >
                  <span className="badge text-bg-primary me-2">
                    <i className="bi bi-house-door"></i>
                  </span>
                  Anasayfa
                </button>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      )}
      {mainVideoSource === "aidiaIdle" && (
        <div className="container">
          <div className="row">
            <div className="col-6 align-items-center mt-4">
              <div className="title m-4 fs-1 text-info">
                Ak??ll?? ????z??m Hizmetlerimiz{" "}
              </div>
              <div className="list-group">
                <a
                  href="http://covidmisin.com/"
                  className="list-group-item list-group-item-action"
                >
                  IHMG PCR Test Hizmetleri
                </a>
                <a
                  href="http://pcrtesti.net/"
                  className="list-group-item list-group-item-action"
                >
                  IHMG Laboratuvar Kurulum Hizmetleri
                </a>
                <a
                  href="http://healthwebsoftware.com/"
                  className="list-group-item list-group-item-action"
                >
                  IHMG Yaz??l??m Hizmetleri
                </a>
                <a
                  href="http://www.healthandglad.com/"
                  className="list-group-item list-group-item-action"
                >
                  IHMG Uluslararas?? Entegre Sa??l??k Turizmi Hizmetleri
                </a>
                <a
                  href="http://www.rpaakademi.com/"
                  className="list-group-item list-group-item-action"
                >
                  IHMG Robotik S??re?? Otomasyonu (RPA) ????z??mleri
                </a>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
          <div className="row mt-4">
            <div className="col-6">
              <button
                className="btn btn-primary-outline"
                onClick={goPlanet}
                value="backToHomefromAidia"
              >
                <span className="badge text-bg-primary me-2">
                  <i className="bi bi-house-door"></i>
                </span>
                Anasayfa
              </button>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      )}
      {mainVideoSource === "projectsIdle" && (
        <div className="container">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6">
              <div className="card p-2  m-2" style={{ width: "20rem" }}>
                <img src={news_1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Ege ??ehir Hastanesi</h5>
                  <p className="card-text">
                    Proje Y??netimi ve Ba??lang???? ????letme Y??netimi
                  </p>
                  <a href="/" className="card-link">
                    Detayl?? bilgi i??in t??klay??n??z...
                  </a>
                </div>
              </div>
              {/* <div className="card p-2 m-2" style={{ width: "20rem" }}>
                <img src={news_2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    Sa??l??k Bakanl?????? Suat Seren E??itim Ara??t??rma Hastanesi
                  </h5>
                  <p className="card-text">
                    ??l Baz??nda E Sa??l??k D??n??????m Uygulamalar??
                  </p>
                </div>
              </div>
              <div className="card p-2 m-2" style={{ width: "20rem" }}>
                <img src={news_3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Mobil Sa??l??k ??niteleri</h5>
                  <p className="card-text">
                    Ameliyathane ve G??r??nt??leme Sistemleri
                  </p>
                </div>
              </div>
              <div className="card p-2 m-2" style={{ width: "20rem" }}>
                <img src={news_4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Afyon ??l Sa??l??k M??d??rl??????</h5>
                  <p className="card-text">
                    ??l Baz??nda E Sa??l??k D??n??????m Uygulamalar??
                  </p>
                </div>
              </div>
              <div className="card p-2 m-2" style={{ width: "20rem" }}>
                <img src={news_5} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">??zel Defne Hastanesi</h5>
                  <p className="card-text">Anahtar Teslim Hastane Projesi</p>
                </div>
              </div>
              <div className="card p-2 m-2" style={{ width: "20rem" }}>
                <img src={news_6} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    ??zel ??elale Termessos Hastanesi
                  </h5>
                  <p className="card-text">Anahtar Teslim Hastane Projesi</p>
                </div>
              </div>
              <div className="card p-2 m-2" style={{ width: "20rem" }}>
                <img src={news_7} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    T??rkiye de ve D??nyada Kurulu 50???den Fazla T??bbi Laboratuvar
                  </h5>
                  <p className="card-text">Y??lda 90 Milyondan Fazla Test</p>
                </div>
              </div>
              <div className="card p-2 m-2" style={{ width: "20rem" }}>
                <img src={news_8} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    T??rkiye???de 16 farkl?? lokasyonda Radyasyon Onkolojisi ve
                    Kanser Tedavi Merkezi Kurulumu
                  </h5>
                  <p className="card-text">
                    Proje Y??netimi ve Ba??lang???? ????letme Y??netimi
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <button
              className="btn btn-primary-outline"
              onClick={goPlanet}
              value="backToHomefromProjects"
            >
              <span className="badge text-bg-primary me-2">
                <i className="bi bi-house-door"></i>
              </span>
              Anasayfa
            </button>
          </div>
        </div>
      )}
      {mainVideoSource === "aboutusIdle" && (
        <div className="container pt-5">
          <div className="row align-items-center clearfix">
            <div className="col-6">
              <h1 className="text-light">IHMG ???? Y??netim Grubu</h1> <br />{" "}
              <span className="title text-light">
                {" "}
                ?????lke Sa??l??????nda Do??ru ????z??mler???
              </span>
            </div>
            <div className="col-6">
              <p className="text-primary fs-3">
                2000 Y??l?? ??tibari ile faaliyette olan IHMG ???? Y??netim Grubu
                uluslararas?? kurum/kurulu?? yap??land??rma hizmetlerinde nitelikli
                altyap??s?? ve insan kayna???? ile hizmet vermektedir. Proje
                Y??netimi odakl?? ??al????an IHMG ???? Y??netim Grubu Sekt??rel alanda
                tecr??belerinin yan??s??ra t??m sekt??rler i??in ortak gereksinim olan
                i?? ????z??mleri ile geni?? hizmet a???? olu??turmaktad??r. ???? Y??netim
                Grubunun iki ??nemli firmas?? bulunmakta ve d??nyada 11 ??lkede
                100???lerce projeyi ba??ar??l?? ??ekilde tamamlam???? bulunmaktad??r.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6"></div>
            <div className="col-6">
              <button
                className="btn btn-primary-outline"
                onClick={goPlanet}
                value="backToHomefromAboutUs"
              >
                <span className="badge text-bg-primary me-2">
                  <i className="bi bi-house-door"></i>
                </span>
                Anasayfa
              </button>
            </div>
          </div>
        </div>
      )}

      <div>
        <button
          onClick={goPlanet}
          value="solutions"
          className={`go-solutions ${buttonVis}`}
          id="go-solutions"
        >
          Solutions
        </button>
        <button
          onClick={goPlanet}
          value="aidia"
          className={`go-aidia ${buttonVis}`}
          id="go-aidia"
        >
          Aidia
        </button>
        <button
          onClick={goPlanet}
          value="projects"
          className={`go-projects ${buttonVis}`}
          id="go-projects"
        >
          Projects
        </button>
        <button
          onClick={goPlanet}
          value="aboutUs"
          className={`go-aboutUs ${buttonVis}`}
          id="go-aboutUs"
        >
          About Us
        </button>
      </div>
    </div>
  );
}

export default VideoPlanets;
