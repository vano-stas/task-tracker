import React from "react";

import "./header-app.scss";

function HeaderApp ({ onToggleMenu, onToggleModal}) {
   
    return (
        <header className="head">
            <button className='btn btn-sm p-0 btn-menu'
                onClick={onToggleMenu}>
                <div className="header-item"><i className="material-icons md-24">menu</i></div>
            </button>
            
            <div className="header-item">
            </div>
            <div className="header-item"><i className="material-icons">filter_list</i></div>
            <div className="header-item"><i className="material-icons">sort_by_alpha</i></div>
            <div className="header-item">
                <button type="button" className="add-button"
                    onClick={onToggleModal}>
                    +Add todo
                </button>
            </div>
            <div className="header-item account"><i className="material-icons md-36">account_circle</i>
            </div>
        </header>
    );
};




export default HeaderApp;