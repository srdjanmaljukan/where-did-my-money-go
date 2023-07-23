import React from "react";
import Item from "./Item";

function Recent() {
    return (
        <div className="recent" id="recent">
            <h2>Latest Expenses</h2>
            <ul>
                <li>
                    <Item />
                </li>
                <li>
                    <Item />
                </li>
                <li>
                    <Item />
                </li>
            </ul>
        </div>
    )
}

export default Recent;