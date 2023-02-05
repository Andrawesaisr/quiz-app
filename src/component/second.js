import React from 'react'
import { nanoid } from 'nanoid'
import First from './first'
export default function Second(props){
    const [fiveQ,setFive]=React.useState([])
    const [clicked,setClick]=React.useState(false)
    const [finalResult,setResult]=React.useState([])
    const [number,setNumber]=React.useState('')
   

    function change(){
        setClick(!clicked)
       }

    React.useEffect(()=>{
        function createResults(){
            let count=0;
            let arr2=[]
            for(let i=0;i<fiveQ.length;i++){
                if(fiveQ[i].correct === fiveQ[i].value){
                    arr2.push({
                       question:fiveQ[i].question,
                       id:fiveQ[i].id,
                        green: fiveQ[i].correct,
                        red:null
                    })
                    count++;
                }else{
                    arr2.push({
                        question:fiveQ[i].question,
                        id:fiveQ[i].id,
                         green: fiveQ[i].correct,
                         red:fiveQ[i].value
                     })
                }
            }
            setNumber(`Your score ${count}/5 correct answers`)
        setResult(arr2)
        }
        createResults()      
    },[fiveQ])
console.log(finalResult)
console.log(number)

  
    React.useEffect(()=>{
        function createQ(){
            let arr1=[]
            for(let i=0;i<5;i++){
                arr1.push({
                    id: i,
                    question:props.array[i].question,
                    value :null,
                    correct:props.array[i].correct_answer

                })
            }
            setFive(arr1)
        }
        createQ()
    },[])
    
function everyClick(id,val){
    setFive(fiveQ=> fiveQ.map(fiveQ=> fiveQ.id===id ? {...fiveQ,value:val}: fiveQ))

}



const allElements=fiveQ.map(q=>( <div>
<p className='questions'>{q.question}</p> 
<div className='container-tf'>
    <p   className='tf' style={{
        backgroundColor: q.value==="True" ? 'white' :'rgb(136, 136, 218)',
        color: q.value==="True" ? 'rgb(136, 136, 218)':'white'
    }} onClick={()=>everyClick(q.id,"True")}>True</p>
    <p   className='tf'style={{
        backgroundColor: q.value==="False" ? 'white' :'rgb(136, 136, 218)',
        color: q.value==="False" ? 'rgb(136, 136, 218)':'white'
    }}
     onClick={()=>everyClick(q.id,"False")}>False</p>
   </div>
   <hr className='hr'/>
</div> 
))




const finals=finalResult.map(f=>(<div>
    <p className='questions'>{f.question}</p> 
    <div className='container-tf'>
        <p   className='tf' style={{
             backgroundColor : f.green==="True" ? "green": '' || f.red==="True" ? "red" : ''
        }}  >True</p>
        <p   className='tf'style={{
            backgroundColor : f.green==="False" ? "green": '' || f.red==="False" ? "red" : ''
        }}
          >False</p>
       </div>
       <hr className='hr'/>
    </div> ))


    return(
      <div className='container-of-all'>
 { !clicked ? allElements : finals }
<div className='button-calculate'>
    <p className='calculate'>{clicked ? number : null}</p>
 
<button className='check-answers' onClick={!clicked ? change : props.value}>{!clicked ? "check you answers": "play again"}</button>
</div>
    
      </div>
    )
}