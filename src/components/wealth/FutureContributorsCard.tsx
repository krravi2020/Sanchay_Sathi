import {
  Paper,
  Typography,
} from "@mui/material";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface Props {
  data: {
    asset: string;
    value: number;
  }[];
}

const FutureContributorsCard = ({
  data,
}: Props) => {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        borderRadius: 4,
        height: "100%",
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        gutterBottom
      >
        Future Wealth Contributors
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 2 }}
      >
        Projected asset values after
        20 years based on assumed
        returns.
      </Typography>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis type="number" />

          <YAxis
            type="category"
            dataKey="asset"
            width={120}
          />

          <Tooltip
            formatter={(value) => [
              `₹${Number(
                value
              ).toLocaleString(
                "en-IN"
              )}`,
              "Projected Value",
            ]}
          />

          <Bar
            dataKey="value"
            radius={[0, 8, 8, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default FutureContributorsCard;