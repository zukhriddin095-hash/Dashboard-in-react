import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const stats = [
    { title: "Total Sales", value: "$12,430" },
    { title: "Orders", value: "320" },
    { title: "Users", value: "1,240" },
  ];

  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Orders",
        data: [12, 19, 8, 15, 22, 30, 25],
        backgroundColor: "#3b82f6",
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [3000, 4200, 3800, 5100, 6200, 7000],
        borderColor: "#10b981",
        backgroundColor: "rgba(16,185,129,0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-6 space-y-6">
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((item) => (
          <div key={item.title} className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">{item.title}</p>
            <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Weekly Orders</h3>
          <Bar data={barData} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Monthly Revenue</h3>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
