const Contact = () =>{
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">contact us</h1>
            <form>
                <input type= "text" className="border border-black p-2 m-2 rounded-lg" placeholder="name"></input>
                <input type= "text" className="border border-black p-2 m-2 rounded-lg" placeholder="message"></input>
                <button className="p-2 m-2 border border-black bg-gray-400 rounded-lg">submit</button>
            </form>

        </div>
    );
};
export default Contact;