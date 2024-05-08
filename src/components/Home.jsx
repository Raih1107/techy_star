import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"  ;

const Home = () => {
    return (
        <>
        <div className='home' id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all of your problems</p>
        </main>

        </div>

        <div className='home2'>
        <img src= {vg} />
        <div>
            <p>
            We are your one and only solution to the tech problems you face every day. We are a leading tech company whose aim is to increase problem-solving ability in children.
            </p>
        </div>
        </div>

        <div className='home3' id='about'>
        <div>
            <h1>Who are we ?</h1>
            <p>
    
            We're a leading tech firm dedicated to solving your daily tech challenges. As your exclusive solution provider, we specialize in enhancing problem-solving skills, especially in children. Our mission is to empower the younger generation with essential tools and knowledge for navigating an increasingly tech-driven world.  Our commitment extends beyond technology to nurturing creativity, critical thinking, collaboration, and adaptability. Partner with us to invest in a brighter future of technology and innovation.
            </p>
        </div>

        </div>

        <div className='home4' id='brands'>
            <div>
                <h1>Brands</h1>

                <article>
                    <div style={{
                        animationDelay: "0.3s",
                    }} >
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                    </div>

                    <div style={{
                        animationDelay: "0.5s",
                    }} >
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                    </div>

                    <div style={{
                        animationDelay: "0.7s",
                    }} >
                    <AiFillYoutube/>
                    <p>Youtube</p>
                    </div>

                    <div style={{
                        animationDelay: "1s",
                    }} >
                    <AiFillInstagram/>
                    <p>Instagram</p>
                    </div>
                </article>
            </div>

        </div>


    

        </>

        )
}

export default Home