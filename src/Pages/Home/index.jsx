import { useState, useEffect } from "react"
import Layaout from "../../Components/Layout"
import Card from "../../Components/Card"

function Home() {

  const [items, setItems] = useState(null)

  useEffect( ()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  return (    
      <Layaout>
        Home
        {
          items?.map( () => (<Card />)            
          )
        }
       
      </Layaout>
  )
}

export default Home
