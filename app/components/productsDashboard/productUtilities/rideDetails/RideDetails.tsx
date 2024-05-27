import React, { useState } from "react";
import Image from "next/image";
import "./rideDetails.scss";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import TimePicker from "react-time-picker";
import DriverCard from "@/app/components/utilities/driverCard/DriverCard";

const RideDetails = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [inputPlaceholder, setInputPlaceholder] = useState("");
  const [attachDriver, setAttachDriver] = useState(false);

  const handleAttachDriver = (event: any) => {
    setAttachDriver(event.target.checked);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setInputPlaceholder(date ? date.toDateString() : "Select Date");
    setShowDatePicker(false);
  };

  return (
    <div className="rideDetails">
      <div className="images">
        <figure className="ride_img">
          <Image
            src="/images/ride/pics3.png"
            alt="img"
            width={135}
            height={254}
            className="bold-image"
          />
        </figure>
        <figure className="all-images">
          <figure className="ride_img">
            <Image
              src="/images/ride/pics3.png"
              alt="img"
              width={73}
              height={137}
            />
          </figure>
          <figure className="ride_img">
            <Image
              src="/images/ride/pics3.png"
              alt="img"
              width={73}
              height={137}
            />
          </figure>
        </figure>
      </div>
      <div className="ride-specs">
        <h3>Tesla Model 3</h3>
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
            <span>6</span>
          </div>
          <div className="ride-icon">
            <Image
              width={20}
              height={20}
              src='/images/ride/gauge.png'
              alt="img"
              className="img-color"
            />
            <span>9</span>
          </div>
          <div className="ride-icon">
            <Image
              width={20}
              height={20}
              src='/images/ride/auto.png'
              alt="img"
              className="img-color"
            />
            <span>89</span>
          </div>
          <div className="ride-icon">
            <Image
              width={20}
              height={20}
              src='/images/ride/model.png'
              alt="img"
            />
            2022 model
          </div>
        </div>
      </div>
      <div className="rates">
        Packed
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
      <div className="ride-options">
        <h3>Choose Driving Option</h3>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#121212",
                  "&.Mui-checked": {
                    color: "#121212",
                  },
                }}
              />
            }
            label="Self Drive"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={attachDriver}
                onChange={handleAttachDriver}
                sx={{
                  color: "#121212",
                  "&.Mui-checked": {
                    color: "#121212",
                  },
                }}
              />
            }
            label="Attach Driver"
          />
        </FormGroup>
        {attachDriver && <DriverCard />}
        {/* <form action="">
          <label>
            <input type="checkbox" name="option1" />
            Self Drive
          </label>
          <label>
            <input type="checkbox" name="option1" />
            Attach Driver
          </label>
        </form> */}
      </div>
      <div className="map">Map</div>

      <div className="location_details">
        <h3>Enter your Details</h3>
        <div>
          <form>
            <div className="ride_location">
              <div className="input">
                <label>Pick up point</label>
                <div className="flex-icon">
                  <PlaceIcon />
                  <input type="text" />
                </div>
              </div>
              <div className="input">
                <label>Destination</label>
                <div className="flex-icon">
                  <PlaceIcon />
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="ride_location">
              <div className="input">
                <label>Phone Number</label>
                <input type="text" />
              </div>
              <div className="input">
                <label>Date</label>
                <div className="flex-icon">
                  <input
                    type="text"
                    placeholder={inputPlaceholder}
                    onFocus={() => setShowDatePicker(true)}
                  />
                  <KeyboardArrowDownRoundedIcon />
                  {showDatePicker && (
                    <DayPicker
                      selected={selectedDate ? selectedDate : undefined}
                      onDayClick={handleDateSelect}
                      className="day"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="ride_location">
              <div className="input">
                <label>Time</label>
                <div className="flex-icon">
                  <input type="text" />
                  <KeyboardArrowDownRoundedIcon />
                </div>
                {/* <TimePicker /> */}
              </div>
              <div className="input">
                <label>Rate</label>
                <div className="flex-icon">
                  <input type="text" />
                  <KeyboardArrowDownRoundedIcon />
                </div>
              </div>
            </div>
            <div className="ride_price">
              <div className="price">
                <h3>Price</h3>
                <p> $23</p>
              </div>

              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RideDetails;
