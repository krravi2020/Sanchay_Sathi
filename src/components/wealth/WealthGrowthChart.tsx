import {
  Paper,
  Typography,
} from "@mui/material";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface Props {
  data: {
    year: number;
    value: number;
  }[];
}

const WealthGrowthChart = ({
  data,
}: Props) => {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        gutterBottom
      >
        Wealth Growth
      </Typography>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="year" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#1976d2"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default WealthGrowthChart;