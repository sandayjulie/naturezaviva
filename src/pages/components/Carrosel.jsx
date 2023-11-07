import Carousel from 'react-bootstrap/Carousel';

function Carrosel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/8102021/pexels-photo-8102021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={750} 
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/7195174/pexels-photo-7195174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={750}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/8102128/pexels-photo-8102128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={750}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrosel;