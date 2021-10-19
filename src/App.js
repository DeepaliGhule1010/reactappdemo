import React, { useState } from "react";
import "./App.css";
import restaurant from "./5.jpg";
function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Vlog: Exloring God's own country</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>
        “The world is a book and those who do not travel read only one page.” ~
        Saint Augustine Kerala, God's Own Country, and one of the most-loved
        tourist destinations in the country is planning to open itself to
        tourism in early October this year. The state has been shut for tourism
        ever since COVID-19 broke out in the country, eventually leading to
        strict lockdowns across the nation. Kadakampally Surendran, Minister for
        Co- Operation, Tourism and Devaswom in Government of Kerala, announced
        that the state is planning to welcome tourists in early October now.
        Kerala tourism department has prepared a report and plan for the same,
        with a very emphasis on safety and SOPs for the same. Mr Surendran,
        referring to the plan, was quoted as saying, "“The plan includes
        highlighting the importance of wellness and ayurveda for immunity. The
        file has been presented to the chief minister and health department for
        their advice.”
      </p>
      <img src={restaurant} alt="Exloring with Deepali Vlog" />
      {/* <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul> */}
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

function Review() {
  const [review, setReview] = useState("Informative");
  return (
    <>
      <h1>Vlog is {review}.</h1>
      <button onClick={() => setReview("Good")}>Amazing</button>

      <button onClick={() => setReview("Okay")}>Okay</button>

      <button onClick={() => setReview("Great")}>Nice</button>
    </>
  );
}

//const dishes = ["Pav bhaji", "Anda Bhurji", "Omlet", "Bun Maska", "Fries"];
//const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

//dishes.map((dish) => console.log(dish));

function App() {
  return (
    <div className="App">
      <Header name="Deepali" />
      <Main />
      <Review />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
