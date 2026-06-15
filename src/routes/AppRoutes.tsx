import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Features from "../pages/Features";
import Learn from "../pages/Learn";
import About from "../pages/About";
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

            <Route path="/Home" element={<Home />} />
            <Route path="/Features" element={<Features />} />
            <Route path="/Learn" element={<Learn />} />
            <Route path="/About" element={<About />} />

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