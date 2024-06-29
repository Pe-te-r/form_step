import '../styles/mainDiv.scss'
import { dataType } from '../types/types'
const MainDiv =({heading,inputs}: dataType)=>{
  return (
    <div className='mainDiv'>
        <div className='heading'>
            <h4>{heading.h4}</h4>
            <p>{heading.p}</p>
        </div>
        {inputs.map((inputdiv: any,index: number)=>{
            return(
            <div key={index} className='input-group'>
                    <label htmlFor={inputdiv.label}>{inputdiv.displayName}</label>
                    <input type={inputdiv.type} id={inputdiv.id} name={inputdiv.name} required/>
            </div>
            )
        })}
        <div className='button-group'>
            <button type="submit">back</button>
            <button type="submit">next</button>
        </div>
    </div>
  )
}

export default MainDiv