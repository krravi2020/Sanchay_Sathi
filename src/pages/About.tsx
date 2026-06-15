import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const values = [
  {
    icon: "🤝",
    title: "Trust",
    description:
      "Financial guidance should be transparent, honest, and easy to understand.",
  },
  {
    icon: "📚",
    title: "Knowledge",
    description:
      "Financial literacy empowers people to make better long-term decisions.",
  },
  {
    icon: "🌱",
    title: "Growth",
    description:
      "Small consistent actions create meaningful results over time.",
  },
  {
    icon: "🎯",
    title: "Purpose",
    description:
      "Every investment should support a meaningful life goal.",
  },
];

export default function About() {
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
            textAlign="center"
            color="#0F766E"
            fontWeight={700}
            mb={2}
          >
            ABOUT US
          </Typography>

          <Typography
            textAlign="center"
            fontWeight={800}
            mb={3}
            fontSize={{
              xs: "2.2rem",
              md: "4rem",
            }}
          >
            Building Better
            Financial Futures
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            lineHeight={1.8}
          >
            Sanchay Mitra exists to help individuals save
            smarter, invest wisely, and build lasting wealth
            through simple and meaningful financial guidance.
          </Typography>
        </Container>
      </Box>

      {/* Meaning */}

      <Box py={{ xs: 8, md: 10 }}>
        <Container maxWidth="md">
          <Typography
            textAlign="center"
            fontWeight={800}
            mb={4}
            fontSize={{
              xs: "2rem",
              md: "3rem",
            }}
          >
            What Does Sanchay Mitra Mean?
          </Typography>

          <Paper
            sx={{
              p: 5,
              borderRadius: 4,
            }}
          >
            <Typography
              textAlign="center"
              lineHeight={2}
              color="text.secondary"
            >
              "Sanchay" means saving.
              <br />
              "Mitra" means friend.
              <br />
              <br />
              Together, Sanchay Mitra represents a trusted
              companion on your journey toward financial
              security, independence, and prosperity.
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Mission */}

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
            mb={4}
            fontSize={{
              xs: "2rem",
              md: "3rem",
            }}
          >
            Our Mission
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            lineHeight={2}
          >
            We believe financial planning should not be limited
            to experts or institutions.
            <br />
            <br />
            Every individual deserves access to simple,
            understandable, and practical tools that help
            build long-term financial well-being.
          </Typography>
        </Container>
      </Box>

      {/* Values */}

      <Box py={{ xs: 8, md: 10 }}>
        <Container maxWidth="lg">
          <Typography
            textAlign="center"
            fontWeight={800}
            mb={6}
            fontSize={{
              xs: "2rem",
              md: "3rem",
            }}
          >
            Our Values
          </Typography>

          <Grid container spacing={4}>
            {values.map((value) => (
              <Grid
                key={value.title}
                size={{ xs: 12, sm: 6 }}
              >
                <Paper
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    height: "100%",
                  }}
                >
                  <Typography
                    fontSize="2.5rem"
                    mb={2}
                  >
                    {value.icon}
                  </Typography>

                  <Typography
                    fontWeight={700}
                    mb={2}
                  >
                    {value.title}
                  </Typography>

                  <Typography color="text.secondary">
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Journey Ahead */}

      <Box
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: "#0F172A",
          color: "#fff",
        }}
      >
        <Container maxWidth="md">
          <Typography
            textAlign="center"
            fontWeight={800}
            mb={4}
            fontSize={{
              xs: "2rem",
              md: "3rem",
            }}
          >
            The Journey Ahead
          </Typography>

          <Typography
            textAlign="center"
            color="#CBD5E1"
            lineHeight={2}
          >
            Our vision is to become a trusted financial
            companion that helps individuals understand
            their money, make informed decisions,
            and achieve their life goals with confidence.
          </Typography>
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
            Begin Your Wealth Journey
          </Typography>

          <Typography
            textAlign="center"
            mb={4}
          >
            Let Sanchay Mitra be your trusted investment guide.
          </Typography>

          <Box textAlign="center">
            <Button
              variant="contained"
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