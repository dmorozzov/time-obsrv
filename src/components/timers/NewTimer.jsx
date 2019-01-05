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
            <button type="button" className={'btn btn-primary'} onClick={() => addTimer({title: 'I was borned for this', endTime: moment().add(10,'seconds')})}>
                Add timer
            </button>
        )
    }
}

export default connect(undefined, dispatch => (bindActionCreators({ addTimer }, dispatch)))(NewTimer);