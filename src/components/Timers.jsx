import React from 'react';
import connect from 'react-redux/es/connect/connect';
import {fetchTimers} from '@src/components/timers/actions';
import Timer from './Timer';
import NewTimer from '@src/components/NewTimer';
import TimerSelector from '@src/components/TimerSelector';

class Timers extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onRequestTimers();
    }

    renderTimers() {
        const timers = this.props.timers || [];
        const listTimers = timers.map((timer) =>
            <Timer key={timer.id} {...timer} />
        );

        return (
            <ul className="list-group list-group-flush">
                {listTimers}
            </ul>
        );
    }

    render() {
        const { fetching, error, onRequestTimers } = this.props;

        return (
            <div className="col-md-4 offset-md-1">
                <h4>Timers:</h4>
                <TimerSelector fetching={fetching}/>
                <NewTimer/>
                { this.renderTimers() }
            </div>)
    }
}

export default connect(
    state => {
        return {
            timers: state.timer.get('timers'),
            fetching: state.timer.get('fetching'),
            error: state.timer.get('error')
        }
    },
    dispatch => {
        return {
            onRequestTimers: () => dispatch(fetchTimers())
        };
    })(Timers);