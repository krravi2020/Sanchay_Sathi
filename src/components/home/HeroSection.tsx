import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion.create(Box);

const goals = [
  "₹ Emergency Fund",
  "₹ Child Education",
  "₹ Retirement Planning",
];

export default function HeroSection() {
  const navigate = useNavigate();

  const scrollToPhilosophy = () => {
    document.getElementById("philosophy")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        minHeight: {
          xs: "calc(100vh - 64px)",
          md: "92vh",
        },
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #f0fdfa 0%, #f8fafc 50%, #ecfeff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background Elements */}

      <Typography
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          fontSize: "5rem",
          opacity: 0.05,
          userSelect: "none",
        }}
      >
        🌱
      </Typography>

      <Typography
        sx={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          fontSize: "6rem",
          opacity: 0.05,
          userSelect: "none",
        }}
      >
        ₹
      </Typography>

      <Typography
        sx={{
          position: "absolute",
          top: "20%",
          right: "20%",
          fontSize: "4rem",
          opacity: 0.05,
          userSelect: "none",
        }}
      >
        📈
      </Typography>

      {/* Glow Effect */}

      <Box
        sx={{
          position: "absolute",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "#14B8A6",
          opacity: 0.08,
          filter: "blur(90px)",
          top: -120,
          left: -120,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* LEFT SIDE */}

          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                sx={{
                  color: "#0F766E",
                  fontWeight: 700,
                  letterSpacing: 1,
                  mb: 2,
                }}
              >
                YOUR INVESTMENT GUIDE
              </Typography>

              <Typography
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 3,
                  fontSize: {
                    xs: "2.3rem",
                    sm: "3rem",
                    md: "4.5rem",
                  },
                }}
              >
                Every Great Future Begins
                <br />
                With One Small Sanchay.
              </Typography>

              <Typography
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.9,
                  mb: 4,
                  maxWidth: 600,
                  fontSize: {
                    xs: "1rem",
                    md: "1.15rem",
                  },
                }}
              >
                Save with intention.
                Invest with wisdom.
                Build wealth that lasts generations.

                <br />
                <br />

                Sanchay Mitra helps you transform
                small financial habits into lifelong prosperity.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate("/login")}
                  sx={{
                    bgcolor: "#0F766E",
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                  }}
                >
                  Start Your Journey
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={scrollToPhilosophy}
                  sx={{
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </MotionBox>
          </Grid>

          {/* RIGHT SIDE */}

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                height: {
                  xs: 320,
                  md: 500,
                },
                mt: {
                  xs: 2,
                  md: 0,
                },
              }}
            >
              {goals.map((goal, index) => (
                <MotionBox
                  key={goal}
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                  }}
                  sx={{
                    position: "absolute",
                    top: `${index * 80}px`,
                    left: {
                      xs: `${index * 10}px`,
                      md: `${index * 35}px`,
                    },
                  }}
                >
                  <Paper
                    elevation={8}
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      minWidth: {
                        xs: 220,
                        md: 280,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#0F766E",
                      }}
                    >
                      {goal}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      mt={1}
                    >
                      Building tomorrow, today.
                    </Typography>
                  </Paper>
                </MotionBox>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}