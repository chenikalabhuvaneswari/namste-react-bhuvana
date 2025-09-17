import Contact from "../Contact"
import { render ,screen } from "@testing-library/react";
import "@testing-library/jest-dom"

describe("contact us page  test case " , () =>{
    it("I want to test  Contact page" , ()=>{

    //To test ui components , er should render them on js dom '
    render(<Contact/>);

    //after rendering we get access to screen
    const heading = screen.getByRole("heading");
    // console.log(heading)s
    expect(heading).toBeInTheDocument();


})


test("i want to test text buttion ", () =>{
    render(<Contact/>)


    const button = screen.getByText("submit");

    expect(button).toBeInTheDocument();
})

test("i want test button ",() =>{
    render(<Contact/>)
    //querying 
    const inputName = screen.getAllByRole("textbox")
    //assertion 
    expect(inputName[0]).toBeInTheDocument();
})

})
