import React from 'react';

const ChildComponent1 = () => {
  return <div>
  <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                
                    <span class="fs-5 d-none d-sm-inline">STRATEGIES</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Custom</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Short</span> </a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#shortstrangle" class="nav-link px-0"> <span class="d-none d-sm-inline">Short Strangle</span>  </a>
                            </li>
                            <li>
                                <a href="#shortstraddle" class="nav-link px-0"> <span class="d-none d-sm-inline">Short Straddle</span>  </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#iron" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Iron Butterfly</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Long</span></a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#longstrangle" class="nav-link px-0"> <span class="d-none d-sm-inline">Long Strangle</span> </a>
                            </li>
                            <li>
                                <a href="#longstraddle" class="nav-link px-0"> <span class="d-none d-sm-inline">Long Straddle</span> </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Spread</span> </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#bearput" class="nav-link px-0"> <span class="d-none d-sm-inline">Bear Put Spread</span> </a>
                            </li>
                            <li>
                                <a href="#bearcall" class="nav-link px-0"> <span class="d-none d-sm-inline">Bear Call Spread</span> </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Bull Put Spread</span> </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Bull Call Spread</span> </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Choose</span> </a>
                    </li>
                </ul>
                <hr></hr>
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                       
                        <span class="d-none d-sm-inline mx-1">Username</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">basic backtest</a></li>
                        <li><a class="dropdown-item" href="#">Scanners</a></li>
                        <li><a class="dropdown-item" href="#">Historical Trading</a></li>
                        <li>
                            <hr class="dropdown-divider"></hr>
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col py-3 dash">
        <body>
        <img
                  alt="profile-user"
                  width="100px"
                  height="50px"
                  src={`../unfluke.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
    <div class="dashboard">
        <header>
            <h2>Leaderboard</h2>
        </header>
        <section class="search-section">
            <input type="text" id="search" 
                   placeholder="Search for strategies..."></input>
            <table id="stock-table">
                <thead>
                    <tr>
                        
                        <th>Strategy Name</th>
                        <th>Rank</th>
                        <th>Price</th>
                        <th>Profit</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    Strategy list will be dynamically added here
                </tbody>
            </table>
        </section>
        <header>
            
            <h6>Bear Put Spread Strategy</h6>

        </header>
        <main>
            <div class="watchlist">
                <h2 id='#bearput'>Overall Profit</h2>
                <ul>
                    Rs210530
                </ul>
                <h2 id='#bearput'>Av.Daily Profit</h2>
                <ul>
                    Rs319.54
                </ul>
            </div>
            <div class="stock-details">
                <h2>Win%(Day)</h2>
                <div>
                    65.53%
                </div>
                <h2>Price</h2>
                <div>
                    65.53%
                </div>
            </div>
        </main>
        
    </div>
    <div class="dashboard">
        <header>
            <h6>Bear Call Spread Strategy</h6>
        </header>
        <main>
            <div class="watchlist">
                <h2 id="bearcall">Overall Profit</h2>
                <ul>
                    Rs210530
                </ul>
                <h2 id="bearcall">Av. Daily Profit</h2>
                <ul>
                    Rs210530
                </ul>
            </div>
            <div class="stock-details">
                <h2>Win%(Day)</h2>
                <div>
                    65.53%
                </div>
                <h2>Price</h2>
                <div>
                    65.53%
                </div>
            </div>
        </main>
        <header>
            <h6>Short Straddle Strategy</h6>
        </header>
        <main>
            <div class="watchlist">
                <h2 id="shortstraddle">Overall Profit</h2>
                <ul>
                    Rs210530
                </ul>
                <h2 id="shortstraddle">Av. Daily Profit</h2>
                <ul>
                    Rs210530
                </ul>
            </div>
            <div class="stock-details">
                <h2>Win%(Day)</h2>
                <div>
                    65.53%
                </div>
                <h2>Price</h2>
                <div>
                    65.53%
                </div>
            </div>
        </main>
        <header>
            <h6>Short Strangle Strategy</h6>
        </header>
        <main>
            <div class="watchlist">
                <h2 id="shortstrangle">Overall Profit</h2>
                <ul>
                    Rs210530
                </ul>
                <h2 id="shortstrangle">Av. Daily Profit</h2>
                <ul>
                    Rs210530
                </ul>
            </div>
            <div class="stock-details">
                <h2>Win%(Day)</h2>
                <div>
                    65.53%
                </div>
                <h2>Pirce</h2>
                <div>
                    65.53%
                </div>
            </div>
        </main>
        <header>
            <h6>Iron Butterfly Strategy</h6>
        </header>
        <main>
            <div class="watchlist">
                <h2 id="iron">Overall Profit</h2>
                <ul>
                    Rs210530
                </ul>
                <h2 id="iron">Av. Daily Profit</h2>
                <ul>
                    Rs210530
                </ul>
            </div>
            <div class="stock-details">
                <h2>Win%(Day)</h2>
                <div>
                    65.53%
                </div>
                <h2>Price</h2>
                <div>
                    65.53%
                </div>
            </div>
        </main>
        <header>
            <h6>Long Strangle Strategy</h6>
        </header>
        <main>
            <div class="watchlist">
                <h2 id="longstrangle">Overall Profit</h2>
                <ul>
                    Rs210530
                </ul>
                <h2 id="longstrangle">Av. Daily Profit</h2>
                <ul>
                    Rs210530
                </ul>
            </div>
            <div class="stock-details">
                <h2>Win%(Day)</h2>
                <div>
                    65.53%
                </div>
                <h2>Price</h2>
                <div>
                    65.53%
                </div>
            </div>
        </main>
        <header>
            <h6>Long Straddle Strategy</h6>
        </header>
        <main>
            <div class="watchlist">
                <h2 id="longstraddle">Overall Profit</h2>
                <ul>
                    Rs210530
                </ul>
                <h2 id="longstraddle">Av. Daily Profit</h2>
                <ul>
                    Rs210530
                </ul>
            </div>
            <div class="stock-details">
                <h2>Win%(Day)</h2>
                <div>
                    65.53%
                </div>
                <h2>Price</h2>
                <div>
                    65.53%
                </div>
            </div>
        </main>
        

    </div>
  </body>
        </div>
    </div>
</div>



</div>;
};

const ChildComponent2 = () => {
    return ;
  };

  const ChildComponent3 = () => {
    return <div>
    
  </div>;
  };

  export { ChildComponent1, ChildComponent2,  ChildComponent3 };