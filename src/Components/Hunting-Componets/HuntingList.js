import React from 'react'

class HuntingList extends React.Component {
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
            rangefinderPrice: 0,
            rifleImage: '',
            ammoImage: '',
            scopeImage: '',
            headwearImage: '',
            shirtImage: '',
            pantsImage: '',
            binosImage: '',
            rangefinderImage: '',
            rl: '',
            al: '',
            sl: '',
            hwl: '',
            shl: '',
            pl: '',
            bl: '',
            rfl: '',
            finalPrice: 0
        }
    }

    componentDidMount() {
        let getData = localStorage.getItem(sessionStorage.getItem('active'))

        let getParseData = JSON.parse(getData)

        this.setState({
            results: getParseData,
            rifle: getParseData.rifle,
            ammo: getParseData.ammo,
            scope: getParseData.scope,
            headwear: getParseData.headwear,
            shirt: getParseData.shirt,
            pants: getParseData.pants,
            binos: getParseData.binos,
            rangefinder: getParseData.rangefinder,
            riflePrice: getParseData.riflePrice,
            ammoPrice: getParseData.ammoPrice,
            scopePrice: getParseData.scopePrice,
            headwearPrice: getParseData.headwearPrice,
            shirtPrice: getParseData.shirtPrice,
            pantsPrice: getParseData.pantsPrice,
            binosPrice: getParseData.binosPrice,
            rangefinderPrice: getParseData.rangefinderPrice,
            rifleImage: getParseData.rifleImage,
            ammoImage: getParseData.ammoImage,
            scopeImage: getParseData.scopeImage,
            headwearImage: getParseData.headwearImage,
            shirtImage: getParseData.shirtImage,
            pantsImage: getParseData.pantsImage,
            binosImage: getParseData.binosImage,
            rangefinderImage: getParseData.rangefinderImage,
            rl: getParseData.rifleLink,
            al: getParseData.ammoLink,
            sl: getParseData.scopeLink,
            hwl: getParseData.headwearLink,
            shl: getParseData.shirtLink,
            pl: getParseData.pantsLink,
            bl: getParseData.binosLink,
            rfl: getParseData.rangefinderLink,
            finalPrice: Number(getParseData.riflePrice) + Number(getParseData.ammoPrice) + Number(getParseData.scopePrice) + Number(getParseData.headwearPrice) + Number(getParseData.shirtPrice) + Number(getParseData.pantsPrice) + Number(getParseData.binosPrice) + Number(getParseData.rangefinderPrice)
        })
    }

    handleDelete(e) {
        let name = e.target.value

        let num = this.state.finalPrice

        let quotes = `${e.target.value}Price`

        let image = `${e.target.value}Image`

        let link = `${e.target.value}Link`

        let reParse = this.state.results

        delete reParse[e.target.value]

        reParse[`${e.target.value}Price`] = 0

        reParse[image] = ''

        reParse[link] = ''

        this.setState({
            results: reParse,
            [name]: '',
            [quotes] : 0,
            [image]: '',
            [link]: '',
            finalPrice:  Number(num) - Number(this.state[quotes]),
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
        return(
            <main>
                <button className="list-home" onClick={() => { window.location.assign('http://localhost:3000/') }}>Home</button>
               <table className="list-table">
                   <tr className="list-tr">
                       <th className="list-th">Gear Type</th>
                       <th className="list-th">Gear Image</th>
                       <th className="list-th">Gear Name</th>
                       <th className="list-th">Gear Price</th>
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Rifle</td>
                        {this.state.rifle.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.rifleImage} /></td> : <td></td>}
                        {this.state.rifle.length === 0 ? <a className="newlist-a" href='http://localhost:3000/productsearch?type=rifle'>Add Rifle</a> : <td className="list-td">{this.state.rifle}</td>}
                        {this.state.rifle.length === 0 ? <td></td> : <td className="list-td">${this.state.riflePrice}</td>}
                        {this.state.rifle.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.rl}>Buy Now!</button></td> : <td></td>}
                        {this.state.rifle.length !== 0 ? <button className="list-delete" value="rifle" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Ammo</td>
                        {this.state.ammo.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.ammoImage} /></td> : <td></td>}
                        {this.state.ammo.length === 0 ? <a className="newlist-a" href='http://localhost:3000/productsearch?type=ammo'>Add Ammo</a> : <td className="list-td">{this.state.ammo}</td>}
                        {this.state.ammo.length === 0 ? <td></td> : <td className="list-td">${this.state.ammoPrice}</td>}
                        {this.state.ammo.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.al}>Buy Now!</button></td> : <td></td>}
                        {this.state.ammo.length !== 0 ? <button className="list-delete" value="ammo" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Scope</td>
                        {this.state.scope.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.scopeImage} /></td> : <td></td>}
                        {this.state.scope.length === 0 ? <a className="newlist-a" href='http://localhost:3000/productsearch?type=scope'>Add Scope</a> : <td className="list-td">{this.state.scope}</td>}
                        {this.state.scope.length === 0 ? <td></td> : <td className="list-td">${this.state.scopePrice}</td>}
                        {this.state.scope.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.sl}>Buy Now!</button></td> : <td></td>}
                        {this.state.scope.length !== 0 ? <button className="list-delete" value="scope" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">HeadWear</td>
                        {this.state.headwear.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.headwearImage} /></td> : <td></td>}
                        {this.state.headwear.length === 0 ? <a className="newlist-a" href='http://localhost:3000/productsearch?type=headwear'>Add HeadWear</a> : <td className="list-td">{this.state.headwear}</td>}
                        {this.state.headwear.length === 0 ? <td></td> : <td className="list-td">${this.state.headwearPrice}</td>}
                        {this.state.headwear.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.hwl}>Buy Now!</button></td> : <td></td>}
                        {this.state.headwear.length !== 0 ? <button className="list-delete" value="headwear" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Shirt</td>
                        {this.state.shirt.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.shirtImage} /></td> : <td></td>}
                        {this.state.shirt.length === 0 ? <a className="newlist-a" href='http://localhost:3000/productsearch?type=shirt'>Add Shirt</a> : <td className="list-td">{this.state.shirt}</td>}
                        {this.state.shirt.length === 0 ? <td></td> : <td className="list-td">${this.state.shirtPrice}</td>}
                        {this.state.shirt.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.shl}>Buy Now!</button></td> : <td></td>}
                        {this.state.shirt.length !== 0 ? <button className="list-delete" value="shirt" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Pants</td>
                        {this.state.pants.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.pantsImage} /></td> : <td></td>}
                        {this.state.pants.length === 0 ? <a className="newlist-a" href='http://localhost:3000/productsearch?type=pants'>Add Pants</a> : <td className="list-td">{this.state.pants}</td>}
                        {this.state.pants.length === 0 ? <td></td> : <td className="list-td">${this.state.pantsPrice}</td>}
                        {this.state.pants.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.pl}>Buy Now!</button></td> : <td></td>}
                        {this.state.pants.length !== 0 ? <button className="list-delete" value="pants" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Binoculars</td>
                        {this.state.binos.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.binosImage} /></td> : <td></td>}
                        {this.state.binos.length === 0 ? <a className="newlist-a" href='http://localhost:3000/productsearch?type=binos'>Add Binoculars</a> : <td className="list-td">{this.state.binos}</td>}
                        {this.state.binos.length === 0 ? <td></td> : <td className="list-td">${this.state.binosPrice}</td>}
                        {this.state.binos.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.bl}>Buy Now!</button></td> : <td></td>}
                        {this.state.binos.length !== 0 ? <button className="list-delete" value="binos" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Range Finder</td>
                        {this.state.rangefinder.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.rangefinderImage} /></td> : <td></td>}
                        {this.state.rangefinder.length === 0 ? <a className="newlist-a" href='http://localhost:3000/productsearch?type=rangefinder'>Add Range Finder</a> : <td className="list-td">{this.state.rangefinder}</td>}
                        {this.state.rangefinder.length === 0 ? <td></td> : <td className="list-td">${this.state.rangefinderPrice}</td>}
                        {this.state.rangefinder.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.rfl}>Buy Now!</button></td> : <td></td>}
                        {this.state.rangefinder.length !== 0 ? <button className="list-delete" value="rangefinder" onClick={this.handleDelete.bind(this)}>X</button> : <td></td> }
                   </tr>
                   <tr className="list-tr">
                        <th className="list-th"></th>
                        <th className="list-th">Final Price</th>
                        <th className="list-th" >${this.state.finalPrice.toFixed(2)}</th>
                   </tr>
               </table>
               {this.state.hasChanged === true ? <button className="list-save" onClick={this.handleSave.bind(this)}>Save Delete</button> : null}
               {this.state.hasSaved === true ? <p className="list-hassaved">Everything has Saved!</p> : null}
            </main>
        )
    }
}

export default HuntingList