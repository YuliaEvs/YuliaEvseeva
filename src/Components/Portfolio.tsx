import './portfolio.css';
import portfolio1 from '../assets/portfolio-1.jpg';
import portfolio2 from '../assets/portfolio-2.jpg';
import portfolio3 from '../assets/portfolio-3.jpg';
import portfolio4 from '../assets/portfolio-4.jpg';
import portfolio5 from '../assets/portfolio-5.jpg';
import portfolio6 from '../assets/portfolio-6.jpg';

export default function Portfolio() {
    return (
        <section className='portfolio section' id='portfolio'>
            <div className="container flex-center">
                <h1 className="section-title-01">Portfolio</h1>
                <h2 className="section-title-02">Portfolio</h2>
                <div className="content">
                    <div className="portfolio-list">
                        <div className="img-card-container">
                            <div className="img-card">
                                <div className="overlay"></div>
                                <div className="info">
                                    <h3>Web Design</h3>
                                    <span>JavaScript</span>
                                </div>
                                <img src={portfolio1} alt="" />
                            </div>
                            <div className="portfolio-model flex-center">
                                <div className="portfolio-model-body">
                                    <i className='fas fa-times portfolio-close-btn'></i>
                                    <h3>Web Design</h3>
                                    <img src={portfolio1} alt="" />
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dignissimos facilis a amet cumque corporis, ea distinctio hic inventore quos voluptatibus aliquam architecto. Praesentium, ab ipsa aspernatur reprehenderit iusto cupiditate.</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-card-container">
                            <div className="img-card">
                                <div className="overlay"></div>
                                <div className="info">
                                    <h3>Web Development</h3>
                                    <span>React</span>
                                </div>
                                <img src={portfolio2} alt="" />
                            </div>
                            <div className="portfolio-model flex-center">
                                <div className="portfolio-model-body">
                                    <i className='fas fa-times portfolio-close-btn'></i>
                                    <h3>Web Development</h3>
                                    <img src={portfolio2} alt="" />
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dignissimos facilis a amet cumque corporis, ea distinctio hic inventore quos voluptatibus aliquam architecto. Praesentium, ab ipsa aspernatur reprehenderit iusto cupiditate.</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-card-container">
                            <div className="img-card">
                                <div className="overlay"></div>
                                <div className="info">
                                    <h3>Back-End Development</h3>
                                    <span>C#</span>
                                </div>
                                <img src={portfolio3} alt="" />
                            </div>
                            <div className="portfolio-model flex-center">
                                <div className="portfolio-model-body">
                                    <i className='fas fa-times portfolio-close-btn'></i>
                                    <h3>Back-End Development</h3>
                                    <img src={portfolio3} alt="" />
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dignissimos facilis a amet cumque corporis, ea distinctio hic inventore quos voluptatibus aliquam architecto. Praesentium, ab ipsa aspernatur reprehenderit iusto cupiditate.</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-card-container">
                            <div className="img-card">
                                <div className="overlay"></div>
                                <div className="info">
                                    <h3>Back-End Development</h3>
                                    <span>Java</span>
                                </div>
                                <img src={portfolio4} alt="" />
                            </div>
                            <div className="portfolio-model flex-center">
                                <div className="portfolio-model-body">
                                    <i className='fas fa-times portfolio-close-btn'></i>
                                    <h3>Front-End Development</h3>
                                    <img src={portfolio4} alt="" />
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dignissimos facilis a amet cumque corporis, ea distinctio hic inventore quos voluptatibus aliquam architecto. Praesentium, ab ipsa aspernatur reprehenderit iusto cupiditate.</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-card-container">
                            <div className="img-card">
                                <div className="overlay"></div>
                                <div className="info">
                                    <h3>Front-End Development</h3>
                                    <span>Game</span>
                                </div>
                                <img src={portfolio5} alt="" />
                            </div>
                            <div className="portfolio-model flex-center">
                                <div className="portfolio-model-body">
                                    <i className='fas fa-times portfolio-close-btn'></i>
                                    <h3>Web Design</h3>
                                    <img src={portfolio5} alt="" />
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dignissimos facilis a amet cumque corporis, ea distinctio hic inventore quos voluptatibus aliquam architecto. Praesentium, ab ipsa aspernatur reprehenderit iusto cupiditate.</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-card-container">
                            <div className="img-card">
                                <div className="overlay"></div>
                                <div className="info">
                                    <h3>Web Design</h3>
                                    <span>Youtube</span>
                                </div>
                                <img src={portfolio6} alt="" />
                            </div>
                            <div className="portfolio-model flex-center">
                                <div className="portfolio-model-body">
                                    <i className='fas fa-times portfolio-close-btn'></i>
                                    <h3>Web Design</h3>
                                    <img src={portfolio6} alt="" />
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas dignissimos facilis a amet cumque corporis, ea distinctio hic inventore quos voluptatibus aliquam architecto. Praesentium, ab ipsa aspernatur reprehenderit iusto cupiditate.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}