import { Flex, Heading, Spinner, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSinglePost } from "../store/posts/action";

const SinglePost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getSinglePost(id));
  }, []);
  const postDetails = useSelector((state) => state.posts.getSingle.success);
  const postLoading = useSelector((state) => state.posts.getSingle.loading);
  return (
    <>
      {postLoading === false ? (
        <Stack
          w="40%"
          m="50px auto"
          borderWidth="1px"
          borderRadius="10px"
          p="10px"
        >
          <Heading fontSize="30px">{postDetails.title}</Heading>
          <Text pt="20px">{postDetails.body}</Text>
        </Stack>
      ) : (
        <Flex justifyContent="center" alignItems="center" pt="100px">
          <Spinner />
        </Flex>
      )}
    </>
  );
};

export default SinglePost;
