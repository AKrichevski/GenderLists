import { EDIT_USER, DELETE_USER, SET_USERS, IS_FETCHING } from "./actionTypes";

const initialState = {
  male: [],
  female: [],
  isFetching: false
};

const usersReducer = (state = initialState, action) => {
  const gender = action.payload ? action.payload.gender : null;
  const uuid = action.payload ? action.payload.uuid : null;
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        isFetching: false,
        male: action.payload.male,
        female: action.payload.female,
      };
    case EDIT_USER:
      const copyGender = [...state[gender]];
      const findUserIndex = state[gender].findIndex(item => item.login.uuid === uuid);
      copyGender[findUserIndex] = action.payload.updatedUserInfo;
      return {
        ...state,
        [gender]: copyGender,
      };
    case DELETE_USER:
      return {
        ...state,
        [gender]: state[gender].filter(item => item.login.uuid !== uuid),
      };
    case IS_FETCHING:
        return {
          ...state,
          isFetching: action.isFetching
        }
    default:
      return state;
  }
};

export default usersReducer;
