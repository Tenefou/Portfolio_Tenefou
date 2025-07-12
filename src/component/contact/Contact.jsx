import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Travaillons ensemble</h1>
      <p>
        Si vous avez un projet ou une idée de site internet, SaaS, ou si vous
        voulez discuter de webdesign, n’hésitez pas à{" "}
        <a href="mailto:gaspar.rivoire@gmail.com">me contacter</a>. Mon emploi
        du temps n’est pas illimité, donc plus tôt vous me contactez, et mieux
        ça sera.
      </p>
      <div
        className="hero__contact"
        style={{ justifyContent: "center", paddingTop: "0px" }}
      >
        <img src="/20250404_185557.jpg" alt="" />
        <h2
          style={{ fontWeight: "400", fontFamily: "K2D", fontSize: "1.2rem" }}
        >
          <span style={{ fontWeight: "bolder" }}>Temps de réponse :</span> 1 à 2
          jours ouvré
        </h2>
      </div>
      <button
        className="email-button"
        onClick={() =>
          window.open(
            "https://calendly.com/gaspar-rg69/30min",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        Prendre rendez-vous
      </button>
      <div className="social-icons">
        <a href="https://github.com/Tenefou" className="icon-link">
          <img src="/github.png" alt="" />
        </a>
        <a href="https://www.youtube.com/@GasparRivoire" className="icon-link">
          <img src="/youtube.png" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/gaspar-rivoire-gaiao/"
          className="icon-link"
        >
          <img src="/linkedin.png" alt="" />
        </a>
        <a href="https://x.com/Tenefouu" className="icon-link">
          <img src="/X.png" alt="" />
        </a>
      </div>
      <footer>
        © 2025 All rights reserved. – Designé et codé par Rivoire--Gaiao Gaspar
      </footer>
    </div>
  );
};

export default Contact;
