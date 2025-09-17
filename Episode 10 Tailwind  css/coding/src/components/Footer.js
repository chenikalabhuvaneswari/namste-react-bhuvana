import { LINKDIN_URL } from "../utils/Constants";



const Footer = () =>{
    const year = new Date().getFullYear();
    return (
    
       
        <div className="flex   bg-orange-300 rounded-md p-4 m-5 ">
            created by {" "}
                <span>Rajesh </span>{" "}
            <a href ={LINKDIN_URL} target = "_blank">
                Bhuvana
            </a>{" "}
            <span>&copy;{year}</span>{" "}
            <strong>
                Tasty <span>Trails</span>
            </strong>

        </div>
    );
};
export default Footer ;