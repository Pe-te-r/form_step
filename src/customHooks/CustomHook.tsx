 export interface customDataType{
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
}

function CustomHook(customData: customDataType[],index: number) {
    function maxLength(){
        return customData.length
    }
    function minLength(){
        return 0
    }
    function next(){
        if(index<maxLength()-1){
            return index+1
        }
        return index
    }
    function previous(){
        if(index>minLength()){
            return index-1
        }
        return index
    }
    function info(): any{
        return customData[index]
    }

    return [maxLength(), minLength(),next(),previous(),info()]
}

export default CustomHook