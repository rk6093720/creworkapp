import { Spinner } from '@chakra-ui/react';
import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
const Router = () => {
  const Taskboard = lazy(()=> import("./Taskboard"));
  const Home = lazy(()=>import("./Dashboard"))
  return (
    <div>
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
        <Routes>
          <Route path="/taskboard" element={<Taskboard />} />
          <Route path='/dashboard' element={<Home/>}/>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Router;
