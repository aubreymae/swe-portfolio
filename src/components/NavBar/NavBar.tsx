import { useLayoutEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import "./NavBar.css";

export default function NavBar() {
  const [active, setActive] = useState<number>(0);
  const [hover, setHover] = useState<number | null>(null);

  const targetIndex = hover !== null ? hover : active;

  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const pillRef = useRef<HTMLSpanElement | null>(null);

  const movePill = (index: number) => {
    const target = itemRefs.current[index];
    const pill = pillRef.current;
    if (!target || !pill) return;

    const { offsetLeft, offsetWidth } = target;

    gsap.to(pill, {
      x: offsetLeft,
      width: offsetWidth,
      duration: 0.45,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  useLayoutEffect(() => {
    movePill(targetIndex);
  }, [targetIndex]);

  const handleHover = (index: number | null) => {
    setHover(index);
  };

  const handleClick = (index: number) => {
    setActive(index);
  };

  const isActive = (index: number) => targetIndex === index;

  return (
    <nav id="main-nav-bar">
      <ul onMouseLeave={() => handleHover(null)}>
        <span id="animated-pill-bg" ref={pillRef}></span>

        {/* CONNECT */}
        <li
          ref={(el) => {
            itemRefs.current[0] = el;
          }}
          onMouseEnter={() => handleHover(0)}
          onClick={() => handleClick(0)}
        >
          <a href="#connect">
            <div className="nav-item-wrapper">
              <span className="icon-layer" data-visible={!isActive(0)}>
                <svg
                  width="24"
                  height="24"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                >
                  <path
                    d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20"
                    stroke="currentColor"
                  />
                  <path
                    d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                    stroke="currentColor"
                  />
                </svg>
              </span>

              <span className="text-layer" data-visible={isActive(0)}>
                Connect
              </span>
            </div>
          </a>
        </li>

        {/* WORKS */}
        <li
          ref={(el) => {
            itemRefs.current[1] = el;
          }}
          onMouseEnter={() => handleHover(1)}
          onClick={() => handleClick(1)}
        >
          <a href="#works">
            <div className="nav-item-wrapper">
              <span className="icon-layer" data-visible={!isActive(1)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                >
                  <path
                    d="M3.2 14.2222V4C3.2 2.89543 4.09543 2 5.2 2H18.8C19.9046 2 20.8 2.89543 20.8 4V14.2222M3.2 14.2222H20.8M3.2 14.2222L1.71969 19.4556C1.35863 20.7321 2.31762 22 3.64418 22H20.3558C21.6824 22 22.6414 20.7321 22.2803 19.4556L20.8 14.2222"
                    stroke="currentColor"
                  />
                </svg>
              </span>

              <span className="text-layer" data-visible={isActive(1)}>
                Works
              </span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
}
