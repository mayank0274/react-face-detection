import React, { Children } from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Navigate, Outlet, useOutlet } from "react-router-dom";

export const PageContainer = ({ children }) => {
  const outlet = useOutlet();
  return (
    <Box display={"flex"}>
      <Sidebar />
      {children}
    </Box>
  );
};
