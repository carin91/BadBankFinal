

import React from "react";
import Card from './context.js';


const ATMWithdraw = ({ onChange, isValid }) => {
  return (
    <div className="WithdrawForm">
      <label className="label huge">
        <h3> WITHDRAW AMOUNT</h3>
        <input id="number-input" type="text" width="200" onChange={onChange}></input>
        <input type="submit" disabled={!isValid} width="200" value="WITHDRAW" id="submit-input"></input>

      </label>
    </div>

  );
};

const Withdraw = ({totalBalance, setTotalBalance}) => {

  const [withdraw, setWithdraw] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [validTransaction, setValidTransaction] = React.useState(false);


  React.useEffect(() => {
    console.log('In withdraw the total is:',totalBalance[0])
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
        if (Number(event.target.value) <= 0 || Number(event.target.value)> totalState) {
          alert(`Transaction failed.`);
          return setValidTransaction(false);
        } else {
          setValidTransaction(true);
        }
        setWithdraw(Number(event.target.value));
    };
  };

  const handleSubmit = (event) => {
    let newTotal =  totalState - withdraw;
    setTotalState(newTotal);
    setTotalBalance([newTotal]);
    setValidTransaction(false);
    event.preventDefault();
    alert(`Successful transaction, you withdraw $ ${withdraw} from your account. Your account balance is $ ${newTotal}.`);
  };


  return (
    <Card
    txtcolor="black"
    header="Withdraw"
    body={(

    <div>

      <div className="transaction">
                 <th scope="col">Balance: </th>
                 <th scope="col" id="total">{status}</th>
      </div>
       {<form onSubmit={handleSubmit}>
      
              {
                <ATMWithdraw
                  onChange={handleChange}
                  isValid={validTransaction}
                ></ATMWithdraw>
              }
      
          </form>}
      </div>

    )}
    
  />  

  );
};

export default Withdraw;
