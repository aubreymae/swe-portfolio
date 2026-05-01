import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="top-left-col">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
          className="header-icon"
        >
          <defs>
            <linearGradient
              id="greenGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#1d2b1c" />
              <stop offset="100%" stop-color="#3fa34d" />
            </linearGradient>
          </defs>
          <circle cx="18" cy="18" r="18" fill="url(#greenGradient)" />
        </svg>
        <p className="header-full-name">Aubrey Garcia</p>
        <p className="header-job-title">Software Engineer</p>
      </div>
      <div className="mid-col">
        <nav id="main-nav-bar">
          <ul>
            <li>
              <a href="#connect">Connect</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
