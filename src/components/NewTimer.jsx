import React from 'react';
import connect from 'react-redux/es/connect/connect';
import {bindActionCreators} from 'redux';
import {addTimer} from '@src/components/timers/actions';
import moment from 'moment';

class NewTimer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {addTimer} = this.props;

        return (
            <div>
                <button onClick={() => addTimer({title: 'I was borned for this', endTime: moment()})}>
                    Add timer
                </button>
            </div>
        )
    }
}

export default connect(undefined, dispatch => (bindActionCreators({ addTimer }, dispatch)))(NewTimer);