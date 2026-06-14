import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  TextField,
  Chip,
  Stack,
  LinearProgress,
} from "@mui/material";

import GoalTypeSelector from "./GoalTypeSelector";
import type { Goal } from "../../types/goal";

interface GoalWizardProps {
  open: boolean;
  onClose: () => void;
  onSave: (goal: Goal) => void;
}

export default function GoalWizard({
  open,
  onClose,
  onSave,
}: GoalWizardProps) {
  const [activeStep, setActiveStep] = useState(0);

  const [selectedCategory, setSelectedCategory] =
    useState("");

  const [targetAmount, setTargetAmount] =
    useState("");

  const [targetDate, setTargetDate] =
    useState("");

  const resetWizard = () => {
    setActiveStep(0);
    setSelectedCategory("");
    setTargetAmount("");
    setTargetDate("");
  };

  const handleClose = () => {
    resetWizard();
    onClose();
  };

  const handleCreateGoal = () => {
    const goal: Goal = {
      id: crypto.randomUUID(),

      category:
        selectedCategory as Goal["category"],

      targetAmount: Number(targetAmount),

      currentAmount: 0,

      targetDate,

      createdAt: new Date().toISOString(),
    };

    onSave(goal);

    handleClose();
  };

  const formatCurrency = (value: string) => {
    if (!value) return "";

    return new Intl.NumberFormat("en-IN").format(
      Number(value)
    );
  };

  const getSuggestedAmounts = () => {
    switch (selectedCategory) {
      case "House":
        return [
          { label: "₹25L", value: "2500000" },
          { label: "₹50L", value: "5000000" },
          { label: "₹75L", value: "7500000" },
          { label: "₹1Cr", value: "10000000" },
        ];

      case "Car":
        return [
          { label: "₹5L", value: "500000" },
          { label: "₹10L", value: "1000000" },
          { label: "₹15L", value: "1500000" },
          { label: "₹20L", value: "2000000" },
        ];

      case "Retirement":
        return [
          { label: "₹1Cr", value: "10000000" },
          { label: "₹2Cr", value: "20000000" },
          { label: "₹5Cr", value: "50000000" },
          { label: "₹10Cr", value: "100000000" },
        ];

      default:
        return [
          { label: "₹10L", value: "1000000" },
          { label: "₹25L", value: "2500000" },
          { label: "₹50L", value: "5000000" },
          { label: "₹1Cr", value: "10000000" },
        ];
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>
        Create New Goal
      </DialogTitle>

      <LinearProgress
        variant="determinate"
        value={((activeStep + 1) / 3) * 100}
      />

      <DialogContent sx={{ py: 4 }}>
        <Box mb={3}>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            Step {activeStep + 1} of 3
          </Typography>
        </Box>

        {activeStep === 0 && (
          <>
            <Typography
              variant="h4"
              fontWeight={700}
              mb={1}
            >
              What are you saving for?
            </Typography>

            <Typography
              color="text.secondary"
              mb={4}
            >
              Choose a goal to begin your
              investment journey.
            </Typography>

            <GoalTypeSelector
              selectedCategory={
                selectedCategory
              }
              onSelect={
                setSelectedCategory
              }
            />
          </>
        )}

        {activeStep === 1 && (
          <>
            <Typography
              variant="h4"
              fontWeight={700}
              mb={1}
            >
              How much do you need?
            </Typography>

            <Typography
              color="text.secondary"
              mb={4}
            >
              Enter the target amount.
            </Typography>

            <TextField
              fullWidth
              type="number"
              label="Target Amount"
              value={targetAmount}
              onChange={(e) =>
                setTargetAmount(
                  e.target.value
                )
              }
              sx={{ mb: 3 }}
            />

            {targetAmount && (
              <Typography
                variant="h5"
                fontWeight={700}
                mb={3}
              >
                ₹
                {formatCurrency(
                  targetAmount
                )}
              </Typography>
            )}

            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              useFlexGap
            >
              {getSuggestedAmounts().map(
                (amount) => (
                  <Chip
                    key={amount.value}
                    label={amount.label}
                    onClick={() =>
                      setTargetAmount(
                        amount.value
                      )
                    }
                  />
                )
              )}
            </Stack>
          </>
        )}

        {activeStep === 2 && (
          <>
            <Typography
              variant="h4"
              fontWeight={700}
              mb={1}
            >
              When do you need it?
            </Typography>

            <Typography
              color="text.secondary"
              mb={4}
            >
              Select your target date.
            </Typography>

            <TextField
              type="date"
              fullWidth
              value={targetDate}
              onChange={(e) =>
                setTargetDate(
                  e.target.value
                )
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
          </>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        {activeStep > 0 && (
          <Button
            onClick={() =>
              setActiveStep(
                activeStep - 1
              )
            }
          >
            Back
          </Button>
        )}

        <Button onClick={handleClose}>
          Cancel
        </Button>

        {activeStep === 0 && (
          <Button
            variant="contained"
            disabled={!selectedCategory}
            onClick={() =>
              setActiveStep(1)
            }
          >
            Next
          </Button>
        )}

        {activeStep === 1 && (
          <Button
            variant="contained"
            disabled={!targetAmount}
            onClick={() =>
              setActiveStep(2)
            }
          >
            Next
          </Button>
        )}

        {activeStep === 2 && (
          <Button
            variant="contained"
            disabled={!targetDate}
            onClick={
              handleCreateGoal
            }
          >
            Create Goal
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}