import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Box,
} from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

export default function Login() {
    const navigate = useNavigate();

    const { login } = useAuth();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const handleLogin = () => {
        login(email, password);

        const profileCompleted =
            localStorage.getItem(
                "profileCompleted"
            );

        if (profileCompleted === "true") {
            navigate("/wealth");
        } else {
            navigate("/profile-setup");
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper
                sx={{
                    p: 4,
                    mt: 6,
                }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                >
                    Login
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    <TextField
                        label="Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(
                                e.target.value
                            )
                        }
                    />

                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) =>
                            setPassword(
                                e.target.value
                            )
                        }
                    />

                    <Button
                        variant="contained"
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}