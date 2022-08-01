import { useState } from "react";
import { links } from "./data";

function App() {
  const [buttons, changeState] = useState({
    activeObject: 1,
    links,
  });

  function toggleActiveStyles(id) {
    if (buttons.activeObject === id) {
      return "active";
    } else {
      return "";
    }
  }

  function toggleActive(id) {
    changeState({ ...buttons, activeObject: id });
  }

  return (
    <div className="container">
      {buttons.links.map((item, index) => {
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
