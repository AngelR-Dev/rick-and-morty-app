import React from "react";
import "./LocationInfo.css";

const LocationInfo = ({ location }) => {
  console.log(location);

  return (
    <article className="location">
      <div className="location__name">
        <span>
          Name: <br />{" "}
        </span>
        {location?.name}
      </div>
      <div className="location__type">
        <span>
          Type: <br />{" "}
        </span>
        {location?.type}
      </div>
      <div className="location__dimension">
        <span>
          Dimension: <br />{" "}
        </span>
        {location?.dimension}
      </div>
      <div className="location__population">
        <span>
          Population: <br />{" "}
        </span>
        {location?.residents.length}
      </div>
    </article>
  );
};

export default LocationInfo;
