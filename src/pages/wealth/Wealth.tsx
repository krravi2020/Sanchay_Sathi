import { useEffect, useState } from "react";
import NetWorthCard from "../../components/wealth/NetWorthCard";
import ProjectionCard from "../../components/wealth/ProjectionCard";
import AssetAllocationCard from "../../components/wealth/AssetAllocationCard";
import WealthGrowthChart from "../../components/wealth/WealthGrowthChart";
import FutureContributorsCard from "../../components/wealth/FutureContributorsCard";

import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Stack,
} from "@mui/material";

interface Asset {
  id: string;
  assetType: string;
  assetName: string;
  currentValue: number;
}

const assetReturns: Record<string, number> = {
  "Mutual Fund": 12,
  Stocks: 14,
  "Real Estate": 8,
  PF: 8,
  NPS: 10,
  FD: 6,
  "Savings Account": 3,
  Gold: 7,
  "Ancestral Property": 6,
  Others: 5,
};

const getAssetEmoji = (
  type: string
) => {
  switch (type) {
    case "Mutual Fund":
      return "📈";

    case "Stocks":
      return "📊";

    case "Real Estate":
      return "🏠";

    case "PF":
      return "🏦";

    case "NPS":
      return "🛡️";

    case "FD":
      return "💰";

    case "Savings Account":
      return "💳";

    case "Ancestral Property":
      return "🏡";

    case "Gold":
      return "🥇";

    default:
      return "📦";
  }
};

const Wealth = () => {
  const [assets, setAssets] = useState<
    Asset[]
  >([]);

  useEffect(() => {
    const savedAssets =
      localStorage.getItem(
        "userAssets"
      );

    if (savedAssets) {
      setAssets(
        JSON.parse(savedAssets)
      );
    }
  }, []);

  const totalAssets =
    assets.reduce(
      (sum, asset) =>
        sum +
        Number(
          asset.currentValue
        ),
      0
    );

  const projectedWealth =
    assets.reduce(
      (sum, asset) => {
        const rate =
          (assetReturns[
            asset.assetType
          ] || 5) / 100;

        return (
          sum +
          asset.currentValue *
          Math.pow(
            1 + rate,
            20
          )
        );
      },
      0
    );

  const assetSummary =
    assets.reduce(
      (
        summary: Record<
          string,
          number
        >,
        asset
      ) => {
        summary[
          asset.assetType
        ] =
          (summary[
            asset.assetType
          ] || 0) +
          asset.currentValue;

        return summary;
      },
      {}
    );

  const allocationData =
    Object.entries(assetSummary).map(
      ([name, value]) => ({
        name,
        value,
      })
    );

  const futureContributionData =
    assets.map((asset) => {
      const rate =
        (assetReturns[
          asset.assetType
        ] || 5) / 100;

      return {
        asset:
          asset.assetName ||
          asset.assetType,
        value:
          asset.currentValue *
          Math.pow(
            1 + rate,
            20
          ),
      };
    });

  const yearlyProjection = [
    0, 5, 10, 15, 20,
  ].map((year) => {
    const value =
      assets.reduce(
        (sum, asset) => {
          const rate =
            (assetReturns[
              asset.assetType
            ] || 5) /
            100;

          return (
            sum +
            asset.currentValue *
            Math.pow(
              1 + rate,
              year
            )
          );
        },
        0
      );

    return {
      year,
      value,
    };
  });

  const topAsset =
    assets.length > 0
      ? assets.reduce(
        (
          best,
          current
        ) => {
          const bestFV =
            best.currentValue *
            Math.pow(
              1 +
              (assetReturns[
                best.assetType
              ] || 5) /
              100,
              20
            );

          const currentFV =
            current.currentValue *
            Math.pow(
              1 +
              (assetReturns[
                current.assetType
              ] || 5) /
              100,
              20
            );

          return currentFV >
            bestFV
            ? current
            : best;
        }
      )
      : null;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#f8fafc 0%,#eef6ff 100%)",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={700}
          mb={4}
        >
          My Wealth Dashboard
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <NetWorthCard
              totalAssets={
                totalAssets
              }
            />
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <ProjectionCard
              projectedWealth={
                projectedWealth
              }
            />
          </Grid>

          <Grid
            size={{
              xs: 12,
            }}
          >
            <WealthGrowthChart
              data={yearlyProjection}
            />
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <AssetAllocationCard
              data={
                allocationData
              }
            />
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <FutureContributorsCard
              data={
                futureContributionData
              }
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
        >
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >

          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >

          </Grid>
        </Grid>



        <Paper
          elevation={4}
          sx={{
            p: 3,
            mt: 4,
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            gutterBottom
          >
            Wealth Growth
            Timeline
          </Typography>

          <Stack
            spacing={2}
          >
            {yearlyProjection.map(
              (
                item
              ) => (
                <Box
                  key={
                    item.year
                  }
                  sx={{
                    display:
                      "flex",
                    justifyContent:
                      "space-between",
                  }}
                >
                  <Typography>
                    Year{" "}
                    {
                      item.year
                    }
                  </Typography>

                  <Typography
                    fontWeight={
                      700
                    }
                  >
                    ₹
                    {Math.round(
                      item.value
                    ).toLocaleString(
                      "en-IN"
                    )}
                  </Typography>
                </Box>
              )
            )}
          </Stack>
        </Paper>

        {topAsset && (
          <Paper
            elevation={4}
            sx={{
              p: 3,
              mt: 4,
              borderRadius: 4,
            }}
          >
            <Typography
              variant="h5"
              fontWeight={700}
              gutterBottom
            >
              Top Wealth
              Creator
            </Typography>

            <Typography
              variant="h6"
            >
              {
                getAssetEmoji(
                  topAsset.assetType
                )
              }{" "}
              {topAsset.assetName ||
                topAsset.assetType}
            </Typography>

            <Typography
              color="text.secondary"
            >
              Expected to
              contribute the
              highest future
              value over the
              next 20 years.
            </Typography>
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default Wealth;