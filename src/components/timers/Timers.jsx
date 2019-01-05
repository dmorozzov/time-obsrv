import React from 'react';
import connect from 'react-redux/es/connect/connect';
import {fetchTimers} from '@src/components/timers/actions';
import Timer from './Timer';
import NewTimer from './NewTimer';
import TimerSelector from './TimerSelector';

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
            <div className='row'>
                {listTimers}
            </div>
        );
    }

    render() {
        const { fetching, error, onRequestTimers } = this.props;

        return (
            <div className={'row'}>
                <div className={'row'}>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="btn-toolbar" role="toolbar">
                                <div className="btn-group">
                                    <TimerSelector fetching={fetching}/>
                                    <NewTimer/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    { this.renderTimers() }
                </div>
            </div>
        )
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