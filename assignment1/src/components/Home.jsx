import React from "react";
import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../store/posts/action";
import { Link } from "react-router-dom";
import CreatePost from "./CreatePost";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts.getAll.success);
  const postsloading = useSelector((state) => state.posts.getAll.loading);
  return (
    <Stack className="App">
      <Flex justifyContent="center" alignItems="center" p="20px 0" gap="20px">
        <Heading fontSize="30px">Posts & Details App</Heading>
        <Button
          colorScheme="blue"
          cursor="pointer"
          p="0 30px"
          onClick={() => dispatch(getAllPosts())}
          isLoading={postsloading}
        >
          Fetch
        </Button>
      </Flex>
      <CreatePost />
      <Stack height="300px" borderWidth="1px" overflowY="scroll">
        {data.length > 0 ? (
          <Stack>
            {data.map((item) => {
              return (
                <Link
                  key={item.id}
                  style={{
                    color: "blue",
                    padding: "5px 0",
                    borderTopWidth: "1px",
                    borderBottomWidth: "1px",
                    cursor: "pointer",
                  }}
                  to={`/${item.id}`}
                >
                  {item.title}
                </Link>
              );
            })}
          </Stack>
        ) : (
          <Flex justifyContent="center" alignItems="center" height="100%">
            <Text fontSize="18px">Data will display here</Text>
          </Flex>
        )}
      </Stack>
    </Stack>
  );
};

export default Home;
