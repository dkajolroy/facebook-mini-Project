import React from 'react'
import NavBars from '../NavBars/NavBars'
import Sidebars from '../Sidebars/Sidebars'
import Widget from '../Widget/Widget'

function MainLayout({ children }) {
    return (
        <>
            <NavBars />
            <div className="body" style={{ background: "rgb(243 243 243)" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebars />
                        </div>
                        <div className="col-md-6">
                            {
                                children
                            }
                        </div>
                        <div className="col-md-3">
                            <Widget />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLayout