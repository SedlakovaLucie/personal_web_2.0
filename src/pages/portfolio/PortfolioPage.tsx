import PorfolioCard from "../../components/portfolio/PortfolioCard";
import type { TechnologyId } from "../../components/portfolio/technologiesIcons";
import portfolioImage from "@/assets/images/portfolio/freecompress-portfolio_1.jpg";

export type Project = {
  id: string; //project1, project2...
  image: string; //bg image
  technologies: TechnologyId[]; //obrázky
  githubUrl?: string;
};

const PORTFOLIO_ITEMS: Project[] = [
  {
    id: "project1",
    image: portfolioImage,
    technologies: ["react", "ts", "scss"],
  },
  {
    id: "project2",
    image: portfolioImage,
    technologies: ["react", "css"],
  },
  {
    id: "project3",
    image: portfolioImage,
    technologies: ["react", "ts", "css", "firebase"],
    githubUrl: "https://github.com/SedlakovaLucie/cashflow-tracker",
  },
];

const PortfolioPage = () => {
  return (
    <section>
      {PORTFOLIO_ITEMS.map((project) => {
        return <PorfolioCard key={project.id} project={project} />;
      })}
    </section>
  );
};

export default PortfolioPage;
