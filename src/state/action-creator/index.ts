import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import axios, { AxiosResponse } from "axios";
import { Action } from "../actions";

export const SearchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.Search_repository,
    });

    try {
      const response: AxiosResponse = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const names = response.data.objects.map((data: any) => data.package.name);
      dispatch({
        type: ActionType.Search_repository_success,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: ActionType.Search_repository_error,
        payload: "Something went wrong !!",
      });
    }
  };
};
