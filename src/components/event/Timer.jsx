import React from 'react';
import moment from 'moment';
import FlipCountDown from './FlipCountDown';
import {ProgressBar} from 'react-bootstrap';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timerId: undefined,
            seconds: 0,
            minutes: 0,
            hours: 0,
            days: 0,
            isFinished: false,
            fullPeriod: 0,
            currentPercent: 0
        }
    }

    static getTimeRemaining(endTime) {
        const current = moment();
        const total = endTime.toDate() - current.toDate();
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return {
            seconds, minutes, hours, days, total
        };
    }

    tick(timer, fullPeriod) {
        const {seconds, minutes, hours, days, total} = timer;
        const currentPercent = Timer.resolveCurrentPercent(total, fullPeriod);
        this.setState({
            seconds: seconds > 0 ? seconds : 0,
            minutes: minutes > 0 ? minutes : 0,
            hours: hours > 0 ? hours : 0,
            days: days > 0 ? days : 0,
            total: total > 0 ? total : 0,
            currentPercent
        });
    }

    componentDidMount() {
        const remaining = Timer.getTimeRemaining(this.props.endTime);
        const timerId = setInterval(() => {
            const timer = Timer.getTimeRemaining(this.props.endTime);
            this.tick(timer, this.state.fullPeriod);
            if (timer.total <= 0) {
                this.setState({isFinished: true});
                clearInterval(timerId);
            }
        }, 1000);
        const fullPeriod = this.props.endTime.diff(this.props.createdAt);
        const currentPercent = Timer.resolveCurrentPercent(remaining.total, fullPeriod);
        this.setState({timerId, fullPeriod, currentPercent, ...remaining});
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    static resolveCurrentPercent(currentRemaining, fullPeriod) {
        if (currentRemaining <= 0) {
            return 100;
        }
        return 100 - Math.ceil(currentRemaining * 100 / fullPeriod);
    }

    render() {
        const {id, title, description, endTime} = this.props;
        let label, active = true;
        if (this.state.isFinished) {
            label = <span className="label label-info">Finished</span>;
            active = false;
        }
        const currentState = {days: this.state.days, hours: this.state.hours, minutes: this.state.minutes, seconds: this.state.seconds};
        return (
            <div className={'col-md-4'}>
                <div className={this.state.isFinished ? 'panel panel-primary' : 'panel panel-default'}>
                    <div className='panel-heading'>{title} #{id} {label}</div>
                    <div className='panel-body'>
                            <div className={'well'}>
                                <FlipCountDown {...currentState}/>
                            </div>
                            <p>{description} {endTime.format('dddd, YYYY-MM-DD hh:mm:ss')}</p>
                            <ProgressBar bsStyle="info" active={active} now={this.state.currentPercent} label={`${this.state.currentPercent}%`}/>
                    </div>
                </div>
            </div>
        );
    }

}
