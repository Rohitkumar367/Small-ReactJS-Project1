import React from 'react'
import "./style.css"

const UseState = () => {
    const initialData = 10;
    const [myNum, setMyNum] = React.useState(initialData);

    return (
        <>
            <div className="center_div">
                <p>{myNum}</p>
                <div className="button2" onClick={() => setMyNum(myNum + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCRIMENT
                </div>
                <div className="button2" onClick={() => myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECRIMENT
                </div>
            </div>
        </>
    )
}

export default UseState
