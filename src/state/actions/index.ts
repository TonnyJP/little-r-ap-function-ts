import { ActionType } from "../action-types";

type SearchRepo = {
  type: ActionType.Search_repository;
};

type SearchRepoSuccess = {
  type: ActionType.Search_repository_success;
  payload: string[];
};

type SearchRepoError = {
  type: ActionType.Search_repository_error;
  payload: string;
};
export type Action = SearchRepo | SearchRepoError | SearchRepoSuccess;
