import './clients.css';
import client1 from "../assets/client1QV.png";
import client2 from "../assets/client2RJJ.png";
import client3 from "../assets/client31545.png";
import * as Swiper from '../swiper-bundle.min.js';

export default function Clients() {

  return (
    <div className="our-client sub-section">
      <div className="container flex-center">
        <h1 className="section-title-01">Clients</h1>
        <h2 className="section-title-02">Clients</h2>
        <div className="content">
          <div className="swiper client-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide flex-center">
                <div className="client-img">
                  <img src={client1} alt="" />
                </div>
                <div className="client-details">
                  <p>Hi I'm Robert Bot and I am designer & developer who dream making the world better place for robots. </p>
                  <h3>Robert Bot</h3>
                  <span>Web Developer</span>
                </div>
              </div>
              <div className="swiper-slide flex-center">
                <div className="client-img">
                  <img src={client2} alt="" />
                </div>
                <div className="client-details">
                  <p>Outstanding work! I extreamly happy I found this person! </p>
                  <h3>Krusty Nail</h3>
                  <span>Graphic Designer</span>
                </div>
              </div>
              <div className="swiper-slide flex-center">
                <div className="client-img">
                  <img src={client3} alt="" />
                </div>
                <div className="client-details">
                  <p>These person really like robots! She provide a great support for our community with superb kindness and enthusiasm! I am very happy I've purchased this maintance service! </p>
                  <h3>Pierce Metal</h3>
                  <span>App Developer</span>
                </div>
              </div>
            </div>
            <div className="swiper-button-next">
              <i className='fas fa-chevron-right'></i>
            </div>
            <div className="swiper-button-prev">
            <i className='fas fa-chevron-left'></i>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
