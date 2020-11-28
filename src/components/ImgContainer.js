import '../assets/css/style.css'

import React from 'react'

const ImgContainer = ({ props }) => (
  <div className="img-container">
    <img alt={props.title} className="img-container__img" src={props.src} />
    <div className="img-container__description">
      <div className="img-container__title">{props.title}</div>
      <div>{props.technique}</div>
      <div>{props.size}</div>
      <div>{props.year}</div>
    </div>
  </div>
)

export default ImgContainer
