import React from "react";
import'./Home.css'
import Country from "../../components/Country/Country";

const Home = ({countries})=>{
    return(
        <div className="home">
            {
            countries.map ((c)=>{
            return <Country  key={c.name.official} country={c}/>
            })
            }
            </div>
    )
}

export default Home