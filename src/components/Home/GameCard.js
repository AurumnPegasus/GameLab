import React from 'react'
import { Link } from 'react-router-dom';

const GameCard = (props) => {
    return (
        <div className="card mb-3 col-8 mx-4">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={process.env.PUBLIC_URL + '/assets/thumbnails/' + props.image} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text d-none d-md-block">{props.desc}</p>
                        <Link to={props.link} className='btn btn-outline-success'>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameCard
