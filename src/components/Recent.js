import React from "react";

function Recent() {
    return (
        <div className="recent">
            <h2>Latest Expenses</h2>
            <ul>
                <li>
                    <div className="item flex">
                        <div className="info flex">
                            <span className="name">PS5</span>
                            <span className="category">Gaming</span>
                        </div>
                        <div classsName="price">
                            <span className="item-price">$500</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="item flex">
                        <div className="info flex">
                            <span className="name">Rent</span>
                            <span className="category">Home</span>
                        </div>
                        <div classsName="price">
                            <span className="item-price">$300</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="item flex">
                        <div className="info flex">
                            <span className="name">Banana</span>
                            <span className="category">Food</span>
                        </div>
                        <div classsName="price">
                            <span className="item-price">$2</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Recent;