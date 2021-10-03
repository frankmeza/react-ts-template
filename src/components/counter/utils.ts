import classNames from "classnames";

export const getClassNames = () => {
    const decrementButtonStyle = classNames("button", "is-danger", "is-large");

    const incrementButtonStyle = classNames("button", "is-primary", "is-large");

    return {
        decrementButtonStyle,
        incrementButtonStyle,
    };
};
