import React from "react";
import Category from "./Category";

function Categories() {
    return (
        <div className="category-section">
            <h2>Categories</h2>
            <div className="categories flex">
                <Category />
                <Category />
                <Category />
            </div>
        </div>
    )
}

export default Categories;