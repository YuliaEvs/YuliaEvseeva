import './services.css'
import '../main'

export default function Projects() {
    return (
        <section className='services section' id='services'>
            <div className="container flex-center">
                <h1 className="section-title-01">Services</h1>
                <h2 className="section-title-02">Services</h2>
                <div className="content">
                    <div className="services-description">
                        <h3>What I Provide</h3>
                    </div>
                    <ul className="service-list">
                        <li className="service-container">
                            <div className="service-card">
                                <i className='fas fa-pencil-ruler'></i>
                                <h3>UI/UX Consultancy</h3>
                                <div className="learn-more-btn">Learn More <i className='fas fa-long-arrow-alt-right'></i>
                                </div>
                            </div>
                            <div className="service-modal flex-center">
                                <div className="service-modal-body">
                                    <i className='fas fa-times modal-close-btn'></i>
                                    <h3>UI/UX Consultancy</h3>
                                    <h4>What is UX consulting?</h4>
                                    <p>UX consulting helps companies improve their product's overall usability and optimaze expenses by implementing the right UX processes, methods, and tools.</p>
                                    <h4>What I provide</h4>
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i>Establish the right UX processes</li>
                                        <li><i className="fas fa-check-circle"></i>Create exceptional user experiences</li>
                                        <li><i className="fas fa-check-circle"></i>Discover new business opportunities</li>
                                        <li><i className="fas fa-check-circle"></i>Save resources</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="service-container">
                            <div className="service-card">
                                <i className='fas fa-photo-video'></i>
                                <h3>Branding &Design</h3>
                                <div className="learn-more-btn">Learn More <i className='fas fa-long-arrow-alt-right'></i>
                                </div>
                            </div>
                            <div className="service-modal flex-center">
                                <div className="service-modal-body">
                                    <i className='fas fa-times modal-close-btn'></i>
                                    <h3>Branding &Design</h3>
                                    <h4>What is Brand &Design?</h4>
                                    <p>Brand Design can be defined as one of the crucial marketing practices of creating the name, logo, design, and the symbolic elements related to the brand to create a distinctive identity in comparison to the other brands in the market and also providing impetus to the product differentiation.</p>
                                    <h4>What I provide</h4>
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i>Logo Design</li>
                                        <li><i className="fas fa-check-circle"></i>Banner Design</li>
                                        <li><i className="fas fa-check-circle"></i>VisualIdentity Packages</li>
                                        <li><i className="fas fa-check-circle"></i>Business Cards & Business Systems</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="service-container">
                            <div className="service-card">
                                <i className='fas fa-file-code'></i>
                                <h3>Web Development</h3>
                                <div className="learn-more-btn">Learn More <i className='fas fa-long-arrow-alt-right'></i>
                                </div>
                            </div>
                            <div className="service-modal flex-center">
                                <div className="service-modal-body">
                                    <i className='fas fa-times modal-close-btn'></i>
                                    <h3>Web Development</h3>
                                    <h4>What is Web Development?</h4>
                                    <p>Web Development services are used to design, build, support, and evolve all types of web-based software.</p>
                                    <h4>What I provide</h4>
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i>Web application development</li>
                                        <li><i className="fas fa-check-circle"></i>Testing</li>
                                        <li><i className="fas fa-check-circle"></i>Maintenance</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}