

const userselection=(e)=>{
    const selection=e.target.innerHTML
    const compselection= randomselect()
    const result= winner(selection,compselection)
    markres(result)

    document.querySelector(".userselection").innerHTML=`${selection}`
    document.querySelector(".computerselction").innerHTML=`${compselection}`
    document.querySelector(".result").innerHTML=result
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
const winner=(user,comp)=>{
    console.log(user,comp);
    
    if(user==="rock" && comp==="paper"){
        return("loss")
    }else if(user==="rock" && comp==="scissor"){
        return("won")
    }else if(user==="paper" && comp==="scissor"){
        return("loss")
    }else if(user==="paper" && comp==="rock"){
        return("won")
    }else if(user==="scissor" && comp==="rock"){
        return("loss")
    }else if(user==="scissor" && comp==="paper"){
        return("won")
    }else{
        return("same")
    }
}

const markres=(res)=>{

    if(res==="won"){
        document.querySelector(".userres").innerHTML++
    }else if(res==="loss"){
        document.querySelector(".compres").innerHTML++
    }

    

}