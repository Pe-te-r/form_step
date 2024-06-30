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
    },
    {
        heading:{
            h4:"Address",
            p:"Please provide your address."
        },
        inputs:[
            {label:"address",type:"text",id:"address",name:"address", displayName:"Address"},
            {label:"city",type:"text",id:"city",name:"city", displayName:"City"},
            {label:"state",type:"text",id:"state",name:"state", displayName:"State"},
            {label:"zip",type:"text",id:"zip",name:"zip", displayName:"Zip"}
        ]
    },
    {
        heading:{
            h4:"Payment",
            p:"Please provide your payment information."
        },
        inputs:[
            {label:"cardNumber",type:"text",id:"cardNumber",name:"cardNumber", displayName:"Card Number"},
            {label:"expirationDate",type:"text",id:"expirationDate",name:"expirationDate", displayName:"Expiration Date"},
            {label:"cvv",type:"text",id:"cvv",name:"cvv", displayName:"CVV"}
        ]
    }
]


