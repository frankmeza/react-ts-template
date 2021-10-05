import React from "react";

import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";

import { decrement, incrementByNumber } from "../../store/slices/counter";
import { getClassNames } from "./utils";
import { STRINGS } from "constant_values";
import "./counter.css";

const { DECREMENT, INCREMENT } = STRINGS;

export const Counter = () => {
    const dispatch = useDispatch();

    const count = useSelector((state: RootState) => {
        return state.counter.value;
    });

    const onClickIncrement = () => {
        dispatch(incrementByNumber(4));
    };

    const onClickDecrement = () => {
        dispatch(decrement());
    };

    const { decrementButtonStyle, incrementButtonStyle } = getClassNames();

    return (
        <div className="counter-container">
            <div className="buttons">
                <button
                    aria-label="Increment value"
                    className={incrementButtonStyle}
                    onClick={onClickIncrement}
                >
                    {INCREMENT}
                </button>

                <span className="counter-sum">{count}</span>

                <button
                    aria-label="Decrement value"
                    className={decrementButtonStyle}
                    onClick={onClickDecrement}
                >
                    {DECREMENT}
                </button>
            </div>
        </div>
    );
};
