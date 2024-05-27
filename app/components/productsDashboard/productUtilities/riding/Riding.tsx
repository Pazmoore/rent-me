import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PaymentCard from "../paymentCard/PaymentCard";
import "./Riding.scss";
import LocationCard from "../locationCard/LocationCard";

const Riding = ({ book, cardContent, selectedRiding}: any) => {
  return (
    <div className="riding">
      <Link href={`/products/${book}`} className="navigate-back">
        <ArrowBackIosIcon fontSize="small" className="navigate-back-icon" />
        <span>Back</span>
      </Link>
      <p className="page-heading">Confirm Booking</p>
      <div className="content">
        <div className="details">
          <div className="ride-card">
            <figure className="image-card">
              <Image
                src={selectedRiding?.images[1] ?? ""}
                width={55}
                height={104}
                alt="product"
              />
            </figure>
            <div className="ride-details">
              <p className="ride-name">{selectedRiding?.title}</p>
              <div className="ride">
                <div className="ride-icon">
                  <Image
                    width={20}
                    height={20}
                    src='/images/ride/seat.png'
                    alt="img"
                    className="img-color"
                  />
                  <span>6 seat</span>
                </div>
                <div className="ride-icon">
                  <Image
                    width={20}
                    height={20}
                    src='/images/ride/fuel.png'
                    alt="img"
                    className="icon img-color"
                  />
                  <span>{selectedRiding?.type}</span>
                </div>
                <div className="ride-icon">
                  <Image
                    width={20}
                    height={20}
                    src='/images/ride/gauge.png'
                    alt="img"
                    className="img-color"
                  />
                  <span>{selectedRiding?.speed}</span>
                </div>
                <div className="ride-icon">
                  <Image
                    width={20}
                    height={20}
                    src='/images/ride/auto.png'
                    alt="img"
                    className="img-color"
                  />
                  <span>{selectedRiding?.auto}</span>
                </div>
              </div>
              <div className="ride-icon">
                <Image
                  width={20}
                  height={20}
                  src='/images/ride/model.png'
                  alt="img"
                  className="img-color"
                />
                {selectedRiding?.model}
              </div>
              <div className="location">
                <Image
                  width={20}
                  height={20}
                  src='/images/general/card/location.png'
                  alt="img"
                  className="icon1 img-color"
                />
                {selectedRiding?.location}
              </div>
            </div>
          </div>
          <p className="map">Map</p>
          <LocationCard />
        </div>

        <PaymentCard />
      </div>
    </div>
  );
};

export default Riding;
