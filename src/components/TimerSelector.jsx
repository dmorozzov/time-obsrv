import React from 'react';
import connect from 'react-redux/es/connect/connect';
import {bindActionCreators} from 'redux';
import {fetchTimers} from '@src/components/timers/actions';

class TimerSelector extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {fetching, fetchTimers} = this.props;

        return (
            fetching ? (
                    <button disabled>Fetching...</button>
                ) : (
                    <button onClick={fetchTimers}>Request a timers</button>
                )
        )
    }
}

export default connect(undefined, dispatch => (bindActionCreators({ fetchTimers }, dispatch)))(TimerSelector);