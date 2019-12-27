import React from "react";
import { createStore } from "redux";
import rootReducer from "./rootReducer";
import "./App.css";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import AddToDo from "./modules/AddToDo/AddToDo";
import ToDoList from "./modules/ToDoList/ToDoList";

const store = createStore(rootReducer, {}, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddToDo />
        <ToDoList />
      </div>
    </Provider>
  );
}

export default App;
