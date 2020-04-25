import React from 'react'

class HuntingNewList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listName: '',
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
            hl: '',
            shl: '',
            pl: '',
            bl: '',
            rfl: '',
            finalPrice: 0
        }
    }

    componentDidMount() {
        let priceFinal = 0
        let parseRifle = JSON.parse(sessionStorage.getItem('rifle'))
        let ammoParse = JSON.parse(sessionStorage.getItem('ammo'))
        let scopeParse = JSON.parse(sessionStorage.getItem('scope'))
        let headwearParse = JSON.parse(sessionStorage.getItem('headwear'))
        let shirtParse = JSON.parse(sessionStorage.getItem('shirt'))
        let pantsParse = JSON.parse(sessionStorage.getItem('pants'))
        let binosParse = JSON.parse(sessionStorage.getItem('binos'))
        let rangefinderParse = JSON.parse(sessionStorage.getItem('rangefinder'))

        console.log(parseRifle)

        if(sessionStorage.getItem('rifle') !== null) {
            this.setState({
                rifle: parseRifle.name,
                riflePrice: parseRifle.price,
                rifleImage: parseRifle.image,
                rl: parseRifle.link
            })
            priceFinal = priceFinal + parseRifle.price
        }

        if(sessionStorage.getItem('ammo') !== null) {
            this.setState({
                ammo: ammoParse.name,
                ammoPrice: ammoParse.price,
                ammoImage: ammoParse.image,
                al: ammoParse.link
            })
            priceFinal = priceFinal + ammoParse.price
        }

        if(sessionStorage.getItem('scope') !== null) {
            this.setState({
                scope: scopeParse.name,
                scopePrice: scopeParse.price,
                scopeImage: scopeParse.image,
                sl: scopeParse.link
            })
            priceFinal = priceFinal + scopeParse.price
        }

        if(sessionStorage.getItem('headwear') !== null) {
            this.setState({
                headwear: headwearParse.name,
                headwearPrice: headwearParse.price,
                headwearImage: headwearParse.image,
                hl: headwearParse.link
            })
            priceFinal = priceFinal + headwearParse.price
        }

        if(sessionStorage.getItem('shirt') !== null) {
            this.setState({
                shirt: shirtParse.name,
                shirtPrice: shirtParse.price,
                shirtImage: shirtParse.image,
                shl: shirtParse.link
            })
            priceFinal = priceFinal + shirtParse.price
        }

        if(sessionStorage.getItem('pants') !== null) {
            this.setState({
                pants: pantsParse.name,
                pantsPrice: pantsParse.price,
                pantsImage: pantsParse.image,
                pl: pantsParse.link
            })
            priceFinal = priceFinal + pantsParse.price
        }

        if(sessionStorage.getItem('binos') !== null) {
            this.setState({
                binos: binosParse.name,
                binosPrice: binosParse.price,
                binosImage: binosParse.image,
                bl: binosParse.link
            })
            priceFinal = priceFinal + binosParse.price
        }

        if(sessionStorage.getItem('rangefinder') !== null) {
            this.setState({
                rangefinder: rangefinderParse.name,
                rangefinderPrice: rangefinderParse.price,
                rangefinderImage: rangefinderParse.image,
                rfl: rangefinderParse.link
            })
            priceFinal = priceFinal + rangefinderParse.price
        }

        this.setState({
            finalPrice: priceFinal
        })
    }

    handleSave() {
        if(this.state.listName.length !== 0) {
            let newObj = {
                listName: this.state.listName,
                rifle: this.state.rifle,
                ammo: this.state.ammo,
                scope: this.state.scope,
                headwear: this.state.headwear,
                shirt: this.state.shirt,
                pants: this.state.pants,
                binos: this.state.binos,
                rangefinder: this.state.rangefinder,
                riflePrice: this.state.riflePrice,
                ammoPrice: this.state.ammoPrice,
                scopePrice: this.state.scopePrice,
                headwearPrice: this.state.headwearPrice,
                shirtPrice: this.state.shirtPrice,
                pantsPrice: this.state.pantsPrice,
                binosPrice: this.state.binosPrice,
                rangefinderPrice: this.state.rangefinderPrice,
                rifleImage: this.state.rifleImage,
                ammoImage: this.state.ammoImage,
                scopeImage: this.state.scopeImage,
                headwearImage: this.state.headwearImage,
                shirtImage: this.state.shirtImage,
                pantsImage: this.state.pantsImage,
                binosImage: this.state.binosImage,
                rangefinderImage: this.state.rangefinderImage,
                rifleLink: this.state.rl,
                ammoLink: this.state.al,
                scopeLink: this.state.sl,
                headwearLink: this.state.hl,
                shirtLink: this.state.shl,
                pantsLink: this.state.pl,
                binosLink: this.state.bl,
                rangefinderLink: this.state.rfl,
                finalPrice: this.state.finalPrice
            }

            let convert = JSON.stringify(newObj)

            localStorage.setItem(`Hunting ${this.state.listName}`, convert)

            window.location.assign('outdoorgearpicker.now.sh/')
        } else {
            alert('You need to add a List name')
        }
    }

    handleDelete(e) {
        let name = e.target.value

        let num = this.state.finalPrice

        let quotes = `${e.target.value}Price`

        let image = `${e.target.value}Image`

        let link = `${e.target.value}Link`

        this.setState({
            [name]: '',
            [quotes] : 0,
            [image]: '',
            [link]: '',
            finalPrice:  Number(num) - Number(this.state[quotes])
        })
    }

    buyNow(e) {
        window.location.assign(e.target.value)
        //console.log(e.target.value)
    }
    
    render() {
        return(
            <main>
                <table className="list-table">
                    <tr className="list-tr-th">
                       <th className="list-th">Gear Type</th>
                       <th className="list-th">Gear Image</th>
                       <th className="list-th">Gear Name</th>
                       <th className="list-th">Gear Price</th>
                    </tr>
                    <tr className="list-tr">
                         <td className="list-td" >Rifle</td>
                         {this.state.rifle.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.rifleImage} /></td> : <td className="no-td"></td>}
                         {this.state.rifle.length === 0 ? <td className="list-td" ><a className="newlist-a" href='outdoorgearpicker.now.sh/productsearch?type=rifle'>Add Rifle</a></td> : <td className="list-td">{this.state.rifle}</td>}
                         {this.state.rifle.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.riflePrice}</td>}
                         {this.state.rifle.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.rl}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.rifle.length !== 0 ? <td className="list-td"><button className="list-delete" value="rifle" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    <tr className="list-tr">
                         <td className="list-td">Ammo</td>
                         {this.state.ammo.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.ammoImage} /></td> : <td className="no-td"></td>}
                         {this.state.ammo.length === 0 ? <td className="list-td"><a className="newlist-a" href='outdoorgearpicker.now.sh/productsearch?type=ammo'>Add Ammo</a></td> : <td className="list-td">{this.state.ammo}</td>}
                         {this.state.ammo.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.ammoPrice}</td>}
                         {this.state.ammo.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.al}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.ammo.length !== 0 ? <td className="list-td"><button className="list-delete" value="ammo" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    <tr className="list-tr">
                         <td className="list-td">Scope</td>
                         {this.state.scope.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.scopeImage} /></td> : <td className="no-td"></td>}
                         {this.state.scope.length === 0 ? <td className="list-td"><a className="newlist-a" href='outdoorgearpicker.now.sh/productsearch?type=scope'>Add Scope</a></td> : <td className="list-td">{this.state.scope}</td>}
                         {this.state.scope.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.scopePrice}</td>}
                         {this.state.scope.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.sl}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.scope.length !== 0 ? <td className="list-td"><button className="list-delete" value="scope" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    <tr className="list-tr">
                         <td className="list-td">HeadWear</td>
                         {this.state.headwear.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.headwearImage} /></td> : <td className="no-td"></td>}
                         {this.state.headwear.length === 0 ? <td className="list-td"><a className="newlist-a" href='outdoorgearpicker.now.sh/productsearch?type=headwear'>Add HeadWear</a></td> : <td className="list-td">{this.state.headwear}</td>}
                         {this.state.headwear.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.headwearPrice}</td>}
                         {this.state.headwear.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.hl}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.headwear.length !== 0 ? <td className="list-td"><button className="list-delete" value="headwear" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    <tr className="list-tr">
                         <td className="list-td">Shirt</td>
                         {this.state.shirt.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.shirtImage} /></td> : <td className="no-td"></td>}
                         {this.state.shirt.length === 0 ? <td className="list-td"><a className="newlist-a" href='outdoorgearpicker.now.sh/productsearch?type=shirt'>Add Shirt</a></td> : <td className="list-td">{this.state.shirt}</td>}
                         {this.state.shirt.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.shirtPrice}</td>}
                         {this.state.shirt.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.shl}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.shirt.length !== 0 ? <td className="list-td"><button className="list-delete" value="shirt" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    <tr className="list-tr">
                         <td className="list-td">Pants</td>
                         {this.state.pants.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.pantsImage} /></td> : <td className="no-td"></td>}
                         {this.state.pants.length === 0 ? <td className="list-td"><a className="newlist-a" href='outdoorgearpicker.now.sh/productsearch?type=pants'>Add Pants</a></td> : <td className="list-td">{this.state.pants}</td>}
                         {this.state.pants.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.pantsPrice}</td>}
                         {this.state.pants.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.pl}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.pants.length !== 0 ? <td className="list-td"><button className="list-delete" value="pants" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    <tr className="list-tr">
                         <td className="list-td">Binoculars</td>
                         {this.state.binos.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.binosImage} /></td> : <td className="no-td"></td>}
                         {this.state.binos.length === 0 ? <td className="list-td"><a className="newlist-a" href='outdoorgearpicker.now.sh/productsearch?type=binos'>Add Binoculars</a></td> : <td className="list-td">{this.state.binos}</td>}
                         {this.state.binos.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.binosPrice}</td>}
                         {this.state.binos.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.bl}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.binos.length !== 0 ? <td className="list-td"><button className="list-delete" value="binos" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    <tr className="list-tr">
                         <td className="list-td">Range Finder</td>
                         {this.state.rangefinder.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.rangefinderImage} /></td> : <td className="no-td"></td>}
                         {this.state.rangefinder.length === 0 ? <td className="list-td"><a className="newlist-a" href='outdoorgearpicker.now.sh/productsearch?type=rangefinder'>Add Range Finder</a></td> : <td className="list-td">{this.state.rangefinder}</td>}
                         {this.state.rangefinder.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.rangefinderPrice}</td>}
                         {this.state.rangefinder.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.rfl}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.rangefinder.length !== 0 ? <td className="list-td"><button className="list-delete" value="rangefinder" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    <tr className="list-tr-price">
                         <th className="list-th"></th>
                         <th className="list-th"></th>
                         <th className="list-th"></th>
                         <th className="list-th" >Final Price ${this.state.finalPrice.toFixed(2)}</th>
                    </tr>
               </table>
               <div className="newlist">
                   <input className="newlist-input" type="text" onChange={e => this.setState({listName: e.target.value})} />
                   <button className="newlist-save" onClick={this.handleSave.bind(this)}>Save List</button>
               </div>
            </main>
        )
    }
}

export default HuntingNewList

//Number(this.state.rifle.price) + Number(this.state.ammo.price) + Number(this.state.scope.price) + Number(this.state.headwear.price) + Number(this.state.shirt.price) + Number(this.state.pants.price) + Number(this.state.binos.price) + Number(this.state.rangefinder.price)