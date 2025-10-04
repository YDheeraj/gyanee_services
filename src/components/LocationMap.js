import React from "react";

const LocationMap = ({ mapSrc }) => (
  <section className="w-full py-12 px-6 bg-white">
    <div className="max-w-6xl mx-auto rounded-lg overflow-hidden shadow-md">
      <iframe
        title="Location Map"
        src={mapSrc}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
);


export default LocationMap;
