import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const navItemStyle = {
    color: "#CBD5E1",
    cursor: "pointer",
    mb: 1,
    transition: "all 0.2s ease",
    "&:hover": {
      color: "#14B8A6",
      transform: "translateX(4px)",
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0F172A",
        color: "#FFFFFF",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}

          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              variant="h5"
              fontWeight={700}
              gutterBottom
            >
              Sanchay Mitra
            </Typography>

            <Typography
              sx={{
                color: "#CBD5E1",
                maxWidth: 500,
                lineHeight: 1.8,
              }}
            >
              Your Investment Guide.
              Helping individuals save smarter,
              invest wisely, and build lasting wealth through
              discipline, patience, and consistency.
            </Typography>
          </Grid>

          {/* Navigation */}

          <Grid size={{ xs: 12, md: 4 }}>
           
            <Typography
              sx={navItemStyle}
              onClick={() => navigate("/")}
            >
              Home
            </Typography>

            <Typography
              sx={navItemStyle}
              onClick={() => navigate("/features")}
            >
              Features
            </Typography>

            <Typography
              sx={navItemStyle}
              onClick={() => navigate("/learn")}
            >
              Learn
            </Typography>

            <Typography
              sx={navItemStyle}
              onClick={() => navigate("/about")}
            >
              About
            </Typography>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: 4,
            borderColor: "#334155",
          }}
        />

        <Typography
          textAlign="center"
          sx={{
            color: "#94A3B8",
          }}
        >
          © 2026 Sanchay Mitra. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}