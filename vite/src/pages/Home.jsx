import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'


function Home() {
    const name = "John Doe";
    return (
       <>
        <NavBar />
        <Hero player="home page" />

        <h3>{name}</h3>
       </>
    )
}

export default Home