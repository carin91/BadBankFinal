
import React from 'react';
import { useFormik } from "formik";
import { Formik } from 'formik';
import allUsersData from "./data.js";


function CreateAccount({newUsers, setNewUsers}){

  const [isAnotherAccount, setIsAnotherAccount] = React.useState(false);
  const [usersBadBank, setUsersBadBank] = React.useState([allUsersData]);
  const [formValues, setFormValues] = React.useState(null);

  React.useEffect(() => {
    if (newUsers.length) {
      setUsersBadBank(newUsers[0])
    }
  }, [newUsers]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },


    enableReinitialize: true,

    onSubmit: (values) => {
      
      setIsAnotherAccount(true);
      alert("Successfully created user.");
      const newUser ={id: 4, 
      Name: values.name, 
      Email: values.email,
      Password: values.password,
      AccountBalance: 0};
      
      
      const newList =JSON.stringify([...JSON.parse(usersBadBank), newUser]);
      setUsersBadBank(newList);
      setNewUsers([newList]);
      // console.log(allUsersData);
      formik.resetForm();
      
    },

    validate: (values) => {
      let errors = {};
      //name validation
      if (!values.name || values.name.length<1){
        errors.name = "Field required";
      } else if(!/^[a-zA-Z0-9]/.test(values.name)){
        errors.name = "Only alphanumeric characters."
      }
      
      
      else if (values.name.length>0  & !values.name.match("^[A-Za-z]{1,20} [A-Za-z]{1,20}")) {
        errors.name = "Please use the format first-name laste-name (i.e.: Camilo Rincon)";
      } 



      //email validation
      if (!values.email || values.email.length<1) {
        errors.email = "Field required";
      } else if ( (JSON.parse(usersBadBank).filter(item => item.Email === values.email)).length === 1) {
        errors.email = "This email already exists.";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "This does not look like an email."
      }
      //password validation
      if (!values.password || values.password.length<1) {
        errors.password = "Field required";
      } else if (values.password.length < 8 ){
        errors.password = "At least 8 characters";
      }

      console.log(errors);

      return errors;
      
    },
    // resetForm: () =>{
    //   this.values.Email = "";
    //   this.values.Name = "";
    //   this.values.Password = "";
    // },
  });

  const handleAnotherAccount = () => {
    

    console.log(isAnotherAccount);
    setIsAnotherAccount(false);
    console.log(false);
  };

  return (
    <div>
      <h1>
          CREATE  <br /> ACCOUNT
      </h1>
    <Formik
    initialValues = {formik.initialValues}>

      <form onSubmit={formik.handleSubmit}>
        <div>Name:</div>
        <input
          id="nameField"
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <br />
        {(formik.errors.name) ? (
          <div id="nameError" style={{ color: "red" }}>
            {formik.errors.name}
          </div>
        ) : null}
        <div>Email:</div>
        <input
          id="emailField"
          type="text"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) : null}
        <div>Password:</div>
        <input
          id="pswField"
          type="text"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <br />
        {formik.errors.password ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}

          {/* <button type='reset' >
          Reset </button> */}

        { isAnotherAccount&&(<button id="anotherAccount" type="reset" onClick = {() => handleAnotherAccount()}>
          Add Another Account
        </button>)}
        {(!isAnotherAccount)&&(<button id="submitBtn" type='submit' disable ={!Formik.isValid || formik.isSubmitting}>
          Submit
        </button>)}

      </form>


    </Formik>
    </div>
  );

}

export default CreateAccount;