import { GET_POSTS_ERROR } from "./actionTypes";
import { GET_SINGLE_POST_LOADING } from "./actionTypes";
import { CREATE_POST_SUCCESS } from "./actionTypes";
import { CREATE_POST_ERROR } from "./actionTypes";
import { CREATE_POST_LOADING } from "./actionTypes";
import { GET_SINGLE_POST_ERROR } from "./actionTypes";
import { GET_SINGLE_POST_SUCCESS } from "./actionTypes";
import { GET_POSTS_LOADING } from "./actionTypes";
import { GET_POSTS_SUCCESS } from "./actionTypes";

const initialState = {
  getAll: {
    success: [],
    loading: false,
    error: false,
  },
  getSingle: {
    success: {},
    loading: false,
    error: false,
  },
  post: {
    success: false,
    loading: false,
    error: false,
  },
};

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        getAll: {
          ...state.getAll,
          success: payload,
        },
      };
    }
    case GET_POSTS_LOADING: {
      return {
        ...state,
        getAll: {
          ...state.getAll,
          loading: payload,
        },
      };
    }
    case GET_POSTS_ERROR: {
      return {
        ...state,
        getAll: {
          ...state.getAll,
          error: payload,
        },
      };
    }
    case GET_SINGLE_POST_SUCCESS: {
      return {
        ...state,
        getSingle: {
          ...state.getSingle,
          success: payload,
        },
      };
    }
    case GET_SINGLE_POST_LOADING: {
      return {
        ...state,
        getSingle: {
          ...state.getSingle,
          loading: payload,
        },
      };
    }
    case GET_SINGLE_POST_ERROR: {
      return {
        ...state,
        getSingle: {
          ...state.getSingle,
          error: payload,
        },
      };
    }
    case CREATE_POST_SUCCESS: {
      return {
        ...state,
        post: {
          ...state.post,
          success: payload,
        },
      };
    }
    case CREATE_POST_LOADING: {
      return {
        ...state,
        post: {
          ...state.post,
          loading: payload,
        },
      };
    }
    case CREATE_POST_ERROR: {
      return {
        ...state,
        post: {
          ...state.post,
          error: payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};
