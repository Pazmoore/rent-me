import React, { useRef, useState } from "react";
import "./driverCard.scss";
import Image from "next/image";
import { Checkbox } from "@mui/material";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

const DriverCard = () => {
  const rowRef = useRef<any>(null);
  const [isMovedLeft, setIsMovedLeft] = useState(false);
  const [isMovedRight, setIsMovedRight] = useState(true);

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

  return (
    <div className="driver-card">
      <div className="header">
        <h3>Choose Drivers</h3>
        <div className="navigate">
          <Image
            width={30}
            height={30}
            src='/images/general/arrow/arrow-left.png'
            alt="img"
            onClick={() => handleScroll("left")}
            className={`left ${!isMovedLeft && "hide"} img-color`}
          />
          <Image
            width={30}
            height={30}
            src='/images/general/arrow/arrow-right.png'
            onClick={() => handleScroll("right")}
            alt="img"
            className={`${!isMovedRight && "hide"}`}
          />
        </div>
      </div>
      <div className="box">
        <div ref={rowRef} className="pics">
          <div className="pic">
            <div className="driver_metrics">
              <Image
                width={50}
                height={50}
                src="/images/ride/driver.png"
                alt="img"
                className="img-color"
              />
              <div>
                <div className="driver_name">
                  <h4>Frank Robert</h4>
                  <VerifiedRoundedIcon sx={{ fontSize: 14 }} />
                  <span>4.5k ride completed</span>
                </div>
                <div className="rating">
                  <Image
                    width={15}
                    height={15}
                    src="/images/general/card/star.png"
                    alt="img"
                    className="star"
                  />
                  <span>3.4</span>
                  <span>(12K)</span>
                </div>
              </div>
            </div>
            <Checkbox
              sx={{
                color: "#121212",
                "&.Mui-checked": {
                  color: "#121212",
                },
              }}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
