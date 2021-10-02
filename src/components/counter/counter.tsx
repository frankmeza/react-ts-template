import React from "react";

import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/slices/counter";
import { Link } from "react-router-dom";
import {
    incrementButtonStyle,
    decrementButtonStyle,
    DECREMENT,
    HOME,
    INCREMENT,
} from "./constants";

export const Counter = () => {
    const dispatch = useDispatch();

    const count = useSelector((state: RootState) => {
        return state.counter.value;
    });

    return (
        <div>
            <div className="buttons">
                <Link to={"/"}>{HOME}</Link>
                <button
                    aria-label="Increment value"
                    className={incrementButtonStyle}
                    onClick={() => dispatch(increment())}
                >
                    {INCREMENT}
                </button>

                <span>{count}</span>

                <button
                    aria-label="Decrement value"
                    className={decrementButtonStyle}
                    onClick={() => dispatch(decrement())}
                >
                    {DECREMENT}
                </button>
            </div>
        </div>
    );
};
