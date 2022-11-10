import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import classes from './CarouselPic.module.css';

function CarouselPic() {
  return (
    <div className={classes.carouselContent}>
    <Carousel variant='dark'>
      <Carousel.Item>
        <Image
          className={classes.carouselImg}
          src="/background1.jpg"
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className={classes.carouselImg}
          src="/background2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
         className={classes.carouselImg}
          src="/background3.jpg"
          alt="Third slide"
    
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselPic;
