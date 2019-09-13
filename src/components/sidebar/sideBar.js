import React, { Component } from 'react';
// import { pushRotate as Menu } from "react-burger-menu";
import { Switch, Route, NavLink } from 'react-router-dom';
// import {NavLink } from 'react-router-dom';
import DashBoard from '../dashboard/dashBoard';
import AddTeacher from '../hr&payroll/addTeacherComponent';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import './sideBar.scss';
// import Routes from '../routes';
export class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = { rightMenu: false }
        this.showRight = this.showRight.bind(this);
    }
    showRight = () => {
        this.setState({ rightMenu: !this.state.rightMenu })
      }
    render() {
        return (
            <div className={ this.state.rightMenu ? "displayNone" : "displayBlock"} >
                {/* <Menu isOpen={ true } disableOverlayClick >
                    <NavLink to="/" exact  className="menu-item" activeClassName="active">Dashboard</NavLink>
                    <NavLink to="/addteacher" exact  className="menu-item" activeClassName="active">Add teacher</NavLink>
                    <NavLink to="/addteacher" exact className="menu-item" activeClassName="active">Add teacher</NavLink>
                    <NavLink to="/addteacher" exact className="menu-item" activeClassName="active">Settings</NavLink>
                </Menu>
                 */}
                <div className="side_nav_block">
                    <div className="side_nav">
                        <aside>
                            <div className="logo_block">
                                <h3 className="logo"><span>E</span> Shiksha</h3>
                                {/* <p><MenuIcon/></p> */}
                                <button className="svg_block" onClick={this.showRight}>
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" >
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                            <path d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z" fill="#000000" fillRule="nonzero" transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999) "></path>
                                            <path d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999) "></path>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                            <div className="side_nav_content">
                                <ul>
                                    <li><NavLink to="/" exact className="route_link"> <span className="route_link_icon"><DashboardIcon /></span> Dashboard</NavLink></li>
                                    <li><NavLink to="/addteacher" exact className="route_link" ><span className="route_link_icon"><SettingsIcon /></span>Settings</NavLink></li>
                                    <li><NavLink to="/addteacher" exact className="route_link" ><span className="route_link_icon"><SettingsIcon /></span>Teacher</NavLink></li>
                                    <li><NavLink to="/addteacher" exact className="route_link" ><span className="route_link_icon"><SettingsIcon /></span>Student</NavLink></li>
                                    <li><NavLink to="/addteacher" exact className="route_link" ><span className="route_link_icon"><SettingsIcon /></span>Parent</NavLink></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                    <div className="main_content">
                        <div className="top_nav">
                            <p>Hi, Aj</p>
                        </div>
                        <div className="route_content">
                            <Switch>
                                <Route exact path='/' component={DashBoard} />
                                <Route path='/dashboard' component={DashBoard} />
                                <Route path='/addteacher' component={AddTeacher} />
                            </Switch>
                            {/* <Routes/> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SideNav;