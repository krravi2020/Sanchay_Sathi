import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SchoolIcon from "@mui/icons-material/School";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import SavingsIcon from "@mui/icons-material/Savings";
import SecurityIcon from "@mui/icons-material/Security";

import type { Goal } from "../../types/goal";

interface GoalCardProps {
  goal: Goal;
}

export default function GoalCard({
  goal,
}: GoalCardProps) {
  const progress =
    goal.targetAmount > 0
      ? (goal.currentAmount /
          goal.targetAmount) *
        100
      : 0;

  const formatCurrency = (
    amount: number
  ) => {
    return new Intl.NumberFormat(
      "en-IN",
      {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }
    ).format(amount);
  };

  const getGoalMeta = () => {
    switch (goal.category) {
      case "House":
        return {
          icon: (
            <HomeIcon
              sx={{
                color: "#1976d2",
                fontSize: 32,
              }}
            />
          ),
          bg: "#e3f2fd",
          color: "#1976d2",
        };

      case "Car":
        return {
          icon: (
            <DirectionsCarIcon
              sx={{
                color: "#2e7d32",
                fontSize: 32,
              }}
            />
          ),
          bg: "#e8f5e9",
          color: "#2e7d32",
        };

      case "Education":
        return {
          icon: (
            <SchoolIcon
              sx={{
                color: "#7b1fa2",
                fontSize: 32,
              }}
            />
          ),
          bg: "#f3e5f5",
          color: "#7b1fa2",
        };

      case "Vacation":
        return {
          icon: (
            <BeachAccessIcon
              sx={{
                color: "#ef6c00",
                fontSize: 32,
              }}
            />
          ),
          bg: "#fff3e0",
          color: "#ef6c00",
        };

      case "Retirement":
        return {
          icon: (
            <SavingsIcon
              sx={{
                color: "#00838f",
                fontSize: 32,
              }}
            />
          ),
          bg: "#e0f7fa",
          color: "#00838f",
        };

      default:
        return {
          icon: (
            <SecurityIcon
              sx={{
                color: "#c62828",
                fontSize: 32,
              }}
            />
          ),
          bg: "#ffebee",
          color: "#c62828",
        };
    }
  };

  const meta = getGoalMeta();

  const yearsRemaining = Math.max(
    0,
    new Date(
      goal.targetDate
    ).getFullYear() -
      new Date().getFullYear()
  );

  return (
    <Card
      sx={{
        borderRadius: 4,
        transition: "0.3s",
        height: "100%",
        "&:hover": {
          transform:
            "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          gap={2}
          mb={3}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              backgroundColor:
                meta.bg,

              display: "flex",
              alignItems: "center",
              justifyContent:
                "center",
            }}
          >
            {meta.icon}
          </Box>

          <Box>
            <Typography
              variant="h6"
              fontWeight={700}
            >
              {goal.category}
            </Typography>

            <Typography
              color="text.secondary"
              variant="body2"
            >
              Financial Goal
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          Target Amount
        </Typography>

        <Typography
          variant="h5"
          fontWeight={700}
          mb={3}
        >
          {formatCurrency(
            goal.targetAmount
          )}
        </Typography>

        <Box mb={1}>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            Progress
          </Typography>

          <Typography
            fontWeight={600}
          >
            {formatCurrency(
              goal.currentAmount
            )}
            {" / "}
            {formatCurrency(
              goal.targetAmount
            )}
          </Typography>
        </Box>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            mt: 1,
            height: 10,
            borderRadius: 10,
          }}
        />

        <Typography
          variant="body2"
          sx={{ mt: 1 }}
        >
          {progress.toFixed(0)}%
          Complete
        </Typography>

        <Box mt={3}>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            Target Date
          </Typography>

          <Typography
            fontWeight={600}
          >
            {new Date(
              goal.targetDate
            ).toLocaleDateString(
              "en-IN"
            )}
          </Typography>
        </Box>

        <Box mt={2}>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            Time Remaining
          </Typography>

          <Typography
            fontWeight={600}
            sx={{
              color: meta.color,
            }}
          >
            {yearsRemaining} Years
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}