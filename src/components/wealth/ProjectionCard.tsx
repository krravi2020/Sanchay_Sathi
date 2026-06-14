import {
  Paper,
  Typography,
} from "@mui/material";

interface Props {
  projectedWealth: number;
}

const ProjectionCard = ({
  projectedWealth,
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
        Projected Wealth
      </Typography>

      <Typography
        variant="h3"
        fontWeight={700}
        color="success.main"
      >
        ₹
        {Math.round(
          projectedWealth
        ).toLocaleString("en-IN")}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
      >
        20 Year Projection
      </Typography>
    </Paper>
  );
};

export default ProjectionCard;