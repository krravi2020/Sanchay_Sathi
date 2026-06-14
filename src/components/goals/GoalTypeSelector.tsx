import {
  Card,
  CardActionArea,
  Grid,
  Typography,
  Box,
} from "@mui/material";

import { GOAL_CATEGORIES } from "../../constants/goalCategories";

interface GoalTypeSelectorProps {
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export default function GoalTypeSelector({
  selectedCategory,
  onSelect,
}: GoalTypeSelectorProps) {
  return (
    <Grid container spacing={3}>
      {GOAL_CATEGORIES.map((goal) => {
        const Icon = goal.icon;

        const selected =
          selectedCategory === goal.label;

        return (
          <Grid
            key={goal.label}
            size={{ xs: 12, sm: 6, md: 4 }}
          >
            <Card
              sx={{
                height: "100%",

                border: selected
                  ? "2px solid"
                  : "1px solid",

                borderColor: selected
                  ? goal.color
                  : "divider",

                borderRadius: 4,

                overflow: "hidden",

                transition:
                  "all 0.3s cubic-bezier(.4,0,.2,1)",

                transform: selected
                  ? "translateY(-6px)"
                  : "translateY(0)",

                boxShadow: selected
                  ? `0 8px 24px ${goal.color}33`
                  : 2,

                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: `0 8px 24px ${goal.color}22`,
                },
              }}
            >
              <CardActionArea
                onClick={() =>
                  onSelect(goal.label)
                }
                sx={{
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      backgroundColor: goal.bg,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      transition: "all 0.3s ease",

                      transform: selected
                        ? "scale(1.08)"
                        : "scale(1)",
                    }}
                  >
                    <Icon
                      sx={{
                        fontSize: 42,
                        color: goal.color,
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h6"
                    fontWeight={700}
                  >
                    {goal.label}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Start planning your{" "}
                    {goal.label.toLowerCase()} goal
                  </Typography>

                  {selected && (
                    <Box
                      sx={{
                        mt: 1,
                        px: 2,
                        py: 0.5,
                        borderRadius: 5,
                        backgroundColor: goal.bg,
                      }}
                    >
                      <Typography
                        variant="body2"
                        fontWeight={700}
                        sx={{
                          color: goal.color,
                        }}
                      >
                        ✓ Selected
                      </Typography>
                    </Box>
                  )}
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}