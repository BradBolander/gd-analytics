import React from "react"
import "../styles/card.scss"


const Card = (props) => (
    <div className="card">
        <div style={{ 'backgroundColor': props.color }} className="circle"></div>

        <div className="content-wrap">
            <h4 className="title">
                { props.title }
            </h4>
            <p className="content">
                { props.content }
            </p>
        </div>
       
    </div>
)

export default Card