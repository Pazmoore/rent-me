"use client";
import React, { useEffect, useState } from "react";
import "./details.scss";
import Riding from "@/app/components/productsDashboard/productUtilities/riding/Riding";
import { rideContent } from "@/app/components/productsDashboard/products/rideSharing/home/RideSharingData";
import { TrendingRides } from "@/app/interfaces/cards/cards";

const RideSharingDetails = ({ params }: { params: { q: string } }) => {
  const [allRideSharing, setAllRideSharing] = useState(rideContent);
  const [selectedRideSharing, setSelectedRideSharing] =
    useState<TrendingRides>();

  useEffect(() => {
    const selected = allRideSharing.filter((data) => params.q[1] == data.id);
    setSelectedRideSharing(selected[0]);
  }, [allRideSharing, params.q]);

  return (
    <section>
      <Riding
        cardContent={rideContent}
        selectedRiding={selectedRideSharing}
        book={"ride"}
      />
    </section>
  );
};

export default RideSharingDetails;
