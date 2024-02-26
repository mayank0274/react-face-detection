import React from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import BUTTERFLY_ICON from "../../assets/butterfly.png";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Box
      display={"flex"}
      flexDir={{
        base: "row-reverse",
        sm: "row-reverse",
        md: "column",
        lg: "column",
      }}
      justifyContent={"space-between"}
      alignItems={"center"}
      backgroundColor={"#ffffff"}
      height={{ base: "60px", sm: "60px", md: "100vh", lg: "100vh" }}
      width={{ base: "100vw", sm: "100vw", md: "4%", lg: "4%" }}
      padding={"10px"}
      position={{
        base: "fixed",
        sm: "fixed",
        md: "static",
        lg: "static",
      }}
      bottom={0}
      zIndex={999}
    >
      <Box
        as="section"
        display={"flex"}
        flexDir={{ base: "row", sm: "row", md: "column", lg: "column" }}
        justifyContent={{
          base: "space-between",
          sm: "space-between",
          md: "normal",
          lg: "normal",
        }}
        gap={"20px"}
        h={{ base: "70%", sm: "70%", md: "30%", lg: "30%" }}
        w={{ base: "80%", sm: "80%" }}
      >
        <Link to={"#"}>
          <Image
            src={BUTTERFLY_ICON}
            alt="logo_butterly"
            width={"80%"}
            marginLeft={"5px"}
            display={{ base: "none", sm: "none", md: "block", lg: "block" }}
          />
        </Link>
        <Button
          borderRadius={"6px"}
          textAlign={"center"}
          isActive={pathname == "/search"}
          _active={{
            background: "#3e2ede",
          }}
          backgroundColor={"transparent"}
        >
          <Link to="#">
            <IoSearch
              size={24}
              color={pathname == "/search" ? "#fff" : "gray"}
            />
          </Link>
        </Button>
      </Box>

      <Box
        as="section"
        display={"flex"}
        flexDir={{ base: "row", sm: "row", md: "column", lg: "column" }}
        justifyContent={{
          base: "space-between",
          sm: "space-between",
          md: "normal",
          lg: "normal",
        }}
        gap={"20px"}
        h={"70%"}
        w={{ base: "80%", sm: "80%" }}
      >
        <Button
          borderRadius={"6px"}
          textAlign={"center"}
          isActive={pathname == "/home"}
          _active={{
            background: "#3e2ede",
          }}
          backgroundColor={"transparent"}
        >
          <Link to="#">
            <AiFillHome
              size={20}
              color={pathname == "/home" ? "#fff" : "gray"}
            />
          </Link>
        </Button>

        <Button
          borderRadius={"6px"}
          isActive={pathname == "/reports"}
          _active={{
            background: "#3e2ede",
          }}
          backgroundColor={"transparent"}
        >
          <Link to={"#"}>
            <FaRegNewspaper
              size={22}
              color={pathname == "/reports" ? "#fff" : "gray"}
            />
          </Link>
        </Button>

        <Button
          borderRadius={"6px"}
          textAlign={"center"}
          isActive={pathname == "/transactions"}
          _active={{
            background: "#3e2ede",
          }}
          backgroundColor={"transparent"}
        >
          <Link to={"#"}>
            <CiViewList
              size={22}
              color={pathname == "/transactions" ? "#fff" : "gray"}
            />
          </Link>
        </Button>

        <Button
          borderRadius={"6px"}
          textAlign={"center"}
          isActive={pathname == "/account"}
          _active={{
            background: "#3e2ede",
          }}
          backgroundColor={"transparent"}
        >
          <Link to={"#"}>
            <FaUser
              size={21}
              color={pathname == "/account" ? "#fff" : "gray"}
            />
          </Link>
        </Button>
      </Box>

      <Box
        as="section"
        display={"flex"}
        flexDir={{ base: "row", sm: "row", md: "column", lg: "column" }}
        gap={"20px"}
        h={"15%"}
        position={{ base: "fixed", sm: "fixed", md: "static", lg: "static" }}
        top={"1%"}
        right={"2%"}
      >
        <Button
          borderRadius={"6px"}
          textAlign={"center"}
          isActive={pathname == "/notifications"}
          _active={{
            background: "#3e2ede",
          }}
          backgroundColor={"transparent"}
          position={"relative"}
        >
          <Link to={"#"}>
            <IoNotificationsOutline
              size={22}
              color={pathname == "/notifications" ? "#fff" : "gray"}
            />
          </Link>

          <Box
            width={"6px"}
            height={"6px"}
            bg={"#85afff"}
            position={"absolute"}
            right={3}
            top={1}
            borderRadius={"50%"}
            display={pathname == "/notifications" && "none"}
          ></Box>
        </Button>

        <Box
          // backgroundColor="#3e2ede"
          borderRadius={"5px"}
          textAlign={"center"}
          display={{ base: "none", sm: "none", md: "block", lg: "block" }}
        >
          <Link>
            <FiLogOut
              size={22}
              color="gray"
              style={{
                padding: "3px",
                margin: "auto",
              }}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
