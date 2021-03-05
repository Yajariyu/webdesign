import axios from "../config/axios";
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  GET_USER,
  GET_USER_LOCAL,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILED,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} from "../types/types";
import Swal from "sweetalert2";

export const getUsers = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_USERS,
    });
    try {
      const users = await axios.get();
      if (users.data) {
        localStorage.setItem("users", JSON.stringify(users.data));
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: users.data,
        });
      }
    } catch {
      dispatch({
        type: GET_USERS_FAILED,
      });
    }
  };
};

export const getUser = (id) => {
  return async (dispatch) => {
    if (localStorage.getItem("users") !== null) {
      dispatch({
        type: GET_USER_LOCAL,
        payload: id,
      });
    } else {
      try {
        dispatch({
          type: GET_USER,
          payload: id,
        });

        const user = await axios.get(`/${id}`);
        dispatch({
          type: GET_USER_SUCCESS,
          payload: user,
        });
      } catch {
        dispatch({
          type: GET_USER_FAILED,
        });
      }
    }
  };
};

export const editUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: EDIT_USER,
    });
    try {
      const status = await axios.patch(`/${user.id}`, user);
      if (status.status === 200) {
        dispatch({
          type: EDIT_USER_SUCCESS,
        });

        Swal.fire({
          title: "Success",
          text: "Usuario Editado",
          icon: "success",
          confirmButtonText: "Ok",
        });
      } else {
        throw new Error();
      }
    } catch {
      dispatch({
        type: EDIT_USER_FAILED,
      });
      Swal.fire({
        title: "Error!",
        text: "Error al editar el Usuario",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_USER,
    });
    try {
      const status = await axios.delete(`/${id}`);
      if (status.status === 200) {
        dispatch({
          type: DELETE_USER_SUCCESS,
        });

        Swal.fire({
          title: "Success",
          text: "Usuario Borrado",
          icon: "success",
          confirmButtonText: "Ok",
        });
      } else {
        throw new Error();
      }
    } catch {
      dispatch({
        type: DELETE_USER_FAILED,
      });
      Swal.fire({
        title: "Error!",
        text: "Error al Borrar Usuario",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };
};
