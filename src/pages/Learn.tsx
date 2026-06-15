import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const basics = [
  {
    icon: "💰",
    title: "Saving",
    description:
      "Setting aside a portion of your income for future needs.",
  },
  {
    icon: "📈",
    title: "Investing",
    description:
      "Putting money to work so it can grow over time.",
  },
  {
    icon: "🎯",
    title: "Financial Goals",
    description:
      "Specific milestones such as buying a home, retirement, or education planning.",
  },
  {
    icon: "🛡️",
    title: "Emergency Fund",
    description:
      "Money reserved for unexpected situations and emergencies.",
  },
];

const concepts = [
  {
    title: "Compounding",
    text: "Your money earns returns, and those returns earn returns.",
  },
  {
    title: "Consistency",
    text: "Small investments made regularly can create significant outcomes.",
  },
  {
    title: "Patience",
    text: "Wealth creation is a marathon, not a sprint.",
  },
];

const investmentTypes = [
  "Mutual Funds",
  "Stocks",
  "Gold",
  "Fixed Income",
  "Retirement Plans",
  "Emergency Savings",
];

const rules = [
  "Start early",
  "Invest consistently",
  "Think long-term",
  "Avoid emotional decisions",
  "Diversify investments",
  "Keep learning",
];

export default function Learn() {
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
            LEARN
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
            Financial Knowledge
            For Everyone
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            lineHeight={1.8}
          >
            Learn the fundamentals of saving,
            investing, and wealth creation in simple language.
          </Typography>
        </Container>
      </Box>

      {/* Basics */}

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
            Financial Basics
          </Typography>

          <Grid container spacing={4}>
            {basics.map((item) => (
              <Grid
                key={item.title}
                size={{ xs: 12, sm: 6 }}
              >
                <Paper
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    height: "100%",
                  }}
                >
                  <Typography fontSize="2.5rem" mb={2}>
                    {item.icon}
                  </Typography>

                  <Typography
                    fontWeight={700}
                    mb={2}
                  >
                    {item.title}
                  </Typography>

                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Wealth Concepts */}

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
            Wealth Building Concepts
          </Typography>

          {concepts.map((concept) => (
            <Paper
              key={concept.title}
              sx={{
                p: 4,
                mb: 3,
                borderRadius: 4,
              }}
            >
              <Typography
                fontWeight={700}
                mb={1}
              >
                {concept.title}
              </Typography>

              <Typography color="text.secondary">
                {concept.text}
              </Typography>
            </Paper>
          ))}
        </Container>
      </Box>

      {/* Investment Types */}

      <Box py={{ xs: 8, md: 10 }}>
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
            Common Investment Types
          </Typography>

          <Grid container spacing={3}>
            {investmentTypes.map((type) => (
              <Grid
                key={type}
                size={{ xs: 12, sm: 6 }}
              >
                <Paper
                  sx={{
                    p: 3,
                    textAlign: "center",
                    borderRadius: 4,
                  }}
                >
                  <Typography fontWeight={600}>
                    {type}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Rules */}

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
            mb={6}
            fontSize={{
              xs: "2rem",
              md: "3rem",
            }}
          >
            Golden Rules Of Investing
          </Typography>

          {rules.map((rule) => (
            <Typography
              key={rule}
              sx={{
                mb: 2,
                color: "#CBD5E1",
                textAlign: "center",
              }}
            >
              ✓ {rule}
            </Typography>
          ))}
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
            Continue Your Wealth Journey
          </Typography>

          <Typography
            textAlign="center"
            mb={4}
          >
            Knowledge grows wealth. Start building both today.
          </Typography>

          <Box textAlign="center">
            <Button
              variant="contained"
              onClick={() => navigate("/login")}
              sx={{
                bgcolor: "#fff",
                color: "#0F766E",
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