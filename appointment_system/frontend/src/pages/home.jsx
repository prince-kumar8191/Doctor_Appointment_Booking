import React from "react";
import Header from "../components/header";
import SpecialityMenu from "../components/speciality_menu"
import TopDoctor from "../components/top_doctor";
import Banner from "../components/banner";

const Home = ()=>{

    return(
        <div>
           <Header/>
           <SpecialityMenu/>
           <TopDoctor/>
           <Banner/>
          
        </div>
    )
}
export default Home;