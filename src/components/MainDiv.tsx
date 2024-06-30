import '../styles/mainDiv.scss'

interface customData {
    heading: {
      h4: string;
      p: string;
    }
    inputs: {
      label: string;
      type: string;
      maxLength: number;
      minLength: number;
    }[];
    index: number;
    setIndex: any;
    minLength: any;
    maxLength: any;
    next: any;
    prev: any;
    setDetails: any;
    handleSubmit: any;
    info: any;
  }


const MainDiv =({heading,inputs, index, setIndex,next,minLength,maxLength,prev,setDetails,handleSubmit,info}: customData)=>{
    console.log(index,maxLength,minLength) 
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
                    <input type={inputdiv.type} value={info[inputdiv.name]} onChange={(e)=>setDetails(inputdiv.name,e.target.value)} id={inputdiv.id} name={inputdiv.name} required/>
            </div>
            )
        })}
        <div className='button-group'>
            {index > minLength && index !== maxLength?<button type="button" onClick={()=>setIndex(prev)}>back</button>: <></>}
            {index+1  < maxLength ? <button type="button" onClick={()=>setIndex(next)}>next</button>: <button type='submit' onClick={handleSubmit}> submit</button>      }
        </div>
    </div>
  )
}

export default MainDiv