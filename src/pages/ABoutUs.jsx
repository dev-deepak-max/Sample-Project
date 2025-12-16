import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>This application is created using React and Vite.</p>
      <p>It demonstrates basic navigation and UI structure.</p>
      <a href="/" className="back-link">
        ← Back to Home
      </a>
    </div>
  );
}

export default AboutUs;
