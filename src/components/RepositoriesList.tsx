import React from "react";
import { useActions } from "../hooks/useAction";
//import { RootState } from "../state";
import { useTypedSelector } from "../hooks/useTypedSelector";
/* import { useDispatch, useSelector } from "react-redux";
import { RootState, actionCreators } from "../state"; */

export const RepositoriesList = () => {
    const [value, setValue] = React.useState<string>("");
    const { SearchRepositories } = useActions();
    //const dispatch = useDispatch();
    //const { data, error, loading } = useSelector((state: RootState) => state.repositories); //state canbe of Type : RootState
    const { data, error, loading } = useTypedSelector((state) => state.repositories);


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        SearchRepositories(value)

        // dispatch(SearchRepositories(value) as any)
    }
    return <div>
        <form onSubmit={onSubmit}>
            <input type="text" value={value} onChange={onChange} />
            <button>Search</button>
            {loading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            <div>
                {!error && !loading && data.map((element) =>
                    <li>{element}</li>)}
            </div>
        </form>
    </div>
}