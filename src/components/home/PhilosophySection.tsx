import { Box, Container, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

export default function PhilosophySection() {
  return (
    <Box
      id="philosophy"
  sx={{
    py: { xs: 8, md: 12 },
  }}
    >
      <Container maxWidth="md">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "#0F766E",
              fontWeight: 700,
              letterSpacing: 1,
              mb: 2,
            }}
          >
            THE PHILOSOPHY OF WEALTH
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 800,
              mb: 5,
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
            }}
          >
            What Is Sanchay?
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              lineHeight: 2,
              fontSize: {
                xs: "1rem",
                md: "1.15rem",
              },
              mb: 5,
            }}
          >
            Sanchay is more than saving money.
            <br />
            It is the discipline of setting aside something today
            for a better tomorrow.
            <br />
            It is the belief that small, consistent actions create
            extraordinary outcomes over time.
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              lineHeight: 2,
              fontSize: {
                xs: "1rem",
                md: "1.15rem",
              },
              mb: 6,
            }}
          >
            Every rupee saved is a promise to your future self.
            Whether your goal is financial security, your child's
            education, a dream home, or a comfortable retirement,
            every journey begins with a single step.
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 5,
              background:
                "linear-gradient(135deg, #f0fdfa 0%, #ecfeff 100%)",
              border: "1px solid rgba(20,184,166,0.15)",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: 600,
                color: "#0F766E",
                fontSize: {
                  xs: "1.1rem",
                  md: "1.5rem",
                },
                lineHeight: 1.8,
              }}
            >
              “A river is formed drop by drop.
              <br />
              Wealth is built rupee by rupee.”
            </Typography>
          </Paper>
        </MotionBox>
      </Container>
    </Box>
  );
}