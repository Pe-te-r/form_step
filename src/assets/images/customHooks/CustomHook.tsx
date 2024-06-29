type customTypes={
    step:number
    data: any
}
function CustomHook({step,data}: customTypes) {
    console.log(step,data);
}

export default CustomHook