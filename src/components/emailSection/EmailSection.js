import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAnalyticsBar, setAnalyticsBarContact } from '../../actions'
import EmailButtons from './EmailButtons';
import EmailOperations from './EmailOperations';
import Operations from './Operations';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";

import { makeHtmlSafe } from "../inbox/helpers/MessageHelper";

const EmailSection = props => {

    const [ operation, setOperation ] = useState(
        {
            isHidden: true,
            messageType: null
        }
    );
    console.log(operation)

    const handleAnalyticsBar = () => {
        props.setAnalyticsBar(!props.analyticsBar)
        props.setAnalyticsBarContact(props.viewemail.from)
    }

    return(
        props.viewemail !== undefined && (
            <SimpleBar forceVisible="y" autoHide={true} style={{height:'100%'}}>
                <div className="thread-window">
                    <div className="thread-head row">
                        <div className="thread-contact row btn">
                            <FontAwesomeIcon icon={faUserCircle} onClick={handleAnalyticsBar} className="thread-avatar" />
                            <h3>{props.viewemail.name}</h3>
                        </div>
                        <div className="thread-actions row">
                            <EmailOperations setOperation={setOperation} />
                        </div>
                    </div>
                    <h2>{props.viewemail.subject}</h2> {/*props.email.subject*/}
                    <div 
                        className="thread-message"
                        dangerouslySetInnerHTML={{ __html: makeHtmlSafe(props.viewemail.email_body) }} 
                    />
                    {operation.isHidden ? (
                        <EmailButtons setOperation={setOperation} />
                        ) : (
                        <Operations setOperation={setOperation} operation={operation} />
                    )}
                </div>
            </SimpleBar>
        )
    );
}

const mapStateToProps = ({ viewEmail }) => ({
    viewemail:viewEmail.viewemail
})

export default connect(mapStateToProps, {setAnalyticsBar, setAnalyticsBarContact})(EmailSection);