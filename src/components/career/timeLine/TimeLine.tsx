import { useState } from "react";
import TimelineRow from "./row/TimeLineRow";
import "./TimeLine.scss";

export type TimelineItem = {
  id: string;
  year: number;
  job: boolean;
};

const TIMELINE_ITEMS: TimelineItem[] = [
  { id: "job3", year: 2026, job: false },
  { id: "job2", year: 2025, job: true },
  { id: "job1", year: 2023, job: true },
];

const TimeLine = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="timeline">
      {TIMELINE_ITEMS.map((item) => (
        <TimelineRow
          key={item.id}
          item={item}
          opened={item.id === openId}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </section>
  );
};

export default TimeLine;
