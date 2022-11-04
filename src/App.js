import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DevDetail from "./components/DevDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />}></Route>

          <Route path="/detail/:id" element={<DevDetail />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <MediaCard /> */}
    </div>
  );
}

export default App;
