
// import { useEffect, useState } from 'react';
// import './Background.css';
// import Video1 from '../../assets/Video1.mp4';
// import Image2 from '../../assets/Image2.jpeg';
// import Image3 from '../../assets/Image3.jpeg';
// import Image4 from '../../assets/Image4.jpg';
// import Image5 from '../../assets/Image5.jpeg';

// const Background = () => {
//     const images = [Image2, Image3, Image4, Image5];
//     const [currentIndex, setCurrentIndex] = useState(-1); // Start with -1 to show video first

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
//         }, 3000); // Change every 3 seconds

//         return () => clearInterval(interval); // Cleanup interval on unmount
//     }, []);

//     return (
//         <div className="background-container">
//             {currentIndex === -1 ? ( // Show video first
//                 <video className='background' autoPlay loop muted>
//                     <source src={Video1} type='video/mp4' />
//                 </video>
//             ) : (
//                 <img src={images[currentIndex]} className='background' alt="Background" />
//             )}
//         </div>
//     );
// };

// export default Background;

// import { useEffect, useState } from 'react';
// import './Background.css';
// import Video1 from '../../assets/Video1.mp4';
// import Image2 from '../../assets/Image2.jpeg';
// import Image3 from '../../assets/Image3.jpeg';
// import Image4 from '../../assets/Image4.jpg';
// import Image5 from '../../assets/Image5.jpeg';

// const Background = () => {
//     const images = [Image2, Image3, Image4, Image5];
//     const [currentIndex, setCurrentIndex] = useState(-1); // Start with -1 to show video first

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
//         }, 3000); // Change every 3 seconds

//         return () => clearInterval(interval); // Cleanup interval on unmount
//     }, []);

//     return (
//         <div className="background-container">
//             {/* Quotes Section */}
//             <div className="quotes">
//                 <h1 className="quote-main">Nourish your body, mind, and soul.</h1>
//                 <p className="quote-sub">Every workout is progress, no matter how small it is.</p>
//             </div>

//             {/* Background (Video First, Then Images) */}
//             {currentIndex === -1 ? ( 
//                 <video className='background' autoPlay loop muted>
//                     <source src={Video1} type='video/mp4' />
//                 </video>
//             ) : (
//                 <img src={images[currentIndex]} className='background' alt="Background" />
//             )}
//         </div>
//     );
// };

// export default Background;



import { useEffect, useState } from 'react';
import './Background.css';
import Video1 from '../../assets/Video1.mp4';
import Image2 from '../../assets/Image2.jpeg';
import Image3 from '../../assets/Image3.jpeg';
import Image4 from '../../assets/Image4.jpg';
import Image5 from '../../assets/Image5.jpeg';

const Background = () => {
    const slides = [Video1, Image2, Image3, Image4, Image5]; // Video + Images in slider
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="background-container">
            {/* Quotes Section (Always Visible) */}
            <div className="quotes">
                <h1 className="quote-main"> "Nourish your body, mind and soul"</h1>
                {/* <p className="quote-sub">Every workout is progress, no matter how small it is.</p> */}
            </div>

            {/* Slider (Video First, Then Images) */}
            {currentIndex === 0 ? (
                <video className='background' autoPlay loop muted>
                    <source src={Video1} type='video/mp4' />
                </video>
            ) : (
                <img src={slides[currentIndex]} className='background' alt="Background" />
            )}
        </div>
    );
};

export default Background;

