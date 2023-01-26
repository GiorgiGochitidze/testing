import { useState } from "react";


const AboutUs2 = () => {
    const [text, setText] = useState(false)
    const [text1, setText1] = useState(false)
    const [text2, setText2] = useState(false)
    const [text3, setText3] = useState(false)
    const [text4, setText4] = useState(false)

    return ( 
        <div className="about-us-container">
            <div className="about-content" onMouseEnter={() => text ? setText(false) : setText(true)} onMouseLeave={() => setText(false)}>
                <h1 className="about-name">Mission</h1>
                {text && <div className="texts-content">
                    <div className="images-containers">
                        <img src="../misia1.jpg" alt="" />
                        <img src="../misia2.jpg" alt="" />
                        <img src="../misia3.jpg" alt="" />
                    </div>
                    <p style={{lineHeight: "30px", paddingInline: "10px"}}>Strengthening employment opportunities in the local and international labor market, especially for youth and women, by increasing access to non-formal education and promoting employment policies.</p>
                </div>
                }
            </div>

            <div className="about-content" onMouseEnter={() => text1 ? setText1(false) : setText1(true)} onMouseLeave={() => setText1(false)}>
                <h1 className="about-name">View</h1>
                {text1 && <div className="texts-content">
                    <div className="images-containers">
                        <img src="../misia4.jpg" alt="" />
                        <img src="../misia5.jpg" alt="" />
                    </div>
                    <p style={{lineHeight: "30px", paddingInline: "10px"}}>Everyone has the right to be happy, to have the freedom to choose a profession, to be employed and to realize the principles of decent work.</p>
                </div>
                }
            </div>

            <div className="about-content" onMouseEnter={() => text2 ? setText2(false) : setText2(true)} onMouseLeave={() => setText2(false)}>
                <h1 className="about-name">Purpose</h1>
                {text2 && <div className="texts-content">
                    <div className="images-containers">
                        <img src="../misia4.jpg" alt="" />
                        <img src="../misia5.jpg" alt="" />
                    </div>
                    <p style={{lineHeight: "30px", paddingInline: "10px"}}>
                        <ul>
                            <li>promotion of professional and career development of people;</li>
                            <li>creation of a strong professional network between the state, educational institutions, employers and job seekers;</li>
                            <li>promoting the introduction of decent working conditions;</li>
                            <li>Support in creating an environment free of discrimination and harassment at workplaces:</li>
                            <li>Encouraging the participation of youth and women in socio-economic processes and strengthening their involvement.</li>
                        </ul>
                    </p>
                </div>
                }
            </div>

            <div className="about-content" onMouseEnter={() => text3 ? setText3(false) : setText3(true)} onMouseLeave={() => setText3(false)}>
                <h1 className="about-name">Values</h1>
                {text3 && <div className="texts-content">
                    <div className="images-containers">
                        <img src="../misia4.jpg" alt="" />
                        <img src="../misia5.jpg" alt="" />
                    </div>
                    <p style={{lineHeight: "30px", paddingInline: "10px"}}>
                            <p>1. respect and love; personal and professional motivation for people's happiness;</p>
                            <p>2. Acceptance and recognition: actively listening to people, sharing people's rights, respecting individualism;</p>
                            <p>3. Asking for and receiving help; Developing opportunities for people;</p>
                            <p>4. Positive thinking: self-awareness and concern for people's well-being</p>
                            <p>5. Critical thinking: creativity for change and promotion of alternative thinking;</p>
                            <p>6. "Different does not mean bad": the person is not subject to judgment, we can only improve and change the behavior;</p>
                            <p>7. "You don't have a right until you fulfill it": every person has the right to education, employment and life;</p>
                            <p>8. "Care: strengthening social responsibility and professional volunteering".</p>
                            <p>9. "Healthy behavior: good citizenship and introduction of positive changes";</p>
                            <p>10. Right and freedom of choice: personal self-awareness and creation of variety of choices;</p>
                            <p>11. Inspiration: sharing knowledge and experience, selfless motivation to achieve the goal.</p>
                    </p>
                </div>
                }
            </div>

            <div className="about-content" onMouseEnter={() => text4 ? setText4(false) : setText4(true)} onMouseLeave={() => setText4(false)}>
                <h1 className="about-name">Basics</h1>
                {text4 && <div className="texts-content">
                    <div className="images-containers">
                        <img src="../misia4.jpg" alt="" />
                        <img src="../misia5.jpg" alt="" />
                    </div>
                    <p style={{lineHeight: "30px", paddingInline: "10px"}}>
                    Saorsa is a membership-based non-entrepreneurial (non-profit) legal entity founded on March 15, 2018.
                     "Saorsa" is a membership-based civil society organization (CSO) and
                     managed through the following structures:
                     • General meeting.
                     • Supervisory Board.
                     • Executive Director.

                    <p>The general meeting and the supervisory board are governing structures,
                     And the organization is headed by the executive director. supervisory
                     The members of the board are elected by the members of the general meeting, and the executive director
                     Selection and appointment are made by the decision of the Supervisory Board.</p>

                    <p>The general assembly is the highest governing body, through which
                     Members discuss issues relevant to the organization and members, issue
                     Makes recommendations and provides feedback to the Supervisory Board and the Executive
                     with the director. Each member of "Saorsa" must attend the general meeting and
                     to participate in voting.</p>
                    </p>

                    <p>
                    The Supervisory Board determines the agenda of the organization and provides
                    which should be in accordance with the declared values ​​of "Saorsa".
                    with the principles. Board members have the responsibility to discuss and resolve
                    key strategic issues and contribute to the leadership of the organization
                    in establishing the necessary prerequisites for effective work.
                    The members of the Supervisory Board are elected by the members of "Saorsa" from their own ranks, two
                    for a year. A member can be re-elected as a member of the Supervisory Board
                    Just once. The Supervisory Board consists of no more than five members. one
                    During the election cycle, no more than three members out of five members are changed in order to
                    The continuity of the business and the management team of "Saorsa" should be preserved
                    Support. Powers and matters they decide
                    Jointly by a simple majority of votes, documented by the organization
                    in the statute.
                    </p>

                    <p>
                    The Executive Director of "Saorsa" is responsible for the leadership of the organization
                    and management. He works closely with the Supervisory Board of the organization
                    Formation of a strategic vision in the process. And later, provides
                    raising the motivation of the organization's employees and their support
                    in achieving the organization's vision and mission. The executive director performs the
                    Basic functions that are essentially important and effective
                    for executive directors of non-governmental sector organizations,
                    such as managing human resources, organizing daily activities
                    and monitoring of completed works, attracting financial resources,
                    Establishing communications, planning, developing strategies, marketing,
                    solving problems and so on
                    </p>

                    <p>
                    Features and advantages of the Saorsa team:
                    Reliability, professionalism, loyalty, teamwork, stability, openness and willingness to innovate; Diligence, sincerity, impartiality, perseverance, optimism.
                    International knowledge and education, diverse and long-term work experience, work experience in local and international public, private, non-governmental organizations, exclusive experience in drawing up, managing and implementing international and development projects; practical experience of protection of fundamental human rights and freedoms;
                    Workforce management and leadership skills, adherence to ethical professional standards, social and emotional intelligence.
                    Projects, trainings and services:
                        <ul>
                            <li>-   employability skills;</li>
                            <li>-   professional orientation and career development;</li>
                            <li>-   professional communications;</li>
                            <li>-   personal growth and development;</li>
                            <li>-   managing conflicts and stress at the workplace</li>
                            <li>-   civic involvement and leadership;</li>
                            <li>-   financial literacy;</li>
                            <li>-   entrepreneurship;</li>
                            <li>-   legal consultation;</li>
                            <li>-   children's rights;</li>
                            <li>-   gender mainstreaming and budgeting;</li>
                            <li>-   recruiting;</li>
                            <li>-   career enhancement of employees;</li>
                            <li>-   organization management and development;</li>
                            <li>-   organizational culture of labor and corporate loyalty;</li>
                            <li>-   work performance indicators and motivation;</li>
                            <li>-   effective service skills;</li>
                            <li>-   Bullying prevention and intervention in the educational environment;</li>
                            <li>-   project management;</li>
                            <li>-   Creation of an internal policy document on equality in the workplace;</li>
                            <li>-   research design and implementation;</li>
                            <li>-   internship program;</li>
                            <li>-   exchange program;</li>
                            <li>-   planning and implementation of measures to promote employment.</li>
                            <li>-   foreign language;</li>
                        </ul>
                    </p>

                    <p>
                    Areas of activity: quality education, career development, employment, human rights, entrepreneurship, civic activism, gender equality, decent work and economic empowerment.
                     Target group: job seekers and employed, especially young people and women.
                     Implemented projects/services:

                        <p>
                        1. Livelihoods for young people "Create and get employed" - 2018
                        US Embassy in Georgia
                        2. Career development program for students living in Adjara - 2018-2019, US Embassy in Georgia
                        3. "Voice of rural women" for women living in mountainous Adjara - 2019-2020, US Embassy in Georgia
                        4. Vocational orientation program for students living in mountainous Adjara - 2019, Ministry of Education, Sports and Culture of the Autonomous Republic of Adjara
                        5. Voice of women living in rural areas I I for women living in Khulo - 2020-2021
                        US Embassy in Georgia
                        6. Women for Democratic Engagement – 2020-2021, Royal Netherlands Embassy
                        7. Promoting Business and Policy Dialogue for Women Living in Adjara - 2021-2022, USAID Economic Governance Program
                        8. Vocational training program for young girls and women - 2022 - Women's Foundation in Georgia.
                        </p>

                        <p>
                        The organization provided paid services for career development, employability skills,
                        Bullying prevention and intervention, motivation, labor and women's rights, civic leadership, active citizenship, human rights, entrepreneurship.
                        </p>
                    </p>
                </div>
                }
            </div>
        </div>
     );
}
 
export default AboutUs2;