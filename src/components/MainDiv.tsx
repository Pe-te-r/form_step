import '../styles/mainDiv.scss'

interface customData{
    heading: {
        h4: string,
        p: string
    },
    inputs: Array<{
        label: string,
        type: string,
        id: string,
        name: string,
        displayName: string
    }>
    index: number,
    setIndex: (index: number) => void,
    next: number,
    prev: number,
    minLength: number,
    maxLength: number,
}

const MainDiv =({heading,inputs, setIndex,index,next,minLength,maxLength,prev}: customData)=>{
    console.log(index)
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
            {index > minLength && index !== maxLength?<button type="button" onClick={()=>setIndex(prev)}>back</button>: <></>}
            {index === maxLength ? <button type="button" onClick={()=>setIndex(next)}>next</button>: <button type='button'> submit</button>      }
        </div>
    </div>
  )
}

export default MainDiv