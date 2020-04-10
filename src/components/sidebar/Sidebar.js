import React from 'react';
import { connect } from 'react-redux';
import ComposeButton from './ComposeButton';
import Folders from './Folders';
import Tags from './Tags';

const Sidebar = props => {
    return (
        <div className="sidebar col" id={props.sidebar.sliderbar && 'slidebar'}>
            <ComposeButton />
            <Folders />
            <Tags />
        </div>
    );    
}

const mapStateToProps = ({sidebar}) => ({
    sidebar:sidebar
})

export default connect(mapStateToProps)(Sidebar);