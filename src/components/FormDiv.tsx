import { data } from '../data/data'
import '../styles/form.scss'
import { dataType } from '../types/types'
import MainDiv from './MainDiv'
import SideBar from './SideBar'

function FormDiv() {
    const info: dataType=data[0]
    console.log(info)
  return (
    <div className="form">
        <SideBar/>
        <MainDiv {...info}/>
    </div>
  )
}

export default FormDiv