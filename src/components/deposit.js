

import React, { useEffect } from "react";
import Card from './context.js';


const ATMDeposit = ({ onChange, isValid }) => {
  return (
    <div className="DepositForm">
      <label className="label huge">
        <h3> DEPOSIT AMOUNT</h3>
        <input id="number-input" type="text" width="200" onChange={onChange}></input>
        <input type="submit" disabled={!isValid} width="200" value="DEPOSIT" id="submit-input"></input>

      </label>
    </div>

  );
};

const Deposit = ({totalBalance, setTotalBalance}) => {

  const [deposit, setDeposit] = React.useState(0);
  const [validTransaction, setValidTransaction] = React.useState(false);
  const [totalState, setTotalState] = React.useState(0);


  React.useEffect(() => {
    if (totalBalance.length) {
      setTotalState(totalBalance[0])
    }
  }, [totalBalance]);


  let status = `$ ${totalState} `;

  const handleChange = (event) => {
    console.log(Number(event.target.value));
    if(isNaN(Number(event.target.value))){
    alert(`Enter numerical values only.`);
    } else{
        if (Number(event.target.value) <= 0) {
          alert(`Enter positive numbers only.`);
          return setValidTransaction(false);
        } else {
          setValidTransaction(true);
        }
        setDeposit(Number(event.target.value));
    }

  };

  const handleSubmit = (event) => {
    let newTotal =  totalState + deposit;
    setTotalState(newTotal);
    setTotalBalance([newTotal]);
    setValidTransaction(false);
    event.preventDefault();
    alert(`Successful transaction, you deposit $ ${deposit} in your account. Your account balance is $ ${newTotal}.`);
  };


  return (
    <Card
      txtcolor="black"
      header="Deposit"
      body={(

      <div>

        <div className="transaction">
                  <th scope="col">Balance: </th>
                  <th scope="col" id="total">{status}</th>
        </div>
        {<form onSubmit={handleSubmit}>
        
                {
                  <ATMDeposit
                    onChange={handleChange}
                    isValid={validTransaction}
                  ></ATMDeposit>
                }
        
            </form>}
        </div>

      )}
      
    />  
  );
};

export default Deposit;