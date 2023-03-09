import React from 'react';

const screen = window.innerWidth;

function Education() {
    if ( screen > 700 ) {
        return (
            <div class="eduContainer">
    
            <div class="container">
                <div class="edu">
                    <h2>My <span>Education</span></h2>
    
                    <p class="pa">About my Education </p>
                </div>
                
                <div class="row">
                    <div class="col">
                        <img class="cap" src="/image/graduationcap.com.png" alt="Graduation Cap" />
                    </div>
    
                    <div class="col">
                        <h3>School</h3>
                        <h4>High School</h4>
                        <p class="pa">Attended West Africa Senior High School in the year 2017 and completed in the year 2020. I studied Business and i like Elective Maths very much.</p>
    
                        <h4>Tertiary Education</h4>
                        <p class="pa">Currently a student at Accra Institute of Technology pursuing a degree in Information Technology in my second year. </p>
    
                    </div>
                     
                </div>
    
            </div>
            </div>
        )
    } else {
        return (
            <div class="educontainer">
                <h2>My <span>Education</span></h2>

                <img class="cap" src="/image/graduationcap.com.png" alt="Graduation Cap" />

                <h3>School</h3>

                <div class="container">
                <h4>High School</h4>
                        <p class="par">Attended West Africa Senior High School in the year 2017 and completed in the year 2020. I studied Business and i like Elective Maths very much.</p>
    
                        <h4>Tertiary Education</h4>
                        <p class="par">Currently a student at Accra Institute of Technology pursuing a degree in Information Technology in my second year. </p>

                </div>
                        

            </div>
        )
    }
    
}

export default Education;