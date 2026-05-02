import "./WorksView.css";

export default function WorksView() {
  return (
    <>
      <section className="main-grid">
        <div className="grid-col">
          <div className="info-wrapper">
            <h3>Release Date</h3>
            <div className="detail-container">
              <p>April 2026</p>
            </div>
          </div>
        </div>
        <div className="grid-col">
          <div className="info-wrapper">
            <h3>Project Name</h3>
            <div className="detail-container">
              <p>CycleSpots</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
