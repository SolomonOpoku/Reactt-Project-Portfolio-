import React from 'react';
import Header from './Header';

const screen = window.innerWidth;

function Home() {

    if ( screen > 700) {
        return (

            <div class="homeContainer">
                <Header />
    
                <div class='container'>
                    <div class="row">
                        <div class="col">
                            <img className='img' src='/image/new.jpg' alt='Profile' />
                        </div>
    
                        <div class="col col2">
                            <h2>YEBOAH SOLOMON OPOKU</h2>
    
                            <h4>FULL STACK WEB DEVELOPER</h4>
    
                            <p class="pa">A Web Developer and Designer from Ghana. I create custom websites and web applications to help business do better online.</p>

                            <button class="gitButton check" type="button"><a href='/home'>Resume</a></button>
                        </div>
                    </div>
    
                </div>
    
            </div>
        )
    } else {
        return (
            <div class="homeContainer">
                <Header />
                <div>
                     <img className='image' src='/image/new.jpg' alt='Profile' />
                </div>
            
                <div class="name">
                        <h2>YEBOAH SOLOMON OPOKU</h2>
            
                        <h5>FULL STACK WEB DEVELOPER</h5>
            
                    <div class="container">
                     <p class="pa">A Web Developer and Designer from Ghana. I create custom websites and web applications to help business do better online.</p>

                     <button class="gitButton check" type="button"><a href='/home'>Resume</a></button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Home;


