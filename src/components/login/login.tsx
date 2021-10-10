import React from "react";

import { Link } from "react-router-dom";

import { LINK_HREF, STRINGS } from "constant_values";
import { getClassNames } from "./utils";
import "./login.css";

interface LoginProps {
    isModalOpen: boolean;
    onClickToggleLoginModal: (isOpen: boolean) => void;
}

const { CANCEL, EMAIL_ADDRESS, PASSWORD, SUBMIT } = STRINGS;

export const Login = (props: LoginProps) => {
    const { isModalOpen, onClickToggleLoginModal } = props;

    const [email, setEmail] = React.useState("");

    const onClickCloseModal = () => {
        onClickToggleLoginModal(false);
    };

    const onChangeEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEmail(value);
    };

    if (email !== "") {
        console.table({ email });
    }

    const {
        buttonClassNames,
        cancelButtonClassNames,
        labelClassNames,
        loginFormClassNames,
        modalClassNames,
        submitButtonClassNames,
        xButtonClassNames,
    } = getClassNames({ isModalOpen });

    return (
        <div className={modalClassNames}>
            <Link to={LINK_HREF.HOME}>
                <div className="modal-background" onClick={onClickCloseModal} />
            </Link>

            <div className={loginFormClassNames}>
                <div className="field">
                    <label className={labelClassNames}>{EMAIL_ADDRESS}</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            onChange={(event) => onChangeEmailInput(event)}
                            placeholder={EMAIL_ADDRESS}
                        />
                    </div>

                    <label className={labelClassNames}>{PASSWORD}</label>
                    <div className="control">
                        <input
                            className="input"
                            type="password"
                            placeholder={PASSWORD}
                        />
                    </div>
                </div>

                <div className={buttonClassNames}>
                    <div className="control">
                        <Link to={LINK_HREF.HOME}>
                            <button
                                className={submitButtonClassNames}
                                onClick={onClickCloseModal}
                            >
                                {SUBMIT}
                            </button>
                        </Link>
                    </div>

                    <div className="control">
                        <Link to={LINK_HREF.HOME}>
                            <button
                                className={cancelButtonClassNames}
                                onClick={onClickCloseModal}
                            >
                                {CANCEL}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <Link to={LINK_HREF.HOME}>
                <button
                    aria-label="close"
                    className={xButtonClassNames}
                    onClick={() => onClickToggleLoginModal(false)}
                ></button>
            </Link>
        </div>
    );
};
