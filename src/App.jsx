import { useState } from 'react'
import './App.css'

// components
import Header from './component/header'
import Listing from './component/listing'
import CreateJob from './component/createJob'

function App() {
  const [open, setOpen] = useState(false)
  const [id, setID] = useState('')

  return (
    <>
      <Header open={() => setOpen(!open)} />
      <Listing 
        open={open} 
        edit={(id) => {
          setID(id)
          setOpen(!open)
        }} 
      />
      {
        open && <CreateJob open={() => setOpen(!open)} id={id} close={() => {
          setID('')
          setOpen(false)
        }}/>
      }
    </>
  )
}

export default App
