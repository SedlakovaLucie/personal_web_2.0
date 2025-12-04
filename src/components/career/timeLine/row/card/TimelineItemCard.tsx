import { useTranslation } from "react-i18next";
import "./TimelineItemCard.scss";

type TimelineItemCardProps = {
  id: string;
  job: boolean;
  opened: boolean;
  handleToggle: () => void;
};

const TimelineItemCard = ({
  id,
  job,
  opened,
  handleToggle,
}: TimelineItemCardProps) => {
  const { t } = useTranslation();
  const path = `career_page.timeline.${id}`;

  if (!job) {
    return (
      <article className="timeline-card timeline-card-empty">
        <div>?</div>
      </article>
    );
  }

  return (
    <article className={`timeline-card ${opened ? "open-card" : ""}`}>
      <header className="timeline-card-header">
        <h3>{t(`${path}.title`)}</h3>

        <div className="timeline-card-company-toggle">
          <span>{t(`${path}.company`)}</span>

          <button className="timeline-card-toggle" onClick={handleToggle}>
            <span className="timeline-card-toggle-icon" />
          </button>
        </div>
      </header>

      {opened && (
        <footer>
          <div className="timeline-card-body">
            <div className="timeline-card-description">
              <span>Náplň práce:</span>
              <span>{t(`${path}.description`)}</span>
            </div>
            <div className="timeline-card-technologies">
              <span>Technologie:</span>
              <span>{t(`${path}.technologies`)}</span>
            </div>
          </div>

          <div className="timeline-card-period">
            <span>{t(`${path}.period`)}</span>
          </div>
        </footer>
      )}
    </article>
  );
};

export default TimelineItemCard;
