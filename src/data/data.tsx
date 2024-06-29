import { dataType } from "../types/types";

export const data: dataType[]=[
    {
        heading:{
            h4:"Personal Info",
            p:"Please provide your name, email address and phone number."
        },
        inputs:[
            {label:"name",type:"text",id:"name",name:"name",displayName:"Name"},
            {label:"email",type:"text",id:"email",name:"email", displayName:"Email"},
            {label:"phone",type:"text",id:"phone",name:"phone",displayName:"Phone"}
        ]
    }
]
