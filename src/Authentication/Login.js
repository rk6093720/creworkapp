 import { Box, Button, Input, InputGroup, InputRightElement, Spinner, Text } from '@chakra-ui/react';
import React, { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
 
 const Login = () => {
   const [show, setShow] = useState(false);
   const handleClick = () => setShow(!show);
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
       <Box        
        sx={{
           width: "648px",
           height: "450px",
           //   border: "1px solid red",
           marginLeft: "356px",
           padding: "60px",
           boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
           //   marginTop: "90px",
         }}
       >
         <Box
           sx={{
             width: "528px",
             height: "58px",
             // border: "1px solid red",
           }}
         >
           <Text
             sx={{
               fontFamily: "barlow",
               fontWeight: "600",
               fontSize: "48px",
               lineHeight: "57.6px",
               textAlign: "center",
             }}
           >
             Welcome to{" "}
             <span
               sx={{
                 fontFamily: "barlow",
                 fontWeight: "600",
                 fontSize: "48px",
                 lineHeight: "57.6px",
                 textAlign: "center",
                 background: "#2D2D2D",
               }}
             >
               WorkFlo!
             </span>
           </Text>
         </Box>
         <Box
           sx={{
             width: "528px",
             height: "240px",
             gap: "42px",
             marginTop: "40px",
             opacity: "0px",
              // border: "1px solid green",
           }}
         >
           <form>
             <Box
               sx={{
                 width: "100%",
                 height: "156px",
                 gap: "24px",
                 // border: "1px solid green",
               }}
             >
               <Input
                 type="email"
                 sx={{
                   width: "528px",
                   height: "56px",
                   padding: "16px 12px 16px 12px",
                   gap: "10px",
                   borderRadius: "8px",
                   opacity: "0px",
                 }}
                 placeholder="Your email"
               />
               <InputGroup size="md">
                 <Input
                   sx={{
                     width: "528px",
                     height: "56px",
                     padding: "16px 12px 16px 12px",
                     gap: "10px",
                     marginTop: "25px",
                     borderRadius: "8px",
                     opacity: "0px",
                   }}
                   type={show ? "text" : "password"}
                   placeholder="Enter password"
                 />
                 <InputRightElement width="4.5rem">
                   <Button
                     h="1.75rem"
                     size="sm"
                     marginTop={"65px"}
                     onClick={handleClick}
                   >
                     {show ? "Hide" : "Show"}
                   </Button>
                 </InputRightElement>
               </InputGroup>
             </Box>
             <Button
               sx={{
                 width: "100%",
                 height: "52px",
                 padding: "8px",
                 gap: "10px",
                 borderRadius: "8px",
                 opacity: "0px",
                 marginTop: "25px",
                 backgroundColor: "#4B36CC",
                 color: "white",
               }}
               type="submit"
             >
               Signup
             </Button>
           </form>
         </Box>
         <Box
           sx={{
             width: "444px",
             height: "24px",
             gap: "0px",
             marginTop:"-20px",
             margin: "auto",
             opacity: "0px",
           }}
         >
           <Text
             sx={{
               fontFamily: "Inter",
               fontSize: "20px",
               fontWeight: "400",
               lineHeight: "24.2px",
               textAlign: "center",
             }}
           >
             you don't have an account?
             <Link to={"/signup"}>SignUp</Link>
           </Text>
         </Box>
       </Box>
     </Suspense>
   );
 }
 
 export default Login;
 