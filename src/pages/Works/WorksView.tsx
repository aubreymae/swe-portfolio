import { useState } from "react";
import { Work, works } from "../../data/selected-works";

import WorksList from "../../components/WorksList/WorksList";
import "./WorksView.css";

export default function WorksView() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(works[0]);

  const onSelectWork = (id: string) => {
    const work = works.find((w) => w.id === id);
    setSelectedWork(work || null);
  };

  return (
    <div id="works-view-container">
      <WorksList onClick={onSelectWork} selectedWorkId={selectedWork?.id} />
      <section className="main-grid">
        <div className="grid-col">
          <div className="info-wrapper">
            <h3>Release Date</h3>
            <div className="detail-container">
              <p>{selectedWork?.release}</p>
            </div>
          </div>
        </div>
        <div className="grid-col">
          <div className="info-wrapper">
            <h3>Project Name</h3>
            <div className="detail-container">
              <p>{selectedWork?.title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
