import React from "react";
import HomeCard from "../homeCard/HomeCard";
import TrendingRideCard from "../trendingRide/TrendingRideCard";
import { HomeCards, TrendingRides } from "@/app/interfaces/cards/cards";
import { rideContent } from "../../productsDashboard/products/rideSharing/home/RideSharingData";

const RideSharing = () => {
  const homeHeading = ["Latest Ride Sharing Vehicle"];
  const rideHeading = ["Popular Ride sharing vehicle", "Discover more"];
  const homeContent: HomeCards[] = [
    {
      id: "1",
      image: "/images/ride/pics1.png",
      title: "Electric vehicle (EVs)",
      stock: 1453,
    },
    {
      id: "2",
      image: "/images/ride/pics2.png",
      title: "Finest luxury cars",
      stock: 3453,
    },
    {
      id: "3",
      image: "/images/ride/pics1.png",
      title: "Electric vehicle (EVs)",
      stock: 1453,
    },
    {
      id: "4",
      image: "/images/ride/pics2.png",
      title: "Finest luxury cars",
      stock: 3453,
    },
    {
      id: "5",
      image: "/images/ride/pics1.png",
      title: "Electric vehicle (EVs)",
      stock: 1453,
    },
    {
      id: "6",
      image: "/images/ride/pics2.png",
      title: "Finest luxury cars",
      stock: 3453,
    },
  ];

  return (
    <>
      <HomeCard
        homeContent={homeContent}
        homeHeading={homeHeading}
        ride={true}
      />
      <TrendingRideCard rideContent={rideContent} rideHeading={rideHeading} />
    </>
  );
};

export default RideSharing;
