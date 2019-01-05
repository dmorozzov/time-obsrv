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
                    <button type="button" className={'btn btn-default'} disabled>Fetching...</button>
                ) : (
                    <button type="button" className={'btn btn-default'} onClick={fetchTimers}>Request timers</button>
                )
        )
    }
}

export default connect(undefined, dispatch => (bindActionCreators({ fetchTimers }, dispatch)))(TimerSelector);