import "./Slider.css";

import React from "react";

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-image-box">
              <img
                src="https://image.tmdb.org/t/p/original//uDgy6hyPd82kOHh6I95FLtLnj6p.jpg" className="w-60"
                alt="..."
              />
              <div className="carousel-image-border-left"></div>
            </div>
            <div className="carousel-content-box">
              <div className="carousel-content">
                <h1 className="content-title">The Last of Us</h1>
                <p className="content-des">
                  Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.

                </p>
              </div>
            </div>
          </div>
          {/* 2../6VEcSQCteETPnX5aQySC0vKQhOh.jpg
          /eR69AZ9bapi0jUyBkw33DLzQQHQ.jpg
          /bg7tqaFmX6VvfGkXGFCHjoGRir5.jpg
          /1RZlwRdVbKav9O153vWbYCn54Nk.jpg */}
          <div className="carousel-item ">
            <div className="carousel-image-box">
              <img
                src="https://image.tmdb.org/t/p/original//6VEcSQCteETPnX5aQySC0vKQhOh.jpg" className="w-60"
                alt="..."
              />
              <div className="carousel-image-border-left"></div>
            </div>
            <div className="carousel-content-box">
              <div className="carousel-content">
                <h1 className="content-title">Somebody I Used to Know</h1>
                <p className="content-des">
                  On a trip to her hometown, workaholic Ally reminisces with her first love Sean, and starts to question everything about the person she's become. Things only get more confusing when she meets Sean's fiancé, Cassidy, who reminds her of the person she used to be.

                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image-box">
              <img
                src="https://image.tmdb.org/t/p/original//eR69AZ9bapi0jUyBkw33DLzQQHQ.jpg"
                className="w-60"
                alt="..."
              />
              <div className="carousel-image-border-left"></div>
            </div>
            <div className="carousel-content-box">
              <div className="carousel-content">
                <h1 className="content-title">Whitney Houston: I Wanna Dance with Somebody</h1>
                <p className="content-des">
                  The joyous, emotional, heartbreaking celebration of the life and music of Whitney Houston, the greatest female R&B pop vocalist of all time. Tracking her journey from obscurity to musical superstardom.

                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image-box">
              <img
                src="https://image.tmdb.org/t/p/original//bg7tqaFmX6VvfGkXGFCHjoGRir5.jpg" className="w-60"
                alt="..."
              />
              <div className="carousel-image-border-left"></div>
            </div>
            <div className="carousel-content-box">
              <div className="carousel-content">
                <h1 className="content-title">You</h1>
                <p className="content-des">
                  A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image-box">
              <img
                src="https://image.tmdb.org/t/p/original//1RZlwRdVbKav9O153vWbYCn54Nk.jpg"
                className="w-60"
                alt="..."
              />
              <div className="carousel-image-border-left"></div>
            </div>
            <div className="carousel-content-box">
              <div className="carousel-content">
                <h1 className="content-title">Babylon</h1>
                <p className="content-des">
                  A tale of outsized ambition and outrageous excess, tracing the rise and fall of multiple characters in an era of unbridled decadence and depravity during Hollywood's transition from silent films and to sound films in the late 1920s.

                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
    </div>
  );
};

export default Slider;