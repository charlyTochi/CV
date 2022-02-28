import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkHistory = (props) => {
    const [history] = useState([
        {
            title: "HIGH POLAR SOFTWARES (INDIA)",
            subtitle: "POSITION: REMOTE REACT-NATIVE DEVELOPER",
            desc: `Successfully built, maintained, and launched an app where you can Order anything from coffee to dry-cleaning and 
            drive to collect without going through the hassle of entering the store. Upon arrival, the store employee is notified and 
            will bring your order to your vehicle, making your purchase experience quick, easy, and virtual.


            https://play.google.com/store/apps/details?id=com.pick_it`,
            duration: "DECEMBER  2021- PRESENT",
        },

        {
            title: "TOP FOOTBALL TRIALS (UK)",
            subtitle: "POSITION: REMOTE REACT-JS DEVELOPER",
            desc: `Currently building and maintaining a website for a UK company, with the aim of providing an innovative platform where aspiring professional footballers all over the world can have the possibility of bringing their football career to the next top level.
            
            https://topfootballtrials.co.uk/`,
            duration: "OCTOBER 2021 - PRESENT",
        },




        {
            title: "WRKMAN-HQ (US/NIGERIA)",
            subtitle: "POSITION: REMOTE REACT-NATIVE DEVELOPER",
            desc: `Currently builing a React Native Mobile app helps to connect people with artisans and technicians in different fields e.g plumber, hairstylist, carpenter, etc.`,
            duration: "JULY 2021 - PRESENT",
        },



        {
            title: "EFULL TECHNOLOGY NIGERIA LIMITED (LAGOS/NIGERIA)",
            subtitle: "POSITION: FULL-TIME REACT | REACT NATIVE DEVELOPER",
            desc: `Built a school mobile application using React Native were parent can login and see all their school information, implemented a payment sysetm that helps parents make payment for their children textbooks, school fees etc. On this app, parents can also chat with teachers tied to their children. I  also worked with the device’s SDK to target some device specific
            functions like Using the thermal printer, Smart card reader and Camera for QR code scanning.
            https://school.efulltech.com.ng/, https://play.google.com/store/apps/details?id=com.e_parent`,
            duration: "AUGUST 2019 - Present",


        },



        {
            title: "CODESTACK TECHNOLOGIES (LAGOS NIGERIA)",
            subtitle: `POSITION: REMOTE REACT NATIVE DEVELOPER`,
            desc: ` Built a sports game mobile application using React Native, where users answer questions tied to a particular quiz e.g football 
            and stand a chance of winning cash price if they top the scoreboard of a particular quiz during a partucular period of time say one month, 
            Wrote an algorithm that helps in counting down the timer of a particular question if the user minimizes the app to check the answer to a partcular question. The mobile app also has a feature where users can choose to join a competition and if they top the competition leaderboard, they earn prizes. Built the backend of the game application using Node JS taking congnizance of all authenticatied routes, handled all exceptions and of course performed an all-round securtih to teh best of my knowledge. 
             I worked on a couple of web applications, fixing some bugs and adding new functionalities. I was tasked with building an application to perform stress testing on other web APIs`,
             duration: "2019 - February 2021",
            },

        
            {
                title: "JUSTFONEZ TELECOM (LAGOS NIGERIA)",
                subtitle: "POSITION: REMOTE PHP DEVELOPER",
                desc: `I built, deployed and maintained the company wallet application https://wallet.justfonez.net/. This website makes use of flutterwave API features, On this site users can buy airtime, withdraw money in wallet to their bank account, make deposit to their wallet account, transfer money to any country in the world , verify NINand many more... `,
                duration: "2019 - PRESENT",
            },




        {
            title: "FRANK AIK TECHNOLOGIES (LAGOS NIGERIA)",
            subtitle: "POSITION: PHP DEVELOPER",
            desc: `During my time here, I built, deployed the company’s website http://fatechteam.com/ and also built various kinds of web applications like,  , https://autocoins.ng/, https://freeresell.com,i also built blogs registered domains .`,
            duration: "2018 - JULY 2019",
        },
        
        {
            title: "KIVOS WEBMASTER",
            subtitle: "POSITION: WEB DESIGNER (EDO NIGERIA)",
            desc: `Maintain the site security 
            Detailed website specifications.Met clients to identify their needs and liaise regularly with them. Register web domain names and facilitate the hosting of other websites and modules. 
            Design the website’s visual imagery and ensure it is in line with company branding policy or clients’ requirements.`,
            duration: "2016 - 2017",
        },
       

       
       
       
       

      
        

       


    ])
    return (
        <>
            <h3 className="white-text align-center font-weight-bold">My Work History</h3>
            <VerticalTimeline>
                {history.reverse().map((job, index) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: `rgba(66, 66, 66, 0.31)`, color: '#fff' }}
                        contentArrowStyle={{ borderRight: `7px solid rgba(66, 66, 66, 0.31)` }}
                        date={job.duration}
                        iconStyle={{ background: `rgb(29, 28, 28)`, color: '#fff' }}
                    >
                        <h4 className="vertical-timeline-element-title font-weight-bold">{job.title}</h4>
                        <h5 className="vertical-timeline-element-subtitle">{job.subtitle}</h5>
                        <p>{job.desc}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </>
    )
}
export default WorkHistory;