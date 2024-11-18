import React from "react";
import BookingCard from "./BookingCard";
import { bookingList } from "./data";

const Booking = () => {
  return (
    <section className="mt-[-80px] relative z-10">
      <div className="container">
        <div className="flex justify-between p-8 bg-[#f9fafb] rounded-lg">
          {bookingList.map((item) => (
            <BookingCard data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Booking;
