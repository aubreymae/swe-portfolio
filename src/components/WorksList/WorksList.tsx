import { works } from "../../data/selected-works";
import { gsap } from "gsap";

import "./WorksList.css";

export default function WorksList(WorksListProps: {
  onClick: (id: string) => void;
  selectedWorkId?: string;
}) {
  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    const underline = e.currentTarget.querySelector(".work-underline");
    gsap.to(underline, {
      width: "100%",
      duration: 0.1,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    const underline = e.currentTarget.querySelector(".work-underline");
    const workId = e.currentTarget.dataset.workId;

    if (workId !== WorksListProps.selectedWorkId) {
      gsap.to(underline, {
        width: "0%",
        duration: 0.1,
        ease: "power2.out",
      });
    }
  };

  const handleClick = (workId: string, e: React.MouseEvent<HTMLLIElement>) => {
    // Animate the clicked item's underline to 100%
    const clickedUnderline = e.currentTarget.querySelector(".work-underline");
    gsap.to(clickedUnderline, {
      width: "100%",
      duration: 0.1,
      ease: "power2.out",
    });

    // Animate all other underlines to 0%
    const allUnderlines = document.querySelectorAll(".work-underline");
    allUnderlines.forEach((underline) => {
      if (underline !== clickedUnderline) {
        gsap.to(underline, {
          width: "0%",
          duration: 0.1,
          ease: "power2.out",
        });
      }
    });

    WorksListProps.onClick(workId);
  };

  return (
    <>
      <section id="works-list-container">
        <div className="list-col list-title">
          <p>Select Work</p>
        </div>
        <div className="list-col">
          <ul className="works-list">
            {works.map((work) => (
              <li
                key={work.id}
                className="work-item"
                data-work-id={work.id}
                onClick={(e) => handleClick(work.id, e)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {work.title}
                <span className="work-underline"></span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
