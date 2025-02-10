export const new_req_identifier = (req,res,next)=>{
    if(!req.session) req.isNew = true
    else req.isNew = false

    next()
}