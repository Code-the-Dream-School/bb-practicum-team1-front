import React, { useState } from 'react'
import hands from './Images/Hands.svg'
import Olga from './Images/Olga.png'
import Nikki from './Images/Nikki.jpeg'
import Manizha from './Images/Manizha.jpg'
import Lara from './Images/Lara.jpg'
import Rachel from './Images/Rachel.png'
import Jacob from './Images/Jacob.png'
import Simon from './Images/Simon.jpg'
import Ekaterina from './Images/Ekaterina.png'
import Cecilia from './Images/Cecilia.png'

const About = () => {

    const ReadMore = ({ children }) => {
        const text1 = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };
        return (
          <p className="text">
            {isReadMore ? text1.slice(0, 150) : text1}
            <span onClick={toggleReadMore} className="read-or-hide">
              {isReadMore ? "...read more" : " show less"}
            </span>
          </p>
        );
        };

        const ReadMoreAbout = ({ children }) => {
            const text1 = children;
            const [isReadMore, setIsReadMore] = useState(true);
            const toggleReadMore = () => {
              setIsReadMore(!isReadMore);
            };
            return (
              <p className="text">
                {isReadMore ? text1.slice(0, 550) : text1}
                <span onClick={toggleReadMore} className="read-or-hide">
                  {isReadMore ? "...read more" : " show less"}
                </span>
              </p>
            );
            };
    

    return (
        <div className="about">
            <h1 className="about-title">About ShelfShare</h1>
            <div className="image-and-about">
                <div className="image-hands">
                    <img src={hands} alt="hands" />
                </div>
                <div className="title-and-p">
                    <p className="about-text">
                        <ReadMoreAbout>
                            ShelfShare is an innovative application that provides a
                            platform for sharing books within the community. Our
                            idea originated from a desire to enable book lovers to
                            share books easily without the hassle of physical visits
                            to libraries or bookstores. With ShelfShare, users can
                            search for books they are interested in and contact
                            owners for borrowing without leaving their communities.
                            ShelfShare is not just about convenience; it is also about
                            creating a community where people can come together to share
                            their love for books. We believe that sharing books can create a
                            ripple effect that extends beyond the act of reading. By sharing
                            books, we can promote cultural exchange and understanding,
                            connect with others in our community, and contribute to
                            sustainability by reducing waste and resource consumption.
                            Additionally, ShelfShare recognizes the unique needs of
                            individuals who have limited access to books in their native
                            languages, such as refugees and immigrants. Our app provides a
                            platform for sharing books in a variety of languages, promoting
                            language retention and cultural preservation. 
                            We believe that everyone should have access to quality reading
                            materials regardless of their financial situation. ShelfShare
                            offers a cost-effective solution for book enthusiasts to
                            exchange books and build a vibrant community around literature.
                            Join us in making the world a better place one book at a time
                            with ShelfShare.
                        </ReadMoreAbout>
                    </p>
                </div>
            </div>
            <h2 className='h2-about'>Meet our team</h2>
            <ul className="members">

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
                    <ReadMore>
                        Jacob is a software engineer who served as a mentor for
                        this project. He has had a great time seeing Shelf Share
                        come together as a full stack app through the extensive
                        efforts of the team members. Outside of work Jacob
                        enjoys reading, cooking, playing video games, and
                        spending time with his cats.
                    </ReadMore>
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
                        <ReadMore>
                            Nikki Graybeal is an apprentice frontend developer with
                            Code the Dream. As a self-taught developer and former
                            teacher, she enjoys the opportunity to collaborate with
                            and mentor others at CTD.
                        </ReadMore>
                    </p>
                </div>

                <div className="card">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="title">Larasati Sodjati</p>
                            <p className="job-title">Back End Team</p>
                        </div>
                        <img
                            src={Lara}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <p className="card-content">
                        <ReadMore>
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
                        </ReadMore>
                    </p>
                </div>

                <div className="card">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="title">Manizha Khorram</p>
                            <p className="job-title">Back End Team</p>
                        </div>
                        <img
                            src={Manizha}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <p className="card-content">
                        <ReadMore>
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
                        </ReadMore>
                    </p>
                </div>

                <div className="card">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="title">Ekaterina Bondareva</p>
                            <p className="job-title">Front End Team</p>
                        </div>
                        <img
                            src={Ekaterina}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <p className="card-content">
                        <ReadMore>
                            Kate was born in Russia and was passionate about
                            Information Technology since middle school. She obtained
                            a Master's degree in Applied Computer Science with a
                            focus on Finance and Economy. She worked as a manager in
                            the Finance field for international companies before
                            moving to the US, to the Research Triangle
                            Park area, in 2016. She is now pursuing her dream of
                            becoming a Full Stack Software Engineer. Kate is
                            grateful to CTD for changing her life and mindset, and
                            proud to be a part of the CTD family. She enjoys
                            volunteering, studying, challenging herself every day,
                            sharing her knowledge, and helping others. Kate believes
                            that everyone can make this world a better place to live
                            in! She is also a proud mom of two incredible boys. In
                            her free time, she loves hiking, traveling with her
                            family, and exploring new places.
                        </ReadMore>
                    </p>
                </div>

                <div className="card">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="title">Olga Musteta</p>
                            <p className="job-title">Front End Team</p>
                        </div>
                        <img
                            src={Olga}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <p className="card-content">
                        <ReadMore>
                            Olga moved to California in 2018, hoping to fulfill the
                            American dream. She holds a foreign BA in Computer
                            Science, a certificate in Database Management , an A+
                            certificate, and a Front End Development certificate
                            from CTD. Step by step she keeps moving
                            towards her goal of becoming a professional web
                            developer.
                        </ReadMore>
                    </p>
                </div>

                <div className="card">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="title">Simon Shurety</p>
                            <p className="job-title">Front End Team</p>
                        </div>
                        <img
                            src={Simon}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <p className="card-content">
                        <ReadMore>
                            Simon is an aspiring web developer originally from
                            London, UK and currently based in Recife, Brazil. His
                            interests include, cooking, travelling, fixing laptops,
                            hiking and reading. His biggest lesson from Practicum
                            has been to try and focus on progress over perfection.
                            As the famous saying goes 'A little progress every day
                            adds up to big results'.
                        </ReadMore>
                    </p>
                </div>

                <div className="card">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="title">Cecilia Rodriguez</p>
                            <p className="job-title">Front End Team</p>
                        </div>
                        <img
                            src={Cecilia}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <p className="card-content">
                        <ReadMore>
                            Cecilia is a Honduran native who was been living in the
                            United States the past seven years. Growing up, she had
                            always been interested in technology and design, but she
                            never had the opportunity to pursue it until she moved
                            to the US. Since joining CTD, Cecilia has been able to
                            explore her passion for technology and design further.
                            She also has a passion for helping Spanish-speaking
                            individuals. Being bilingual in English and Spanish, she
                            is able to connect with and assist those who may face
                            language barriers when seeking help or resources.
                            Outside of her studies, she enjoys spending time with
                            her family and reading.
                        </ReadMore>
                    </p>
                </div>
                <div className="card">
                    <div className="name-position-img">
                        <div className="name-title">
                            <p className="title">Rachel Westernmann</p>
                            <p className="job-title">Student observer</p>
                        </div>
                        <img
                            src={Rachel}
                            alt="Avatar"
                            className="profile-image"
                        />
                    </div>
                    <p className="card-content">
                        <ReadMore>
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
                        </ReadMore>
                    </p>
                </div>
            </ul>
            <a
                className="button1"
                href="https://shelf-share.onrender.com/api-docs/"
                target="_blank"
            >
                Swagger documents
            </a>
        </div>
    )
}
export default About