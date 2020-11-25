import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { AiFillGithub } from "react-icons/ai";

function WorkSamples() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="all_images">
            <div data-aos="flip-up">
                <img
                    src="/images/figmatoreact.PNG"
                    alt="hello"
                    style
                    =
                    {{
                        width: "40%",
                        padding: "80px 80px",
                        height: "40%",
                        borderRadius: "100px 100px 100px 100px"
                    }}
                >
                </img>
                <a href="https://figmatoreact.netlify.app" target="_blank" style={{ color: "lightsalmon", fontFamily: "Sansita" }} >Click here for the demo</a>
            </div>
            <div data-aos="flip-down">
                <img
                    src="/images/firstwebpage1.PNG"
                    alt="hello"
                    style
                    =
                    {{
                        width: "40%",
                        padding: "80px 80px",
                        height: "40%",
                        borderRadius: "100px 100px 100px 100px"
                    }}
                >
                </img>
                <a href="https://responsivewebpage.netlify.app" target="_blank" style={{ color: "lightsalmon", fontFamily: "Sansita" }} >Click here for the demo</a>
            </div>
            <div data-aos="fade-up">
                <img
                    src="/images/image1.PNG"
                    alt="hello"
                    style
                    =
                    {{
                        width: "40%",
                        padding: "80px 80px",
                        height: "40%",
                        borderRadius: "100px 100px 100px 100px"
                    }}
                >
                </img>
                <a href="https://picsel.netlify.app" target="_blank" style={{ color: "lightsalmon", fontFamily: "Sansita" }} >Click here for the demo</a>
            </div>
            <div data-aos="fade-down" >
                <img
                    src="/images/multiapi1.PNG"
                    alt="hello"
                    style
                    =
                    {{
                        width: "40%",
                        padding: "80px 80px",
                        height: "40%",
                        borderRadius: "100px 100px 100px 100px"
                    }}
                >
                </img>
                <a href="https://randomie.netlify.app" target="_blank" style={{ color: "lightsalmon", fontFamily: "Sansita" }} >Click here for the demo</a>
            </div>
            <div data-aos="fade-left">
                <img
                    src="/images/parallax1.PNG"
                    alt="hello"
                    style
                    =
                    {{
                        width: "40%",
                        padding: "80px 80px",
                        height: "40%",
                        borderRadius: "100px 100px 100px 100px"
                    }}
                >
                </img>
                <a href="https://masterdev.netlify.app/" target="_blank" style={{ color: "lightsalmon", fontFamily: "Sansita" }} >Click here for the demo</a>
            </div>
            <div data-aos="fade-right">
                <img
                    src="/images/shoppingwebpage1.PNG"
                    alt="hello"
                    style
                    =
                    {{
                        width: "40%",
                        padding: "80px 80px",
                        height: "40%",
                        borderRadius: "100px 100px 100px 100px"
                    }}
                >
                </img>
                <a href="https://shopbizz.netlify.app" target="_blank" style={{ color: "lightsalmon", fontFamily: "Sansita" }} >Click here for the demo</a>
            </div>
            <div data-aos="flip-left">
                <img
                    src="/images/ToDo.PNG"
                    alt="hello"
                    style
                    =
                    {{
                        width: "40%",
                        padding: "80px 80px",
                        height: "40%",
                        borderRadius: "100px 100px 100px 100px"
                    }}
                >
                </img>
                <a href="https://makemytodo.netlify.app" target="_blank" style={{ color: "lightsalmon", fontFamily: "Sansita" }} >Click here for the demo</a>
            </div>
            <div data-aos="flip-right">
                <img
                    src="/images/usertable1.PNG"
                    alt="hello"
                    style
                    =
                    {{
                        width: "40%",
                        padding: "80px 80px",
                        height: "40%",
                        borderRadius: "100px 100px 100px 100px"
                    }}
                >
                </img>
                <a href="https://userstablepage.netlify.app" target="_blank" style={{ color: "lightsalmon", fontFamily: "Sansita" }} >Click here for the demo</a>
            </div>
            <h3>
                <i>
                    Check out my repositories by clicking on the below icon
                <a href="https://github.com/kavilivishnu?tab=repositories" target="_blank">
                        <div style={{ marginTop: "5px" }}>
                            <AiFillGithub size="4%" color="white" />
                        </div>
                    </a>
                </i>
            </h3>
            <h2><i>You can contact me through the medium provided below!</i></h2>
            <h3><i><a href="mailto:kavilivishnu@gmail.com" style={{ color: "dodgerblue" }}>kavilivishnu@gmail.com</a> Send me an email to get in touch</i></h3>
            <br />
            <h3><i>You can connect with me! give a call to 9912728189</i></h3>
        </div>
    )

}

export default WorkSamples;