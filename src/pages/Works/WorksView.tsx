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
            <h3>Preview</h3>
            <img src="/" alt="" className="work-preview-img" />
          </div>
          <div className="info-wrapper">
            <h3>Release Date</h3>
            <div className="detail-container">
              <p>{selectedWork?.release}</p>
            </div>
          </div>
          <div className="info-wrapper">
            <h3>View Source Code</h3>
            <div className="socials-container">
              <ul>
                <li>
                  <a href="/" className="social-link-btn">
                    <span>Open Repo</span>
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="currentColor"
                    >
                      <path
                        d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid-col">
          <div className="info-wrapper">
            <h3>Title</h3>
            <div className="detail-container">
              <p>{selectedWork?.title}</p>
            </div>
          </div>
          <div className="info-wrapper">
            <h3>Description</h3>
            <div className="detail-container">
              <p>{selectedWork?.description}</p>
            </div>
          </div>
          <div className="info-wrapper">
            <h3>Languages</h3>
            <div className="language-container">
              {selectedWork?.languages.map((lang) => (
                <p key={lang} className="lang-bubble">
                  {lang}
                </p>
              ))}
            </div>
          </div>
          <div className="info-wrapper">
            <h3>Challenges</h3>
            <div className="detail-container">
              <p>{selectedWork?.challenges}</p>
            </div>
          </div>
          <div className="info-wrapper">
            <h3>Learning Outcomes</h3>
            <div className="detail-container">
              <p>{selectedWork?.outcomes}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
