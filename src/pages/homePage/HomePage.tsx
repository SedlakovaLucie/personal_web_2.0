import "./HomePage.scss";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const DOT_ROUTES = [
  { path: "/", key: "home" },
  { path: "/skills", key: "skills" },
  { path: "/portfolio", key: "portfolio" },
  { path: "/career", key: "career" },
  { path: "/contact", key: "contact" },
];

const MainPage = () => {
  const { t } = useTranslation();

  const line1 = t("home_page.hero_text_1");
  const line2 = t("home_page.hero_text_2");
  const fullText = `${line1}\n${line2}`;

  const [index, setIndex] = useState(0);
  const speed = 80; // ms na znak

  const typed = fullText.slice(0, index);
  const isFinished = index >= fullText.length;

  // typewriter efekt
  useEffect(() => {
    if (index >= fullText.length) return;
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
          <span className="typewriter-homepage">{typed}</span>
        </p>
      </div>

      {isFinished && (
        <div className="hero-dots hero-dots--visible">
          {DOT_ROUTES.map(({ path, key }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                "hero-dot" + (isActive ? " hero-dot--active" : "")
              }
              aria-label={`${t("home_page.dots")} ${t(`navbar.${key}`)}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MainPage;
