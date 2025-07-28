import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count1 : 0,
            count2 : 1,
        }
        console.log( this.props.name+"child constructor ");
    }

    componentDidMount(){
        console.log(this.props.name+ "mount  is called ")
    }

    render(){
        console.log(this.props.name+"render called")
        const {company , location , name } = this.props
        const {count1,count2} = this.state
        return (  
            <div className="user-card">

                <button onClick={() =>{
                    this.setState({
                        count1 : count1 +1 ,
                    })
                }}>
                    Counter
                </button>
                <h1>count1 = {count1} count2 = {count2} </h1>

                <h1>{company}</h1>
                <h2>{location}</h2>
                <h3>{name}</h3>
        </div>
        )
     }
}

export default UserClass