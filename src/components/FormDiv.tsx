import { useState } from 'react'
import { data } from '../data/data'
import '../styles/form.scss'
// import { dataType } from '../types/types'
import MainDiv from './MainDiv'
import SideBar from './SideBar'
import CustomHook from '../customHooks/CustomHook'

function FormDiv() {
    const[index,setIndex]=useState(0)
    const [Maxlength,Minlength,next,prev,dataDisplay]=CustomHook(data,index)

  return (
    <div className="form">
        <SideBar/>
        <MainDiv    {...dataDisplay} setIndex={setIndex} next={next} index={index} prev={prev} minLength={Minlength} maxLength={Maxlength}/>
    </div>
  )
}

export default FormDiv