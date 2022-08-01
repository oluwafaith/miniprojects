import { useState } from "react";
import { links } from "./data";

function App() {
  const [card, setActiveCard] = useState({
    activeObject: 1,
    links,
  });

  function toggleActiveStyles(id) {
    if (card.activeObject === id) {
      return "active";
    } else {
      return "";
    }
  }

  function toggleActive(id) {
    setActiveCard({ ...card, activeObject: id });
  }

  return (
    <div className="container">
      {card.links.map((item, index) => {
        return (
          <div
            key={index}
            className={`panel ${toggleActiveStyles(item.id)}`}
            onClick={() => toggleActive(item.id)}
            style={{
              backgroundImage: `url(${item.url})`,
            }}
          >
            <h3>{item.name}</h3>
          </div>
        );
      })}

    </div>
  );
}

export default App;
