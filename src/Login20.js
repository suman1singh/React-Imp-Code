import React ,{useState}from "react";

export default function Login20() {
    const [data1,setData1]=useState(false);
    const [data2,setData2]=useState();
    const [data3,setData3]=useState();
    const [data4,setData4]=useState();
  function handleForm(e) {
    e.preventDefault();
    // if(userData.length<5 || passwordData<6 ){
    //     alert("User Name or Password is not valid");
    // }
  }  
  function userHandler(e) {
     let userData=e.target.value;
     if(userData.length<5){
        setData1(true);
     }
    console.log(e.target.value);
  }
  function passwordHandler(e) {
    let passwordData=e.target.value;
    console.log(e.target.value);
  }
  return (
    <div>
      <br />
      <form onSubmit={handleForm}>
        <input
          type="Text"
          placeholder="Enter UserName"
          onChange={userHandler}
        />
        {data1? <span>User Not valid</span>:null}
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          onChange={passwordHandler}
        ></input>
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
