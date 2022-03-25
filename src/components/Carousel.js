import "../index.css"
import MyCarousel from "react-elastic-carousel"
import Item from "./Item"
import i1 from "../assets/i1.jpg"
import i2 from "../assets/i2.jpg"
import i3 from "../assets/i3.jpg"
import i4 from "../assets/i4.jpg"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    // { width: 1200, itemsToShow: 4 },
  ];
export default function Carousel(){
    return (
        <>
          <div className="carousel">
            <MyCarousel breakPoints={breakPoints}>
              <Item><img alt="" src={i1} className="carousel--image"/></Item>
              <Item><img alt="" src={i2} className="carousel--image"/></Item>
              <Item><img alt="" src={i3} className="carousel--image"/></Item>
              <Item><img alt="" src={i4} className="carousel--image"/></Item>
              <Item><img alt="" src={i2} className="carousel--image"/></Item>
              <Item><img alt="" src={i3} className="carousel--image"/></Item>
            </MyCarousel>
          </div>
        </>
      );
}
