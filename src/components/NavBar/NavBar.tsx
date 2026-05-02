import { useLayoutEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/">
            <div className="nav-item-wrapper">
              <span className="icon-layer" data-visible={!isActive(0)}>
                <svg
                  width="24px"
                  height="24px"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                >
                  <path
                    d="M2.5 9.5L12 4L21.5 9.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M7 21V20C7 17.2386 9.23858 15 12 15V15C14.7614 15 17 17.2386 17 20V21"
                    stroke="currentColor"
                    stroke-width="1.5"
                  ></path>
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>

              <span className="text-layer" data-visible={isActive(0)}>
                Connect
              </span>
            </div>
          </NavLink>
        </li>

        {/* WORKS */}
        <li
          ref={(el) => {
            itemRefs.current[1] = el;
          }}
          onMouseEnter={() => handleHover(1)}
          onClick={() => handleClick(1)}
        >
          <NavLink to="/works">
            <div className="nav-item-wrapper">
              <span className="icon-layer" data-visible={!isActive(1)}>
                <svg
                  width="24px"
                  height="24px"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                >
                  <path
                    d="M2 11V4.6C2 4.26863 2.26863 4 2.6 4H8.77805C8.92127 4 9.05977 4.05124 9.16852 4.14445L12.3315 6.85555C12.4402 6.94876 12.5787 7 12.722 7H21.4C21.7314 7 22 7.26863 22 7.6V11M2 11V19.4C2 19.7314 2.26863 20 2.6 20H21.4C21.7314 20 22 19.7314 22 19.4V11M2 11H22"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>

              <span className="text-layer" data-visible={isActive(1)}>
                Works
              </span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
