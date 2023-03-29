
export const errorHandler = (data,res,code=400)=>{
    res.status(code).json({
        hasError:true,
        erroeMessage:data
    })
}

export const validateAllSignInFields = (fields)=>{
    //empty filed check
    for(let key in fields)
    {
        if(fields[key].trim=="")
        {
            throw `${key} required`
        }
        if(fields[key].length<3)
        {
            throw `${key} must be greater then 3`
        }
    }
    
    
  
}

export const responseHandle = (data,res,code=200)=>{
    res.status(code).json({
        "hasError":false,
        "body":data
    })
}