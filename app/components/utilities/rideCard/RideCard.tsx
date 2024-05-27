import { useRef, useState } from "react";
import Image from "next/image";
import RideSlider from "../../utilities/rideSlider/RideSlider";
import { TrendingRides } from "@/app/interfaces/cards/cards";
import "./ride-card.scss";

const RideCard = ({rideContent, handleViewDetails, scroll}: {rideContent: TrendingRides[], handleViewDetails: any, scroll: boolean}) => {
  const rowRef = useRef<any>(null)
  const [index, setIndex] = useState(-1) // For showing image navigation arrows on mouse hover on card.
  const [isMovedLeft, setIsMovedLeft] = useState(false)
  const [isMovedRight, setIsMovedRight] = useState(true)
  const rides = ['seat', 'model', 'auto', 'gauge']

  const handleScroll = (direction: any) => {
    setIsMovedLeft(true);
    setIsMovedRight(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = rowRef.current;
      let scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      if (scrollTo <= 0) {
        // Ensure we don't scroll beyond the left end
        scrollTo = 0;
        setIsMovedLeft(false);
        setIsMovedRight(true);
      }

      if (scrollTo >= scrollWidth - clientWidth) {
        // Ensure we don't scroll beyond the right end
        scrollTo = scrollWidth - clientWidth;
        setIsMovedLeft(true);
        setIsMovedRight(false);
      }
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const viewDetails = (e: any, id: string) => {
    if (e.target.classList.contains("arrow")) {
      return;
    }
    handleViewDetails(id);
  };

  return (
    <div className="ride-card">
      <div className={`arrow ${!scroll && 'none'}`}>
        <Image src='/images/general/arrow/arrow-left.png' alt="img" width={30} height={30} onClick={() => handleScroll('left')} className={`left ${!isMovedLeft && 'hide'} img-color`}/>
        <Image src='/images/general/arrow/arrow-right.png' alt="img" width={30} height={30} onClick={() => handleScroll('right')} className={`${!isMovedRight && 'hide'} img-color`}/>
      </div>

      <div className="cards">
        <div ref={rowRef} className={`${scroll ? 'card-scroll' : 'card'}`}>
          {
            rideContent.map((content: any, i: number) => (
              <div key={i} onClick={() => viewDetails(event, content.id)} onMouseEnter={() => setIndex(i)} onMouseLeave={() => setIndex(-1)} className="box">
                <div className="image">
                  <RideSlider card={i} index={index} images={content.images} width={500} height={500}/>      
                  <div className="type">
                    <Image width={20} height={20} src='/images/ride/fuel.png' alt="img" className="icon1 img-color"/>
                    <span>{content.type}</span>
                  </div>
                  <span className="favorites">Riders Favorite</span>
                </div>
                <div className="heading">
                  {content.title} ({content.completeRide}k ride complete)
                  <div className="rating">
                    <Image width={15} height={15} src='/images/general/card/star.png' alt="img" className="star"/>
                    <span>{content.rating}</span>
                    <span>({content.totalRating}K)</span>
                  </div>
                </div>
                <div className="location">
                  <Image width={20} height={20} src='/images/general/card/calendar.png' alt="img" className="icon img-color"/>
                  {content.status}
                </div>
                <div className="location">
                  <Image width={20} height={20} src='/images/general/card/location.png' alt="img" className="icon1 img-color"/>
                  {content.location}
                </div>
                <div className='ride'>
                  {
                    rides.map((ride, i) => (
                      <div key={i} className='ride-icon'>
                        <Image width={20} height={20} src={`/images/ride/${ride}.png`} alt="img" className='img-color'/>
                        <span>{content[ride]}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default RideCard;
