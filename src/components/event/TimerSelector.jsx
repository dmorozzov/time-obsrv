import React from 'react';
import connect from 'react-redux/es/connect/connect';
import {bindActionCreators} from 'redux';
import {fetchEvents} from '@src/components/event/actions';

class TimerSelector extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {fetching, fetchEvents} = this.props;

        return (
            fetching ? (
                    <button type="button" className={'btn btn-default'} disabled>Fetching...</button>
                ) : (
                    <button type="button" className={'btn btn-default'} onClick={fetchEvents}>Request events</button>
                )
        )
    }
}

export default connect(undefined, dispatch => (bindActionCreators({ fetchEvents }, dispatch)))
(TimerSelector);