import Header from "../Header"

import { render ,screen } from "@testing-library/react"

import { Provider } from "react-redux"

import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"

 import "@testing-library/jest-dom"


it("should load header component with login button " , () =>{

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>

)
    const loginButton = screen.getByRole("button" , {name : "login"});

    expect(loginButton).toBeInTheDocument();

})