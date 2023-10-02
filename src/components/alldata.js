
import React, { useEffect } from 'react';
import allUsersData from "./data.js";


//Component
function AllData({newUsers, setNewUsers}){

  const [usersBadBank, setUsersBadBank] = React.useState(allUsersData);

  useEffect(() => {
    if (newUsers.length) {
      setUsersBadBank(newUsers[0])
    }
  }, [newUsers]);

  

  // useEffect(()=>{

  // }, [newUsers])

  // const usersBadBank = JSON.parse(newUsers);
  const handleDelete = (id) =>{
    const newList = JSON.stringify(JSON.parse(usersBadBank).filter(item => item.id !== id));
    
     setUsersBadBank(newList);
    //  bankUsers = [...newList];
    //  allUsersData =JSON.stringify(newList);
     setNewUsers([newList]);
     
  }
  
  return (
    
    <div className='tableAllData'>
      <h2>All Data</h2>
      <table className="table">
        <thead>
        <tr>

      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Delete</th>
    </tr>
        </thead>
        <tbody>
          {
            JSON.parse(usersBadBank).map(user =>  
              <tr>
                <td scope="col">{user.Name}</td>
                <td scope="col">{user.Email}</td>
                <td scope="col">{user.Password}</td>
                <td scope="col" >
                  <div  className="pointer1" onClick = {() => handleDelete(user.id)}>
                    X 
                  </div>
                  </td>
                {/*  */}
              </tr>
 )
          }
        </tbody>

      </table>

    </div>
  );
}

export default AllData;