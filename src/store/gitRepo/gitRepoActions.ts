import { IGitRepo, InferActionsTypes } from "../store";

export type gitActionsType = InferActionsTypes<typeof gitSearchActions>;

export const gitSearchActions = {
  getRepoLoading: (search?: string) =>
    ({ type: "gitRepo/LOADING_REPO", search } as const),
  getRepoSuccess: (repo: Array<IGitRepo>, search: string) =>
    ({ type: "gitRepo/GET_REPO_SUCCESS", repo, search } as const),
  getRepoFailed: () => ({ type: "gitRepo/LOADING_REPO_FAIL" } as const),
};
