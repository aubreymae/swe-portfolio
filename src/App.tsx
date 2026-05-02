import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ConnectView from "./pages/Connect/ConnectView";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<ConnectView />} />
      </Route>
    </Routes>
  );
}

export default App;
