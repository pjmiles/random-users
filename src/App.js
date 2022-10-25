import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes className="App">
        <Route
          index
          element={
            <>
              <NavBar />
              <Users />
            </>
          }
        />
      <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
