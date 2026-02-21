import {
  LineChart,
  Line,
  ResponsiveContainer,
  YAxis,
  XAxis,
  Tooltip,
} from "recharts";

export default function MyChart({ rawNumbers }) {
  const dataForChart = rawNumbers
    ? rawNumbers.map((num, index) => ({
        day: index + 1,
        value: num,
      }))
    : [];

  if (dataForChart.length === 0) return <div>Нет данных для графика</div>;

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        data={dataForChart}
        margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
      >
        <Line
          type="monotone"
          dataKey="value"
          stroke="#2196f3"
          strokeWidth={2}
          dot={true}
        ></Line>
        <XAxis dataKey="day" />
        <YAxis width={80} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
