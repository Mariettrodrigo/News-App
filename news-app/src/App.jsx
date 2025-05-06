import { useState } from "react"
import NavBar from "./assets/Components/NavBar"
import NnewsBoard from "./assets/Components/NnewsBoard"


const App = () => {
  const [category,setCategory] = useState("general");
  return (
    <div>
      <NavBar setCategory={setCategory}/>
      <NnewsBoard category={category}/>
    </div>
  )
}

export default App
