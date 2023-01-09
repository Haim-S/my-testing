import React from "react";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
