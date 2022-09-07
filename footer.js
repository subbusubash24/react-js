import { Component } from "react";

class Footer extends Component{
    componentDidMount(){
        console.log("footer mounted");
    }

    render(){
        return(
           <footer>
            <p> Created by Subbu Lakshmi.P</p>
           </footer>
        )
    }

}



export default Footer;