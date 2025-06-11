import "./App.css";
import React from "react";

function App() {
  const [isGoingOut, setIsGoingOut] = React.useState(false);
  return (
    <main>
      <div className="counter">
        <h1>Do I feel like going out tonight?</h1>
        <button
          onClick={() => {
            setIsGoingOut((prevIsGoingOut) => !prevIsGoingOut);
          }}
          aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}
        >
          {isGoingOut ? "Yes" : "No"}
        </button>
      </div>
    </main>
  );
}

export default App;
