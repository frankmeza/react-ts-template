import React from "react";

import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/slices/counter";
import { Link } from "react-router-dom";

import { getClassNames } from "./utils";
import { LINK_HREF, STRINGS } from "constant_values";

const { DECREMENT, HOME, INCREMENT } = STRINGS;

export const Counter = () => {
    const dispatch = useDispatch();

    const count = useSelector((state: RootState) => {
        return state.counter.value;
    });

    const onClickIncrement = () => {
        dispatch(increment());
    };

    const onClickDecrement = () => {
        dispatch(decrement());
    };

    const { decrementButtonStyle, incrementButtonStyle } = getClassNames();

    return (
        <div>
            <Link to={LINK_HREF.HOME}>{HOME}</Link>
            <div className="buttons">
                <button
                    aria-label="Increment value"
                    className={incrementButtonStyle}
                    onClick={onClickIncrement}
                >
                    {INCREMENT}
                </button>
            </div>

            <span>{count}</span>

            <div className="buttons">
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
