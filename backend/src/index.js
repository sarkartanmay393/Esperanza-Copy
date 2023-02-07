import express from 'express';
import cors from 'cors';

// Dummy Data
const events = [
    {
        id: "hackathon",
        name: "Esperanza Hackathon",
        description: `Esperanza Hackathon is a coding competition organized by your college aimed 
        at encouraging students to develop innovative technology solutions to real-world problems. 
        The event provides a platform for students to showcase their coding skills, collaborate with 
        peers, and gain hands-on experience in software development. Participants will have the 
        opportunity to work on exciting projects and receive mentorship from experienced industry 
        professionals. The hackathon will culminate in a final presentation where teams will present 
        their solutions to a panel of judges. With prizes, recognition, and opportunities for networking 
        and career development, Esperanza Hackathon is a must-attend event for all aspiring tech enthusiasts.`,
    },
    {
        id: "chess",
        name: "Esperanza Chess Battle",
        description: `Esperanza Chess Competition is a strategic and intellectual event organized by your college 
        for students to showcase their chess skills and compete against peers. This competition is open to students 
        of all skill levels, from beginners to experienced players. The event aims to provide an exciting platform 
        for participants to improve their chess strategies, learn new techniques, and make new friends. The 
        competition will feature a series of rounds where participants will face off against each other in a game 
        of chess. The winner will be determined based on their performance throughout the tournament and will be 
        awarded a prize. Esperanza Chess Competition is a great opportunity for students to challenge themselves 
        and showcase their skills to a wider audience. Whether you're a seasoned chess player or just starting out, 
        this competition is the perfect place to showcase your skills and have a great time!`,
    },{
        id: "hackathon",
        name: "Esperanza Hackathon",
        description: `Esperanza Hackathon is a coding competition organized by your college aimed 
        at encouraging students to develop innovative technology solutions to real-world problems. 
        The event provides a platform for students to showcase their coding skills, collaborate with 
        peers, and gain hands-on experience in software development. Participants will have the 
        opportunity to work on exciting projects and receive mentorship from experienced industry 
        professionals. The hackathon will culminate in a final presentation where teams will present 
        their solutions to a panel of judges. With prizes, recognition, and opportunities for networking 
        and career development, Esperanza Hackathon is a must-attend event for all aspiring tech enthusiasts.`,
    },
    {
        id: "chess",
        name: "Esperanza Chess Battle",
        description: `Esperanza Chess Competition is a strategic and intellectual event organized by your college 
        for students to showcase their chess skills and compete against peers. This competition is open to students 
        of all skill levels, from beginners to experienced players. The event aims to provide an exciting platform 
        for participants to improve their chess strategies, learn new techniques, and make new friends. The 
        competition will feature a series of rounds where participants will face off against each other in a game 
        of chess. The winner will be determined based on their performance throughout the tournament and will be 
        awarded a prize. Esperanza Chess Competition is a great opportunity for students to challenge themselves 
        and showcase their skills to a wider audience. Whether you're a seasoned chess player or just starting out, 
        this competition is the perfect place to showcase your skills and have a great time!`,
    },{
        id: "hackathon",
        name: "Esperanza Hackathon",
        description: `Esperanza Hackathon is a coding competition organized by your college aimed 
        at encouraging students to develop innovative technology solutions to real-world problems. 
        The event provides a platform for students to showcase their coding skills, collaborate with 
        peers, and gain hands-on experience in software development. Participants will have the 
        opportunity to work on exciting projects and receive mentorship from experienced industry 
        professionals. The hackathon will culminate in a final presentation where teams will present 
        their solutions to a panel of judges. With prizes, recognition, and opportunities for networking 
        and career development, Esperanza Hackathon is a must-attend event for all aspiring tech enthusiasts.`,
    }
];

// Default Port
const PORT = 8081;
const app = express();

// Using Middlewares
app.use(cors());
app.use(express.json());


// Accepting GET Request
app.get("/events", async (req, res) => {
    return res.json(events);
});

app.get("*", async (req, res) => {
    return res.status(404).send("Non existing route!");
});

// Initializing Express at default Port
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});