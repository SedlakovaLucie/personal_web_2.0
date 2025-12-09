import "./PortfolioCard.scss"
import GithubIcon from "../../assets/images/common/GithubIcon"
import type { TechnologyId } from "../../components/portfolio/technologiesIcons";
import { TECHNOLOGY_ICONS } from "../../components/portfolio/technologiesIcons";
import { useTranslation } from "react-i18next";

type Project = {
  id: string;
  image: string;
  technologies: TechnologyId[];
  githubUrl?: string;
};

type ProjectProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectProps) => {
  const { t } = useTranslation();

  const title = t(`portfolio_page.${project.id}.project_name`);
  const description = t(`portfolio_page.${project.id}.project_description`);

  return (
    <article className="portfolio-card">
      <div className="card-image-wrapper">
        {/* horní část karty */}
        <img src={project.image} alt="" className="card-image" />
        <h2>{title}</h2>
        <div className="tech-icons">
          {project.technologies.map((techId) => {
            const icon = TECHNOLOGY_ICONS[techId];

            return (
              <img
                key={techId}
                src={icon.src}
                alt={icon.alt}
                className="tech-icon"
              />
            );
          })}
        </div>
      </div>
      {/* spodní část karty */}
      <div className="card-description-wrapper">
        <p>{description}</p>
        {project.githubUrl && <a href={project.githubUrl} target="_blank"><GithubIcon/></a>}
      </div>
    </article>
  );
};

export default ProjectCard;
