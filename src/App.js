import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Home } from "containers/Home";
import { LayoutManager } from "components/LayoutManager";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutManager></LayoutManager>}>
        <Route index element={<Home></Home>}></Route>
      </Route>
    </Routes>
  );
}

export default App;