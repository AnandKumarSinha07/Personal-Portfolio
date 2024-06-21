import "./HeroStyle.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg"
import githubIcon from "../../assets/github-light.svg"
import linkedinIcon from "../../assets/linkedin-light.svg"
import CV from "../../assets/CV.pdf"



function Hero() {
  return (
    <section id="hero" className="container">
      <div className="colorModeContainer">
        <img alt="profile-Anand" src={heroImg} className="hero" />
        <img className="colorMode" src={themeIcon} />
      </div>

      <div className="info">
        <h1>
          Anand
          <br />
           Sinha
        </h1>
        <h2>Frontend Developer</h2>

        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>

          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>

          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>

        </span>

        <p className="description">
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>

        <a href={CV} download >
          <button className="hover" >Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
