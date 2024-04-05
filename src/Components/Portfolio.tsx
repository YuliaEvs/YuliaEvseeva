import './portfolio.css';
import portfolio1 from '../assets/portfolio-1.jpg';
// import portfolio2 from '../assets/portfolio-2.jpg';
// import portfolio3 from '../assets/portfolio-3.jpg';
// import portfolio4 from '../assets/portfolio-4.jpg';
// import portfolio5 from '../assets/portfolio-5.jpg';
// import portfolio6 from '../assets/portfolio-6.jpg';

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
                                <div className="overlay">
                                    <div className="info">
                                        <h3>Web Design</h3>
                                        <span>Youtube</span>
                                    </div>
                                    <img src={portfolio1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}