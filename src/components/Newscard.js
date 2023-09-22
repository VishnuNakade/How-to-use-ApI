import React from 'react'


export default function Newscard(props) {
  return (
    <div>
      <div className="card" style={{width:"18rem"}}>
  <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.discription}</p>
    <a href="#" className="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
  )
}
