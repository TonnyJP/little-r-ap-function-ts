import { ActionType } from "../action-types";
import { Action } from "../actions";

type RepositoryState = {
  loading: boolean;
  error: string | null;
  data: string[];
};

const initialState: RepositoryState = {
  loading: false,
  error: null,
  data: [],
};
export const repositoriesReducer = (
  state: RepositoryState = initialState,
  action: Action
): RepositoryState => {
  switch (action.type) {
    case ActionType.Search_repository:
      return { loading: true, error: null, data: [] };
    case ActionType.Search_repository_success:
      return { loading: false, error: null, data: action.payload };
    case ActionType.Search_repository_error:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
