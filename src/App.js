import React, { useState ,useEffect } from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import './style.css';

export default function App() {
  const [data, setData] = useState({
    first: JSON.parse(localStorage.getItem('first')),
    last: JSON.parse(localStorage.getItem('last')),
    email: JSON.parse(localStorage.getItem('email')),
    password: JSON.parse(localStorage.getItem('password')),
  });

const [ tickOne , setTickOne]= useState("")
const [ tickTwo , setTickTWo]= useState("")
const [ usersData , setUsersData]= useState([])
useEffect(()=>{
if(localStorage.getItem("multipleUser")){
 let userList = JSON.parse(localStorage.getItem("multipleUser"))
 setUsersData(userList)
}
},[])
const handleTickOne=()=>{
  setTickOne("Tick")
}
const handleTickTwo=()=>{
  setTickTWo("Tick")
}

console.log(tickOne)
console.log(tickTwo)

  localStorage.setItem('first', JSON.stringify(data.first));
  localStorage.setItem('last', JSON.stringify(data.last));
  localStorage.setItem('email', JSON.stringify(data.email));
  localStorage.setItem('password', JSON.stringify(data.password));

  function submit(){
    if(tickOne && tickTwo  ){
      console.log(data,"save")
      usersData.push(data)
    setUsersData([...usersData])
      localStorage.setItem("multipleUser" ,JSON.stringify(usersData))
      alert(`Hey... ${data.first} ${data.last} you register succesfully`)
    }else{
      alert("You Have to tick first")
    }
  }

  return (
    <div className="main">
      <h2>Registration Page</h2>
      <div className="innMap">
      <CustomInput
      className="input"
        value={data.first}
        placeholder="FirstName"
        onChange={(e) => setData({ ...data, first: e.target.value })}
        type=""
      />
      <CustomInput
        className="input"
        value={data.last}
        placeholder="LastName"
        onChange={(e) => setData({ ...data, last: e.target.value })}
        type=""
      />
      <CustomInput
        className="input"
        value={data.email}
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
        type=""
      />
      <CustomInput
        className="input"
        value={data.password}
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
        type=""
      />
      <div>
      <input
        value={tickOne}
        onChange={handleTickOne}
        type="checkbox"
      />
      <span>Lorem ipsum dolor elit. Inventore placeat  </span>
    </div>
    <div>
      <input
        value={tickTwo}
        id="condition" name="topping"
        onChange={handleTickTwo}
        type="checkbox"
      />
      <span>Lorem ipsum dolor sit amet consggfgfgf </span>
      </div>
      
      </div>
      <button onClick={submit}>Register</button>
    </div>
  );
}
