import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { VerifyIdentity } from "./pages/VerifyIdentity";
import { useState } from "react";

function App() {
  const [isVerified, setIsVerified] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<VerifyIdentity setIsVerified={setIsVerified} />}
        />
        <Route path="/home" element={<Home isVerified={isVerified} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
