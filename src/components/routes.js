import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from './dashboard/dashBoard';
// import Login from './login/login';
import AddTeacher from './hr&payroll/addTeacherComponent';
export default class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route path='/' component={DashBoard} />
                <Route path='./dashboard' component={DashBoard} />
                <Route path='/addteacher' component={AddTeacher} />
              </Switch>
        )
    }
}