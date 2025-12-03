import "./ContactPage.scss";
import { useTranslation } from "react-i18next";
import LinkedInIcon from "../../assets/images/common/LinkedInIcon";
import GitHubIcon from "../../assets/images/common/GitHubIcon";
import EmailIcon from "../../assets/images/common/EmailIcon";

const ContactPage = () => {
  const { t } = useTranslation();

  const infoLinks = [
    {
      icon: <LinkedInIcon />,
      label: t("contact_page.linkedin"),
      href: "https://www.linkedin.com/in/sedlakova-lucie/",
    },
    {
      icon: <GitHubIcon />,
      label: t("contact_page.github"),
      href: "https://github.com/SedlakovaLucie",
    },
    {
      icon: <EmailIcon />,
      label: t("contact_page.email"),
      href: "mailto:luckasedlakova22@gmail.com",
    },
  ];

  return (
    <section className="contact-wrapper">
      {/* hero text */}
      <div className="contact-text">
        <p>{t("contact_page.hero_text")}</p>
      </div>
      {/* kontakt linky */}
      <div className="contact-links">
        {infoLinks.map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            className="contact-link"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-link-left">
              <span className="contact-link-icon">{icon}</span>
              <span className="contact-link-label">{label}</span>
            </div>

            <span className="contact-link-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactPage;
