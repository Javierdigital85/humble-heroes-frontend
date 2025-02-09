import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeroesList from "./components/Heroes/HeroesList";
import HeroeForm from "./components/Heroes/HeroeForm";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<HeroesList />} />
          <Route path="/new-heroe" element={<HeroeForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
