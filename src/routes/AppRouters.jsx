import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";

const Registration = React.lazy(() => import("../views/registration"));

const AppRoutes = () => {
  return (
    <React.Suspense
      fallback={
        <Box sx={{ height: "100vh", display: "grid", placeContent: "center" }}>
          <CircularProgress />
        </Box>
      }
    >
      <Routes>
        <Route path={`/`} element={<Registration />} />
      </Routes>
    </React.Suspense>
  );
};

export default AppRoutes;