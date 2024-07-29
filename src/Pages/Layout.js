import { Box, Flex } from '@chakra-ui/react';
import React, { lazy, Suspense } from 'react';
const Layout = () => {
    const SidebarComponent = lazy(()=>import("../Component/Sidebar"));
    const RouterComponent = lazy(()=> import("./Router"));
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Flex sx={{ width: "100%",height:"100vh" }}>
        <Box sx={{ width: "20%",height:"100%" }}>
          <SidebarComponent />
        </Box>
        <Box sx={{ width: "80%",height:"100%" }}>
          <RouterComponent />
        </Box>
      </Flex>
    </Suspense>
  );
}

export default Layout;
