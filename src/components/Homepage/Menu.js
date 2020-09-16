import React from "react"

const Menu=()=>(
    <>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top " id="mainNav" style={{background:"black"}}>
            <div className="container"  >
                <a className="navbar-brand js-scroll-trigger"  style={{padding:0}} href="#page-top">
                   
                     <img style={{height:"15%",width:"15%",borderRadius:"50%"}} src="assets/img/headerLion.jpg" alt="" />
                     <h3 style={{display:"inline-block",marginLeft:"1rem"}}>Govt of India</h3>
                </a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ml-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Parties</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">Leaders</a></li>

                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Admin</a></li>

                    </ul>
                </div>
            </div>
  </nav>


  <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">Welcome To Our</div>
                <div className="masthead-heading text-uppercase">E-Voting Platform</div>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Authenticate yourself</a>
            </div>
</header>
    </>
)


export default Menu;