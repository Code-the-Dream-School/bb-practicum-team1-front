import hands from './Images/Hands.svg'
import Olga from './Images/Olga.png'
import Nikki from './Images/Nikki.jpeg'
import Manizha from './Images/Manizha.png'
import Lara from './Images/Lara.png'
import Rachel from './Images/Rachel.png'
import Jacob from './Images/Jacob.png'
import Simon from './Images/Simon.png'
import Ekaterina from './Images/Ekaterina.png'
import Cecilia from './Images/Cecilia.png'

const About = () => {
    return (
        <div className="about">
            <h1 className="about-title">About us</h1>
            <div className="image-and-about">
                <div className="image-hands">
                    <img src={hands} alt="hands" />
                </div>
                <div className="title-and-p">
                    <p className="about-text">
                        ShelfShare is an innovative application that provides a
                        platform for sharing books within the community. Our
                        idea originated from a desire to enable book lovers to
                        share books easily without the hassle of physical visits
                        to libraries or bookstores. With ShelfShare, users can
                        search for books they are interested in and contact
                        owners for borrowing without leaving their communities.
                    </p>
                </div>
            </div>
            <p className="rest-of-p">
                ShelfShare is not just about convenience; it is also about
                creating a community where people can come together to share
                their love for books. We believe that sharing books can create a
                ripple effect that extends beyond the act of reading. By sharing
                books, we can promote cultural exchange and understanding,
                connect with others in our community, and contribute to
                sustainability by reducing waste and resource consumption.
                <br />
                Additionally, ShelfShare recognizes the unique needs of
                individuals who have limited access to books in their native
                languages, such as refugees and immigrants. Our app provides a
                platform for sharing books in a variety of languages, promoting
                language retention and cultural preservation. <br />
                We believe that everyone should have access to quality reading
                materials regardless of their financial situation. ShelfShare
                offers a cost-effective solution for book enthusiasts to
                exchange books and build a vibrant community around literature.
                Join us in making the world a better place one book at a time
                with ShelfShare.
            </p>
            <ul className="members">
                <div className="card">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="title">Olga Musteta</p>
                            <p className="job-title">Frontend team</p>
                        </div>
                        <img
                            src={Olga}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <p className="card-content">
                        Olga moved to California in 2018, hoping to fulfill the
                        American dream. She holds a foreign BA in Computer
                        Science, a certificate in Database Management , an A+
                        certificate, and a Front End Development certificate
                        from CTD. With each new certificate she keeps moving
                        towards her goal of becoming a professional web
                        developer.
                    </p>
                </div>

                <div className="card">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="title">Ekaterina Bondareva</p>
                            <p className="job-title">Frontend team</p>
                        </div>
                        <img
                            src={Ekaterina}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <p className="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>

                <div className="card">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="title">Simon Shurety</p>
                            <p className="job-title">Frontend team</p>
                        </div>
                        <img
                            src={Simon}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <p className="card-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>

                <div className="card">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="title">Cecilia Rodriguez</p>
                            <p className="job-title">Frontend team</p>
                        </div>
                        <img
                            src={Cecilia}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <p className="card-content">
                        Cecilia is a Honduran native who was been living in the
                        United States the past seven years. Growing up, she had
                        always been interested in technology and design, but she
                        never had the opportunity to pursue it until she moved
                        to the US. Since joining CTD, Cecilia has been able to
                        explore her passion for technology and design further.
                        She also has a passion for helping Spanish-speaking
                        individuals. Being bilingual in English and Spanish,
                        she is able to connect with and assist those who may
                        face language barriers when seeking help or resources.
                        Outside of her studies, she enjoys spending time
                        with her family and reading.
                    </p>
                </div>

                <div className="card">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="title">Larasati Sodjati</p>
                            <p className="job-title">Backend team</p>
                        </div>
                        <img
                            src={Lara}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <p className="card-content">
                        Lara is originally from Indonesia but moved to the San
                        Francisco Bay Area in 2021. She holds a degree in
                        Chemistry and Industrial Engineering which she got in
                        Indonesia but had difficulty finding a job that allowed
                        for flexibility with those degrees here in the U.S. In
                        2019, Lara became interested in programming, but didn't
                        have access to programming resources with a class setup
                        in her home country until she found CTD, an organization
                        that offers programming courses for immigrants like
                        herself. Through CTD, Lara discovered her love for
                        programming and hopes to create apps that will benefit
                        people in Indonesia. She loves nature, and in her free
                        time, Lara enjoys crocheting, hiking, and traveling with
                        her husband.
                    </p>
                </div>

                <div className="card">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="title">Manizha Khorram</p>
                            <p className="job-title">Backend team</p>
                        </div>
                        <img
                            src={Manizha}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <p className="card-content">
                        Manizha is a passionate individual with a strong
                        interest in software development. She obtained her BA in
                        Computer Science with a focus on networking from
                        Afghanistan and has prior experience in data gathering
                        and system development analysis. In 2021, Manizha came
                        to the USA and her interactions with programmers sparked
                        a motivation to pursue her dream of becoming a
                        professional software developer. Her experiences with
                        Code The Dream classes and practicum, has allowed her to
                        expand her skills even further and she is excited to
                        continue learning and growing with the organization.
                        Despite her busy schedule as a devoted mother of two,
                        Manizha manages to balance her family life and coding
                        interests. She enjoys spending quality time with her
                        loved ones and expressing her creativity through
                        painting during her free time. Manizha is dedicated to
                        continuously improving her skills and knowledge in
                        software development, as she strives to create impactful
                        and innovative solutions.
                    </p>
                </div>
                <div className="card">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="title">Nikki Graybeal</p>
                            <p className="job-title">Mentor</p>
                        </div>
                        <img
                            src={Nikki}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <p className="card-content">
                        Nikki Graybeal is an apprentice frontend developer with
                        Code the Dream. As a self-taught developer and former
                        teacher, she enjoys the opportunity to collaborate with
                        and mentor others at CTD.
                    </p>
                </div>

                <div className="card">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="title">Jacob Premo</p>
                            <p className="job-title">Mentor</p>
                        </div>
                        <img
                            src={Jacob}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <p className="card-content">
                        Jacob is a software engineer who served as a mentor for
                        this project. He has had a great time seeing Shelf Share
                        come together as a full stack app through the extensive
                        efforts of the team members. Outside of work Jacob
                        enjoys reading, cooking, playing video games, and
                        spending time with his cats.
                    </p>
                </div>

                <div className="card">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="title">Rachel Westernmann</p>
                            <p className="job-title">Student</p>
                        </div>
                        <img
                            src={Rachel}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <p className="card-content">
                        Rachel started her career as a school librarian working
                        with underserved youth and loved it- but a change in
                        life had her relocate to Germany. She learned to make
                        all of her favorite foods from scratch including
                        chocolate chip cookies, barbecue sauce, and many fast
                        food knockoffs! After returning to the States, she
                        focused on Information Architecture and User Experience
                        before joining Code the Dream. She is SAFe Scrum
                        certified and is working on her PMP Project Management
                        certification. She calls the Carolinas her home, going
                        between Durham, NC and the mountains whenever she is
                        able.
                    </p>
                </div>
            </ul>
            <a
                className="button"
                href="https://shelf-share.onrender.com/api-docs/"
                target="_blank"
            >
                Swagger documents
            </a>
        </div>
    )
}
export default About
