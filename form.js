 import React, { useState } from "react";
import './form.css';

function Form(props){
    const[form,setForm]=useState({ 
         name:'',
        price:'',
        offer:'',
        
    });

    const nameHandler=(event)=>{
        setForm({...form,name:event.target.value});
    
    }
    const priceHandler=(event)=>{
        setForm({...form,price:event.target.value});
    
      }

    const offerHandler=(event)=>{
        setForm({...form,offer:event.target.value});

    }

 
    const subjectHandler=(event)=>{
        event.preventDefault();
        props.add(form);

    }
    return(
        <div className="form-container">
            <form onSubmit={subjectHandler}>
            <input type="text" placeholder="enter name"  onChange= {nameHandler}/>
            <input type="text" placeholder="enter price"  onChange={priceHandler}/>
            <input type="text" placeholder="enter offer"  onChange={offerHandler}/>
            <button type="submit">submit</button>
            </form>
        </div> 
    )
}



export default Form;

  