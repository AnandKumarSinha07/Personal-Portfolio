import "./HeroStyle.css";
import heroImg from "../../assets/profile.jpg"

import twitterIcon from "../../assets/twitter-light.svg"
import githubIcon from "../../assets/github-light.svg"
import linkedinIcon from "../../assets/linkedin-light.svg"
import CV from "../../assets/CV.pdf"




function Hero() {

  return (
    <section className="container">
      <div className="colorModeContainer">
        <img alt="profile-Anand" src={heroImg}  className="hero hero-ki" />
      </div>

      <div className="info">
        <h1>
          Anand
          <br />
           Sinha
        </h1>
        <h2>FullStack Developer</h2>

        <span>
          <a href="https://x.com/AnandSi18833477" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>

          <a href="https://github.com/AnandKumarSinha07" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>

          <a href="https://www.linkedin.com/in/anand-sinha07/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>

        </span>

        <p className="description">
          With a passion for developing modern React web apps for commercial
          and businesses.
        </p>

        <a href={CV} download >
          <button className="hover" >Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
