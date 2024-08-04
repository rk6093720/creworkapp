import React, { useRef, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  FormControl,
  FormLabel,
  InputGroup,
  Button,
  InputRightElement,
  Spacer,
  Spinner,
  useToast,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { RiProgress2Line } from "react-icons/ri";
import { FcTodoList } from "react-icons/fc";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Dummy data for tasks
const initialTasks = {
  todo: [
    {
      id: "1",
      title: "Task 1",
      description: "Description for Task 1",
      priority: "Medium",
      deadline: "2024-07-30",
    },
    {
      id: "2",
      title: "Task 2",
      description: "Description for Task 2",
      priority: "High",
      deadline: "2024-08-05",
    },
  ],
  "in-progress": [
    {
      id: "3",
      title: "Task 3",
      description: "Description for Task 3",
      priority: "Low",
      deadline: "2024-08-10",
    },
  ],
  "under-review": [
    {
      id: "4",
      title: "Task 4",
      description: "Description for Task 4",
      priority: "Urgent",
      deadline: "2024-08-15",
    },
  ],
  completed: [
    {
      id: "5",
      title: "Task 5",
      description: "Description for Task 5",
      priority: "Medium",
      deadline: "2024-07-20",
    },
  ],
};

const Task = ({ task, index, columnId, moveTask }) => {
  const [, ref] = useDrag({
    type: "TASK",
    item: { id: task.id, columnId, index },
  });

  const [, drop] = useDrop({
    accept: "TASK",
    hover: (item) => {
      if (item.columnId !== columnId) {
        moveTask(item.id, item.columnId, columnId);
        item.columnId = columnId;
      }
    },
  });

  return (
    <Box
      ref={(node) => ref(drop(node))}
      padding="8px"
      marginBottom="8px"
      borderRadius="8px"
      bg="white"
      shadow="md"
    >
      <Text fontWeight="bold">{task.title}</Text>
      <Text>{task.description}</Text>
      <Text>Priority: {task.priority}</Text>
      <Text>Deadline: {task.deadline}</Text>
    </Box>
  );
};

const Column = ({ columnId, tasks, moveTask }) => {
  const [, drop] = useDrop({
    accept: "TASK",
  });
   const { isOpen, onOpen, onClose } = useDisclosure();
   const btnref = useRef();

  return (
    <Box
      ref={drop}
      width="256.75px"
      height="100vh"
      padding="16px"
      borderRadius="8px"
      border="1px"
      bg="gray.100"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginBottom="8px"
      >
        <Text fontSize="lg">{columnId.replace("-", " ").toUpperCase()}</Text>
        {columnId === "todo" && <FcTodoList />}
        {columnId === "in-progress" && <RiProgress2Line />}
      </Flex>
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          task={task}
          index={index}
          columnId={columnId}
          moveTask={moveTask}
        />
      ))}
      <Button
        width="100%"
        height="52px"
        marginTop="15px"
        bg="#4C38C2"
        color="white"
        borderRadius="8px"
        leftIcon={<MdAdd />}
        ref={btnref}
        colorScheme="teal"
        onClick={onOpen}
      >
        Create New Task
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnref}
        sx={{ width: "622px", height: "411px", gap: "27px", opacity: "0px" }}
      >
        <DrawerOverlay />
        <DrawerContent
          sx={{
            width: "622px",
            height: "700px",
            gap: "27px",
            opacity: "0px",
          }}
        >
          <DrawerCloseButton />
          <DrawerBody
            sx={{
              width: "622px",
              height: "411px",
              gap: "38px",
              opacity: "0px",
            }}
          >
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input sx={{ width: "250px" }} placeholder="Title..." />
            </FormControl>
            <FormControl>
              <FormLabel>Status</FormLabel>
              <Input sx={{ width: "250px" }} placeholder="Status..." />
            </FormControl>
            <FormControl>
              <FormLabel>Priority</FormLabel>
              <Input sx={{ width: "250px" }} placeholder="Priority..." />
            </FormControl>
            <FormControl>
              <FormLabel>DeadLine</FormLabel>
              <Input sx={{ width: "250px" }} placeholder="DeadLine..." />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input sx={{ width: "250px" }} placeholder="Description..." />
            </FormControl>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

const Taskboard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const toast = useToast();

  const moveTask = (taskId, sourceColumnId, destinationColumnId) => {
    const sourceTasks = Array.from(tasks[sourceColumnId]);
    const destTasks = Array.from(tasks[destinationColumnId]);

    // Find the task to be moved
    const [movedTask] = sourceTasks.splice(
      sourceTasks.findIndex((task) => task.id === taskId),
      1
    );

    // Add the task to the destination column
    destTasks.push(movedTask);

    // Update state
    setTasks({
      ...tasks,
      [sourceColumnId]: sourceTasks,
      [destinationColumnId]: destTasks,
    });

    toast({
      title: "Task moved",
      description: `${movedTask.title} has been moved to ${destinationColumnId
        .replace("-", " ")
        .toUpperCase()}.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Flex padding="16px" gap="16px" height="570px">
        {Object.keys(tasks).map((columnId) => (
          <Column
            key={columnId}
            columnId={columnId}
            tasks={tasks[columnId]}
            moveTask={moveTask}
          />
        ))}
      </Flex>
    </DndProvider>
  );
};

export default Taskboard;
