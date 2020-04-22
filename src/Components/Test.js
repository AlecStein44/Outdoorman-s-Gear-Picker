import React from 'react'

class Test extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            results: [],
            hasChanged: false,
            hasSaved: false,
            rifle: '',
            riflePrice: 0,
            ammo: '',
            ammoPrice: 0,
            scope: '',
            scopePrice: 0,
            headwear: '',
            headwearPrice: 0,
            shirt: '',
            shirtPrice: 0,
            pants: '',
            pantsPrice: 0,
            binos: '',
            binosPrice: 0,
            rangefinder: '',
            rangefinderPrice: 0
        }
    }

    componentDidMount() {
        let getData = localStorage.getItem(sessionStorage.getItem('active'))

        let getParseData = JSON.parse(getData)

        this.setState({
            results: getParseData,
            rifle: getParseData.rifle,
            riflePrice: getParseData.riflePrice,
            ammo: getParseData.ammo,
            ammoPrice: getParseData.ammoPrice,
            scope: getParseData.scope,
            scopePrice: getParseData.scopePrice,
            headwear: getParseData.headwear,
            headwearPrice: getParseData.headwearPrice,
            shirt: getParseData.shirt,
            shirtPrice: getParseData.shirtPrice,
            pants: getParseData.pants,
            pantsPrice: getParseData.pantsPrice,
            binos: getParseData.binos,
            binosPrice: getParseData.binosPrice,
            rangefinder: getParseData.rangefinder,
            rangefinderPrice: getParseData.rangefinderPrice
        })
    }

    handleDelete(e) {
        let quotes = `${e.target.value}Price`

        let reParse = this.state.results

        delete reParse[e.target.value]

        reParse[`${e.target.value}Price`] = 0

        this.setState({
            results: reParse,
            [quotes] : 0,
            hasChanged: true,
            hasSaved: false
        })
    }

    handleSave() {
        let saveStringify = JSON.stringify(this.state.results)

        localStorage.setItem(`Hunting ${this.state.results.listName}`, saveStringify)

        this.setState({
            hasChanged: false,
            hasSaved: true
        })

        console.log(this.state.results)
    }

    buyNow(e) {
        window.location.assign(`${e.target.value}`)
    }

    render() {
        console.log(this.state.rifle)
        return(
            <main>
                <button className="list-home" onClick={() => { window.location.assign('http:localhost:3000/') }}>Home</button>
               <table className="list-table">
                   <tr className="list-tr">
                       <th className="list-th">Gear Type</th>
                       <th className="list-th">Gear Image</th>
                       <th className="list-th">Gear Name</th>
                       <th className="list-th">Gear Price</th>
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Rifle</td>
                        {this.state.rifle.name !== undefined ? <td className="list-image"><img className="list-image" src={this.state.rifle.image} /></td> : <td></td>}
                        {this.state.rifle.name === undefined ? <td className="list-td"><a className="newlist-a" href='http:localhost:3000/editproductsearch?type=rifle'>Add Rifle</a></td> : <td className="list-td">{this.state.results.rifle.name}</td>}
                        <td className="list-td">${this.state.results.riflePrice}</td>
                        {this.state.rifle.name === undefined ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.results.rifle}>Buy Now!</button></td> : <td></td>}
                        {this.state.rifle.name !== undefined ? <button className="list-delete" value="rifle" onClick={this.handleDelete.bind(this)}>X</button> : null}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Ammo</td>
                        {this.state.results.ammo !== undefined ? <td className="list-image"><img className="list-image" src={this.state.ammo.image} /></td> : <td></td>}
                        {this.state.results.ammo === undefined ? <td className="list-td"><a className="newlist-a" href='http:localhost:3000/editproductsearch?type=ammo'>Add Ammo</a></td> : <td className="list-td">{this.state.results.ammo.name}</td>}
                        <td className="list-td">${this.state.results.ammoPrice}</td>
                        {this.state.results.ammo !== undefined ? <button className="list-delete" value="ammo" onClick={this.handleDelete.bind(this)}>X</button> : null}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Scope</td>
                        {this.state.scope.name === undefined ? <td className="list-td"><a className="newlist-a" href='http:localhost:3000/editproductsearch?type=scope'>Add Scope</a></td> : <td className="list-td">{this.state.results.scope}</td>}
                        <td className="list-td">${this.state.results.scopePrice}</td>
                        {this.state.scope.name !== undefined ? <button className="list-delete" value="scope" onClick={this.handleDelete.bind(this)}>X</button> : null}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">HeadWear</td>
                        {this.state.results.headwear === undefined ? <td className="list-td"><a className="newlist-a" href='http:localhost:3000/editproductsearch?type=headwear'>Add HeadWear</a></td> : <td className="list-td">{this.state.results.headwear}</td>}
                        <td className="list-td">${this.state.results.headwearPrice}</td>
                        {this.state.results.headwear !== undefined ? <button className="list-delete" value="headwear" onClick={this.handleDelete.bind(this)}>X</button> : null}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Shirt</td>
                        {this.state.results.shirt === undefined ? <td className="list-td"><a className="newlist-a" href='http:localhost:3000/editproductsearch?type=shirt'>Add Shirt</a></td> : <td className="list-td">{this.state.results.shirt}</td>}
                        <td className="list-td">${this.state.results.shirtPrice}</td>
                        {this.state.results.shirt !== undefined ? <button className="list-delete" value="shirt" onClick={this.handleDelete.bind(this)}>X</button> : null}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Pants</td>
                        {this.state.results.pants === undefined ? <td className="list-td"><a className="newlist-a" href='http:localhost:3000/editproductsearch?type=pants'>Add Pants</a></td> : <td className="list-td">{this.state.results.pants}</td>}
                        <td className="list-td">${this.state.results.pantsPrice}</td>
                        {this.state.results.pants !== undefined ? <button className="list-delete" value="pants" onClick={this.handleDelete.bind(this)}>X</button> : null}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Binoculars</td>
                        {this.state.results.binos === undefined ? <td className="list-td"><a className="newlist-a" href='http:localhost:3000/editproductsearch?type=binos'>Add Binoculars</a></td> : <td className="list-td">{this.state.results.binos}</td>}
                        <td className="list-td">${this.state.results.binosPrice}</td>
                        {this.state.results.binos !== undefined ? <button className="list-delete" value="binos" onClick={this.handleDelete.bind(this)}>X</button> : null}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Range Finder</td>
                        {this.state.results.rangefinder === undefined ? <td className="list-td"><a className="newlist-a" href='http:localhost:3000/editproductsearch?type=rangefinder'>Add Range Finder</a></td> : <td className="list-td">{this.state.results.rangefinder}</td>}
                        <td className="list-td">${this.state.results.rangefinderPrice}</td>
                        {this.state.results.rangefinder !== undefined ? <button className="list-delete" value="rangefinder" onClick={this.handleDelete.bind(this)}>X</button> : null}
                   </tr>
                   <tr className="list-tr">
                        <th className="list-th"></th>
                        <th className="list-th">Final Price</th>
                        <th className="list-th">${Number(this.state.riflePrice) + Number(this.state.ammoPrice) + Number(this.state.scopePrice) + Number(this.state.headwearPrice) + Number(this.state.shirtPrice) + Number(this.state.pantsPrice) + Number(this.state.binosPrice) + Number(this.state.rangefinderPrice)}</th>
                   </tr>
               </table>
               {this.state.hasChanged === true ? <button className="list-save" onClick={this.handleSave.bind(this)}>Save Delete</button> : null}
               {this.state.hasSaved === true ? <p className="list-hassaved">Everything has Saved!</p> : null}
            </main>
        )
    }
}

export default Test