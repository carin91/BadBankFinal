
import React from 'react';
import NavBar from './components/navbar.js';
import Home from './components/home.js';
import CreateAccount from './components/createaccount.js';
import Deposit from './components/deposit.js';
import AllData from './components/alldata.js';
import './app.css';
import Withdraw from './components/withdraw.js';
import { Route, Switch, Link} from 'react-router-dom';




const App = () => {
    const [totalBalance, setTotalBalance] = React.useState([]);
    const [newUsers, setNewUsers] = React.useState([]);

    return(
    <div className='container'>

        <div>
            <NavBar/>
        </div>

        <main className='main'>
            <Switch>
                <Route exact path='/' component={Home}/>

                <Route exact path='/CreateAccount' component= { () =>{
                return(
                    <CreateAccount
                        newUsers = {newUsers} 
                        setNewUsers = {setNewUsers} 
                    />)
                }   }/>

                <Route exact path='/deposit' component= { () =>{
                return(
                    <Deposit 
                        totalBalance = {totalBalance} 
                        setTotalBalance = {setTotalBalance}
                    
                    />)
                }   }/>

                <Route exact path='/withdraw' component= { () =>{
                return(
                    <Withdraw 
                        totalBalance = {totalBalance} 
                        setTotalBalance = {setTotalBalance}
                    
                    />)
                }   }/>

                <Route exact path='/alldata' component= { () =>{
                return(
                    <AllData
                    newUsers = {newUsers} 
                    setNewUsers = {setNewUsers} 
                    />)
                }   }/>
                

            </Switch>
        </main>
        

    </div>
    
    )
}

export default App;

