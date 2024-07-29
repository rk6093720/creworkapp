 import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react';
 import {
   BellIcon,
   SunIcon,
   ArrowRightIcon,
 } from "@chakra-ui/icons";
 import { MdHome, MdAnalytics, MdOutlineSettings, MdAdd } from "react-icons/md";
import { CiViewBoard } from "react-icons/ci";
import { BsMicrosoftTeams } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';


 const Sidebar = () => {
   return (
     <Suspense fallback={<h1>Loading ....</h1>}>
       <Box
         sx={{
           width: "285px",
           height: "1024px",
           padding: "5px",
           border: "0px 1px 0px 0px",
           justify: "space-between",
           opacity: "0px",
           marginLeft: "5px",
         }}
       >
         <Box
           sx={{
             width: "230px",
             height: "363px",
             gap: "2px",
             //  border: "1px solid black",
           }}
         >
           <Box
             sx={{
               width: "100%",
               height: "70px",
               gap: "2px",
               //  border: "1px solid black",
             }}
           >
             <Flex
               sx={{
                 width: "100%",
                 height: "31px",
                 gap: "3px",
                 //  border: "1px solid brown",
               }}
             >
               <Box sx={{ width: "30px", height: "30px" }}>
                 <Image
                   sx={{ width: "30px", height: "30px" }}
                   src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                   alt=""
                 />
               </Box>
               <Box
                 sx={{
                   fontFamily: "Inter",
                   fontSize: "24px",
                   fontWeight: "500",
                   lineHeight: "24.2px",
                   textAlign: "left",
                   // marginRight:"20px"
                 }}
               >
                 <Text>Joe Gardner</Text>
               </Box>
             </Flex>
             <Flex
               sx={{
                 width: "100%",
                 height: "31px",
                 gap: "3px",
                 marginTop: "5px",
                 justifyContent: "space-between",
                 //  border: "1px solid brown",
               }}
             >
               <Box
                 sx={{
                   display: "flex",
                   flexDirection: "row",
                   width: "112px",
                   height: "24px",
                   gap: "20px",
                   opacity: "0px",
                   padding: "10px",
                 }}
               >
                 <Flex>
                   <BellIcon />
                 </Flex>
                 <Flex>
                   <SunIcon />
                 </Flex>
                 <Flex>
                   <ArrowRightIcon />
                 </Flex>
               </Box>
               <Box
                 sx={{
                   width: "69px",
                   height: "30px",
                   padding: "2px",
                   gap: "14px",
                   borderRadius: "4px",
                   opacity: "0px",
                   //  border:"1px solid red"
                 }}
               >
                 <Button
                   sx={{
                     width: "100%",
                     height: "19px",
                   }}
                 >
                   Logout
                 </Button>
               </Box>
             </Flex>
           </Box>
           <Box
             sx={{
               width: "100%",
               height: "270px",
               gap: "20px",
               marginTop: "20px",
               //  border: "1px solid blue",
             }}
           >
             <Link
               _hover={{ bg: "grey" }}
               border="1px solid grey"
               color="black"
               to="/dashboard"
             >
               <Box
                 sx={{
                   width: "100%",
                   height: "40px",
                   padding: "8px",
                   gap: "14px",
                   borderRadius: "4px",
                   //  border: "1px solid red",
                   opacity: "0px",
                 }}
                 _hover={{ backgroundColor: "grey" }}
                 color="black"
               >
                 <Flex>
                   <MdHome
                     sx={{
                       width: "16px",
                       height: "10px",
                       top: "11px",
                       left: " 4px",
                       gap: " 0px",
                       padding: "1px",
                       border: "1.5px",
                       opacity: "0px",

                       //  border: "1px solid red",
                     }}
                   />
                   <Text
                     sx={{
                       width: "56px",
                       height: "24px",
                       gap: "0px",
                       opacity: " 0px",
                       //  border: "1px solid red",
                       fontFamily: "Inter",
                       fontSize: "20px",
                       fontWeight: "400",
                       lineHeight: "24.2px",
                       textAlign: "left",
                       marginLeft: "2px",
                     }}
                   >
                     Home
                   </Text>
                 </Flex>
               </Box>
             </Link>
             <Box
               sx={{
                 width: "100%",
                 height: "40px",
                 padding: "8px",
                 gap: "14px",
                 borderRadius: "4px",
                 //  border: "1px solid red",
                 opacity: "0px",
               }}
             >
               <Flex>
                 <MdOutlineSettings
                   sx={{
                     width: "26px",
                     height: "10px",
                     top: "11px",
                     left: " 4px",
                     gap: " 0px",
                     fontSize: "20px",
                     padding: "1px",
                     border: "1.5px",
                     opacity: "0px",

                     //  border: "1px solid red",
                   }}
                 />
                 <Text
                   sx={{
                     width: "66px",
                     height: "24px",
                     gap: "0px",
                     opacity: " 0px",
                     //  border: "1px solid red",
                     fontFamily: "Inter",
                     fontSize: "20px",
                     fontWeight: "400",
                     lineHeight: "24.2px",
                     textAlign: "left",
                   }}
                 >
                   Setting
                 </Text>
               </Flex>
             </Box>
             <Link  to="/taskboard">
               <Box
                 sx={{
                   width: "100%",
                   height: "40px",
                   padding: "8px",
                   gap: "14px",
                   borderRadius: "4px",
                   //  border: "1px solid red",
                   opacity: "0px",
                 }}
                 _hover={{ backgroundColor: "grey" }}
                 color="black"
               >
                 <Flex>
                   <CiViewBoard
                     sx={{
                       width: "16px",
                       height: "10px",
                       top: "11px",
                       left: " 4px",
                       gap: " 0px",
                       padding: "1px",
                       border: "1.5px",
                       opacity: "0px",
                       //  border: "1px solid red",
                     }}
                   />
                   <Text
                     sx={{
                       width: "56px",
                       height: "24px",
                       gap: "0px",
                       opacity: " 0px",
                       //  border: "1px solid red",
                       fontFamily: "Inter",
                       fontSize: "20px",
                       fontWeight: "400",
                       lineHeight: "24.2px",
                       textAlign: "left",
                     }}
                   >
                     Board
                   </Text>
                 </Flex>
               </Box>
             </Link>
             <Box
               sx={{
                 width: "100%",
                 height: "40px",
                 padding: "8px",
                 gap: "14px",
                 borderRadius: "4px",
                 //  border: "1px solid red",
                 opacity: "0px",
               }}
             >
               <Flex>
                 <BsMicrosoftTeams
                   sx={{
                     width: "16px",
                     height: "10px",
                     top: "11px",
                     left: " 4px",
                     gap: " 0px",
                     padding: "1px",
                     border: "1.5px",
                     opacity: "0px",

                     //  border: "1px solid red",
                   }}
                 />
                 <Text
                   sx={{
                     width: "56px",
                     height: "24px",
                     gap: "0px",
                     opacity: " 0px",
                     //  border: "1px solid red",
                     fontFamily: "Inter",
                     fontSize: "20px",
                     fontWeight: "400",
                     lineHeight: "24.2px",
                     textAlign: "left",
                   }}
                 >
                   Teams
                 </Text>
               </Flex>
             </Box>
             <Box
               sx={{
                 width: "100%",
                 height: "40px",
                 padding: "8px",
                 gap: "14px",
                 borderRadius: "4px",
                 //  border: "1px solid red",
                 opacity: "0px",
               }}
             >
               <Flex>
                 <MdAnalytics
                   sx={{
                     width: "16px",
                     height: "10px",
                     top: "11px",
                     left: " 4px",
                     gap: " 0px",
                     padding: "1px",
                     border: "1.5px",
                     opacity: "0px",

                     //  border: "1px solid red",
                   }}
                 />
                 <Text
                   sx={{
                     width: "86px",
                     height: "24px",
                     gap: "0px",
                     opacity: " 0px",
                     //  border: "1px solid red",
                     fontFamily: "Inter",
                     fontSize: "20px",
                     fontWeight: "400",
                     lineHeight: "24.2px",
                     textAlign: "left",
                   }}
                 >
                   Analytics
                 </Text>
               </Flex>
             </Box>
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
           <Flex
             sx={{
               width: "100%",
               height: "61px",
               gap: "3px",
               opacity: "0px",
               marginTop: "100px",
               border: "1px solid black",
               textAlign: "start",
             }}
           >
             <Flex
               sx={{
                 width: "40px",
                 height: "100%",
                 gap: "4px",
                 opacity: "0px",
                 //  border: "1px solid red",
                 padding: "5px",
               }}
             >
               <FaDownload fontSize={"44px"} />
             </Flex>
             <Box
               sx={{
                 width: "189px",
                 height: "100%",
                 gap: "4px",
                 opacity: "0px",
                 //  border: "1px solid red",
               }}
             >
               <Box
                 sx={{
                   width: "100%",
                   //  height:"100%",
                   gap: "4px",
                   opacity: "0px",
                   //  border: "1px solid red",
                 }}
               >
                 Download the app
               </Box>
               <Box
                 sx={{
                   width: "100%",
                   gap: "0px",
                   opacity: "0px",
                   //  border: "1px solid red",
                 }}
               >
                 Get the full experience{" "}
               </Box>
             </Box>
           </Flex>
         </Box>
       </Box>
     </Suspense>
   );
 }
 
 export default Sidebar;
 