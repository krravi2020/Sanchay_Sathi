
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionPaper = motion.create(Paper);

const features = [
  {
    icon: "📊",
    title: "Wealth Dashboard",
    description:
      "View your financial journey in one place and understand your overall wealth position.",
  },
  {
    icon: "🎯",
    title: "Goal Planning",
    description:
      "Plan for retirement, education, home purchase, and life's important milestones.",
  },
  {
    icon: "📈",
    title: "Investment Insights",
    description:
      "Understand how your investments contribute to long-term wealth creation.",
  },
  {
    icon: "🌱",
    title: "Future Projections",
    description:
      "Visualize how small, consistent investments can grow over time.",
  },
];

const lifeStages = [
  {
    icon: "🎓",
    title: "First Job",
    description:
      "Start saving early and build strong financial habits.",
  },
  {
    icon: "💼",
    title: "Growing Career",
    description:
      "Expand investments and strengthen financial security.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Goals",
    description:
      "Plan for education, home ownership, and future needs.",
  },
  {
    icon: "🏖️",
    title: "Retirement",
    description:
      "Build long-term wealth and financial independence.",
  },
];

const futureTools = [
  "SIP Calculator",
  "Goal Simulator",
  "Retirement Planner",
];

export default function Features() {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero */}

      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background:
            "linear-gradient(135deg,#f0fdfa 0%,#f8fafc 100%)",
        }}
      >
        <Container maxWidth="md">
          <Typography
            sx={{
              textAlign: "center",
              color: "#0F766E",
              fontWeight: 700,
              mb: 2,
            }}
          >
            FEATURES
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 800,
              mb: 3,
              fontSize: {
                xs: "2.2rem",
                md: "4rem",
              },
            }}
          >
            Everything You Need
            <br />
            To Build Wealth
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              lineHeight: 1.8,
              maxWidth: 700,
              mx: "auto",
            }}
          >
            Sanchay Mitra helps you save smarter,
            invest wisely, and stay focused on
            your long-term financial goals.
          </Typography>
        </Container>
      </Box>

      {/* Features */}

      <Box py={{ xs: 8, md: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {features.map((feature) => (
              <Grid
                key={feature.title}
                size={{ xs: 12, sm: 6 }}
              >
                <MotionPaper
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                  }}
                >
                  <Typography fontSize="2.5rem" mb={2}>
                    {feature.icon}
                  </Typography>

                  <Typography
                    fontWeight={700}
                    mb={2}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    lineHeight={1.8}
                  >
                    {feature.description}
                  </Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Life Stages */}

      <Box
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: "#F8FAFC",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            textAlign="center"
            fontWeight={800}
            mb={2}
            fontSize={{
              xs: "2rem",
              md: "3rem",
            }}
          >
            Built For Every Stage Of Life
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            maxWidth={700}
            mx="auto"
            mb={8}
          >
            Financial goals evolve over time.
            Sanchay Mitra helps you stay focused
            at every stage of the journey.
          </Typography>

          <Grid container spacing={4}>
            {lifeStages.map((stage) => (
              <Grid
                key={stage.title}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 3,
                }}
              >
                <Paper
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 4,
                    height: "100%",
                  }}
                >
                  <Typography
                    fontSize="3rem"
                    mb={2}
                  >
                    {stage.icon}
                  </Typography>

                  <Typography
                    fontWeight={700}
                    mb={2}
                  >
                    {stage.title}
                  </Typography>

                  <Typography color="text.secondary">
                    {stage.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Sanchay Effect */}

      <Box py={{ xs: 8, md: 10 }}>
        <Container maxWidth="md">
          <Typography
            textAlign="center"
            color="#0F766E"
            fontWeight={700}
            mb={2}
          >
            THE SANCHAY EFFECT
          </Typography>

          <Typography
            textAlign="center"
            fontWeight={800}
            mb={6}
            fontSize={{
              xs: "2rem",
              md: "3rem",
            }}
          >
            Small Steps. Big Outcomes.
          </Typography>

          {[
            "₹1,000 Saved Monthly",
            "₹12,000 Saved Yearly",
            "₹1,20,000 Saved Over 10 Years",
            "Compounding Creates Possibilities",
          ].map((item, index) => (
            <Box key={item}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: "center",
                }}
              >
                <Typography
                  fontWeight={700}
                  fontSize="1.2rem"
                >
                  {item}
                </Typography>
              </Paper>

              {index < 3 && (
                <Typography
                  textAlign="center"
                  fontSize="2rem"
                  color="#14B8A6"
                  my={1}
                >
                  ↓
                </Typography>
              )}
            </Box>
          ))}
        </Container>
      </Box>

      {/* Future Tools */}

      <Box
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: "#F8FAFC",
        }}
      >
        <Container maxWidth="md">
          <Typography
            textAlign="center"
            fontWeight={800}
            mb={6}
            fontSize={{
              xs: "2rem",
              md: "3rem",
            }}
          >
            Future Tools
          </Typography>

          <Grid container spacing={3}>
            {futureTools.map((tool) => (
              <Grid
                key={tool}
                size={{ xs: 12, md: 4 }}
              >
                <Paper
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 4,
                  }}
                >
                  <Chip
                    label="Coming Soon"
                    size="small"
                    sx={{ mb: 2 }}
                  />

                  <Typography fontWeight={700}>
                    {tool}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}

      <Box
        sx={{
          py: { xs: 10, md: 12 },
          background:
            "linear-gradient(135deg,#0F766E 0%,#14B8A6 100%)",
          color: "#fff",
        }}
      >
        <Container maxWidth="md">
          <Typography
            textAlign="center"
            fontWeight={800}
            mb={3}
            fontSize={{
              xs: "2rem",
              md: "3rem",
            }}
          >
            Start Building Wealth Today
          </Typography>

          <Typography
            textAlign="center"
            mb={4}
            sx={{
              opacity: 0.9,
            }}
          >
            Small steps today.
            Meaningful outcomes tomorrow.
          </Typography>

          <Box textAlign="center">
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/login")}
              sx={{
                bgcolor: "#fff",
                color: "#0F766E",
                fontWeight: 700,
              }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

