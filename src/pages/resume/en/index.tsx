import * as React from "react";

import Resume from "../resume";

const IndexPage = () =>
    Resume({
        bio: "Enthusiastic programmer who loves to create and develop applications, games and more.",
        education: "Education",
        uu: "Uppsala University",
        uu_desc: "Master's Programme in\nComputer and Information Engineering",
        bd_desc:
            "Technology with a specialization in\ndesign and product development",
        work: "Work",
        programmer: "Programmer",
        ksu_title: "Thesis Work KSU",
        ksu_desc:
            "Information sharing application in VR as part of my thesis work at Kärnkraftsäkerhet och Utbildning. Responsible for developing and documenting the application based on KSU's specifications.",
        scarecrow_desc:
            "Developed gameplay systems for The Story Goes On (2015 – 2019) where I was the lead developer. I was responsible for programming and launching on Steam, Xbox One and Nintendo Switch.",
        eris_desc: "Ported the videogame Don’t Sink to the Xbox One console.",
        warehouse_worker: "Warehouse worker",
        khs_desc: "Summer job at the company warehouse.",
        my_projects: "My Projects",
        visitors: "visitors",
        std_desc:
            "World for the social multiplayer game VRChat.\nDeveloped for computer and VR in Unity 3D and C#.",
        installs: "installs",
        prr_desc:
            "Multiplayer browser game made in Unity with a C# server running ASP.NET and websockets.",
        prr_line: "Unreleased",
        pp_desc:
            "Online five in a row/gomoku.\nServer developed in C#, client in GameMaker.\nReleased on iOS, Android and the web.",
        mini_desc:
            "Minesweeper remake developed in GameMaker.\nReleased on iOS, Android and the web.",
        more_projects: "More projects are also available on my ",
        programming_languages: "Programming Languages and Tools",
        csharp_desc:
            "Extensive experience with both the language and its ecosystem.",
        ts_desc: "Experience with client-side JavaScript and node.js",
        unity_desc: "Knowledgeable in creating projects in both 2D and 3D.",
        java_desc: "Enough experience to comfortably work in.",
        gm_desc:
            "I have developed in GameMaker for the largest part of my life.",
    });

export default IndexPage;
