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
        Here you will find all the delious food. Props are arguments passed into
        React components. Props are passed to components via HTML attributes.
        React Props React Props are like function arguments in JavaScript and
        attributes in HTML. To send props into a component, use the same syntax
        as HTML attributes:
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

const dishes = ["Pav bhaji", "Anda Bhurji", "Omlet", "Bun Maska", "Fries"];
const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

//dishes.map((dish) => console.log(dish));

function App() {
  return (
    <div className="App">
      <Header name="Deepali" />
      <Main dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
