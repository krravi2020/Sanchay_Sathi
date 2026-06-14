import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00AEEF", // Aqua Blue
    },

    secondary: {
      main: "#00C896", // Aqua Green
    },

    background: {
      default: "#F5F8FA",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#0B2545",
      secondary: "#4A5568",
    },
  },

  typography: {
    fontFamily: [
      "Inter",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
          fontWeight: 600,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow:
            "0 4px 12px rgba(0,0,0,0.08)",
        },
      },
    },
  },
});

export default theme;