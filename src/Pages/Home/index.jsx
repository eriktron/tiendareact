import { useState, useEffect } from "react"
import Layaout from "../../Components/Layout"
import Card from "../../Components/Card"

function Home() {

  const [items, setItems] = useState(null)

  useEffect( ()=>{
    // fetch('https://api.escuelajs.co/api/v1/products')
    fetch('https://fakestoreapi.com/products')
    // fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
      // .then(response => console.log(response.json()))
  }, [])

  return (    
      <Layaout>
        Home
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {
            items?.map( item => (
              <Card key={item.id} data={item}/>
            ))
          }
        </div>
       {/* <Card /> */}
      </Layaout>
  )
}

export default Home
