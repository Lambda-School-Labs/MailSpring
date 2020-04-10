import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";

const Card = props => {

    const setThreadContact = () => {

    }

    const setContact = () => {
        
    }

    const showContact = () => {
        
    }

    const showDate = () => {
        
    }

    return (
        // From or To defined by which folder in sidebar is selected
    <div className="snippet" onClick={() => setThreadContact()}>
        <div className="snippet-header row">
            {/* the onClick in here sets the analyticsContact to either who sent the email or who it was sent to depending on the snippetsFilter */}
            <FontAwesomeIcon icon={faUserCircle} onClick={() => setContact()} />
            <div className="snippet-meta row">
                {/* This ternary checks whether to display who its from or who it was sent to depending on what snippetsFilter is set to */}
                <h3 onClick={() =>setContact()} >
                    {showContact()}
                </h3>
                <time>
                    {showDate(props.email.date)}
                </time>
            </div>
        </div>
        <p className="snippet-subject">
            {props.email.subject}
        </p>
        <p className="snippet-message">
            {props.email.email_body_text}
        </p>
    </div>
    );
}

export default Card;