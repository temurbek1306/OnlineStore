import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import App from "./App.jsx";
import axios from "axios";

// Redux
import { Provider } from "react-redux";
import store from "./ReduxToolkit/store/index.js";

// axios.defaults.baseUrl = 'https://jsonplaceholder.typicode.com/'

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
     <ToastContainer />
  </Router>
);
