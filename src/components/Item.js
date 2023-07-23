import React from "react";

function Item() {
    return (
        <div className="item flex">
            <div className="info flex">
                <span className="name">PS5</span>
                <span className="category-recent">Gaming</span>
            </div>
            <div classsName="price">
                <span className="item-price">$500</span>
            </div>
        </div>
    )
}

export default Item;