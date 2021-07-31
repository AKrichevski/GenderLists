import {
  EDIT_USER,
  DELETE_USER,
  SET_USERS,
  IS_FETCHING
} from "./actionTypes";
import { apiGet } from "../../api";
import axios from "axios";

export const editUser = (editProps) => {
  return ({
    type: EDIT_USER,
    payload: editProps,
  })
}

export const deleteUser = (deleteProps) => {
  return ({
    type: DELETE_USER,
    payload: deleteProps,
  });
};


export const setUsers = (users) => {
  return ({
    type: SET_USERS,
    payload: users,
  });
};

export const fetching = (isFetching) => {
  return ({
    type: IS_FETCHING,
    payload: isFetching,
  });
};

export const loadUsers = () => async (dispatch) => {
  let male = [];
  let female = [];

  dispatch(fetching(true));

  const users = await apiGet("/?results=100");

  users["results"].forEach(element => {
    element.gender === "male" ? male.push(element) : female.push(element);
  });

  dispatch(setUsers({ male: male, female: female }));
};
