import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const MotionPaper = motion.create(Paper);

const features = [
  {
    title: "Smart Insights",
    icon: "📊",
    description:
      "Understand your financial position clearly and make informed decisions with confidence.",
  },
  {
    title: "Goal Planning",
    icon: "🎯",
    description:
      "Turn your dreams into actionable financial goals and track progress over time.",
  },
  {
    title: "Wealth Tracking",
    icon: "💰",
    description:
      "Monitor your investments and see how your wealth evolves across different assets.",
  },
  {
    title: "Long-Term Growth",
    icon: "🌱",
    description:
      "Build sustainable wealth through discipline, patience, and consistency.",
  },
];

export default function FeaturesSection() {
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
          WHY SANCHAY MITRA
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
          Your Trusted Investment Guide
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "text.secondary",
            maxWidth: 800,
            mx: "auto",
            mb: 8,
            lineHeight: 1.8,
          }}
        >
          Financial planning should not feel complicated.
          Sanchay Mitra helps you understand, organize,
          and grow your wealth through simple and
          meaningful financial guidance.
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid
              key={feature.title}
              size={{ xs: 12, sm: 6 }}
            >
              <MotionPaper
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.2,
                }}
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 5,
                  height: "100%",
                  border: "1px solid #E2E8F0",
                  backgroundColor: "#fff",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    mb: 2,
                  }}
                >
                  {feature.icon}
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: "1.25rem",
                  }}
                >
                  {feature.title}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                  }}
                >
                  {feature.description}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}