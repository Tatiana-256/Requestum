import { IGitRepo } from "../store";
import { gitActionsType } from "./gitRepoActions";
import { addToHistory } from "./reucer.utils";

export type initialStateType = {
  gitRepo: Array<IGitRepo>;
  history: Array<string>;
  status: string;
};
const initialState = {
  gitRepo: [],
  history: [],
  status: "idle",
};

export const gitReducer = (
  state = initialState,
  action: gitActionsType
): initialStateType => {
  switch (action.type) {
    case "gitRepo/LOADING_REPO":
      return {
        ...state,
        status: "loading",
      };
    case "gitRepo/GET_REPO_SUCCESS":
      return {
        ...state,
        status: "succeeded",
        gitRepo: [...action.repo],
        history: addToHistory(state.history, action.search),
      };
    case "gitRepo/LOADING_REPO_FAIL":
      return {
        ...state,
        status: "rejected",
      };
    default:
      return state;
  }
};
