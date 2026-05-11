import "./App.css";

import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ConnectView from "./pages/Connect/ConnectView";
import WorksView from "./pages/Works/WorksView";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<ConnectView />} />
        <Route path="/works" element={<WorksView />} />
      </Route>
    </Routes>
  );
}

export default App;
