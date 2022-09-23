import React, { useEffect, useState } from "react";
import "../Styles/Listings.css";

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("https://house-lydiahallie.vercel.app/api/listings")
      .then((res) => res.json())
      .then((res) => setListings(res.listings));
  }, []);

  const renderListing = (listing) => {
    return (
      <div className="listingCard">
        <div style={{ position: "relative", height: "200px", width: "100%" }}>
          <img alt={listing?.title} src={listing?.image} height="200px" />
        </div>
        <div style={{ padding: "0 1em" }}>
          <h3 style={{ marginBottom: ".2em" }}>{listing.name}</h3>
          <span style={{ color: "lightslategrey", fontSize: ".8em" }}>
            {listing.city},{listing.state}
          </span>
          <h3 style={{ color: "deeppink" }}>
            ${new Intl.NumberFormat("en-US").format(listing.price)}
          </h3>
          <span style={{ color: "lightslategrey", fontSize: ".8em" }}>
            {listing?.floors} floor, {listing?.rooms} rooms, {listing.sqft}ft
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="listingsContainer">
      <h3>Houses</h3>
      {listings.length > 0 &&
        listings.map((listing) => (
          <div key={listing.id}>{renderListing(listing)}</div>
        ))}
    </div>
  );
};

export default Listings;
