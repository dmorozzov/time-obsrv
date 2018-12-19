import React from 'react';
import { connect } from "react-redux";
import { fetchTimers } from './actions/actions';
import Timers from './components/Timers'

export default class App extends React.Component {

    render() {
        return (
            <div className="row mt-5">
                <Timers/>
            </div>
        )
    }
}