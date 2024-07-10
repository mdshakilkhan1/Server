export const testMiddleware = ( req,res,next)=>{
    console.log("Testing middleware ")

    return res.json({
        status: 200,
        message:" from middlewere "
    })

    next()
}