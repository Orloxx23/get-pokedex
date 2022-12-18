import React from "react";
import Spline from "@splinetool/react-spline";

import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/Montserrat.css";
import "./assets/css/Hero-Clean-Reverse-images.css";
import "./assets/css/Navbar-Centered-Links-icons.css";
import "./assets/css/styles.css";

import pokeball from "./assets/img/pokebalTBlack.png";
import pikachu from "./assets/img/76479dd91dc55c2768ddccfc30a4fbf5.png";

export default function Home() {
  return (
    <>
      <nav
        className="navbar navbar-light navbar-expand-md py-3"
        style={{ height: "10vh", width: "100%" }}
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <span
              className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"
              style={{ background: "rgba(13, 110, 253, 0)" }}
            >
              <img
                width="32"
                height="32"
                src={pokeball}
                style={{ width: "54px", height: "54px" }}
                alt="pokeball"
              />
            </span>
          </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-3"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-3">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"></li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
            </ul>
            <a href="#download">
              <button
                className="btn btn-primary"
                type="button"
                style={{
                  background: "rgb(255, 255, 255)",
                  color: "rgb(30, 30, 30)",
                  borderColor: "var(--bs-navbar-brand-color)",
                }}
              >
                Download
              </button>
            </a>
          </div>
        </div>
      </nav>

      <div className="container py-4 py-xl-5 coverpage-container">
        <div className="row gy-4 gy-md-0">
          <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
            <div style={{ maxWidth: "100%", width: "80%" }}>
              <h2
                className="text-uppercase fw-bold"
                style={{
                  color: "rgb(255, 255, 255)",
                  width: "100%",
                  fontSize: "54px",
                  fontWeight: "bold",
                }}
              >
                POKEDEX
              </h2>
              <p
                className="my-3"
                style={{
                  color: "rgb(255, 255, 255)",
                  width: "100%",
                  fontSize: "18px",
                }}
              >
                Portable electronic encyclopedia that Pokémon trainers carry
                with them to automatically record the records of all the various
                Pokémon species seen and caught during their training journey.
              </p>
              <a
                className="btn btn-primary btn-lg me-2"
                role="button"
                href="#download"
                style={{
                  width: "100%",
                  background: "rgb(255, 255, 255)",
                  color: "rgb(30, 30, 30)",
                }}
              >
                DOWNLOAD
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-xl-5 m-xl-5">
              <img
                className="rounded img-fluid w-100 fit-cover"
                style={{ minHeight: "300px", borderColor: "rgba(0, 0, 0, 0)" }}
                src={pikachu}
                draggable="false"
                alt="Pikachu"
              />
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="spline-scene">
          <Spline scene="https://prod.spline.design/F8ydwK-LTfodKXdM/scene.splinecode" />
        </div>

        <div
          className="container h-100 position-relative"
          style={{ top: "-50px" }}
        >
          <div className="row gy-5 gy-lg-0 row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div className="col">
              <div className="card">
                <div className="card-body pt-5 p-4">
                  <div
                    className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center position-absolute mb-3 bs-icon lg"
                    style={{ top: "-30px", background: "#303030" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-bar-chart-line-fill"
                    >
                      <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z"></path>
                    </svg>
                  </div>
                  <h4 className="card-title" style={{ color: "#303030" }}>
                    Base stast
                  </h4>
                  <h6 className="text-muted card-subtitle mb-2">
                    Look at the base stats of each pokemon
                  </h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body pt-5 p-4">
                  <div
                    className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center position-absolute mb-3 bs-icon lg"
                    style={{ top: "-30px", background: " rgb(30, 30, 30)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-chevron-double-up"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="card-title" style={{ color: "#303030" }}>
                    Evolutions
                  </h4>
                  <h6 className="text-muted card-subtitle mb-2">
                    Look at all the possible evolutions of each pokemon
                  </h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body pt-5 p-4">
                  <div
                    className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center position-absolute mb-3 bs-icon lg"
                    style={{ top: "-30px", background: "rgb(30, 30, 30)" }}
                  >
                    <i className="fas fa-heart"></i>
                  </div>
                  <h4 className="card-title" style={{ color: "#303030" }}>
                    Add to favorites
                  </h4>
                  <h6 className="text-muted card-subtitle mb-2">
                    Add your favorite pokemons to have quick access to them
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="py-4 py-xl-5" style={{ color: "rgb(30, 30, 30)" }}>
        <div className="container">
          <div className="bg-light border rounded border-0 border-light d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5">
            <h2 className="fw-bold mb-2" style={{ textAlign: "left" }}>
              Downlad now pokedex
            </h2>
            <div className="my-2">
              <a
                className="btn btn-primary fs-5 py-2 px-4"
                role="button"
                href="https://expo.dev/artifacts/eas/wwW2pqGQfm82xZQHFX8cxo.apk"
                style={{
                  background: "rgb(30, 30, 30)",
                  borderColor: "var(--bs-btn-disabled-color)",
                }}
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="text-center"
        style={{ background: "rgb(30, 30, 30)", width: "100%" }}
      >
        <div
          className="container text-white py-4 py-lg-5"
          style={{ background: "rgb(30, 30, 30)", width: "100%" }}
        >
          <p className="text-muted mb-0">
            Made with💗 by{" "}
            <a
              style={{ textDecoration: "none", color: "gray" }}
              href="https://github.com/Orloxx23"
              target="_blank"
              rel="noopener noreferrer"
            >
              Orlando Mina
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
