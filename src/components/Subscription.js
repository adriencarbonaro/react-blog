import React, { useState }    from 'react';
import {
    collection,
    addDoc,
    Timestamp
}                             from 'firebase/firestore';
import { EMPTY_STR }          from '../utils/constants';

/* CSS */
import '../css/Subscription.css';

const COL_SUBSCRIPTIONS       = "subscriptions";
const HEADER_TEXT             = "Vous ne voulez pas rater un article ?";
const HEADER_TEXT_EMPHASIS    = "Inscrivez-vous à notre newsletter :";
const PLACEHOLDER_MAIL        = "✉️ Votre email";
const PLACEHOLDER_SUCCESS     = "✅ Vous êtes inscrits. À bientôt !";
const MAX_LENGTH_MAIL         = 160;
const SUBMIT_TEXT             = "🚀 S'inscrire";
const DEFAULT_VALUE           = { value: EMPTY_STR, wrong: false };

function FormInput (props) {
    function makeInput () {
        return <input
            type="email"
            onChange={props.onChange}
            className={`subscription-form-info subscription-form-${props.name} ${props.wrong}`}
            placeholder={props.placeholder}
            value={props.text}
            maxLength={MAX_LENGTH_MAIL} />
    }

    return (<>{makeInput()}</>);
}

export default function Subscription (props) {
    const [ email, setEmail ]            = useState(DEFAULT_VALUE);
    const [ placeholder_email, setEmailPlaceholder ] = useState(PLACEHOLDER_MAIL);

    function subscribe () {
        addDoc(collection(props.db, COL_SUBSCRIPTIONS), {
          name: email.value,
          date: new Timestamp(Date.now() / 1000, 0),
        })
        .then(onSubscribtion)
        .catch(err => { console.log(err); });
    }

    function setValidationPlaceholder () {
        setEmailPlaceholder(PLACEHOLDER_SUCCESS);
    }

    function onSubscribtion (res) {
        clearForm();
        setValidationPlaceholder();
    }

    function onEmailChange (evt) {
        setEmail({ value: evt.target.value, wrong: false });
        setEmailPlaceholder(PLACEHOLDER_MAIL);
    }

    function checkEmail () {
        const isValid = (input) => {
            return email.value !== EMPTY_STR &&
                   email.value.includes("@");
        }
        console.log(isValid(email.value));
        setEmail({ value: email.value, wrong: !isValid(email.value) });
        return isValid(email.value);
    }

    function onBtnClick (evt) {
        if (!(checkEmail())) return;
        subscribe();
    }

    function clearForm () {
        setEmail(DEFAULT_VALUE);
    }

    return (
        <>

        <div className="subscriptions-container">
            <div className="subscriptions-header">
                <span className="subscriptions-header-text">{HEADER_TEXT}</span>
                <span className="subscriptions-header-emphasis">{HEADER_TEXT_EMPHASIS}</span>
            </div>
            <div className="subscription-form">
                <div className="subscription-form-elem">
                    <FormInput
                      onChange={onEmailChange}
                      name="email"
                      text={email.value}
                      placeholder={placeholder_email}
                      wrong={email.wrong ? "wrong" : EMPTY_STR} />
                    <button onClick={onBtnClick} className="subscription-form-btn-submit">{SUBMIT_TEXT}</button>
                </div>
            </div>
        </div>
        </>
    );
}
