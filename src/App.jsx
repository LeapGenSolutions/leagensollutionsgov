import React, { useState } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import FeatureDetails from "./components/FeatureDetails";
import ImplementationPlan from "./components/ImplementationPlan";
import ProfessionalServices from "./components/ProfessionalServices";
import PartnersPage from "./pages/PartnersPage";
import LearnMorePage from "./pages/LearnMorePage";

function App() {
  const [loadHistory, setloadHistory] = useState(false);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home loadHistory={loadHistory} setloadHistory={setloadHistory} />
          }
        ></Route>
        <Route
          path="/ImplementationPlan"
          element={
            <ImplementationPlan
              loadHistory={loadHistory}
              setloadHistory={setloadHistory}
            />
          }
        ></Route>
        <Route
          path="/ProfessionalServices"
          element={
            <ProfessionalServices
              loadHistory={loadHistory}
              setloadHistory={setloadHistory}
            />
          }
        ></Route>
        <Route
          path="/:id"
          element={<FeatureDetails setloadHistory={setloadHistory} />}
        ></Route>
        <Route
          path="/partners"
          element={<PartnersPage setloadHistory={setloadHistory} />}
        ></Route>
        <Route
          path="/partners/:id"
          element={<LearnMorePage setloadHistory={setloadHistory} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
