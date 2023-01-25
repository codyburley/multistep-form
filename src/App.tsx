import "./App.scss";
import Personal from "./components/Personal/Personal";
import Plan from "./components/Plan/Plan";
import AddOns from "./components/AddOns/AddOns";
import Summary from "./components/Summary/Summary";
import ThankYou from "./components/ThankYou/ThankYou";
import { useState } from "react";

function App() {
  const [page, setPage] = useState<number>(0);

  const componentList: JSX.Element[] = [
    <Personal />,
    <Plan />,
    <AddOns />,
    <Summary />,
    <ThankYou />,
  ];

  return (
    <div className="App">
      <div className="App__page-container">
        <div
          className={`App__page-count ${
            page === 0 ? "App__page-count--active" : ""
          }`}
        >
          1
        </div>
        <div
          className={`App__page-count ${
            page === 1 ? "App__page-count--active" : ""
          }`}
        >
          2
        </div>
        <div
          className={`App__page-count ${
            page === 2 ? "App__page-count--active" : ""
          }`}
        >
          3
        </div>
        <div
          className={`App__page-count ${
            page >= 3 ? "App__page-count--active" : ""
          }`}
        >
          4
        </div>
      </div>
      <div className="App__component">{componentList[page]}</div>
      {page === 4 ? (
        ""
      ) : (
        <footer className="App__footer">
          {page === 0 ? (
            <div></div>
          ) : (
            <button
              className="App__button App__button--prev"
              onClick={() => setPage((prev) => prev - 1)}
            >
              Go Back
            </button>
          )}
          {page === 3 ? (
            <button
              className="App__button App__button--confirm"
              onClick={() => setPage((prev) => prev + 1)}
            >
              Confirm
            </button>
          ) : (
            <button
              className="App__button App__button--next"
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next Step
            </button>
          )}
        </footer>
      )}
    </div>
  );
}

export default App;
