import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const MotionPaper = motion.create(Paper);

const investments = [
  {
    icon: "📈",
    title: "Mutual Funds",
    description:
      "Diversified investing managed by professionals for long-term wealth creation.",
  },
  {
    icon: "🏢",
    title: "Stocks",
    description:
      "Participate in the growth of businesses and benefit from long-term market appreciation.",
  },
  {
    icon: "🏦",
    title: "Fixed Income",
    description:
      "Stable and predictable investments that help balance risk in your portfolio.",
  },
  {
    icon: "🪙",
    title: "Gold",
    description:
      "A traditional store of value and useful diversification asset.",
  },
  {
    icon: "🌴",
    title: "Retirement Planning",
    description:
      "Build a financial foundation that supports your future lifestyle.",
  },
  {
    icon: "🛡️",
    title: "Emergency Fund",
    description:
      "Your first financial goal and protection against life's uncertainties.",
  },
];

export default function InvestmentSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#F8FAFC",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            textAlign: "center",
            color: "#0F766E",
            fontWeight: 700,
            mb: 2,
            letterSpacing: 1,
          }}
        >
          BUILDING WEALTH
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 800,
            mb: 2,
            fontSize: {
              xs: "2rem",
              md: "3rem",
            },
          }}
        >
          Many Paths. One Goal.
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "text.secondary",
            maxWidth: 750,
            mx: "auto",
            mb: 8,
            lineHeight: 1.8,
          }}
        >
          Wealth creation is not about choosing one perfect investment.
          It is about building a balanced financial life that aligns
          with your goals, time horizon, and risk tolerance.
        </Typography>

        <Grid container spacing={3}>
          {investments.map((investment) => (
            <Grid
              key={investment.title}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
            >
              <MotionPaper
                whileHover={{
                  y: -6,
                }}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    mb: 2,
                  }}
                >
                  {investment.icon}
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  {investment.title}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                  }}
                >
                  {investment.description}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}