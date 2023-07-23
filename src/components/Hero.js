import React from "react";

function Hero() {
    return (
        <div className="hero">
            <div className="values">
                <div className="left grid-item">
                    <h1>€2000</h1>
                    <span>Balance</span>
                </div>
                <div className="income grid-item">
                    <h2>€3000</h2>
                    <span>Income</span>
                </div>
                <div className="expense grid-item">
                    <h2>€1000</h2>
                    <span>Expenses</span>
                </div>
            </div>
        </div>
    )
}

export default Hero;