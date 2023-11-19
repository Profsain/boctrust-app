import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "1",
    Deposit: 4000000,
    Withdraw: 2400000,
    // amt: 2400
  },
  {
    name: "5",
    Deposit: 3000000,
    Withdraw: 2900000,
    // amt: 2210
  },
  {
    name: "10",
    Deposit: 20000000,
    Withdraw: 10000000,
    // amt: 2290
  },
  {
    name: "15",
    Deposit: 40000000,
    Withdraw: 8400000,
    // amt: 2000
  },
  {
    name: "20",
    Deposit: 10000000,
    Withdraw: 20400000,
    // amt: 2181
  },
  {
    name: "25",
    Deposit: 40000000,
    Withdraw: 30400000,
    // amt: 2500
  },
  {
    name: "30",
    Deposit: 20000000,
    Withdraw: 24000000,
    // amt: 2100
  },
];

const BocChart = () => {
  return (
    <div className="ChartBar">
      <AreaChart
        width={1000}
        height={400}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Deposit"
          stroke="#ecaa00"
          fill="#ecaa11"
        />
        <Area
          type="monotone"
          dataKey="Withdraw"
          stroke="#ecaa00"
          fill="#ecaa00"
        />
      </AreaChart>
    </div>
  );
};

export default BocChart;
