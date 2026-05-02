import Header from "../components/Header/Header";
import ConnectView from "../pages/Connect/ConnectView";

import "./MainLayout.css";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <ConnectView />
      </main>
    </>
  );
}
