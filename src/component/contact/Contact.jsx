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
      <div className="contact-info">
        <img src="profile.jpg" alt="Profile" className="profile-pic" />
        <span>Temps de réponse : 1 à 2 jours ouvré</span>
      </div>
      <button className="email-button">gaspar.rivoire@gmail.com</button>
      <div className="social-icons">
        <a href="#" className="icon-link">
          GitHub
        </a>
        <a href="#" className="icon-link">
          YouTube
        </a>
        <a href="#" className="icon-link">
          LinkedIn
        </a>
      </div>
      <footer>
        © 2025 All rights reserved. – Designé et codé par Rivoire--Gaiao Gaspar
      </footer>
    </div>
  );
};

export default Contact;
