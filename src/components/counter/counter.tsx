import React from "react";

import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/slices/counter";

export const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="buttons">
                <button
                    aria-label="Increment value"
                    className="button is-primary is-large"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>

                <span>{count}</span>

                <button
                    aria-label="Decrement value"
                    className="button is-danger is-large"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};
