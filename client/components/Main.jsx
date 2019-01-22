import React from 'react';
import Axios from 'axios';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        Axios.get('/test').then(({data}) => {
            console.log(data);
        });
    }

    render() {
        return (
            <div>
                React is Rendering if you see this
            </div>
        )
    }
};
