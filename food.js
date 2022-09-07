import "./food.css"
import {useState} from 'react'
function Food(props){
    const[price,setPrice]=useState(props.price)
    const[offer,setOffer]=useState(props.offer)

   const updatePrice=()=>{
        let newPrice=props.price-((offer/100))*props.price
        setPrice(newPrice)
    }

    const[x,setX]=useState("heart")

    return(
        <div className="foodBox">
            <div className="foodImage">
                <img src={props.image}/>
                
            </div>
            <p className="foodName">{props.name}</p>
            <p className="foodPrice">{price}</p>
            <p className="offer">{offer}</p>
            <button onClick={updatePrice}>offer</button>
            <p className={x} onClick={()=>{
                if(x=="heart"){
                    setX("heart liked")
                }else{
                    setX("heart")
                }
            }}>&#10084; &#9734; &#9734; &#9734; &#9734; &#9734;</p>
            
            
        </div>
    )
    }
export default Food;