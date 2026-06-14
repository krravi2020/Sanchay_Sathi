import { useState, useEffect } from "react";

import {
    Container,
    Typography,
    Box,
    Paper,
    Button,
    Drawer,
    TextField,
    MenuItem,
    Card,
    CardContent,
    IconButton,
    Stack,
} from "@mui/material";

import {
    AddCircle,
    Delete,
} from "@mui/icons-material";

interface Asset {
    id: string;
    assetType: string;
    assetName: string;
    currentValue: number;
}

const mutualFunds = [
    "Parag Parikh Flexi Cap",
    "Motilal Oswal Midcap",
    "Quant Small Cap",
    "Nippon India Small Cap",
    "HDFC Balanced Advantage",
    "ICICI Prudential Bluechip",
    "Axis Growth Opportunities",
    "SBI Contra Fund",
];

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

const assetTypes = [
    "Mutual Fund",
    "Stocks",
    "Real Estate",
    "PF",
    "NPS",
    "FD",
    "Savings Account",
    "Ancestral Property",
    "Gold",
    "Others",
];

const Assets = () => {
    const [assets, setAssets] = useState<Asset[]>([]);

    const [drawerOpen, setDrawerOpen] =
        useState(false);

    const [assetForm, setAssetForm] =
        useState<Asset>({
            id: "",
            assetType: "",
            assetName: "",
            currentValue: 0,

        });

    useEffect(() => {
        const savedAssets =
            localStorage.getItem("userAssets");

        if (savedAssets) {
            setAssets(JSON.parse(savedAssets));
        }
    }, []);

    const saveAssets = (
        updatedAssets: Asset[]
    ) => {
        setAssets(updatedAssets);

        localStorage.setItem(
            "userAssets",
            JSON.stringify(updatedAssets)
        );
    };

    const handleAddAsset = () => {
        if (!assetForm.assetType) return;

        if (
            assetForm.assetType ===
            "Mutual Fund" &&
            !assetForm.assetName
        )
            return;

        const newAsset: Asset = {
            ...assetForm,
            id: Date.now().toString(),
        };

        const updatedAssets = [
            ...assets,
            newAsset,
        ];

        saveAssets(updatedAssets);

        setAssetForm({
            id: "",
            assetType: "",
            assetName: "",
            currentValue: 0,
        });

        setDrawerOpen(false);
    };

    const handleDelete = (id: string) => {
        const updatedAssets =
            assets.filter(
                (asset) => asset.id !== id
            );

        saveAssets(updatedAssets);
    };

    const totalAssets =
        assets.reduce(
            (sum, asset) =>
                sum + Number(asset.currentValue),
            0
        );

    const assetSummary =
        assets.reduce(
            (
                summary: Record<string, number>,
                asset
            ) => {
                summary[asset.assetType] =
                    (summary[asset.assetType] || 0) +
                    asset.currentValue;

                return summary;
            },
            {}
        );

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
                {/* HEADER */}

                <Paper
                    elevation={8}
                    sx={{
                        p: 4,
                        borderRadius: 4,
                        background:
                            "linear-gradient(135deg,#1976d2,#42a5f5)",
                        color: "white",
                        mb: 4,
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight={700}
                    >
                        My Assets
                    </Typography>

                    <Typography sx={{ mt: 1 }}>
                        Build and track your wealth
                        portfolio
                    </Typography>

                    <Typography
                        variant="h3"
                        fontWeight={700}
                        sx={{ mt: 3 }}
                    >
                        ₹
                        {totalAssets.toLocaleString(
                            "en-IN"
                        )}
                    </Typography>

                    <Typography>
                        Total Asset Value
                    </Typography>
                </Paper>

                {/* ACTION BAR */}

                <Box
                    sx={{
                        display: "flex",
                        justifyContent:
                            "space-between",
                        alignItems: "center",
                        mb: 3,
                    }}
                >
                    <Typography variant="h5">
                        Asset Portfolio
                    </Typography>

                    <Button
                        startIcon={<AddCircle />}
                        variant="contained"
                        size="large"
                        onClick={() =>
                            setDrawerOpen(true)
                        }
                    >
                        Add Asset
                    </Button>
                </Box>

                <Paper
                    elevation={4}
                    sx={{
                        p: 3,
                        mb: 4,
                        borderRadius: 4,
                    }}
                >
                    <Typography
                        variant="h5"
                        fontWeight={700}
                        gutterBottom
                    >
                        Asset Allocation
                    </Typography>

                    {Object.keys(assetSummary).length === 0 ? (
                        <Typography color="text.secondary">
                            Add assets to view allocation summary
                        </Typography>
                    ) : (
                        Object.entries(assetSummary).map(
                            ([type, value]) => (
                                <Box
                                    key={type}
                                    sx={{
                                        display: "flex",
                                        justifyContent:
                                            "space-between",
                                        alignItems: "center",
                                        py: 1,
                                    }}
                                >
                                    <Typography>
                                        {getAssetEmoji(type)} {type}
                                    </Typography>

                                    <Box textAlign="right">
                                        <Typography
                                            fontWeight={700}
                                        >
                                            ₹
                                            {value.toLocaleString(
                                                "en-IN"
                                            )}
                                        </Typography>

                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                        >
                                            {totalAssets > 0
                                                ? (
                                                    (value /
                                                        totalAssets) *
                                                    100
                                                ).toFixed(1)
                                                : 0}
                                            %
                                        </Typography>
                                    </Box>
                                </Box>
                            )
                        )
                    )}
                </Paper>

                {/* ASSET CARDS */}

                <Stack spacing={2}>
                    {assets.length === 0 && (
                        <Paper
                            sx={{
                                p: 4,
                                textAlign: "center",
                            }}
                        >
                            <Typography>
                                No assets added yet.
                            </Typography>
                        </Paper>
                    )}

                    {assets.map((asset) => (
                        <Card
                            key={asset.id}
                            elevation={4}
                            sx={{
                                borderRadius: 3,
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent:
                                            "space-between",
                                        alignItems:
                                            "center",
                                    }}
                                >
                                    <Box>
                                        <Typography
                                            variant="h6"
                                            fontWeight={700}
                                        >
                                            {getAssetEmoji(
                                                asset.assetType
                                            )}{" "}
                                            {asset.assetName ||
                                                asset.assetType}
                                        </Typography>

                                        <Typography
                                            color="text.secondary"
                                        >
                                            {
                                                asset.assetType
                                            }
                                        </Typography>

                                        <Typography
                                            variant="h5"
                                            color="primary"
                                            fontWeight={700}
                                            sx={{ mt: 2 }}
                                        >
                                            ₹
                                            {asset.currentValue.toLocaleString(
                                                "en-IN"
                                            )}
                                        </Typography>


                                    </Box>

                                    <IconButton
                                        color="error"
                                        onClick={() =>
                                            handleDelete(
                                                asset.id
                                            )
                                        }
                                    >
                                        <Delete />
                                    </IconButton>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>

                {/* DRAWER */}

                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={() =>
                        setDrawerOpen(false)
                    }
                >
                    <Box
                        sx={{
                            width: 400,
                            p: 3,
                        }}
                    >
                        <Typography
                            variant="h5"
                            gutterBottom
                        >
                            Add New Asset
                        </Typography>

                        <TextField
                            select
                            fullWidth
                            label="Asset Type"
                            margin="normal"
                            value={
                                assetForm.assetType
                            }
                            onChange={(e) =>
                                setAssetForm({
                                    ...assetForm,
                                    assetType:
                                        e.target.value,
                                })
                            }
                        >
                            {assetTypes.map(
                                (type) => (
                                    <MenuItem
                                        key={type}
                                        value={type}
                                    >
                                        {type}
                                    </MenuItem>
                                )
                            )}
                        </TextField>

                        {assetForm.assetType ===
                            "Mutual Fund" && (
                                <TextField
                                    select
                                    fullWidth
                                    label="Mutual Fund"
                                    margin="normal"
                                    value={assetForm.assetName}
                                    onChange={(e) =>
                                        setAssetForm({
                                            ...assetForm,
                                            assetName: e.target.value,
                                        })
                                    }
                                >
                                    {mutualFunds.map((fund) => (
                                        <MenuItem
                                            key={fund}
                                            value={fund}
                                        >
                                            {fund}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            )}

                        <TextField
                            fullWidth
                            type="number"
                            label="Current Value"
                            margin="normal"
                            value={
                                assetForm.currentValue
                            }
                            onChange={(e) =>
                                setAssetForm({
                                    ...assetForm,
                                    currentValue:
                                        Number(
                                            e.target.value
                                        ),
                                })
                            }
                        />



                        <Button
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{ mt: 3 }}
                            onClick={
                                handleAddAsset
                            }
                        >
                            Save Asset
                        </Button>
                    </Box>
                </Drawer>
            </Container>
        </Box>
    );



};

export default Assets;