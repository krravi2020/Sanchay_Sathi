import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const journeySteps = [
  {
    title: "Earn",
    emoji: "💼",
    description:
      "Build income through your skills, profession, and hard work.",
  },
  {
    title: "Save",
    emoji: "💰",
    description:
      "Set aside a portion of every earning before you spend.",
  },
  {
    title: "Invest",
    emoji: "📈",
    description:
      "Put your savings to work through thoughtful investing.",
  },
  {
    title: "Compound",
    emoji: "🌱",
    description:
      "Allow time and consistency to multiply your wealth.",
  },
  {
    title: "Financial Freedom",
    emoji: "🏡",
    description:
      "Enjoy the freedom to pursue life's goals with confidence.",
  },
];

export default function WealthJourneySection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
      }}
    >
      <Container maxWidth="md">
        <Typography
          sx={{
            textAlign: "center",
            color: "#0F766E",
            fontWeight: 700,
            mb: 2,
            letterSpacing: 1,
          }}
        >
          THE WEALTH JOURNEY
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
          From Income To Freedom
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "text.secondary",
            lineHeight: 1.8,
            mb: 8,
            maxWidth: 700,
            mx: "auto",
          }}
        >
          Wealth creation is not a mystery.
          It is a simple process followed consistently over time.
          Every financially successful person walks the same path.
        </Typography>

        {journeySteps.map((step, index) => (
          <MotionBox
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                mb: 2,
                borderRadius: 4,
                border: "1px solid #E2E8F0",
                position: "relative",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2rem",
                  mb: 1,
                }}
              >
                {step.emoji}
              </Typography>

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  mb: 1,
                }}
              >
                {step.title}
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  lineHeight: 1.8,
                }}
              >
                {step.description}
              </Typography>
            </Paper>

            {index < journeySteps.length - 1 && (
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "2rem",
                  color: "#14B8A6",
                  my: 1,
                }}
              >
                ↓
              </Typography>
            )}
          </MotionBox>
        ))}
      </Container>
    </Box>
  );
}