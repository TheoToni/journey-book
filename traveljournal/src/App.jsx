import "./App.css";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
