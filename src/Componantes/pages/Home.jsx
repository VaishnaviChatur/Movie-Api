import React from 'react'
import Film from '../NavBar/FIlm'
const Home = () => {
    return ( 
        <div>
        <h2 style = {
            { textAlign: "center", fontSize: "20px", padding: "10px", color: "#a3b18a" } } > Welcome to My film store </h2>
             <section> { /* <h3 style={{color:"#a3b18a"}}>File Section</h3> */ } 
             <Film />
        </section> </div>
    )
}

export default Home