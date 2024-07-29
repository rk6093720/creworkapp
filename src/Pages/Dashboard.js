import { Box, Flex, Image, Input, InputGroup,Button, InputRightElement, Spacer, Spinner, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import { SearchIcon } from "@chakra-ui/icons";
import { MdAdd } from "react-icons/md";
import { FaShareAlt, FaFilter } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";
import { RiCalendarView, RiProgress2Line } from "react-icons/ri";
import { FcTodoList } from "react-icons/fc";
const Dashboard = () => {
  return (
    <Suspense
      fallback={
        <Spinner
          thickness="100px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      }
    >
      {/* main div  */}
      <Box
        sx={{
          width: "100%",
          height: "253px",
          gap: "16px",
          //   border: "1px solid blue",
          opacity: "0px",
        }}
      >
        <Flex
          sx={{
            width: "100%",
            height: "58px",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "100%",
              TextAlign: "start",
              fontFamily: "Barlow",
              fontSize: "48px",
              fontWeight: 600,
              lineHeight: "57.6px",
              textAlign: "left",
            }}
          >
            <Text>Good morning, Joe!</Text>
          </Box>
          <Box
            sx={{
              width: "50%",
              height: "100%",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "19.36px",
              textAlign: "end",
              padding: "20px",
            }}
          >
            <Text>Help & feedback ?</Text>
          </Box>
        </Flex>
        {/* second line  */}
        <Flex
          sx={{
            width: "100%",
            height: "123px",
            justifyContent: "space-between",
            // border: "1px solid red",
          }}
        >
          <Box
            sx={{
              width: "363.67px",
              height: "123px",
              padding: "16px 0px 0px 0px",
              gap: "10px",
              borderRadius: "8px",
              //   border: "1px solid red",
              opacity: "0px",
            }}
          >
            <Flex>
              <Box sx={{ width: "77px", height: "74px" }}>
                <Image
                  height={"100%"}
                  src="https://buddy.works/_next/image?url=%2Fblog%2Fthumbnails%2Ftags-workers-pipelines%2Ftags-workers-pipelines-cover.png&w=1920&q=75"
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  width: "244.67px",
                  height: "74px",
                  gap: "4px",
                  opacity: "0px",
                  //   border: "1px solid red",
                }}
              >
                <Text
                  sx={{
                    width: "100%",
                    height: "19px",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "19.36px",
                    textAlign: "left",
                  }}
                >
                  Introducing tags
                </Text>
                <Text
                  sx={{
                    width: "100%",
                    height: "51px",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "16.94px",
                    textAlign: "left",
                  }}
                >
                  Easily categorize and find your notes by adding tags. Keep
                  your workspace clutter-free and efficient.
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box
            sx={{
              width: "363.67px",
              height: "123px",
              padding: "16px 0px 0px 0px",
              gap: "10px",
              borderRadius: "8px",
              //   border: "1px solid red",
              opacity: "0px",
            }}
          >
            <Flex>
              <Box sx={{ width: "77px", height: "74px" }}>
                <Image
                  height={"100%"}
                  src="https://cdn.setapp.com/blog/images/share-notes-on-mac-1200-628.webp"
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  width: "244.67px",
                  height: "74px",
                  gap: "4px",
                  opacity: "0px",
                  //   border: "1px solid red",
                }}
              >
                <Text
                  sx={{
                    width: "100%",
                    height: "19px",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "19.36px",
                    textAlign: "left",
                  }}
                >
                  Share Notes Instantly
                </Text>
                <Text
                  sx={{
                    width: "100%",
                    height: "51px",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "16.94px",
                    textAlign: "left",
                  }}
                >
                  Effortlessly share your notes with others via email or link.
                  Enhance collaboration with quick sharing options.
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box
            sx={{
              width: "363.67px",
              height: "123px",
              padding: "16px 0px 0px 0px",
              gap: "10px",
              borderRadius: "8px",
              //   border: "1px solid red",
              opacity: "0px",
            }}
          >
            <Flex>
              <Box sx={{ width: "77px", height: "74px" }}>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWf1h1iDiHFMbE1sP0cAsY4bju1aZg8jrXnQ&s"
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  width: "244.67px",
                  height: "74px",
                  gap: "4px",
                  opacity: "0px",
                  //   border: "1px solid red",
                }}
              >
                <Text
                  sx={{
                    width: "100%",
                    height: "19px",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "19.36px",
                    textAlign: "left",
                  }}
                >
                  Access Anywhere
                </Text>
                <Text
                  sx={{
                    width: "100%",
                    height: "51px",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "16.94px",
                    textAlign: "left",
                  }}
                >
                  Sync your notes across all devices. Stay productive whether
                  you're on your phone, tablet, or computer.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
        {/* third box   */}
        <Flex sx={{ width: "100%", height: "40px", border: "1px solid grey" }}>
          <Box>
            <InputGroup>
              <Input placeholder="search" />
              <InputRightElement>
                <SearchIcon />
              </InputRightElement>
            </InputGroup>
          </Box>
          <Spacer />
          <Flex
            sx={{
              width: "693px",
              height: "40px",
              gap: "16px",
              opacity: "0px",
              // border: "1px solid green",
            }}
          >
            <Flex
              sx={{
                width: "541px",
                height: "40px",
                gap: "16px",
                opacity: "0px",
                // border: "1px solid black",
              }}
            >
              <Box
                sx={{
                  width: "162px",
                  height: "40px",
                  padding: "8px",
                  gap: "14px",
                  borderRadius: "4px",
                  opacity: "0px",
                  display: "flex",
                  flexDirection: "row",
                  // border: "1px solid teal",
                }}
              >
                <Text
                  sx={{
                    width: "94px",
                    height: "19px",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "19.36px",
                    textAlign: "left",
                  }}
                >
                  Calendar view
                </Text>
                <RiCalendarView
                  sx={{
                    width: "7px",
                    height: "4px",
                    top: "13.5px",
                    left: "8.5px",
                    gap: "0px",
                    border: "1.5px",
                    opacity: "0px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "162px",
                  height: "40px",
                  padding: "8px",
                  gap: "14px",
                  borderRadius: "4px",
                  opacity: "0px",
                  display: "flex",
                  flexDirection: "row",
                  // border: "1px solid teal",
                }}
              >
                <Text
                  sx={{
                    width: "84px",
                    height: "19px",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "19.36px",
                    textAlign: "left",
                  }}
                >
                  Automation
                </Text>
                <TbSettingsAutomation
                  sx={{
                    width: "7px",
                    height: "4px",
                    top: "13.5px",
                    left: "8.5px",
                    gap: "0px",
                    border: "1.5px",
                    opacity: "0px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "92px",
                  height: "40px",
                  padding: "8px",
                  gap: "14px",
                  borderRadius: "4px",
                  opacity: "0px",
                  display: "flex",
                  flexDirection: "row",
                  // border: "1px solid greenyellow",
                }}
              >
                <Text
                  sx={{
                    width: "44px",
                    height: "19px",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "19.36px",
                    textAlign: "left",
                  }}
                >
                  Filter
                </Text>
                <FaFilter
                  sx={{
                    width: "7px",
                    height: "4px",
                    top: "13.5px",
                    left: "8.5px",
                    gap: "0px",
                    border: "1.5px",
                    opacity: "0px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "98px",
                  height: "40px",
                  padding: "8px",
                  gap: "14px",
                  borderRadius: "4px",
                  opacity: "0px",
                  display: "flex",
                  flexDirection: "row",
                  // border: "1px solid greenyellow",
                }}
              >
                <Text
                  sx={{
                    width: "44px",
                    height: "19px",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "19.36px",
                    textAlign: "left",
                  }}
                >
                  Share
                </Text>
                <FaShareAlt
                  sx={{
                    width: "7px",
                    height: "4px",
                    top: "13.5px",
                    left: "8.5px",
                    gap: "0px",
                    border: "1.5px",
                    opacity: "0px",
                  }}
                />
              </Box>
            </Flex>
            <Button
              sx={{
                width: "100%",
                height: "40px",
                padding: "8px",
                gap: "8px",
                borderRadius: "8px ",
                border: " 1px 0px 0px 0px",
                opacity: "0px",
                textAlign: "center",
                backgroundColor: "#4C38C2",
                color: "white",
                // marginTop: "15px",
              }}
            >
              Create New Task
              <MdAdd />
            </Button>
          </Flex>
        </Flex>
        {/* fourth box  */}
        <Box
          sx={{
            width: "100%",
            height: "570px",
            padding: "16px",
            gap: "16px",
            borderRadius: "8px",
            opacity: "0px",
            marginTop: "5px",
            // border: "1px solid green",
          }}
        >
          <Flex padding={"2px"}>
            <Box
              sx={{
                width: "256.75px",
                height: "100vh",
                gap: "16px",
                opacity: "0px",
                // border: "1px solid red",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "24px",
                  gap: "16px",
                  opacity: "0px",
                  display: "flex",
                  flexDirection: "row",
                  padding:"2px",
                  justifyContent: "space-between",
                  // border: "1px solid red", 
                }}
              >
                <Text
                  sx={{
                    width: "126px",
                    height: "24px",
                    gap: "0px",
                    opacity: "0px",
                    textAlign: "start",
                  }}
                >
                  Todo
                </Text>
                <FcTodoList
                  sx={{
                    width: "24px",
                    height: "24px",
                    gap: "0px",
                    padding: "2px",
                    opacity: "0px",
                    fontSize: "15px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "231px",
                  padding: "14px",
                  gap: "16px",
                  borderRadius: "8px",
                  border: "1px",
                  opacity: "0px",
                }}
              ></Box>
              <Button
                sx={{
                  width: "100%",
                  height: "52px",
                  padding: "8px",
                  gap: "8px",
                  borderRadius: "8px ",
                  border: " 1px 0px 0px 0px",
                  opacity: "0px",
                  textAlign: "center",
                  backgroundColor: "#4C38C2",
                  color: "white",
                  marginTop: "15px",
                }}
              >
                Create New Task
                <MdAdd />
              </Button>
            </Box>
            <Box
              sx={{
                width: "256.75px",
                height: "100vh",
                gap: "16px",
                opacity: "0px",
                // border: "1px solid red", 
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "24px",
                  gap: "16px",
                  opacity: "0px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  // border: "1px solid red",
                }}
              >
                <Text
                  sx={{
                    width: "126px",
                    height: "24px",
                    gap: "0px",
                    opacity: "0px",
                    textAlign: "start",
                  }}
                >
                  In progress
                </Text>
                <RiProgress2Line
                  sx={{
                    width: "24px",
                    height: "24px",
                    gap: "0px",
                    opacity: "0px",
                    fontSize: "15px",
                    padding: "2px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "231px",
                  padding: "14px",
                  gap: "16px",
                  borderRadius: "8px",
                  border: "1px",
                  opacity: "0px",
                }}
              ></Box>
              <Button
                sx={{
                  width: "100%",
                  height: "52px",
                  padding: "8px",
                  gap: "8px",
                  borderRadius: "8px ",
                  border: " 1px 0px 0px 0px",
                  opacity: "0px",
                  textAlign: "center",
                  backgroundColor: "#4C38C2",
                  color: "white",
                  marginTop: "15px",
                }}
              >
                Create New Task
                <MdAdd />
              </Button>
            </Box>
            <Box
              sx={{
                width: "256.75px",
                height: "100vh",
                gap: "16px",
                opacity: "0px",
                // border: "1px solid red",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "24px",
                  gap: "16px",
                  opacity: "0px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  // border: "1px solid red",
                }}
              >
                <Text
                  sx={{
                    width: "126px",
                    height: "24px",
                    gap: "0px",
                    opacity: "0px",
                    textAlign: "start",
                  }}
                >
                  Under review
                </Text>
                <FcTodoList
                  sx={{
                    width: "24px",
                    height: "24px",
                    gap: "0px",
                    opacity: "0px",
                    padding: "2px",
                    fontSize: "15px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "231px",
                  padding: "14px",
                  gap: "16px",
                  borderRadius: "8px",
                  border: "1px",
                  opacity: "0px",
                }}
              ></Box>
              <Button
                sx={{
                  width: "100%",
                  height: "52px",
                  padding: "8px",
                  gap: "8px",
                  borderRadius: "8px ",
                  border: " 1px 0px 0px 0px",
                  opacity: "0px",
                  textAlign: "center",
                  backgroundColor: "#4C38C2",
                  color: "white",
                  marginTop: "15px",
                }}
              >
                Create New Task
                <MdAdd />
              </Button>
            </Box>
            <Box
              sx={{
                width: "256.75px",
                height: "100vh",
                gap: "16px",
                opacity: "0px",
                // border: "1px solid red",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "24px",
                  gap: "16px",
                  opacity: "0px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  // border: "1px solid red",
                }}
              >
                <Text
                  sx={{
                    width: "126px",
                    height: "24px",
                    gap: "0px",
                    opacity: "0px",
                    textAlign: "start",
                  }}
                >
                  Finished
                </Text>
                <FcTodoList
                  sx={{
                    width: "24px",
                    height: "24px",
                    gap: "0px",
                    padding:"2px",
                    opacity: "0px",
                    fontSize: "15px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "231px",
                  padding: "14px",
                  gap: "16px",
                  borderRadius: "8px",
                  border: "1px",
                  opacity: "0px",
                }}
              ></Box>
              <Button
                sx={{
                  width: "100%",
                  height: "52px",
                  padding: "8px",
                  gap: "8px",
                  borderRadius: "8px ",
                  border: " 1px 0px 0px 0px",
                  opacity: "0px",
                  textAlign: "center",
                  backgroundColor: "#4C38C2",
                  color: "white",
                  marginTop: "15px",
                }}
              >
                Create New Task
                <MdAdd />
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Suspense>
  );
}

export default Dashboard;
