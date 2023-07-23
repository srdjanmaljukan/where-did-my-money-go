import React from "react";

function Category() {
    return (
        <div className="category">
            <div className="category-info">
                <h3 className="grid-item category-name">Food</h3>
                <p className="grid-item money spent">Money spent</p>
                <p className="grid-item money left">Money left</p>
            </div>
            <div className="flex bar-div">
                <div className="bar percentage-income first"></div>
                <div className="bar percentage-income second"></div>
            </div>
            <div className="flex bar-div">
                <div className="bar percentage-category first"></div>
                <div className="bar percentage-category second"></div>
            </div>
        </div>

    )
}

export default Category;