import "./HomePage.scss";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const DOT_ROUTES = [
  "/",
  "/skills",
  "/portfolio",
  "/career",
  "/contact",
];

const MainPage = () => {
  const { t } = useTranslation();

  const line1 = t("home_page.hero_text_1");
  const line2 = t("home_page.hero_text_2");
  const fullText = `${line1}\n${line2}`;

  const [index, setIndex] = useState(0);

  const speed = 80; // ms na znak

  const typed = fullText.slice(0, index);

  useEffect(() => {
    if (index > fullText.length) return;
    const timeoutId = window.setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speed);

    return () => window.clearTimeout(timeoutId);
  }, [index, fullText, speed]);

  return (
    <section className="hero-wrapper">
      <div>
        <h1 className="home-page-h1">{t("home_page.h1_text")}</h1>

        <p className="home-page-p">
          <span className="typewriter">{typed}</span>
        </p>
      </div>

      <div className="hero-dots">
        {DOT_ROUTES.map((path) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              "hero-dot" + (isActive ? " hero-dot--active" : "")
            }
            aria-label={`Go to ${path}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MainPage;
