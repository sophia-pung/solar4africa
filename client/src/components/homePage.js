import React from "react";
import "./homePage.css";
import { MdDirectionsCar } from "react-icons/md";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

function HomePage() {
  const firebaseConfig = {
    apiKey: "AIzaSyCEvNGESYcj6BjgJ-8mcpDt5e7o74o6occ",
    authDomain: "solar4africa-b2037.firebaseapp.com",
    databaseURL: "https://solar4africa-b2037-default-rtdb.firebaseio.com",
    projectId: "solar4africa-b2037",
    storageBucket: "solar4africa-b2037.appspot.com",
    messagingSenderId: "850800461731",
    appId: "1:850800461731:web:0abe1ad99edaea87bfbc16",
    measurementId: "G-BJV6HR3L4C",
  };

  // Initialize Firebase app
  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);

  // Get a reference to the users list in the database
  const usersRef = ref(database, "users");

  onValue(usersRef, (snapshot) => {
    const cardContainer = document.getElementById("card-container");

    // Loop through each user ID in the snapshot and generate a card for it
    snapshot.forEach((userSnapshot) => {
      const userID = userSnapshot.key;
      const userData = userSnapshot.val();
      console.log("userData: ", userData);

      // Get the card container for the user's vehicle ID
      const vehicleID = userData.vehicleID;
      const name = userData.name;
      const GPSCoordinates = userData.GPSCoordinates;
      const cardContainer = document.getElementById(`SolarCar${vehicleID}`);
      if (!cardContainer) {
        console.warn(`Card Container for Solar Car ${vehicleID} not found`);
        return;
      }

      // Generate a card for the user
      const cardContent = `
      <h3>Solar Car ${vehicleID}</h3>
      <p>Name: ${name}</p>
      <p>Coordinates: ${GPSCoordinates}</p>
      <a href=#car${vehicleID}>View Metrics</a>
    `;

      // Replace the content of the card container with the new card
      cardContainer.innerHTML = cardContent;
    });
  });

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
          <div id="card-container" className="row">
            <div className="column">
              <div id="SolarCar1" className="card">
                {/* Card content */}
              </div>
              <div id="SolarCar2" className="card">
                {/* Card content */}
              </div>
              <div id="SolarCar3" className="card">
                {/* Card content */}
              </div>
              <div id="SolarCar4" className="card">
                {/* Card content */}
              </div>
            </div>
            <div className="column">
              <div id="SolarCar5" className="card">
                {/* Card content */}
              </div>
              <div id="SolarCar6" className="card">
                {/* Card content */}
              </div>
              <div id="SolarCar7" className="card">
                {/* Card content */}
              </div>
              <div id="SolarCar8" className="card">
                {/* Card content */}
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
