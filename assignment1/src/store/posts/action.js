import axios from "axios";
import { GET_SINGLE_POST_LOADING } from "./actionTypes";
import { GET_SINGLE_POST_ERROR } from "./actionTypes";
import { CREATE_POST_SUCCESS } from "./actionTypes";
import { CREATE_POST_ERROR } from "./actionTypes";
import { CREATE_POST_LOADING } from "./actionTypes";
import { GET_SINGLE_POST_SUCCESS } from "./actionTypes";
import { GET_POSTS_LOADING } from "./actionTypes";
import { GET_POSTS_ERROR } from "./actionTypes";
import { GET_POSTS_SUCCESS } from "./actionTypes";

export const getAllPosts = () => async (dispatch) => {
  dispatch({
    type: GET_POSTS_LOADING,
    payload: true,
  });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_POSTS_ERROR,
      payload: e,
    });
  } finally {
    dispatch({
      type: GET_POSTS_LOADING,
      payload: false,
    });
  }
};

export const getSinglePost = (id) => async (dispatch) => {
  dispatch({
    type: GET_SINGLE_POST_LOADING,
    payload: true,
  });
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    dispatch({
      type: GET_SINGLE_POST_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_SINGLE_POST_ERROR,
      payload: e,
    });
  } finally {
    dispatch({
      type: GET_SINGLE_POST_LOADING,
      payload: false,
    });
  }
};

export const createPost = (postTitle) => async (dispatch) => {
  dispatch({
    type: CREATE_POST_LOADING,
    payload: true,
  });
  console.log(postTitle);
  try {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
      title: postTitle,
    });
    dispatch({
      type: CREATE_POST_SUCCESS,
      payload: res.data,
    });
    dispatch(getAllPosts());
  } catch (e) {
    dispatch({
      type: CREATE_POST_ERROR,
      payload: e,
    });
  } finally {
    dispatch({
      type: CREATE_POST_LOADING,
      payload: false,
    });
  }
};
