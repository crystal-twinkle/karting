import React from 'react';
import RatingTable from '../components/Rating-table';
import ContactUs from '../components/Contact-us';

export function MainPage() {


  return (
    <div>
      <div className="start">
      </div>
      <div className="p-[5.6rem] custom-gradient">
        <div className="d-flex justify-content-evenly align-items-center">
          <RatingTable/>
          <div className="w-0.5 dark h-[43rem] bg-[#FCD700]"/>
          <ContactUs/>
        </div>
        <h2> Partners </h2>
      </div>
    </div>
  );
}
