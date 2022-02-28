import React, { useState } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import boilerPlate from "../assets/img/projects/google-materialdesign.png"
import autocoins from "../assets/img/projects/autocoins.png"
import pickit from "../assets/img/pickit.png"
import eparent from "../assets/img/eparent.png"
import eschool from "../assets/img/eschool.png"
import auto from "../assets/img/projects/auto.png"
import wallet from "../assets/img/projects/wallet.png"
import gemaily from "../assets/img/projects/gemaily.png"
import freeresell from "../assets/img/projects/freeresell.png"

const FeaturedProjects = (props) => {
    const [projects] = useState([
        {
            title: "Efu-Parent",
            photoUrl: eparent,
            link: "https://play.google.com/store/apps/details?id=com.e_parent"
        },
        {
            title: "Pickit",
            photoUrl: pickit,
            link: "https://play.google.com/store/apps/details?id=com.pick_it"
        },
        {
            title: "Efu-School",
            photoUrl: eschool,
            link: "https://school.efulltech.com.ng/"
        }
    ])

    return (
        <div style={{ position: "relative", marginTop: 160 }}>
            <ReactCardCarousel autoplay={true} autoplay_speed={3000} spread={"wide"}
            >
                {projects.map((project, index) => (
                    <div key={index} className="carousel-card">
                        <a href={project.link} target="_blank" className="btn btn-sm btn-info p-1"><span className="fa fa-angle-right" /></a>
                        <img className="carousel-img clickable" src={`${project.photoUrl || boilerPlate}`} />
                    </div>
                ))}
            </ReactCardCarousel>
        </div>
    )
}
export default FeaturedProjects;