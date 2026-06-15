import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const MotionPaper = motion.create(Paper);

const quotes = [
  {
    name: "Warren Buffett",
    quote:
      "Do not save what is left after spending; spend what is left after saving.",
  },
  {
    name: "Charlie Munger",
    quote:
      "The first rule of compounding is to never interrupt it unnecessarily.",
  },
  {
    name: "Morgan Housel",
    quote:
      "Good investing is not necessarily about making good decisions. It's about consistently avoiding bad ones.",
  },
  {
    name: "Naval Ravikant",
    quote:
      "Play long-term games with long-term people.",
  },
];

export default function InspirationSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
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
          INSPIRATION
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#fff",
            fontWeight: 800,
            mb: 2,
            fontSize: {
              xs: "2rem",
              md: "3rem",
            },
          }}
        >
          Wisdom From Great Investors
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#CBD5E1",
            maxWidth: 700,
            mx: "auto",
            mb: 8,
            lineHeight: 1.8,
          }}
        >
          Markets change. Human behavior doesn't.
          Learn from some of the greatest minds in investing.
        </Typography>

        <Grid container spacing={4}>
          {quotes.map((item) => (
            <Grid
              key={item.name}
              size={{ xs: 12, md: 6 }}
            >
              <MotionPaper
                whileHover={{
                  y: -5,
                }}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  height: "100%",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                  color: "#fff",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.15rem",
                    lineHeight: 1.8,
                    fontStyle: "italic",
                    mb: 3,
                  }}
                >
                  "{item.quote}"
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#14B8A6",
                  }}
                >
                  — {item.name}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}