/**
 * Created by cici on 2019/1/28.
 */
import React from 'react';
import style from './App.less';
import Routes from './Routes';


export default class App extends React.PureComponent {
    componentDidMount() {
        document.title = '3213';
    }

    render() {
        return (
            <div className={style.app}>
                <Routes />
            </div>
        );
    }
}
