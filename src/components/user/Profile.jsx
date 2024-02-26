import React from "react";
import {
  Avatar,
  Box,
  Text,
  List,
  ListItem,
  Divider,
  Button,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

export const Profile = () => {
  return (
    <Box
      backgroundColor="#fafafa"
      display={"flex"}
      flexDir={"column"}
      gap={"15px"}
      height={{
        base: "max-content",
        sm: "max-content",
        md: "100vh",
        lg: "100vh",
      }}
      width={{ base: "100%", sm: "100%", md: "40%", lg: "24%" }}
      p={"30px"}
      data-section="profile-main-container"
    >
      <Box
        as="section"
        display={"flex"}
        alignItems={"center"}
        gap={"20px"}
        data-section="personal-info"
      >
        <Avatar
          src="https://randomuser.me/api/portraits/men/81.jpg"
          name="Mike"
          size={"lg"}
        />
        <Box>
          <Text color={"#2a2a2a"} fontSize={"25px"} fontWeight={"bold"}>
            Hi, Mike
          </Text>
          <Text fontSize={"12px"} color={"gray"}>
            welcome back
          </Text>
        </Box>
      </Box>

      <Box
        as="section"
        display={"flex"}
        flexDir={"column"}
        gap={"12px"}
        data-section="profile-quick-stats"
      >
        <Text fontWeight={"bold"}>Today</Text>

        <Box>
          <Text
            color={"#2a2a2a"}
            fontSize={{ base: "40px", sm: "40px", md: "25px", lg: "25px" }}
            fontWeight={"bold"}
          >
            $19,892
          </Text>
          <Text fontSize={"12px"} color={"gray"} textTransform={"capitalize"}>
            Account balance
          </Text>
        </Box>

        <Box
          display="flex"
          flexDir={{ base: "row", sm: "row", md: "column", lg: "column" }}
          gap={"12px"}
        >
          <Box>
            <Text
              color={"#2a2a2a"}
              fontSize={{ base: "19px", sm: "40px", md: "19px", lg: "19px" }}
              fontWeight={"bold"}
            >
              $4,000
            </Text>
            <Text fontSize={"12px"} color={"gray"} textTransform={"capitalize"}>
              Year-to-date-contributions
            </Text>
          </Box>

          <Box>
            <Text
              color={"#2a2a2a"}
              fontSize={{ base: "19px", sm: "40px", md: "19px", lg: "19px" }}
              fontWeight={"bold"}
            >
              $1,892
            </Text>
            <Text fontSize={"12px"} color={"gray"} textTransform={"capitalize"}>
              Account balance
            </Text>
          </Box>
        </Box>

        <Button
          backgroundColor="#3e2ede"
          color="#fff"
          width={{ base: "100%", sm: "80%", md: "43%", lg: "43%" }}
          fontSize={"14px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"3px"}
          sx={{
            _hover: {
              backgroundColor: "#3e2ede",
            },
          }}
        >
          <Text> I want to</Text>
          <FaChevronDown size={15} color="#fff" />
        </Button>
      </Box>

      <Box data-section="recent-transactions">
        <Text fontWeight={"bold"}>Recent transactions</Text>

        <List spacing={3} width={"max-content"}>
          <ListItem p={"10px 0"}>
            <Text
              color={"gray"}
              fontSize={{ base: "13px", sm: "15px", md: "11px", lg: "11px" }}
            >
              2023-23-12
            </Text>
            <Text
              fontSize={{
                base: "15.5px",
                sm: "18px",
                md: "13px",
                lg: "13px",
              }}
              fontWeight={500}
            >
              Withdrawal transfered to bank XXXX-8261
            </Text>
            <Divider h={"10px"} />
          </ListItem>

          <ListItem p={"10px 0"}>
            <Text
              color={"gray"}
              fontSize={{ base: "13px", sm: "15px", md: "11px", lg: "11px" }}
            >
              2023-23-12
            </Text>
            <Text
              fontSize={{
                base: "15.5px",
                sm: "18px",
                md: "13px",
                lg: "13px",
              }}
              fontWeight={500}
            >
              Withdrawal transfered to bank XXXX-8261
            </Text>
            <Divider h={"10px"} />
          </ListItem>

          <ListItem p={"10px 0"}>
            <Text
              color={"gray"}
              fontSize={{ base: "13px", sm: "15px", md: "11px", lg: "11px" }}
            >
              2023-23-12
            </Text>
            <Text
              fontSize={{
                base: "15.5px",
                sm: "18px",
                md: "13px",
                lg: "13px",
              }}
              fontWeight={500}
            >
              Withdrawal transfered to bank XXXX-8261
            </Text>
            <Divider height={"10px"} />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
