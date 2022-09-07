       import './App.css';
import Form from "./components/form"
import { useState, useEffect } from 'react';

import Food from "./components/food"
import food1 from "./images/food1.jpg"
import food2 from "./images/food2.jpg"
import food3 from "./images/food3.jpg"
import food4 from "./images/food4.jpg"
import Footer from './components/footer';

import Login from './components/login';



function App() {

  const foods = [
    { name: "potatofry", price: "1050", image: food1, offer: 20 },
    { name: "breadomlette", price: "50000", image: food2, offer: 50 },
    { name: "fingerchips", price: "1200", image: food3, offer: 30 },
    { name: "burger", price: "1000", image: food4, offer: 40 },
    { name: "burger", price: "1000", image: food4, offer: 40 }
  ]

  let images = [food1,food2,food3,food4,]


  const [foodList, setFoodList] = useState([...foods])
  const [isLoggedIn, setIsLoggedIn] = useState("")

  useEffect(()=>{
    // alert
    setIsLoggedIn(localStorage.getItem("login"))
  },[])

  useEffect(()=>{
    fetch('https://6315b9455b85ba9b11e5b477.mockapi.io/foods').then((response)=>{
      if(response.ok){
        return response.json()
      }return false
    }).then((data)=>{
        data.forEach((dat,i)=>{
          dat.image=images[i%images.length]

        })
      setFoodList(data)

    })
 
  },[])

  function updateFood(food) {
    if (isLoggedIn == true) {
      food.image = food1;
      setFoodList([...foodList, food])
    }else{
      alert("please login")
    }
  }

  function login(log){
    localStorage.setItem("login" , log)
    setIsLoggedIn(log)
  }

  return (
    <div className="app">
      <header>
        <div className='container'>
          <div className='header-wrapper'>
            <div className='logo'>SWIGGY</div>
            <nav>
              <a href='#'>Sign-in</a>
              <a href='#'>Log-out</a>
            </nav>
          </div>
        </div>
      </header>

      <Form add={updateFood}></Form>
      <div className='body'>
        <div className='container'>
          <Login login={login}></Login>

          <div className='body-wrapper'>

            {
              foodList.map((food) => {
                return (<Food key={Math.random()} name={food.name} price={food.price} image={food.image} offer={food.offer}></Food>)
              })
            }


          </div>
        </div>
      </div>
      <div class="footer">
        <div class="container">
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}


export default App;