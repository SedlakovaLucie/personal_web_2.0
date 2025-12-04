import { useState } from "react";
import TimelineItemCard from "./card/TimelineItemCard";
import "./TimeLine.scss";

export type TimelineItem = {
  id: string;
  year: number;
  job: boolean;
};

// ---- TimeLine roky + pozice ----
const TIMELINE_ITEMS: TimelineItem[] = [
  { id: "future-2026", year: 2026, job: false },
  { id: "job2", year: 2025, job: true },
  { id: "job1", year: 2023, job: true },
];

const TimeLine = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="timeline">
      {/* svislá čára + šipka, jen jednou pro celou timeline */}
      <div className="timeline-axis-container"/>

      {TIMELINE_ITEMS.map((item) => (
        <div key={item.id} className="timeline-row">
          {/* LEVÁ ČÁST: rok + tečka na ose */}
          <div className="timeline-year-container">
            <span className="timeline-year">{item.year}</span>
            <span className="timeline-dot" />
          </div>

          {/* PRAVÁ ČÁST: karta (job nebo otazník) */}
          <div className="timeline-card-container">
            <TimelineItemCard
              id={item.id}
              job={item.job}
              opened={item.id === openId}
              handleToggle={() => handleToggle(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
