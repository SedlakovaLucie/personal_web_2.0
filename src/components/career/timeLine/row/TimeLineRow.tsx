import TimelineItemCard from "./card/TimelineItemCard";
import type { TimelineItem } from "../TimeLine";
import "./TimeLineRow.scss";

type TimelineRowProps = {
  item: TimelineItem;
  opened: boolean;
  onToggle: () => void;
};

const TimelineRow = ({ item, opened, onToggle }: TimelineRowProps) => {
  return (
    <div className="timeline-row">
      {/* 1) levý sloupec – rok */}
      <div className="timeline-year-cell">
        <span className="timeline-year">{item.year}</span>
      </div>

      {/* 2) prostřední sloupec – osa + kulička */}
      <div className="timeline-axis-cell">
        {/* tady bude ve SCSS vertikální čára + případné ořezání nahoře/dole */}
        <div className="timeline-axis-line" />
        <div className="timeline-dot" />
      </div>

      {/* 3) pravý sloupec – karta */}
      <div className="timeline-card-cell">
        <TimelineItemCard
          id={item.id}
          job={item.job}
          opened={opened}
          handleToggle={onToggle}
        />
      </div>
    </div>
  );
};

export default TimelineRow;
