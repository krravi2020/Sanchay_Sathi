import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import GoalWizard from "../../components/goals/GoalWizard";
import GoalCard from "../../components/goals/GoalCard";
import type { Goal } from "../../types/goal";
import GoalSummaryCard from "../../components/goals/GoalSummaryCard";

const STORAGE_KEY = "sanchay-mitra-goals";

export default function Goals() {
  const [goals, setGoals] = useState<Goal[]>([]);
const [openWizard, setOpenWizard] = useState(false);
  useEffect(() => {
    const savedGoals = localStorage.getItem(STORAGE_KEY);

    if (savedGoals) {
      try {
        setGoals(JSON.parse(savedGoals));
      } catch (error) {
        console.error("Failed to load goals", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(goals)
    );
  }, [goals]);

  const handleSaveGoal = (goal: Goal) => {
      console.log("Saving Goal", goal);

    setGoals((prev) => [goal, ...prev]);

  };

  

  return (
  <Container maxWidth="xl" sx={{ py: 4 }}>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={4}
    >
      <Box>
        <Typography
  variant="h3"
  fontWeight={800}
>
  🎯 Your Goals
</Typography>

        <Typography color="text.secondary">
          Every investment starts with a dream.
        </Typography>
      </Box>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => setOpenWizard(true)}
      >
        Add Goal
      </Button>
    </Box>

    {goals.length === 0 ? (
      <Paper
        elevation={2}
        sx={{
          p: 6,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">
          No Goals Added Yet
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          Start by creating your first financial goal.
        </Typography>
      </Paper>
    ) : (
      <>
        <Box mt={3} mb={4}>
          <GoalSummaryCard goals={goals} />
        </Box>

        <Grid container spacing={3}>
          {goals.map((goal) => (
            <Grid
              key={goal.id}
              size={{ xs: 12, md: 6, lg: 4 }}
            >
              <GoalCard goal={goal} />
            </Grid>
          ))}
        </Grid>
      </>
    )}

    <GoalWizard
      open={openWizard}
      onClose={() => setOpenWizard(false)}
      onSave={handleSaveGoal}
    />
  </Container>
);
}