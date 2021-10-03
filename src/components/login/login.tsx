import React from "react";
import { Link } from "react-router-dom";

import classNames from "classnames";
import "./login.css";

interface LoginProps {
    isModalOpen: boolean;
    onClickToggleLoginModal: (isOpen: boolean) => void;
}

const CANCEL = "Cancel";
const EMAIL_ADDRESS = "Email Address";
const PASSWORD = "Password";
const SUBMIT = "Submit";

export const Login = (props: LoginProps) => {
    const { isModalOpen, onClickToggleLoginModal } = props;

    const modalClassNames = classNames("modal", {
        "is-active": isModalOpen,
    });

    const labelClassNames = classNames("label", "has-text-light");

    const onClickCloseModal = () => {
        onClickToggleLoginModal(false);
    };

    return (
        <div className={modalClassNames}>
            <Link to="/">
                <div className="modal-background" onClick={onClickCloseModal} />
            </Link>

            <div className="modal-content login-form">
                <div className="field">
                    <label className={labelClassNames}>{EMAIL_ADDRESS}</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder={EMAIL_ADDRESS}
                        />
                    </div>

                    <label className={labelClassNames}>{PASSWORD}</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder={PASSWORD}
                        />
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button
                            className="button is-link"
                            onClick={onClickCloseModal}
                        >
                            {SUBMIT}
                        </button>
                    </div>

                    <div className="control">
                        <button
                            className="button is-link is-light"
                            onClick={onClickCloseModal}
                        >
                            {CANCEL}
                        </button>
                    </div>
                </div>
            </div>
            <button
                aria-label="close"
                className="modal-close is-large"
                onClick={() => onClickToggleLoginModal(false)}
            ></button>
        </div>
    );
};
