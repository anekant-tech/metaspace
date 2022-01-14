import React, {useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
//import { bindActionCreators } from 'redux'
import {actionCreators}from '../state/index.js'



const Shop = () => {
    const amount = useSelector(state => state.amount)
    const  [value, setValue] = useState(0)
    const dispatch = useDispatch()
    const handler=()=>{
        let sum=parseInt(document.querySelector(".sum").value)
      setValue(sum)
      console.log(value)
    }
    return (<>
    <div className="container ">
        <div className="card " style={{width:"18rem "}}>
  <img className="card-img-top rounded-circle" src="https://www.ynotpics.com/wp-content/uploads/2017/06/new-indian-500-rs-notes.jpg" alt="Card"/>
  <div className="card-body">
  <div className="d-flex">
            <button disabled={amount===0?true:false}className="btn btn-primary mx-2" onClick={(()=>{dispatch(actionCreators.withDrawMoney(100))})}>-</button>
            <h5>Deposite/Withdraw money</h5>
            <button  className="btn btn-primary mx-2"onClick={(()=>{dispatch(actionCreators.depositeMoney(value))})}>+</button>

            
        </div>
        <div className="my-3 " >
        <label><b>Amount</b></label>
        <input className=" sum mx-3 "type="number"  placeholder="enter Amount" onChange={handler}/>
        </div>
    
    
    <a href="/" className="btn btn-primary" onClick={()=>{alert(`your updated balance is ${amount}`)}}>view balance</a>
  </div>
</div>
</div>
    
        
        </>)
}

export default Shop
