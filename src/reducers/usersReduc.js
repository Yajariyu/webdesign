import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  GET_USER_LOCAL,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILED,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} from "../types/types";

const initialState = {
  users: [],
  userEdit: {},
  userEditStatus: null,
  error: null,
  loading: false,
  errorDelete: false

};

const userReduc = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        userEdit: {},
        loading: true,
        error: null,

      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        userEdit: {},
        users: action.payload,
        loading: false,
        error: null,

      };

    case GET_USERS_FAILED:
      return {
        ...state,
        userEdit: {},
        loading: false,
        error: true,

      };

    case GET_USER_LOCAL:
      const users =
        state.users.length !== 0
          ? state.users
          : JSON.parse(localStorage.getItem("users"));

      return {
        ...state,
        userEdit: users.find((user) => {
          return Number(user.id) === Number(action.payload);
        }),
        loading: false,
        error: null,

      };

    case GET_USER:
      return {
        ...state,
        loading: true,
        error: null,
        userEdit: {},
        userEditStatus: null,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
        userEdit: action.payload,

      };
    case GET_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        userEdit: {},

      };

    case EDIT_USER:
      return {
        ...state,
        loading: true,
        error: null,


      };

    case EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,

      };

    case EDIT_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: null,

      };

    case DELETE_USER:
      return {
        ...state,
        loading: true,
        errorDelete: null,

      }

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        errorDelete: null
      }

    case DELETE_USER_FAILED:
      return {
        ...state,
        loading: false,
        errorDelete: true
      }
    default:
      return state;
  }
};

export default userReduc;
