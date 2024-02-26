import React from "react";
import { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  UnorderedList,
  ListItem,
  Text,
  Image,
} from "@chakra-ui/react";
import ACCESSS_DENIED_IMG from "../assets/access-denied.jpg";

const AccessDenied = () => {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      gap={"15px"}
      justifyContent={"center"}
      alignItems={"center"}
      width={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
    >
      <Image
        src={ACCESSS_DENIED_IMG}
        alt="access denied"
        width={"60%"}
        borderRadius={"10px"}
      />
      <Text color={"orangered"} textAlign={"center"}>
        Access to webcam denied or check your webcam configuration
      </Text>
    </Box>
  );
};

export const VerifyIdentity = ({ setIsVerified }) => {
  const videoRef = useRef(null);
  const [accessError, setAccessError] = useState(false);
  const [detectingFace, setDetectingFace] = useState(false);
  const [faceDetectSuccess, setFaceDetectSuccess] = useState(false);
  const [loadingModels, setLoadingModels] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const FACE_SCORE_THERSHOLD = 0.65;
  const navigate = useNavigate();

  // access user webcam
  const accessUserWebCam = async () => {
    try {
      const media = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = media;
      }
    } catch (error) {
      console.log(error);
      setAccessError(true);
    }
  };

  // load face api models
  const loadFaceApiModels = () => {
    setLoadingModels(true);
    console.log("loading models...");
    Promise.all([
      // THIS FOR FACE DETECT AND LOAD FROM YOU PUBLIC/MODELS DIRECTORY
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ])
      .then(() => {
        setLoadingModels(false);
        console.log("loading model completed...");
        let score = 0;
        let intervalId = setInterval(async () => {
          setDetectingFace(true);
          score = await detectFace();
          if (score > FACE_SCORE_THERSHOLD) {
            clearInterval(intervalId);
            setDetectingFace(false);
            setErrorMsg("");
            // navigate to home page flag
            setFaceDetectSuccess(true);
            setIsVerified(true);
          } else if (!score || score < FACE_SCORE_THERSHOLD) {
            setErrorMsg(
              "Face not clearly visible , make sure you are properly visible inside imagebox or adjust your webcam"
            );
          }
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // detect face
  async function detectFace() {
    const detections = await faceapi.detectSingleFace(
      videoRef.current,
      new faceapi.TinyFaceDetectorOptions()
    );

    return detections?._score;
  }

  // modal controls
  const { isOpen, onOpen } = useDisclosure();

  // load models and access webcam on initial render
  useEffect(() => {
    accessUserWebCam();
    loadFaceApiModels();
    onOpen();
  }, []);

  // navigate to home page
  useEffect(() => {
    let timeOutId;

    if (faceDetectSuccess) {
      timeOutId = setTimeout(() => {
        navigate("/home");
      }, 2500);
    }

    return () => {
      clearTimeout(timeOutId);
    };
  }, [faceDetectSuccess]);

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Modal
        isOpen={isOpen}
        onClose={() => {
          return;
        }}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent maxW={{ base: "90%", sm: "90%", md: "60%", lg: "60%" }}>
          <ModalHeader>Welcome To XYZ Banking Portal</ModalHeader>
          <ModalBody
            w={"100%"}
            display={"flex"}
            flexDir={{ base: "column", sm: "column", md: "row", lg: "row" }}
            justifyContent={"space-between"}
          >
            <Box width={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}>
              <Text fontSize={"20px"} fontWeight={500}>
                Follow these instructions for a seamless banking experience
              </Text>
              <UnorderedList gap={4}>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
            </Box>
            {!accessError && (
              <Box
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"10px"}
                width={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
              >
                <video
                  width={"300px"}
                  ref={videoRef}
                  crossOrigin="anonymous"
                  autoPlay
                  className={`${faceDetectSuccess && "detect-face-success"}`}
                ></video>

                {errorMsg && (
                  <Text
                    color={"orangered"}
                    fontSize={"12px"}
                    textAlign={"center"}
                  >
                    {errorMsg}
                  </Text>
                )}
                {loadingModels && <Text>loading models...</Text>}

                {detectingFace && <Text>detecting face...</Text>}

                {faceDetectSuccess && (
                  <Text color={"green"}>
                    Face detected successfully!! redirecting to home page
                  </Text>
                )}
              </Box>
            )}

            {accessError && <AccessDenied />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};
