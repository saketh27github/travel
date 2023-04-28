import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

const About = () =>{

    useEffect(() =>{
        window.scrollTo(0, 0);
       });

    return <>
    <Header/>
    <main class="main" id="main">
      <section
        class="section about-hero"
        style={{ backgroundImage : 'url(./media/bg-about.jpg)'}}
        id="hero"
      >
        <h1 class="hero__title">About Us</h1>
      </section>

      <section class="section about container">
        <div class="about__container">
          <img class="about__img" src="./media/img-9.jpg" alt="" />

          <div class="about__data">
            <h3 class="about__data-title">"Banyan Tree Vabbinfaru Beach"
             Maldives</h3>
            <p class="about__data-description">
            
        The Islands in the Maldives have white and fine quality
         sand that embraces the tropical vegetation. Eye-pleasing 
         natural beauty of these Islands attract tourists from around
          the world. The beaches are nestled amidst beautiful coral islands 
          and give you relationship goals to be ticked off your bucket list.
            </p>
            <p class="about__data-description">
           
       The island, also called Makunufushi, is known for 
       its sugar-sand beaches and crystal-clear waters. 
       The live coral reefs — best experienced on a scuba diving trip
        orchestrated by the COMO Cocoa Island team — are one of the island's best features.
            </p>

            <p class="about__data-description">
           
            The beach is a part of Vaadhoo Island, 
            which is one of the islands of Raa Atoll 
            in Maldives. It’s actually a small island with 
            not more than 500 people. However, the island has
             earned itself a place on the global tourism map owing 
             to its Sea of Stars phenomenon. For a long time, this 
             island was Maldives’ one of the best kept secrets, but 
             now it has become one of the most sought-after places to visit in Maldives.
                </p>
          </div>
        </div>
      </section>
    </main>

    <Footer/>
    
    </>

}

export default About;