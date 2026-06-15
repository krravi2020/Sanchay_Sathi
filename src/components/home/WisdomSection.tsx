import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const MotionPaper = motion.create(Paper);

const principles = [
  {
    icon: "⏳",
    title: "Start Early",
    description:
      "Time is the most powerful asset in wealth creation. The earlier you begin, the more compounding can work for you.",
  },
  {
    icon: "🎯",
    title: "Stay Consistent",
    description:
      "Small investments made regularly often outperform large investments made occasionally.",
  },
  {
    icon: "🌳",
    title: "Think Long-Term",
    description:
      "True wealth is built over years and decades, not days and weeks.",
  },
  {
    icon: "📚",
    title: "Keep Learning",
    description:
      "Financial knowledge compounds just like money. Learn continuously and invest wisely.",
  },
];

export default function WisdomSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#0F172A",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            textAlign: "center",
            color: "#14B8A6",
            fontWeight: 700,
            mb: 2,
            letterSpacing: 1,
          }}
        >
          TIMELESS WISDOM
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
          Principles Of Wealth Creation
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#CBD5E1",
            maxWidth: 800,
            mx: "auto",
            mb: 8,
            lineHeight: 1.8,
          }}
        >
          Markets change. Technologies evolve.
          But the principles of building wealth remain timeless.
        </Typography>

        <Grid container spacing={4}>
          {principles.map((item) => (
            <Grid
              key={item.title}
              size={{ xs: 12, sm: 6 }}
            >
              <MotionPaper
                whileHover={{
                  y: -6,
                }}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  height: "100%",
                  backgroundColor: "#1E293B",
                  color: "#fff",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: "1.3rem",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#CBD5E1",
                    lineHeight: 1.8,
                  }}
                >
                  {item.description}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}