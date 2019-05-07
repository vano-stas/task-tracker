import React from "react";

import "./header-app.scss";

const HeaderApp = () => {
    return (
        <header className="head">
            <div className="header-item"><i className="material-icons">menu</i></div>
            <div className="header-item"></div>
            <div className="header-item"><i className="material-icons">filter_list</i></div>
            <div className="header-item"><i className="material-icons">sort_by_alpha</i></div>
            <div className="header-item"><button type="button" className="add-button">+Add todo</button></div>  {/* btn btn-primary */}
            <div className="header-item"><i className="material-icons md-36">account_circle</i>
                {/* <i className="material-icons">arrow_drop_down</i> */}
            </div>
        </header>
    );
};

export default HeaderApp;


{/* <div className="col-1 bg-info d-flex align-items-center">
<i class="fa fa-bars fa-lg" aria-hidden="true"></i>
</div>
<div className="col-6 bg-primary">

</div>
<div className="col-1 bg-light d-flex align-items-center">
<i class="fa fa-sort fa-lg" aria-hidden="true"></i>
</div>
<div className="col-1 bg-danger d-flex align-items-center">
<i class="fa fa-sort-alpha-asc fa-lg" aria-hidden="true"></i>
</div>
<div className="col-2 bg-info d-flex align-items-center">
<button type="button" class="btn btn-primary">+Add todo</button>
</div>
<div className="col-1 bg-warning d-flex align-items-center">
<i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
</div> */}