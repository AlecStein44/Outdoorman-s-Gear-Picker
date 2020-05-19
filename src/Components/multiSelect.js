import React from 'react'


function MultiSelect(props) {
    return(
        <tr className="list-tr">
            <td className="list-td" >{`Extra ${props.tdName}`}</td>
            <td className="list-td"><img className="list-image" src={props.data.image} /></td>
            <td className="list-td">{props.data.name}</td>
            <td className="list-td">${props.data.price}</td>
            <td className="list-td"><button className="buybutton" onClick={props.buyNow.bind(this)} value={props.data.link}>Buy Now!</button></td>
            <td className="list-td"><button className="list-delete" value={props.value} onClick={props.handleDelete}>X</button></td>
        </tr>
    )
}

export default MultiSelect