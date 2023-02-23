import React from "react";
import "./homePage.css";
import { MdDirectionsCar } from 'react-icons/md';

const car1 = <MdDirectionsCar />;
// const car2 = <SolarCar />;
// const car3 = <SolarCar />;
// const car4 = <SolarCar />;
// const car5 = <SolarCar />;
// const car6 = <SolarCar />;
// const car7 = <SolarCar />;
// const car8 = <SolarCar />;


function HomePage() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#cars">Cars</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h2>Our Solar Cars</h2>
          <div className="row">
            <div className="column">
              <div className="card">
                {/* <img src={car1} alt="Solar Car 1" /> */}
                <h3>Solar Car 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#car1">Learn More</a>
              </div>
              <div className="card">
                {/* <img src={car2} alt="Solar Car 2" /> */}
                <h3>Solar Car 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#car2">Learn More</a>
              </div>
              <div className="card">
                {/* <img src={car3} alt="Solar Car 3" /> */}
                <h3>Solar Car 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#car3">Learn More</a>
              </div>
              <div className="card">
                {/* <img src={car4} alt="Solar Car 4" /> */}
                <h3>Solar Car 4</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#car4">Learn More</a>
              </div>
            </div>
            <div className="column">
              <div className="card">
                {/* <img src={car5} alt="Solar Car 5" /> */}
                <h3>Solar Car 5</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#car5">Learn More</a>
              </div>
              <div className="card">
                {/* <img src={car6} alt="Solar Car 6" /> */}
                <h3>Solar Car 6</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#car6">Learn More</a>
              </div>
              <div className="card">
                {/* <img src={car7} alt="Solar Car 7" /> */}
                <h3>Solar Car 7</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#car7">Learn More</a>
              </div>
              <div className="card">
                {/* <img src={car8} alt="Solar Car 8" /> */}
                <h3>Solar Car 8</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#car8">Learn More</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or feedback about Solar4Africa, please
            don't hesitate to get in touch with us.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Solar4Africa Solar Car Tracking</p>
      </footer>
    </div>
  );
}

export default HomePage;
