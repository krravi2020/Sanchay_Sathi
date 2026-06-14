import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import A from "../pages/A";
import B from "../pages/B";
import C from "../pages/C";
import D from "../pages/D";
import ProfileSetup from "../pages/profile/ProfileSetup";
import Login from "../pages/login/Login";
import Wealth from "../pages/wealth/Wealth";
import Assets from "../pages/assets/Assets";

import ProtectedRoute from "./ProtectedRoute";
import Goals from "../pages/goals/Goals";
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/a" element={<A />} />
            <Route path="/b" element={<B />} />
            <Route path="/c" element={<C />} />
            <Route path="/d" element={<D />} />

            <Route path="/login" element={<Login />} />

            <Route
                path="/wealth"
                element={
                    <ProtectedRoute>
                        <Wealth />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/profile-setup"
                element={
                    <ProtectedRoute>
                        <ProfileSetup />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/assets"
                element={
                    <ProtectedRoute>
                        <Assets />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/goals"
                element={
                    <ProtectedRoute>
                        <Goals />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}