import React from "react";
import connect from "react-redux/es/connect/connect";
import {fetchTimers} from "@src/actions/actions";

class Timers extends React.Component {

    //const { timers } = this.props;

    render() {
        return (
            <div className="col-md-4 offset-md-1">
                <h2>Timers:</h2>
                <ul className="list-group list-group-flush">
                    {this.props.timers.map(el => (
                        <li className="list-group-item" key={el.id}>
                            {el.title}
                        </li>
                    ))}
                </ul>
                {this.props.fetching ? (
                    <button disabled>Fetching...</button>
                ) : (
                    <button onClick={this.props.onRequestTimers}>Request a timers</button>
                )}
            </div>)
    }
}

export default connect(
    state => {
        return {
            timers: state.timerState.timers,
            fetching: state.timerState.fetching,
            error: state.timerState.error
        }
    },
    dispatch => {
        return {
            onRequestTimers: () => dispatch(fetchTimers())
        };
    })(Timers);