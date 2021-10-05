import classNames from "classnames";

export const getClassNames = () => {
    const decrementButtonStyle = classNames("button", "is-danger", "is-large", "counter-button");

    const incrementButtonStyle = classNames("button", "is-primary", "is-large", "counter-button");

    return {
        decrementButtonStyle,
        incrementButtonStyle,
    };
};
