import { useState } from 'react'
import { data } from '../data/data'
import '../styles/form.scss'
import MainDiv from './MainDiv'
import SideBar from './SideBar'
import CustomHook from '../customHooks/CustomHook'
const details={
  name:'',
  email:'',
  phone:'',
  address:'',
  city:'',
  state:'',
  zip:'',
  cardNumber:'',
  expirationDate:'',
  cvv:''
}

function FormDiv() {
  const[index,setIndex]=useState<number>(0)
  const [info,setDetails]=useState(details)
  const [Maxlength,Minlength,next,prev,dataDisplay]=CustomHook(data,index)

  const updateInfo = (key:string, value:string) => {
    setDetails(prevDetails => ({
      ...prevDetails,
      [key]: value
    }));
  };

  const handleSubmit=()=>{
    console.log("Submited")
    console.log(info)
  }
  
  console.log(info)

  return (
    <div className="form">
        <SideBar/>
        <MainDiv {...dataDisplay} index={index} setIndex={setIndex} minLength={Minlength} maxLength={Maxlength} next={next} prev={prev} setDetails={updateInfo} handleSubmit={handleSubmit} info={info}/>
    </div>
  )
}

export default FormDiv