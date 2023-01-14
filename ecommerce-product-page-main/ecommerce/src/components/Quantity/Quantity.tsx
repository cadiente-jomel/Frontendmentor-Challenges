import React, {useState} from "react";

const Quantiy = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div className="counter-container">
            <span className="counter-btn">
                <img src="/assets/images/icon-minus.svg" alt="icon-minus" onClick={() => {
                    if (counter > 0) {
                        setCounter((prevCounter) => prevCounter - 1);
                    }
                }}/>
            </span>
            <span className="quantity-counter">{counter}</span>
            <span className="counter-btn" >
                <img src="/assets/images/icon-plus.svg" alt="icon-plus" onClick={() => {
                    setCounter((prevCounter) => prevCounter + 1);
                }}/>
            </span>
        </div>
    )
}

export default Quantiy;