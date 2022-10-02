import React, { useEffect, useState } from "react";
import axios from "axios";
import './CardResident.css'

const CardResident = ({ url }) => {
  const [resident, setResident] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => setResident(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  console.log(resident);

  return (
    <article className="card">
      {loading ? (
        <div>
          {" "}
          <h1>Loading</h1>
        </div>
      ) : (
        <div>
          <header>
            <img src={resident?.image} alt="img resident" />
            <div className="card__status__container">
              <div className="card__status">{resident?.status}</div>
            </div>
          </header>
          <section className="card__section">
            <h3 className="card__name">{resident?.name}<hr /></h3>
            <ul className="card__list">
              <li className="card__species">
                <span className="card__span">Species <br /> </span>
                {resident?.species}
              </li>
              <li className="card__origin">
                <span className="card__span">Origin <br /> </span>
                {resident?.origin.name}
              </li>
              <li className="card__episode">
                <span className="card__span">Episodes where appear <br /> </span>
                {resident?.episode.length}
              </li>
            </ul>
          </section>
        </div>
      )}
    </article>
  );
};

export default CardResident;
