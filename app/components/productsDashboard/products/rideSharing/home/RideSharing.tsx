import React from "react";
import "./ride-sharing.scss";
import RideCard from "@/app/components/utilities/rideCard/RideCard";
import { rideContent } from "./rideSharingData";
import { useRouter } from "next/navigation";
import RideDetails from "../../../productUtilities/rideDetails/RideDetails";

const RideSharing = () => {
  const navigate = useRouter();
  const handleViewDetails = (id: string) =>
    navigate.push(`/products/3/details/ride/${id}`);
  return (
    <section className="ride-sharing">
      <div className="ride-list">
        <div className="ride_header">
          <h2>23 vehicles</h2>
          <p>Closer to my location</p>
        </div>
        <RideCard
          rideContent={rideContent}
          handleViewDetails={handleViewDetails}
          scroll={false}
        />
      </div>
      <div className="map">
        {/* <div>
          <p>Map</p>
          <button>Continue</button>
        </div> */}

        <RideDetails />
      </div>
    </section>
  );
};

export default RideSharing;
