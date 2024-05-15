import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'

function App() {

  return (
    
      <div className="bg-lime-200">
          <Home />
          <MyAccount />
          <MyOrder />
          <NotFound />
          <SignIn />
      </div>
    
  )
}

export default App
