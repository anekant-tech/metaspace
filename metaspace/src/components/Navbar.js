import React from 'react'
import logo from './logo2.png'


const Navbar = () => {
    return (
        <div className="container my-5">
           <nav className="navbar navbar-expand-lg navbar-dark bg-none">
  <div className="container-fluid">
  <a className="navbar-brand" href="/">
      <img src={logo} alt=""  style={{width:"auto", maxWidth:"10rem",verticalAlign:"middle"}}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  ml-auto">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#1">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#2">Tokenomics</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link "href="#3">Growth</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#4">Roadmap</a>
        </li>
        
        <a className="btn btn-outline-light rounded-pill mx-3" href="https://web.archive.org/web/20220111154027/https://pancakeswap.finance/swap?outputCurrency=0xb8ced2c93584c4e228df25a88dcbe346df89525d"target="_blank"  >BUY $TOKEN </a>

        
        </ul>
        
      
    </div>
  </div>
</nav>
            
        </div>
       
    )
}

export default Navbar