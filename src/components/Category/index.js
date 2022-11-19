import React from "react";
import { Link } from "wouter";
import { 
    CategoryTitle, 
    CategoryList, 
    CategoryListItem, 
    CategoryLink } from "./styles"

import './Category.css'

export default function Category({name, options = [] }) {
    // console.log(options)
    return(
        <section>
            <CategoryTitle>{name}</CategoryTitle>
            <CategoryList className="Category-list">
                {options.map((singleOption, index) => (
                    <CategoryListItem key={singleOption.id} index={index}>
                        <CategoryLink to={`/gif/${singleOption.id}`} >
                            {singleOption.title}
                        </CategoryLink>
                    </CategoryListItem>
                ))}
            </CategoryList>
        </section>
    )
}