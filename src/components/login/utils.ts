import classNames from "classnames";

interface GetClassNamesParams {
    isModalOpen: boolean;
}

export const getClassNames = (params: GetClassNamesParams) => {
    const { isModalOpen } = params;

    const buttonClassNames = classNames("field", "is-grouped");

    const cancelButtonClassNames = classNames("button", "is-link", "is-light");

    const labelClassNames = classNames("label", "has-text-light");

    const loginFormClassNames = classNames("modal-content", "login-form");

    const modalClassNames = classNames("modal", {
        "is-active": isModalOpen,
    });

    const submitButtonClassNames = classNames("button", "is-link");

    const xButtonClassNames = classNames("modal-close", "is-large");

    return {
        buttonClassNames,
        cancelButtonClassNames,
        labelClassNames,
        loginFormClassNames,
        modalClassNames,
        submitButtonClassNames,
        xButtonClassNames,
    };
};
