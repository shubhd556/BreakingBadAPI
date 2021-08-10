import React from 'react'

function ErrorPage() {
    return (
        <div>
            <div className="" style={{minHeight:"72vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}>
            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_cg9lvxff.json"  background="transparent"  speed="1"  style={{maxWidth: "100%", height: "430px"}}  loop  autoplay></lottie-player>
            <h1 className="animate" style={{color:"black",fontWeight:"bolder"}}>Lost the track ?</h1>
                  
            </div>
        </div>
    )
}

export default ErrorPage
