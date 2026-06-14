import {
  Paper,
  Typography,
} from "@mui/material";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface Props {
  data: {
    name: string;
    value: number;
  }[];
}

const COLORS = [
  "#1976d2",
  "#43a047",
  "#fb8c00",
  "#8e24aa",
  "#e53935",
  "#00897b",
];

const AssetAllocationCard = ({
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
        Asset Allocation
      </Typography>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >
            {data.map(
              (_, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index %
                        COLORS.length
                    ]
                  }
                />
              )
            )}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default AssetAllocationCard;