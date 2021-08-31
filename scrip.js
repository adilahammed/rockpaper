

const userselection=(e)=>{
    const selection=e.target.innerHTML
    console.log(selection)
    const compselection= randomselect()
    document.querySelector(".userselection").innerHTML=`${selection}`
    document.querySelector(".computerselction").innerHTML=`${compselection}`

}


const randomselect=()=>{
    const val=Math.floor(Math.random()*3)
    let retval=""
    if(val===0){
        retval="rock"
    }else if(val===1){
        retval="paper"
    }else{
        retval="scissor"
    }
    return retval
}