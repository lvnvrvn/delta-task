import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MyChart = ({ data, title }) => {
  // 1. Трансформируем массив чисел в формат для Recharts
  const chartData = data.map((val, index) => ({
    day: index + 1, // Вместо Пн/Вт пока просто номера дней 1, 2, 3...
    value: val,
  }));

  return (
    <div style={{ width: "100%", height: 300, marginBottom: "30px" }}>
      <h2 style={{ textAlign: "left", marginLeft: "20px" }}>{title}</h2>

      {/* ResponsiveContainer позволяет графику растягиваться под ширину экрана */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis hide={false} />{" "}
          {/* Можно скрыть (true), если в макете нет цифр слева */}
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2196f3"
            strokeWidth={3}
            dot={{ r: 6 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyChart;
