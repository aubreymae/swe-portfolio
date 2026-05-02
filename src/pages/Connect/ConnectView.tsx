import "./ConnectView.css";

export default function ConnectView() {
  return (
    <section className="main-grid">
      <div className="grid-col">
        <img src="/author-img.jpeg" alt="" className="author-img" />
        <div className="info-wrapper">
          <h3>Location</h3>
          <div className="detail-container">
            <p>Toronto, Canada</p>
          </div>
        </div>
        <div className="info-wrapper">
          <h3>Socials</h3>
          <div className="socials-container">
            <ul>
              <li className="social-link-btn">
                <a href="/">GitHub</a>
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
              </li>
              <li className="social-link-btn">
                <a href="/">LinkedIn</a>
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
              </li>
              <li className="social-link-btn">
                <a href="/">BlueSky</a>
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
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid-col">
        <div className="info-wrapper">
          <h3>About Me</h3>
          <div className="detail-container about-me-container">
            <p>
              Hey there, I'm Aubrey and I work at Docebo redefining and
              improving the developer experience within our product for
              consultants and customers alike.
            </p>
            <p>
              Outside of work, I’m pursuing a Master of Science in Computer
              Science focusing on Computing Systems. I’m deeply interested in
              backend systems and performance for visual computing.
            </p>
            <p>
              When I’m not coding, you’ll find me playing video games, learning
              guitar, or painting landscapes.
            </p>
          </div>
        </div>
        <div className="info-wrapper">
          <h3>Blog Posts</h3>
        </div>
      </div>
    </section>
  );
}
