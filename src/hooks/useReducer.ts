import type { User } from "../types/User";

export type UserProfile = User[];

export type ReducerAction = {
  type: "ADD_USER" | "REMOVE_USER" | "UPDATE_USER";
  users: User;
};

export default function userReducerProfile(prevState: UserProfile, action: ReducerAction) {
  let updatedState: UserProfile;

  switch (action.type) {
    case "ADD_USER": {
      updatedState = [...prevState, action.users];
      break;
    }
    case "REMOVE_USER": {
      updatedState = prevState.filter((user) => user.id !== action.users.id);
      break;
    }
    case "UPDATE_USER": {
      updatedState = prevState.map((user) => (user.id === action.users.id ? action.users : user));
      break;
    }
    default: {
      updatedState = prevState;
    }
  }
  localStorage.setItem("users", JSON.stringify(updatedState));
  return updatedState;
}


