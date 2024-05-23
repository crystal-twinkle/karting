import React from 'react';
import RatingTaple from '../components/Rating-table';
import ContactUs from '../components/Contact-us';

export function MainPage() {


  return (
    <div>
      <div className="start">
      </div>
      <div className="d-flex custom-gradient justify-content-center align-items-center">
        <RatingTaple/>
        <ContactUs/>
      </div>
    </div>
  );
}
