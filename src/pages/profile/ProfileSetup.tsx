import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
  Box,
  Avatar,
  LinearProgress,
} from "@mui/material";

interface ProfileData {
  profilePhoto: string;

  fullName: string;
  email: string;
  contactNumber: string;
  dob: string;
  panNumber: string;

  maritalStatus: string;
  numberOfKids: string;

  jobType: string;
  organizationName: string;
  designation: string;
  experience: string;
  annualIncome: string;
}

const emptyProfile: ProfileData = {
  profilePhoto: "",

  fullName: "",
  email: "",
  contactNumber: "",
  dob: "",
  panNumber: "",

  maritalStatus: "",
  numberOfKids: "",

  jobType: "",
  organizationName: "",
  designation: "",
  experience: "",
  annualIncome: "",
};

const ProfileSetup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState<ProfileData>(emptyProfile);

  const [editMode, setEditMode] =
    useState(false);

  const profileExists =
    formData.fullName.trim() !== "";

  useEffect(() => {
    const savedProfile =
      localStorage.getItem("userProfile");

    if (savedProfile) {
      try {
        setFormData(JSON.parse(savedProfile));
      } catch (error) {
        console.error(
          "Failed to load profile",
          error
        );
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePhotoUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        profilePhoto: reader.result as string,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem(
      "userProfile",
      JSON.stringify(formData)
    );

    localStorage.setItem(
      "profileCompleted",
      "true"
    );

    setEditMode(false);

    navigate("/wealth");
  };

  const completion = Math.round(
    (Object.values(formData).filter(
      (value) => value !== ""
    ).length /
      Object.keys(formData).length) *
    100
  );
  console.log(
    "profileExists",
    profileExists,
    "editMode",
    editMode
  );
  if (profileExists && !editMode) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg,#f8fafc 0%,#eef6ff 100%)",
          py: 5,
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={8}
            sx={{
              p: 4,
              borderRadius: 5,
            }}
          >
            <Box textAlign="center">
              <Avatar
                src={formData.profilePhoto}
                sx={{
                  width: 120,
                  height: 120,
                  mx: "auto",
                  mb: 2,
                }}
              />

              <Typography
                variant="h4"
                fontWeight={700}
              >
                {formData.fullName}
              </Typography>

              <Typography
                color="text.secondary"
              >
                {formData.email}
              </Typography>
            </Box>

            <Paper
              variant="outlined"
              sx={{
                p: 3,
                mt: 4,
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
              >
                Personal Information
              </Typography>

              <Typography>
                Contact: {formData.contactNumber}
              </Typography>

              <Typography>
                DOB: {formData.dob}
              </Typography>

              <Typography>
                PAN: {formData.panNumber}
              </Typography>

              <Typography>
                Marital Status:
                {" "}
                {formData.maritalStatus}
              </Typography>

              {formData.maritalStatus ===
                "Married" && (
                  <Typography>
                    Kids:
                    {" "}
                    {formData.numberOfKids}
                  </Typography>
                )}
            </Paper>

            <Paper
              variant="outlined"
              sx={{
                p: 3,
                mt: 3,
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
              >
                Professional Information
              </Typography>

              <Typography>
                Job Type:
                {" "}
                {formData.jobType}
              </Typography>

              <Typography>
                Organisation:
                {" "}
                {formData.organizationName}
              </Typography>

              <Typography>
                Designation:
                {" "}
                {formData.designation}
              </Typography>

              <Typography>
                Experience:
                {" "}
                {formData.experience}
                {" "}years
              </Typography>

              <Typography>
                Annual Income:
                {" "}
                ₹{formData.annualIncome}
              </Typography>
            </Paper>

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 4 }}
              onClick={() =>
                setEditMode(true)
              }
            >
              Edit Profile
            </Button>
          </Paper>
        </Container>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#f8fafc 0%,#eef6ff 100%)",
        py: 5,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={8}
          sx={{
            p: 4,
            borderRadius: 5,
          }}
        >
          <Box textAlign="center" mb={4}>
            <Avatar
              src={formData.profilePhoto}
              sx={{
                width: 110,
                height: 110,
                mx: "auto",
                mb: 2,
                border: "3px solid #1976d2",
              }}
            />

            <Typography
              variant="h4"
              fontWeight={700}
            >
              👋 Welcome to Sanchay Mitra
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Let's understand you better before we
              start building your financial future.
            </Typography>

            <LinearProgress
              variant="determinate"
              value={completion}
              sx={{
                mt: 3,
                height: 10,
                borderRadius: 5,
              }}
            />

            <Typography
              variant="body2"
              sx={{ mt: 1 }}
            >
              Profile Completion {completion}%
            </Typography>
          </Box>

          <Box textAlign="center" mb={4}>
            <Button
              variant="outlined"
              component="label"
            >
              Upload Profile Photo

              <input
                hidden
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
              />
            </Button>
          </Box>

          <Paper
            variant="outlined"
            sx={{
              p: 3,
              mb: 3,
              borderRadius: 3,
            }}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
            >
              Personal Information
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(250px, 1fr))",
                gap: 2,
              }}
            >
              <TextField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="Contact Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="PAN Number"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                select
                label="Marital Status"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="Single">
                  Single
                </MenuItem>

                <MenuItem value="Married">
                  Married
                </MenuItem>
              </TextField>

              {formData.maritalStatus ===
                "Married" && (
                  <TextField
                    label="Number of Kids"
                    name="numberOfKids"
                    value={formData.numberOfKids}
                    onChange={handleChange}
                    fullWidth
                  />
                )}
            </Box>
          </Paper>

          <Paper
            variant="outlined"
            sx={{
              p: 3,
              mb: 4,
              borderRadius: 3,
            }}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              gutterBottom
            >
              Professional Information
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(250px, 1fr))",
                gap: 2,
              }}
            >
              <TextField
                select
                label="Job Type"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="Government">
                  Government
                </MenuItem>

                <MenuItem value="Private">
                  Private
                </MenuItem>

                <MenuItem value="Business">
                  Business
                </MenuItem>

                <MenuItem value="Self Employed">
                  Self Employed
                </MenuItem>

                <MenuItem value="Other">
                  Other
                </MenuItem>
              </TextField>

              <TextField
                label="Organisation Name"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="Designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="Years of Experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="Annual Income"
                name="annualIncome"
                value={formData.annualIncome}
                onChange={handleChange}
                fullWidth
              />
            </Box>
          </Paper>

          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              py: 1.6,
              borderRadius: 3,
              fontWeight: 700,
              fontSize: "1rem",
            }}
            onClick={handleSave}
          >
            Save Profile & Continue
          </Button>

        </Paper>
      </Container>
    </Box>
  );

};

export default ProfileSetup;