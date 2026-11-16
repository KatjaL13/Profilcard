import { createContext } from "react";
import type { UserProfile, ReducerAction } from "../hooks/useReducer";




export const UserContext = createContext<{
  users: UserProfile;
  usersDispatch: React.Dispatch<ReducerAction>;
}>({
  users: [],
  usersDispatch: () => {},
});

