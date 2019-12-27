import React from "react";
import { createStore } from "redux";
import rootReducer from "./rootReducer";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import AddToDo from "./modules/AddToDo/AddToDo";

const store = createStore(rootReducer, {});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddToDo />
      </div>
    </Provider>
  );
}

export default App;
