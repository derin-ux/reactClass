import {useState} from 'react'

import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'


function Home() {
    const name = "John Doe";
    const [number,setNumber] = useState(3);

    const handleAdd = () => {
       setNumber(number + 1);
    }
    const handleMinus = () => {
        setNumber(number - 1);
    }
    const handleReset = () => {
        setNumber(3);
    }

    
    return (
       <>
        <NavBar />
        <Hero player="home page" />
        <h2>{number}</h2>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleMinus}>Minus</button>
        <button onClick={handleReset}>Reset</button>
        <h3>{name}</h3>
       </>
    )
}

export default Home