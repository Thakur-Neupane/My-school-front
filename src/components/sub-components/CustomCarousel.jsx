import Carousel from "react-bootstrap/Carousel";
import a from "../../assets/a.png";
import b from "../../assets/b.png";
import c from "../../assets/c.png";

export const CustomCarousel = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={a} alt="First slide" />
        <Carousel.Caption className="bg-dark p-2 rounded text-light opacity-2">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={b} alt="Second slide" />
        <Carousel.Caption className="text-light">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={c} alt="Third slide" />
        <Carousel.Caption className="text-light">
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
