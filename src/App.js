import React, { useState } from "react";
import "./App.css";
import restaurant from "./restaurant.jpg";
function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>
        We serve the most authentic, traditional Indian food, providing high
        standards in service and quality.
      </p>
      <img src={restaurant} alt="Deepali's kitchen" />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
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
  const [review, setReview] = useState("Delious");
  return (
    <>
      <h1>Food is {review}.</h1>
      <button onClick={() => setReview("Amazing")}>Amazing</button>

      <button onClick={() => setReview("Average")}>Average</button>

      <button onClick={() => setReview("Nice")}>Nice</button>
    </>
  );
}

const dishes = ["Pav bhaji", "Anda Bhurji", "Omlet", "Bun Maska", "Fries"];
const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

//dishes.map((dish) => console.log(dish));

function App() {
  return (
    <div className="App">
      <Header name="Deepali" />
      <Main dishes={dishObjects} />
      <Review />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
