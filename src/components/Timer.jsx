import React from 'react';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, title, endTime} = this.props;
        return (
            <li className="form-selector">
                <div>{title} (#{id})</div>
                <strong>{endTime.format("dddd, MMMM Do YYYY, hh:mm:ss")}</strong>
            </li>);
    }

}

// export default function MasterForm(props) {
//     const config = props.config;
//     const formModel = props.formModel;
//     return (
//         <div className="form-full">
//             <MasterSelector formModel={formModel} config={config}/>
//         </div>);
// }