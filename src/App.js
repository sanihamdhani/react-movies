import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DevDetail from "./components/DevDetail";
import ListMovies from "./components/ListMovies";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/list" element={<ListMovies />}></Route>
          <Route path="/detail/:id" element={<DevDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
