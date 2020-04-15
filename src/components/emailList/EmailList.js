import React from 'react';
import { connect } from 'react-redux';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Card from './Card';

const List = props => {
    
    const toggleIsComposing = () => {

    }

    return (
        props.emails !== undefined && (
            <SimpleBar forceVisible="y" autoHide={true} style={{height:'100%'}}>
            {props.emails.map(email => {
                return (
                    <Card key={email.id} email={email} />
                );
            })}
            <div className="compose-circle-btn btn" onClick={toggleIsComposing}>+</div>
            </SimpleBar>
        )
    );
}

const mapStateToProps = ({ inbox }) => ({
    emails:inbox.emails
})

export default connect(mapStateToProps)(List);