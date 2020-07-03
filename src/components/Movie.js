import React from 'react';
import { Link } from 'react-router-dom';


export default function Movie(props) {

    return <div>

        <Link to={"../movies/" + props.id}>{props.title} ({props.year})</Link>

        <img src={props.img} />
    </div>
}