import { Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../store/posts/action";

const CreatePost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const createLoading = useSelector((state) => state.posts.post.loading);
  const postCreation = () => {
    if (title === "") {
      alert("please write something to add");
    } else {
      dispatch(createPost(title));
    }
  };
  return (
    <Flex gap="30px" pb="20px">
      <Input
        type="text"
        placeholder="Type Something"
        onInput={(e) => setTitle(e.target.value)}
      />
      <Button
        colorScheme="blue"
        p="0 30px"
        onClick={postCreation}
        isLoading={createLoading}
      >
        Add To List
      </Button>
    </Flex>
  );
};

export default CreatePost;
