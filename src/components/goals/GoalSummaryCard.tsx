import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Chip,
  LinearProgress,
} from "@mui/material";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import FlagIcon from "@mui/icons-material/Flag";

import type { Goal } from "../../types/goal";

interface GoalSummaryCardProps {
  goals: Goal[];
}

export default function GoalSummaryCard({
  goals,
}: GoalSummaryCardProps) {
  const totalGoals = goals.length;

  const completedGoals = goals.filter(
    (goal) =>
      (goal.currentAmount / goal.targetAmount) * 100 >=
      100
  ).length;

  const onTrackGoals = goals.filter((goal) => {
    const progress =
      (goal.currentAmount / goal.targetAmount) * 100;

    return progress >= 75 && progress < 100;
  }).length;

  const needsAttentionGoals = goals.filter((goal) => {
    const progress =
      (goal.currentAmount / goal.targetAmount) * 100;

    return progress < 75;
  }).length;

  const totalTargetAmount = goals.reduce(
    (sum, goal) => sum + goal.targetAmount,
    0
  );

  const totalCurrentAmount = goals.reduce(
    (sum, goal) => sum + goal.currentAmount,
    0
  );

  const overallProgress =
    totalTargetAmount > 0
      ? (totalCurrentAmount / totalTargetAmount) * 100
      : 0;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card
      sx={{
        borderRadius: 5,
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
        color: "white",
        boxShadow:
          "0 12px 40px rgba(30,58,138,0.25)",
      }}
    >
      <CardContent
        sx={{
          p: 4,
          "&:last-child": {
            pb: 4,
          },
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
        >
          {/* LEFT SECTION */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="overline"
              sx={{
                opacity: 0.8,
                letterSpacing: 1.5,
              }}
            >
              GOALS OVERVIEW
            </Typography>

            <Typography
              variant="h3"
              fontWeight={800}
              sx={{
                mt: 1,
                mb: 1,
              }}
            >
              {formatCurrency(totalTargetAmount)}
            </Typography>

            <Typography
              sx={{
                opacity: 0.85,
                mb: 3,
              }}
            >
              Total Goal Corpus
            </Typography>

            <Box
              sx={{
                mb: 3,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  opacity: 0.8,
                }}
              >
                Overall Progress
              </Typography>

              <LinearProgress
                variant="determinate"
                value={overallProgress}
                sx={{
                  height: 10,
                  borderRadius: 10,
                  backgroundColor:
                    "rgba(255,255,255,0.15)",

                  "& .MuiLinearProgress-bar":
                    {
                      borderRadius: 10,
                    },
                }}
              />

              <Typography
                sx={{
                  mt: 1,
                  fontWeight: 700,
                }}
              >
                {overallProgress.toFixed(1)}%
              </Typography>
            </Box>

            <Box
              display="flex"
              gap={1}
              flexWrap="wrap"
            >
              <Chip
                icon={<FlagIcon />}
                label={`${totalGoals} Goals`}
                sx={{
                  bgcolor:
                    "rgba(255,255,255,0.12)",
                  color: "white",
                }}
              />

              <Chip
                icon={<CheckCircleIcon />}
                label={`${completedGoals} Completed`}
                sx={{
                  bgcolor:
                    "rgba(34,197,94,0.2)",
                  color: "#bbf7d0",
                }}
              />

              <Chip
                icon={<TrendingUpIcon />}
                label={`${onTrackGoals} On Track`}
                sx={{
                  bgcolor:
                    "rgba(59,130,246,0.2)",
                  color: "#bfdbfe",
                }}
              />

              <Chip
                icon={<WarningAmberIcon />}
                label={`${needsAttentionGoals} Need Attention`}
                sx={{
                  bgcolor:
                    "rgba(245,158,11,0.2)",
                  color: "#fde68a",
                }}
              />
            </Box>
          </Grid>

          {/* RIGHT SECTION */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                p: 3,
                borderRadius: 4,
                bgcolor:
                  "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  opacity: 0.8,
                }}
              >
                Current Savings
              </Typography>

              <Typography
                variant="h4"
                fontWeight={800}
                sx={{
                  mt: 1,
                  mb: 3,
                }}
              >
                {formatCurrency(
                  totalCurrentAmount
                )}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  opacity: 0.8,
                }}
              >
                Remaining Corpus
              </Typography>

              <Typography
                variant="h5"
                fontWeight={700}
                sx={{
                  mt: 1,
                }}
              >
                {formatCurrency(
                  totalTargetAmount -
                    totalCurrentAmount
                )}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}