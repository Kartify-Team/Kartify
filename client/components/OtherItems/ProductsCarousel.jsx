import React from 'react';
import {
  Link,
  useRouteMatch
} from "react-router-dom";
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import { Carousel } from 'react-responsive-carousel';
// import Carousel, { Dots } from '@brainhubeu/react-carousel';
import Slider from "react-slick";
import ProductCard from './ProductCard.jsx';

const ProductsCarousel = ({products, styles, ratings, changeProduct}) => {
  const settings = {
    dots: false, // ?
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };
  if (products) {
    return (
      <div className='sliderContainer'>
        {products.map((product, i) => {
          return (
            <Link key={product.id} to={`${product.id}`}>
              <ProductCard product={product} style={styles[i]} rating={ratings[i]} changeProduct={changeProduct}/>
            </Link>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className='sliderContainer'></div>
    );
  }
};
export default ProductsCarousel;

//   render() {
//     const settings = {
//       dots: false, // ?
//       infinite: false,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 3
//     };
//     return (
//       <div>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//           <div>
//             <h3>9</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }


// render() {
//   return (
//     <Carousel
//     slidesPerPage={2}
//     slidesPerScroll={1}
//     arrows
//     slides={[
//       <img src='https://brainhubeu.github.io/react-carousel/static/mona.7a1ceae9.jpg' />,
//       <img src='https://brainhubeu.github.io/react-carousel/static/scream.ee207a05.jpg' />,
//       <img src='https://brainhubeu.github.io/react-carousel/static/starry-night.39eed0a1.jpg' />
//     ]}
//     />
//   )
// }


  
  // render() {
  //   return (
  //   <Carousel>
  //   <div>
  //       <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fs.yimg.com%2Fny%2Fapi%2Fres%2F1.2%2FSvYwQSLCi8Cj8OVfazzrfA--~A%2FYXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw%2Fhttp%3A%2F%2Fmedia.zenfs.com%2Fen-US%2Fhomerun%2Fnews.mashable%2Fefa5368949dfd11b98801d4f86053e50&imgrefurl=https%3A%2F%2Fnews.yahoo.com%2F100-years-corgi-beauty-60-120000358.html&docid=ng86TRRvNvWH2M&tbnid=4irmO9cjpjN0AM%3A&vet=10ahUKEwjeu8OAmazmAhWuwVkKHUQYDxMQMwhLKAUwBQ..i&w=575&h=323&itg=1&bih=798&biw=1361&q=corgi%20images%20api&ved=0ahUKEwjeu8OAmazmAhWuwVkKHUQYDxMQMwhLKAUwBQ&iact=mrc&uact=8" />
  //       <p className="legend">Legend 1</p>
  //   </div>
  //   <div>
  //       <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fs.yimg.com%2Fny%2Fapi%2Fres%2F1.2%2FSvYwQSLCi8Cj8OVfazzrfA--~A%2FYXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw%2Fhttp%3A%2F%2Fmedia.zenfs.com%2Fen-US%2Fhomerun%2Fnews.mashable%2Fefa5368949dfd11b98801d4f86053e50&imgrefurl=https%3A%2F%2Fnews.yahoo.com%2F100-years-corgi-beauty-60-120000358.html&docid=ng86TRRvNvWH2M&tbnid=4irmO9cjpjN0AM%3A&vet=10ahUKEwjeu8OAmazmAhWuwVkKHUQYDxMQMwhLKAUwBQ..i&w=575&h=323&itg=1&bih=798&biw=1361&q=corgi%20images%20api&ved=0ahUKEwjeu8OAmazmAhWuwVkKHUQYDxMQMwhLKAUwBQ&iact=mrc&uact=8" />
  //       <p className="legend">Legend 2</p>
  //   </div>
  //   <div>
  //       <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fs.yimg.com%2Fny%2Fapi%2Fres%2F1.2%2FSvYwQSLCi8Cj8OVfazzrfA--~A%2FYXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw%2Fhttp%3A%2F%2Fmedia.zenfs.com%2Fen-US%2Fhomerun%2Fnews.mashable%2Fefa5368949dfd11b98801d4f86053e50&imgrefurl=https%3A%2F%2Fnews.yahoo.com%2F100-years-corgi-beauty-60-120000358.html&docid=ng86TRRvNvWH2M&tbnid=4irmO9cjpjN0AM%3A&vet=10ahUKEwjeu8OAmazmAhWuwVkKHUQYDxMQMwhLKAUwBQ..i&w=575&h=323&itg=1&bih=798&biw=1361&q=corgi%20images%20api&ved=0ahUKEwjeu8OAmazmAhWuwVkKHUQYDxMQMwhLKAUwBQ&iact=mrc&uact=8" />
  //       <p className="legend">Legend 3</p>
  //   </div>
  //   </Carousel>
  //   )

  // render() {
  //   return (
  //     <CarouselProvider
  //       naturalSlideWidth={10}
  //       naturalSlideHeight={10}
  //       totalSlides={3}
  //     >
  //       <Slider>
  //         <Slide index={0}>I am the first Slide.</Slide>
  //         <Slide index={1}>I am the second Slide.</Slide>
  //         <Slide index={2}>I am the third Slide.</Slide>
  //       </Slider>
  //       <ButtonBack>Back</ButtonBack>
  //       <ButtonNext>Next</ButtonNext>
  //     </CarouselProvider>
  //   )
  // }
