import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Products from '../Products/Products';

const Home = () => {
  return (
    <div>
      <Carousel fade>

        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="https://c1.wallpaperflare.com/preview/418/819/714/mobile-online-dare-shopping-cart.jpg" style={{height:500}} alt="First Slide" />
          <Carousel.Caption>
            <h1>STAY HOME and SHOP ONLINE</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="https://img.freepik.com/free-photo/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.jpg?w=2000" style={{height:500}} alt="Second slide" />
          <Carousel.Caption>
            <h1  style={{float:"right"}}>FOR HER</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="https://www.invaluable.com/blog/wp-content/uploads/sites/77/2018/04/invaluable-vintage-jewelry-hero_preview.jpg" style={{height:500}} alt="Third slide" />
          <Carousel.Caption>
            <h1 style={{float:"right"}}>JEWELLERY</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?w=2000" style={{height:500}} alt="Fourth slide" />
          <Carousel.Caption>
            <h1 style={{float:"right"}}>FOR HIM</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="https://wallpaperaccess.com/full/829212.jpg" style={{height:500}} alt="Fifth slide" />
          <Carousel.Caption>
            <h1>EXCITING DEALS</h1>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <br></br><br></br>
      <div className='Tile'>
        <Products/>
      </div>
    </div>
  );
}

export default Home;