import React from "react";
import { Link } from "wouter";

import './Category.css'

export default function Category({name, options = [] }) {
    console.log(options)
    return(
        <div className="Category">
            <h3 className="Category-title">{name}</h3>
            <ul className="Category-list">
                {options.map((singleOption) => (
                    <li key={singleOption.id} className="Category-list-item">
                        <Link to={`/search/${singleOption.id}`} className='Category-link'>
                            {singleOption.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}