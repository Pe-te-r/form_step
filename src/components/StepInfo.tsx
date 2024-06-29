type stepInfo={
    index: number,
    step:string
    category: string
}


function StepInfo({index,step,category}: stepInfo) {
  return (
    <div className='sideBar-Container'>
            <p className='currentStep'>{index}</p>
            <div className='currentInfo'>
                <h5>{step}</h5>
                <h5>{category}</h5>
            </div>
        </div>
  )
}

export default StepInfo