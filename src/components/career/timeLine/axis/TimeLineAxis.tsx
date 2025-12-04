import "./TimeLineAxis.scss";

type TimeLineAxisProps = {
  years: number[];
}

const TimeLineAxis = ({ years }: TimeLineAxisProps) => {
  return (
    <div className="timeline-axis">
      <div className="timeline-axis-line" />

      <div className="timeline-axis-years">
        {years.map((year) => (
          <div key={year}>
            <span>{year}</span>
            <span className="timeline-dot" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLineAxis;
