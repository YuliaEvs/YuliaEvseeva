import './skills.css';
// import hero from '../assets/girl987.jpg'

export default function Skills() {
    
    return (
        <section className="skills section" id='skills'>
            <div className='container flex-center'>
                <h1 className="section-title-01">Skills</h1>
                <h2 className="section-title-02">Skills</h2>
                <div className="content">
                    <div className="skills-description">
                        <h3>Education & Skills</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quisquam modi commodi sint excepturi fuga amet, corrupti error dolorem ea repudiandae ex labore obcaecati mollitia quia laudantium ducimus dignissimos? Quisquam!</p>
                    </div>
                    <div className="skills-info education-all">
                        <div className="education">
                            <h4><label>Education</label></h4>
                            <ul className="edu-list">
                                <li className="item">
                                    <span className='year'>2022-2023</span>
                                    <p><span>Computer Science</span> - Harvard</p>
                                </li>
                                <li className="item">
                                    <span className='year'>2021-2022</span>
                                    <p><span>Software Engineer</span> - Yale</p>
                                </li>
                                <li className="item">
                                    <span className='year'>2020-2021</span>
                                    <p><span>Jedi</span> - Space University</p>
                                </li>
                            </ul>
                        </div>
                        <div className="education">
                            <h4><label>Skills</label></h4>
                            <ul className="bars">
                                <li className="bar">
                                    <div className="info">
                                        <span>HTML</span>
                                        <span>95%</span>
                                    </div>
                                    <div className="line html"></div>
                                </li>
                                <li className="bar">
                                    <div className="info">
                                        <span>CSS</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="line css"></div>
                                </li>
                                <li className="bar">
                                    <div className="info">
                                        <span>JavaScript</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="line javascript"></div>
                                </li>
                                <li className="bar">
                                    <div className="info">
                                        <span>C#</span>
                                        <span>60%</span>
                                    </div>
                                    <div className="line csharp"></div>
                                </li>
                                <li className="bar">
                                    <div className="info">
                                        <span>Java</span>
                                        <span>60%</span>
                                    </div>
                                    <div className="line java"></div>
                                </li>
                            </ul>
                        </div>
                        <div className="education">
                            <h4><label>Awards</label></h4>
                            <ul className="edu-list">
                                <li className="item">
                                    <span className='year'>2027</span>
                                    <p><span>Best Developer</span></p>
                                </li>
                                <li className="item">
                                    <span className='year'>2026</span>
                                    <p><span>Best Software Engineer</span></p>
                                </li>
                                <li className="item">
                                    <span className='year'>2025</span>
                                    <p><span>Best Freelancer</span></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="skills-description">
                        <h3>Work & Experience</h3>
                    </div>
                    <div className="skills-info">
                        <div className="experience-card">
                            <div className="upper">
                                <h3>Web Developer</h3>
                                <h5>Full Time / Remote</h5>
                                <span>2026-2027</span>
                            </div>
                            <div className="hr"></div>
                            <h4><label>SpaceX</label></h4>
                            <p>I design and develop services and drink coffee</p>
                        </div>
                        <div className="experience-card">
                            <div className="upper">
                                <h3>Software Engineer</h3>
                                <h5>Full Time / Remote</h5>
                                <span>2025-2026</span>
                            </div>
                            <div className="hr"></div>
                            <h4><label>Apple</label></h4>
                            <p>I design and develop services and drink coffee</p>
                        </div>
                        <div className="experience-card">
                            <div className="upper">
                                <h3>Front-End Developer</h3>
                                <h5>Full Time / Remote</h5>
                                <span>2025-2027</span>
                            </div>
                            <div className="hr"></div>
                            <h4><label>Google</label></h4>
                            <p>I design and develop services and drink coffee</p>
                        </div>
                        <div className="experience-card">
                            <div className="upper">
                                <h3>Freelancer</h3>
                                <h5>Full Time</h5>
                                <span>2025-2026</span>
                            </div>
                            <div className="hr"></div>
                            <h4><label>Microsoft</label></h4>
                            <p>I design and develop services and drink coffee</p>
                        </div>
                        <div className="experience-card">
                            <div className="upper">
                                <h3>Jadi</h3>
                                <h5>Full Time</h5>
                                <span>2024-2025</span>
                            </div>
                            <div className="hr"></div>
                            <h4><label>Space</label></h4>
                            <p>I design and develop services and drink coffee</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
