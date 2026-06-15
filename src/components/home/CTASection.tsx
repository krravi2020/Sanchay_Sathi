import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion.create(Box);

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background:
          "linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)",
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Elements */}

      <Typography
        sx={{
          position: "absolute",
          top: "10%",
          left: "10%",
          fontSize: "5rem",
          opacity: 0.08,
          userSelect: "none",
        }}
      >
        🌱
      </Typography>

      <Typography
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          fontSize: "5rem",
          opacity: 0.08,
          userSelect: "none",
        }}
      >
        ₹
      </Typography>

      <Container maxWidth="md">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 800,
              mb: 3,
              lineHeight: 1.2,
              fontSize: {
                xs: "2rem",
                md: "3.5rem",
              },
            }}
          >
            Your Future Self
            <br />
            Will Thank You.
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              maxWidth: 700,
              mx: "auto",
              mb: 5,
              lineHeight: 1.8,
              opacity: 0.95,
              fontSize: {
                xs: "1rem",
                md: "1.2rem",
              },
            }}
          >
            The best time to start building wealth was yesterday.
            The next best time is today.
            Begin your journey with Sanchay Mitra and take the
            first step toward financial confidence.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/login")}
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#0F766E",
                px: 5,
                py: 1.75,
                borderRadius: 3,
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "none",
                boxShadow: 3,

                "&:hover": {
                  backgroundColor: "#F8FAFC",
                },
              }}
            >
              Start Building Wealth Today
            </Button>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}