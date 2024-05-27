import React from "react";
import Image from "next/image";
import "./locationCard.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const LocationCard = () => {
  return (
    <div className="locationCard">
      <Image src="/images/ride/route.png" alt="route" width={20} height={85} className="img-color"/>
      <div className="location-details">
        <div className="pickupIcon">
          {/* <FiberManualRecordIcon /> */}
          <p>Pickup</p>
          <h3>Lagos Airport Hotel , Lagos Nigeria</h3>
        </div>
        <div className="dropoffIcon">
          {/* <ArrowDropDownIcon /> */}
          <p>To:</p>
          <h3>17, Aje Titi Alausa, Lagos Nigeria</h3>
        </div>
        
      </div>
    </div>
  );
};

export default LocationCard;
