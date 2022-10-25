import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes className="App">
        <Route path="/" element={<NavBar />} />
        <Route
          index
          element={
            <>
              <NavBar />
              <Users />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
