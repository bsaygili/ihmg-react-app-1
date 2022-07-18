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
  // const [videoSource, setMainVideoSource] = useState(null);
  const [buttonVis, setButtonVis] = useState("");
  const [mainVideoSource, setMainVideoSource] = useState(idlePlanets);
  const [isLoop, setIsLoop] = useState(false);
  // const [isMain, setIsMain] = useState(true);

  // const handleVideoEnded = () => {
  //   setVideoSource(solutionsIdle);

  //   console.log("video is ended");
  // };

  function goPlanet(e) {
    console.log(e.target.value);
    switch (e.target.value) {
      case "solutions":
        return (
          setMainVideoSource(solutionsForward),
          setButtonVis("d-none"),
          setTimeout(() => {
            setMainVideoSource(solutionsIdle);
            setIsLoop(true);
          }, 3905)
        );
      case "projects":
        return (
          setMainVideoSource(projectForward),
          setButtonVis("d-none"),
          setTimeout(() => {
            setMainVideoSource(projectsIdle);
            setIsLoop(true);
          }, 3700)
        );
      case "aboutUs":
        return (
          setMainVideoSource(aboutUsForward),
          setButtonVis("d-none"),
          setTimeout(() => {
            setMainVideoSource(aboutusIdle);
            setIsLoop(true);
          }, 3700)
        );
      case "aidia":
        return (
          setMainVideoSource(aidiaForward),
          setButtonVis("d-none"),
          setTimeout(() => {
            setMainVideoSource(aidiaIdle);
            setIsLoop(true);
          }, 2700)
        );
      case "backToHomefromSolutions":
        return (
          setMainVideoSource(solutionsBack),
          setIsLoop(false),
          setTimeout(() => {
            setMainVideoSource(idlePlanets);
            setIsLoop(true);
            setButtonVis("");
          }, 3900)
        );
      case "backToHomefromAidia":
        return (
          setIsLoop(false),
          setMainVideoSource(aidiaBack),
          setTimeout(() => {
            setMainVideoSource(idlePlanets);
            setIsLoop(true);
            setButtonVis("");
          }, 3905)
        );
      case "backToHomefromProjects":
        return (
          setIsLoop(false),
          setMainVideoSource(projectsBack),
          setTimeout(() => {
            setMainVideoSource(idlePlanets);
            setIsLoop(true);
            setButtonVis("");
          }, 3905)
        );
      case "backToHomefromAboutUs":
        return (
          setIsLoop(false),
          setMainVideoSource(aboutUsBack),
          setTimeout(() => {
            setMainVideoSource(idlePlanets);
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
      <video
        className="main-video"
        src={mainVideoSource}
        loop={isLoop}
        autoPlay
        muted
      />
      {/* <video
        className="other-videos"
        id="other-videos"
        src={videoSource}
        loop={isLoop}
        // onEnded={handleVideoEnded}
        autoPlay
        muted
      /> */}

      {mainVideoSource === solutionsIdle && (
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="card p-2  m-2" style={{ width: "20rem" }}>
                <img src={project_1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Mikro Sağlık Hizmetleri</h5>
                  <p className="card-text">
                    Anahtar Teslim Hastane Kurulumu Projelendirme
                  </p>
                  <a href="/" className="card-link">
                    Detaylı bilgi için tıklayınız...
                  </a>
                </div>
              </div>
              {/* <div className="card p-2  m-2" style={{ width: "20rem" }}>
                <img src={project_2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    Sağlık Kuruluşlarında Çalışma Sistemi Kurulumu -Outsource
                    Management-
                  </h5>
                  <p className="card-text">
                    Laboratuvar ve Radyoloji Merkezleri Kurulumu Projelendirme
                  </p>
                  <a href="/" className="card-link">
                    Detaylı bilgi için tıklayınız...
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
      {mainVideoSource === aidiaIdle && (
        <div className="container">
          <div className="row">
            <div className="col-6 align-items-center mt-4">
              <div className="title m-4 fs-1 text-info">
                Akıllı Çözüm Hizmetlerimiz{" "}
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
                  IHMG Yazılım Hizmetleri
                </a>
                <a
                  href="http://www.healthandglad.com/"
                  className="list-group-item list-group-item-action"
                >
                  IHMG Uluslararası Entegre Sağlık Turizmi Hizmetleri
                </a>
                <a
                  href="http://www.rpaakademi.com/"
                  className="list-group-item list-group-item-action"
                >
                  IHMG Robotik Süreç Otomasyonu (RPA) Çözümleri
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
      {mainVideoSource === projectsIdle && (
        <div className="container">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6">
              <div className="card p-2  m-2" style={{ width: "20rem" }}>
                <img src={news_1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Ege Şehir Hastanesi</h5>
                  <p className="card-text">
                    Proje Yönetimi ve Başlangıç İşletme Yönetimi
                  </p>
                  <a href="/" className="card-link">
                    Detaylı bilgi için tıklayınız...
                  </a>
                </div>
              </div>
              {/* <div className="card p-2 m-2" style={{ width: "20rem" }}>
                <img src={news_2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    Sağlık Bakanlığı Suat Seren Eğitim Araştırma Hastanesi
                  </h5>
                  <p className="card-text">
                    İl Bazında E Sağlık Dönüşüm Uygulamaları
                  </p>
                </div>
              </div>
              <div className="card p-2 m-2" style={{ width: "20rem" }}>
                <img src={news_3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Mobil Sağlık Üniteleri</h5>
                  <p className="card-text">
                    Ameliyathane ve Görüntüleme Sistemleri
                  </p>
                </div>
              </div>
              <div className="card p-2 m-2" style={{ width: "20rem" }}>
                <img src={news_4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Afyon İl Sağlık Müdürlüğü</h5>
                  <p className="card-text">
                    İl Bazında E Sağlık Dönüşüm Uygulamaları
                  </p>
                </div>
              </div>
              <div className="card p-2 m-2" style={{ width: "20rem" }}>
                <img src={news_5} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Özel Defne Hastanesi</h5>
                  <p className="card-text">Anahtar Teslim Hastane Projesi</p>
                </div>
              </div>
              <div className="card p-2 m-2" style={{ width: "20rem" }}>
                <img src={news_6} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    Özel Şelale Termessos Hastanesi
                  </h5>
                  <p className="card-text">Anahtar Teslim Hastane Projesi</p>
                </div>
              </div>
              <div className="card p-2 m-2" style={{ width: "20rem" }}>
                <img src={news_7} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    Türkiye de ve Dünyada Kurulu 50’den Fazla Tıbbi Laboratuvar
                  </h5>
                  <p className="card-text">Yılda 90 Milyondan Fazla Test</p>
                </div>
              </div>
              <div className="card p-2 m-2" style={{ width: "20rem" }}>
                <img src={news_8} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    Türkiye’de 16 farklı lokasyonda Radyasyon Onkolojisi ve
                    Kanser Tedavi Merkezi Kurulumu
                  </h5>
                  <p className="card-text">
                    Proje Yönetimi ve Başlangıç İşletme Yönetimi
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
      {mainVideoSource === aboutusIdle && (
        <div className="container pt-5">
          <div className="row align-items-center clearfix">
            <div className="col-6">
              <h1 className="text-light">IHMG İş Yönetim Grubu</h1> <br />{" "}
              <span className="title text-light">
                {" "}
                “Ülke Sağlığında Doğru Çözümler”
              </span>
            </div>
            <div className="col-6">
              <p className="text-primary fs-3">
                2000 Yılı İtibari ile faaliyette olan IHMG İş Yönetim Grubu
                uluslararası kurum/kuruluş yapılandırma hizmetlerinde nitelikli
                altyapısı ve insan kaynağı ile hizmet vermektedir. Proje
                Yönetimi odaklı çalışan IHMG İş Yönetim Grubu Sektörel alanda
                tecrübelerinin yanısıra tüm sektörler için ortak gereksinim olan
                iş çözümleri ile geniş hizmet ağı oluşturmaktadır. İş Yönetim
                Grubunun iki önemli firması bulunmakta ve dünyada 11 ülkede
                100’lerce projeyi başarılı şekilde tamamlamış bulunmaktadır.
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
