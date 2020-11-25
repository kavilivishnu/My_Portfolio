import React from 'react';

function About() {
    return (
        <div className="about">
            <br />
            <br />
            <h1 style={{ fontFamily: 'Paprika' }}><i>Hey there!</i></h1>
            <h1 style={{ fontFamily: 'Paprika' }}><i>Myself, Kavili Sri Vishnu Vardhan</i></h1>
            <img src="/images/Portfolio picture.jpg" alt="" className="my_picture"></img>
            <h3 className="heading_3"><i>I'm a passionate, knowledge-craving and determined guy who is looking for challenging
            projects to work in Frontend development using Reactjs. I have done couple of projects
            with Reactjs. <br /> Want to check out my journey with it?<br />
                Feel free to check my <span><b>"Work Samples" </b></span>
                page, where you you can find the snapshots of my projects.</i>
            </h3>
            <h3 className="heading_3_1"><i>Thank you so much for showing your interest in checking out my profile</i></h3>
            <br />
        </div>
    )
}

export default About;
