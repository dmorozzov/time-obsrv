import React from 'react';

const AnimatedCard = ({position, animation, digit}) => {
    return (
        <div className={`flipCard ${position} ${animation}`}>
            <span>{digit}</span>
        </div>
    );
};

const StaticCard = ({position, digit}) => {
    return (
        <div className={position}>
            <span>{digit}</span>
        </div>
    );
};

const FlipUnitContainer = ({digit, prevDigit, shuffle}) => {

    let currentDigit = digit;
    let previousDigit = prevDigit;

    if (currentDigit < 10) {
        currentDigit = `0${currentDigit}`;
    }
    if (previousDigit < 10) {
        previousDigit = `0${previousDigit}`;
    }

    const digit1 = shuffle
        ? previousDigit
        : currentDigit;
    const digit2 = !shuffle
        ? previousDigit
        : currentDigit;

    const animation1 = shuffle
        ? 'fold'
        : 'unfold';
    const animation2 = !shuffle
        ? 'fold'
        : 'unfold';

    return (
        <div className={'flipUnitContainer'}>
            <StaticCard position={'upperCard'} digit={currentDigit}/>
            <StaticCard position={'lowerCard'} digit={previousDigit}/>
            <AnimatedCard
                position={'first'}
                digit={digit1}
                animation={animation1}
            />
            <AnimatedCard
                position={'second'}
                digit={digit2}
                animation={animation2}
            />
        </div>
    );
};

export default class FlipCountDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0, hours: 0, minutes: 0, seconds: 0,
            prevDays: 0, prevHours: 0, prevMinutes: 0, prevSeconds: 0,
            daysShuffle: true, hoursShuffle: true, minutesShuffle: true, secondsShuffle: true,
        };
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        this.updateTime();
    }

    updateTime() {
        const {days, hours, minutes, seconds} = this.props;

        if (days !== this.state.days) {
            const prevDays = this.state.days;
            const daysShuffle = !this.state.hoursShuffle;
            this.setState({
                days,
                prevDays,
                daysShuffle
            });
        }

        if (hours !== this.state.hours) {
            const prevHours = this.state.hours;
            const hoursShuffle = !this.state.hoursShuffle;
            this.setState({
                hours,
                prevHours,
                hoursShuffle
            });
        }

        if (minutes !== this.state.minutes) {
            const prevMinutes = this.state.minutes;
            const minutesShuffle = !this.state.minutesShuffle;
            this.setState({
                minutes,
                prevMinutes,
                minutesShuffle
            });
        }

        if (seconds !== this.state.seconds) {
            const prevSeconds = this.state.seconds;
            const secondsShuffle = !this.state.secondsShuffle;
            this.setState({
                seconds,
                prevSeconds,
                secondsShuffle
            });
        }
    }

    render() {

        const {
            days, hours, minutes, seconds,
            prevDays, prevHours, prevMinutes, prevSeconds,
            daysShuffle, hoursShuffle, minutesShuffle, secondsShuffle
        } = this.state;

        return (
            <div className={'row'}>
                <div className={'col-md-3'}>
                    <span>Days</span>
                    <FlipUnitContainer digit={days} prevDigit={prevDays} shuffle={daysShuffle}/>
                </div>
                <div className={'col-md-3'}>
                    <span>Hours</span>
                    <FlipUnitContainer digit={hours} prevDigit={prevHours} shuffle={hoursShuffle}/>
                </div>
                <div className={'col-md-3'}>
                    <span>Minutes</span>
                    <FlipUnitContainer digit={minutes} prevDigit={prevMinutes} shuffle={minutesShuffle}/>
                </div>
                <div className={'col-md-3'}>
                    <span>Seconds</span>
                    <FlipUnitContainer digit={seconds} prevDigit={prevSeconds} shuffle={secondsShuffle}/>
                </div>
            </div>
        );
    }
}
