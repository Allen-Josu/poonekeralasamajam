import React from 'react';
import 'swiper/css';

import "../css/notification.css";
import ThumbnailCard from './ThumbnailCard';
import BreadCrump from './ui/BreadCrump';

const cardData = [
  {
    name: "Arts",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "src/assets/img/gallery/prize_dis.jpg",
    href: "/more-gallery"
  },
  {
    name: "Sports",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "src/assets/img/gallery/prize_dis.jpg",
    href: "/more-gallery"
  },
  {
    name: "Celebration",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "src/assets/img/gallery/prize_dis.jpg",
    href: "/more-gallery"
  },  
  {
    name: "Arts",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "src/assets/img/gallery/prize_dis.jpg",
    href: "/more-gallery"
  },
  {
    name: "Sports",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "src/assets/img/gallery/prize_dis.jpg",
    href: "/more-gallery"
  },
  {
    name: "Celebration",
    description: "Passionate about development and design, I carry out projects at the request of users.",
    imgSrc: "src/assets/img/gallery/prize_dis.jpg",
    href: "/more-gallery"
  },
];

const BetweenGallery: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', padding: '20px' }}>
      <div className="flex justify-start mt-5" style={{paddingLeft:"7%"}}>
        <BreadCrump items={["Gallery"]} />
      </div>
      <section style={{backgroundColor: 'white'}}  className="notifications-container">
        {/* <div  className="section-title"> */}
          <h2 className='bgallerytitle'>Welcome to PKS Gallery</h2>
        {/* </div> */}
        <div className="d-flex justify-content-center align-items-center">
          <div className="notification-content">
            {cardData.map((items, index) => (
              <ThumbnailCard key={index} items={items} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BetweenGallery;
