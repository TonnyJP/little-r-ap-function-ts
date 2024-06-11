import { Provider } from "react-redux"
import { RepositoriesList } from "./components/RepositoriesList"
import { store } from "./state"
import React from "react"

export const App: React.FC = () => {

    return <Provider store={store}>
        <div>
            <h1>Search For a Package</h1>
            <RepositoriesList />
        </div>
    </Provider>
}