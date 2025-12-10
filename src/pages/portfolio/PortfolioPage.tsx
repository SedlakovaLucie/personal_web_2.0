import "./PortfolioPage.scss"
import PorfolioCard from "../../components/portfolio/PortfolioCard";
import type { TechnologyId } from "../../components/portfolio/technologiesIcons";
import calculatorImage from "@/assets/images/portfolio/calculator.jpg"
import cashflowImage from "@/assets/images/portfolio/cashflow_tracker.jpg";
import sestavhbImage from "@/assets/images/portfolio/sestav_hb.jpg"

export type Project = {
  id: string; //project1, project2...
  image: string; //bg image
  demoLink: string;
  technologies: TechnologyId[]; //obrázky
  githubUrl?: string;
};

const PORTFOLIO_ITEMS: Project[] = [
  {
    id: "project1",
    image: calculatorImage,
    demoLink: "",
    technologies: ["react", "ts", "scss"],
  },
  {
    id: "project2",
    image: sestavhbImage,
    demoLink: "https://sestavhb.cz",
    technologies: ["react", "css"],
  },
  {
    id: "project3",
    image: cashflowImage,
    demoLink: "https://expense-log-app.netlify.app",
    technologies: ["react", "ts", "css", "firebase"],
    githubUrl: "https://github.com/SedlakovaLucie/cashflow-tracker",
  },
];

const PortfolioPage = () => {
  return (
    <section className="portfolio-wrapper">
      {PORTFOLIO_ITEMS.map((project) => {
        return <PorfolioCard key={project.id} project={project} />;
      })}
    </section>
  );
};

export default PortfolioPage;
