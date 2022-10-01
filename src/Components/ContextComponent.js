import React, { createContext, useContext, useState } from "react";

const UserContext = createContext([{
  firstName: "satis",
  lastName: "Chakkirala",
  email: "satish.chakkirala@intuit.com",
  suffix: 1
}])

const FourthLevel = () =>{
  const [user, setUser] = useContext(UserContext)
  return(
    <div>
      <h5>{`${user?.firstName} ${user.lastName} the ${user.suffix} born`}</h5>
      <button onClick={()=>{setUser(Object.assign({},user, {suffix: user?.suffix + 1}))}}>Increment</button>
    </div>
  )
}

const ThirdLevel = () =>{
  return (
    <div>
      Third Level
      <FourthLevel/>
    </div>
  )
}

const SecondLevel = () =>{
  return  (
    <div>
      Second Level
      <ThirdLevel/>
    </div>
  )
}

const FirstLevel = () => {
  return(
    <div>
      First Level
      <SecondLevel/>
    </div>
  )
};

const ContextComponent = () => {
  const userState = useState({
    firstName: "Venkata Satish Chakkirala",
    lastName: "Chakkirala",
    email: "hamsika.chakkirala@intuit.com",
    suffix: 1
  });

  return (
   <UserContext.Provider value={userState}>
    <h3>First Level</h3>
   <FirstLevel/>
    </UserContext.Provider>
  );
};

export default ContextComponent;
