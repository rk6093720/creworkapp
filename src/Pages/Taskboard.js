import { Spinner } from '@chakra-ui/react';
import React, { Suspense } from 'react';

const Taskboard = () => {
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
        board
    </Suspense>
  );
}

export default Taskboard;
