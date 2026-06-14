import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
      >
        Account Aggregator
        Wealth Dashboard
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        One place to manage all
        your financial assets.
      </Typography>

      <Grid
        container
        spacing={3}
      >
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              Net Worth
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              Goals
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              Insights
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}