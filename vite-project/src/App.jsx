import { useState } from "react"
import './App.css'

function App() {
  const [color ,setcolor ] = useState("while")



  return (
    <div style={
      {
        width : "100vw",
        height : "100vh", 
        backgroundColor: color,
        display : "flex",
        justifyContent: "center",
        alignItems :"end"

      }
      }>
      <footer className="footer-container">
        <button className = "btn btn-r" onClick={()=>{setcolor("grey")}}>Grey</button>
        <button className = "btn btn-y" onClick={()=>{setcolor("antiquewhite")}}>Antiquewhite</button>
        <button className = "btn btn-g" onClick={()=>{setcolor("green")}}>Green</button>
        <button className = "btn btn-a" onClick={()=>{setcolor("aqua")}}>Aqua</button>
        <button className = "btn btn-b" onClick={()=>{setcolor("blue")}}>Blue</button>
        <button className = "btn btn-o" onClick={()=>{setcolor("orange")}}>Orange</button>
        <button className = "btn btn-bl" onClick={()=>{setcolor("black")}}>Black</button>


      </footer>

    

    

    </div>
  )
}

export default App
