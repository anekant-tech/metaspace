import React, {useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
//import { bindActionCreators } from 'redux'
import {actionCreators}from '../state/index.js'
import img2 from './img2.jpg'



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
    
    <div div className="row text-center">
          <div className="col-md-3 mx-3 my-4">
        <div className="card  text-center" style={{width:"18rem "}}>
  <img className="card-img-top rounded-circle" src={img2} alt="Card"/>
  <div className="card-body">
  <div className="d-flex">
            <button disabled={amount===0?true:false}className="btn btn-primary mx-3" onClick={(()=>{dispatch(actionCreators.withDrawMoney(100))})}>-</button>
            <h6>Deposite/Withdraw money</h6>
            <button  className="btn btn-primary mx-3"onClick={(()=>{dispatch(actionCreators.depositeMoney(value))})}>+</button>

            
        </div>
        <div className="my-3 " >
        <label><b>Amount</b></label>
        <input className=" sum mx-3 "type="number"  placeholder="enter Amount" onChange={handler}/>
        </div>
    
    
    <a href="/" className="btn btn-primary" onClick={()=>{alert(`your updated balance is ${amount}`)}}>view balance</a>
  </div>
</div>
</div>
<div className="col-md-3 mx-3 my-4">
<div className="card  text-center" style={{width:"18rem "}}>
  <img className="card-img-top rounded-circle" src={img2} alt="Card"/>
  <div className="card-body">
  <div className="d-flex">
            <button disabled={amount===0?true:false}className="btn btn-primary mx-3" onClick={(()=>{dispatch(actionCreators.withDrawMoney(100))})}>-</button>
            <h6>Deposite/Withdraw money</h6>
            <button  className="btn btn-primary mx-3"onClick={(()=>{dispatch(actionCreators.depositeMoney(value))})}>+</button>

            
        </div>
        <div className="my-3 " >
        <label><b>Amount</b></label>
        <input className=" sum mx-3 "type="number"  placeholder="enter Amount" onChange={handler}/>
        </div>
    
    
    <a href="/" className="btn btn-primary" onClick={()=>{alert(`your updated balance is ${amount}`)}}>view balance</a>
  </div>
</div>
</div>
<div className="col-md-3 mx-3 my-4">
<div className="card  text-center" style={{width:"18rem "}}>
  <img className="card-img-top rounded-circle" src={img2} alt="Card"/>
  <div className="card-body">
  <div className="d-flex">
            <button disabled={amount===0?true:false}className="btn btn-primary mx-3" onClick={(()=>{dispatch(actionCreators.withDrawMoney(100))})}>-</button>
            <h6>Deposite/Withdraw money</h6>
            <button  className="btn btn-primary mx-3"onClick={(()=>{dispatch(actionCreators.depositeMoney(value))})}>+</button>

            
        </div>
        <div className="my-3 " >
        <label><b>Amount</b></label>
        <input className=" sum mx-3 "type="number"  placeholder="enter Amount" onChange={handler}/>
        </div>
    
    
    <a href="/" className="btn btn-primary" onClick={()=>{alert(`your updated balance is ${amount}`)}}>view balance</a>
  </div>
</div>
</div>
</div>
<div div className="row">
<div className="col-md-3 mx-3 my-4">
<div className="card  text-center" style={{width:"18rem "}}>
  <img className="card-img-top rounded-circle" src={img2} alt="Card"/>
  <div className="card-body">
  <div className="d-flex">
            <button disabled={amount===0?true:false}className="btn btn-primary mx-3" onClick={(()=>{dispatch(actionCreators.withDrawMoney(100))})}>-</button>
            <h6>Deposite/Withdraw money</h6>
            <button  className="btn btn-primary mx-3"onClick={(()=>{dispatch(actionCreators.depositeMoney(value))})}>+</button>

            
        </div>
        <div className="my-3 " >
        <label><b>Amount</b></label>
        <input className=" sum mx-3 "type="number"  placeholder="enter Amount" onChange={handler}/>
        </div>
    
    
    <a href="/" className="btn btn-primary" onClick={()=>{alert(`your updated balance is ${amount}`)}}>view balance</a>
  </div>
</div>
</div>
<div className="col-md-3 mx-3 my-4">
<div className="card  text-center" style={{width:"18rem "}}>
  <img className="card-img-top rounded-circle" src={img2} alt="Card"/>
  <div className="card-body">
  <div className="d-flex">
            <button disabled={amount===0?true:false}className="btn btn-primary mx-3" onClick={(()=>{dispatch(actionCreators.withDrawMoney(100))})}>-</button>
            <h6>Deposite/Withdraw money</h6>
            <button  className="btn btn-primary mx-3"onClick={(()=>{dispatch(actionCreators.depositeMoney(value))})}>+</button>

            
        </div>
        <div className="my-3 " >
        <label><b>Amount</b></label>
        <input className=" sum mx-3 "type="number"  placeholder="enter Amount" onChange={handler}/>
        </div>
    
    
    <a href="/" className="btn btn-primary" onClick={()=>{alert(`your updated balance is ${amount}`)}}>view balance</a>
  </div>
</div>
</div>
<div className="col-md-3 mx-3 my-4">
<div className="card  text-center" style={{width:"18rem "}}>
  <img className="card-img-top rounded-circle " style={{width:"50px",height:"50px"}}src={img2} alt="Card"/>
  <div className="card-body">
  <div className="d-flex">
            <button disabled={amount===0?true:false}className="btn btn-primary mx-3" onClick={(()=>{dispatch(actionCreators.withDrawMoney(100))})}>-</button>
            <h6>Deposite/Withdraw money</h6>
            <button  className="btn btn-primary mx-3"onClick={(()=>{dispatch(actionCreators.depositeMoney(value))})}>+</button>

            
        </div>
        <div className="my-3 " >
        <label><b>Amount</b></label>
        <input className=" sum mx-3 "type="number"  placeholder="enter Amount" onChange={handler}/>
        </div>
    
    
    <a href="/" className="btn btn-primary" onClick={()=>{alert(`your updated balance is ${amount}`)}}>view balance</a>
  </div>
</div>
</div>
</div>
< div className="row">
<div className="col-md-3 mx-3 my-4">
<div className="card  text-center" style={{width:"18rem "}}>
  <img className="card-img-top rounded-circle" src={img2} alt="Card"/>
  <div className="card-body">
  <div className="d-flex">
            <button disabled={amount===0?true:false}className="btn btn-primary mx-3" onClick={(()=>{dispatch(actionCreators.withDrawMoney(100))})}>-</button>
            <h6>Deposite/Withdraw money</h6>
            <button  className="btn btn-primary mx-3"onClick={(()=>{dispatch(actionCreators.depositeMoney(value))})}>+</button>

            
        </div>
        <div className="my-3 " >
        <label><b>Amount</b></label>
        <input className=" sum mx-3 "type="number"  placeholder="enter Amount" onChange={handler}/>
        </div>
    
    
    <a href="/" className="btn btn-primary" onClick={()=>{alert(`your updated balance is ${amount}`)}}>view balance</a>
  </div>
</div>
</div>
<div className="col-md-3 mx-3 my-4">
<div className="card  text-center" style={{width:"18rem "}}>
  <img className="card-img-top rounded-circle" src={img2} alt="Card"/>
  <div className="card-body">
  <div className="d-flex">
            <button disabled={amount===0?true:false}className="btn btn-primary mx-3" onClick={(()=>{dispatch(actionCreators.withDrawMoney(100))})}>-</button>
            <h6>Deposite/Withdraw money</h6>
            <button  className="btn btn-primary mx-3"onClick={(()=>{dispatch(actionCreators.depositeMoney(value))})}>+</button>

            
        </div>
        <div className="my-3 " >
        <label><b>Amount</b></label>
        <input className=" sum mx-3 "type="number"  placeholder="enter Amount" onChange={handler}/>
        </div>
    
    
    <a href="/" className="btn btn-primary" onClick={()=>{alert(`your updated balance is ${amount}`)}}>view balance</a>
  </div>
</div>
</div>
</div>



    
        
        </>)
}

export default Shop
