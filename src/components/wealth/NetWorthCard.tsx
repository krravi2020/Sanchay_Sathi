import {
  Paper,
  Typography,
} from "@mui/material";

interface Props {
  totalAssets: number;
}

const NetWorthCard = ({
  totalAssets,
}: Props) => {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        borderRadius: 4,
      }}
    >
      <Typography variant="h6">
        Current Net Worth
      </Typography>

      <Typography
        variant="h3"
        fontWeight={700}
        color="primary"
      >
        ₹
        {totalAssets.toLocaleString(
          "en-IN"
        )}
      </Typography>
    </Paper>
  );
};

export default NetWorthCard;