import React from "react"
import { Link } from "react-router-dom"

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <article className="cocktail">
      <img src={image} alt={name} />
      <div className="cocktail-footer">
        <h3>
          <span>Cocktail Name:</span> {name}
        </h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary">
          Get Details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
