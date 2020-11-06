import React from 'react'
import {  Route, Redirect, Switch, withRouter } from "react-router-dom"
import CompA from "../../component/compA"
import CompB from "../../component/compB"
import CompC from "../../component/compC"
import Login from "../../component/Login"


const routes =[
    {id: 1, path: '/compA', component: CompA},
    {id: 2, path: '/compB', component: CompB},
    {id: 3, path: '/compC/:num', component: CompC}
];


class Nav extends React.Component{
    state = {auth : false};
 
    onLogin = () =>{
        this.setState({auth:true});
        this.props.history.push({ pathname: '/compA' })
    };

    render(){
        const routeList = routes.map((route)=>{
            return <Route
            key ={route.id}
            path={route.path} render = {
            (props) =>{
                return this.state.auth ?
                <route.component{...props}/> : <Redirect to='/'/>
            }
            }/>
        }); 

        return(
            <div>
                <Switch>
                <Route path="/" exact render={(props)=>{
                    return <Login {...props} onLogin={this.onLogin} />
                }} />
                {routeList}
                <Route render={(props) =>{
                    return <h1>404</h1>
                }}></Route>
                </Switch>
            
            </div>
        )

    }
   
}
export default withRouter (Nav);