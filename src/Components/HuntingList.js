import React from 'react'

class List extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        let getData = localStorage.getItem(sessionStorage.getItem('active'))

        this.setState({
            results: JSON.parse(getData)
        })
    }

    render() {
        return(
            <main>
               <table className="list-table">
                   <tr className="list-tr">
                       <th className="list-th">Gear Type</th>
                       <th className="list-th">Gear Name</th>
                       <th className="list-th">Gear Price</th>
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Rifle</td>
                        <td className="list-td">{this.state.results.rifle}</td>
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Ammo</td>
                        <td className="list-td">{this.state.results.ammo}</td>
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Scope</td>
                        <td className="list-td">{this.state.results.scope}</td>
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">HeadWear</td>
                        <td className="list-td">{this.state.results.head}</td>
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Shirt</td>
                        <td className="list-td">{this.state.results.shirt}</td>
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Pants</td>
                        <td className="list-td">{this.state.results.pants}</td>
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Binoculars</td>
                        <td className="list-td">{this.state.results.binos}</td>
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Range Finder</td>
                        <td className="list-td">{this.state.results.rangeFinder}</td>
                   </tr>
               </table>
            </main>
        )
    }
}

export default List