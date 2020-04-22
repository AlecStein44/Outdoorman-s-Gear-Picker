import React from 'react'

class FishingNewList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listName: '',
            fishingrod: '',
            fishingrodPrice: 0,
            reel: '',
            reelPrice: 0,
            bait: '',
            baitPrice: 0,
            headwear: '',
            headwearPrice: 0,
            vest: '',
            vestPrice: 0,
            pants: '',
            pantsPrice: 0,
            hooks: '',
            hooksPrice: 0,
            tacklebox: '',
            tackleboxPrice: 0,
            fishingrodImage: '',
            reelImage: '',
            baitImage: '',
            headwearImage: '',
            vestImage: '',
            pantsImage: '',
            hooksImage: '',
            tackleboxImage: '',
            frl: '',
            rl: '',
            bl: '',
            hwl: '',
            vl: '',
            pl: '',
            hl: '',
            tbl: '',
            finalPrice: 0
        }
    }

    componentDidMount() {
        let priceFinal = Number(0)
        let fishingrodParse = JSON.parse(sessionStorage.getItem('fishingrod'))
        let reelParse = JSON.parse(sessionStorage.getItem('reel'))
        let baitParse = JSON.parse(sessionStorage.getItem('bait'))
        let headwearParse = JSON.parse(sessionStorage.getItem('headwear'))
        let vestParse = JSON.parse(sessionStorage.getItem('vest'))
        let pantsParse = JSON.parse(sessionStorage.getItem('pants'))
        let hooksParse = JSON.parse(sessionStorage.getItem('hooks'))
        let tackleboxParse = JSON.parse(sessionStorage.getItem('tacklebox'))

        console.log(fishingrodParse)

        if(sessionStorage.getItem('fishingrod') !== null) {
            this.setState({
                fishingrod: fishingrodParse.name,
                fishingrodPrice: fishingrodParse.price,
                fishingrodImage: fishingrodParse.image,
                frl: fishingrodParse.link
            })
            priceFinal = Number(priceFinal) + Number(fishingrodParse.price)
        }

        if(sessionStorage.getItem('reel') !== null) {
            this.setState({
                reel: reelParse.name,
                reelPrice: reelParse.price,
                reelImage: reelParse.image,
                rl: reelParse.link
            })
            priceFinal = Number(priceFinal) + Number(reelParse.price)
        }

        if(sessionStorage.getItem('bait') !== null) {
            this.setState({
                bait: baitParse.name,
                baitPrice: baitParse.price,
                baitImage: baitParse.image,
                bl: baitParse.link
            })
            priceFinal = Number(priceFinal) + Number(baitParse.price)
        }

        if(sessionStorage.getItem('headwear') !== null) {
            this.setState({
                headwear: headwearParse.name,
                headwearPrice: headwearParse.price,
                headwearImage: headwearParse.image,
                hwl: headwearParse.link
            })
            priceFinal = Number(priceFinal) + Number(headwearParse.price)
        }

        if(sessionStorage.getItem('vest') !== null) {
            this.setState({
                vest: vestParse.name,
                vestPrice: vestParse.price,
                vestImage: vestParse.image,
                vl: vestParse.link
            })
            priceFinal = Number(priceFinal) + Number(vestParse.price)
        }

        if(sessionStorage.getItem('pants') !== null) {
            this.setState({
                pants: pantsParse.name,
                pantsPrice: pantsParse.price,
                pantsImage: pantsParse.image,
                pl: pantsParse.link
            })
           
            priceFinal = Number(priceFinal) + Number(pantsParse.price)
        }

        if(sessionStorage.getItem('hooks') !== null) {
            this.setState({
                hooks: hooksParse.name,
                hooksPrice: hooksParse.price,
                hooksImage: hooksParse.image,
                hl: hooksParse.link
            })
            priceFinal = Number(priceFinal) + Number(hooksParse.price)
        }

        if(sessionStorage.getItem('tacklebox') !== null) {
            this.setState({
                tacklebox: tackleboxParse.name,
                tackleboxPrice: tackleboxParse.price,
                tackleboxImage: tackleboxParse.image,
                tbl: tackleboxParse.link
            })
            priceFinal = Number(priceFinal) + Number(tackleboxParse.price)
        }

        this.setState({
            finalPrice: priceFinal
        })
    }

    handleSave() {
        if(this.state.listName.length !== 0) {
            let newObj = {
                listName: this.state.listName,
                fishingrod: this.state.fishingrod,
                reel: this.state.reel,
                bait: this.state.bait,
                headwear: this.state.headwear,
                vest: this.state.vest,
                pants: this.state.pants,
                hooks: this.state.hooks,
                tacklebox: this.state.tacklebox,
                fishingrodPrice: this.state.fishingrodPrice,
                reelPrice: this.state.reelPrice,
                baitPrice: this.state.baitPrice,
                headwearPrice: this.state.headwearPrice,
                vestPrice: this.state.vestPrice,
                pantsPrice: this.state.pantsPrice,
                hooksPrice: this.state.hooksPrice,
                tackleboxPrice: this.state.tackleboxPrice,
                fishingrodImage: this.state.fishingrodImage,
                reelImage: this.state.reelImage,
                baitImage: this.state.baitImage,
                headwearImage: this.state.headwearImage,
                vestImage: this.state.vestImage,
                pantsImage: this.state.pantsImage,
                hooksImage: this.state.hooksImage,
                tackleboxImage: this.state.tackleboxImage,
                fishingrodLink: this.state.frl,
                reelLink: this.state.rl,
                baitLink: this.state.bl,
                headwearLink: this.state.hwl,
                vestLink: this.state.vl,
                pantsLink: this.state.pl,
                hooksLink: this.state.hl,
                tackleboxLink: this.state.tbl,
                finalPrice: this.state.finalPrice
            }

            let convert = JSON.stringify(newObj)

            localStorage.setItem(`Fishing ${this.state.listName}`, convert)

            window.location.assign('https://outdoorgearpicker.herokuapp.com/')
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
        window.location.assign(`${e.target.value}`)
    }
    
    render() {
        return(
            <main>
                <button className="list-home" onClick={() => { window.location.assign('https://outdoorgearpicker.herokuapp.com/') }}>Home</button>
                <table className="list-table">
                   <tr className="list-tr">
                       <th className="list-th">Gear Type</th>
                       <th className="list-th">Gear Image</th>
                       <th className="list-th">Gear Name</th>
                       <th className="list-th">Gear Price</th>
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Fishing Rod</td>
                        {this.state.fishingrod.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.fishingrodImage} /></td> : <td></td>}
                        {this.state.fishingrod.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/fishingproductsearch?type=fishingrod'>Add Fishing Rod</a></td> : <td className="list-td">{this.state.fishingrod}</td>}
                        {this.state.fishingrod.length === 0 ? <td></td> : <td className="list-td">${this.state.fishingrodPrice}</td>}
                        {this.state.fishingrod.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.frl}>Buy Now!</button></td> : <td></td>}
                        {this.state.fishingrod.length !== 0 ? <button className="list-delete" value="fishingrod" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Reel</td>
                        {this.state.reel.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.reelImage} /></td> : <td></td>}
                        {this.state.reel.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/fishingproductsearch?type=reel'>Add Reel</a> : <td className="list-td">{this.state.reel}</td>}
                        {this.state.reel.length === 0 ? <td></td> : <td className="list-td">${this.state.reelPrice}</td>}
                        {this.state.reel.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.rl}>Buy Now!</button></td> : <td></td>}
                        {this.state.reel.length !== 0 ? <button className="list-delete" value="reel" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Bait</td>
                        {this.state.bait.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.baitImage} /></td> : <td></td>}
                        {this.state.bait.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/fishingproductsearch?type=bait'>Add Bait</a> : <td className="list-td">{this.state.bait}</td>}
                        {this.state.bait.length === 0 ? <td></td> : <td className="list-td">${this.state.baitPrice}</td>}
                        {this.state.bait.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.bl}>Buy Now!</button></td> : <td></td>}
                        {this.state.bait.length !== 0 ? <button className="list-delete" value="bait" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">HeadWear</td>
                        {this.state.headwear.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.headwearImage} /></td> : <td></td>}
                        {this.state.headwear.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/fishingproductsearch?type=headwear'>Add HeadWear</a> : <td className="list-td">{this.state.headwear}</td>}
                        {this.state.headwear.length === 0 ? <td></td> : <td className="list-td">${this.state.headwearPrice}</td>}
                        {this.state.headwear.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.hwl}>Buy Now!</button></td> : <td></td>}
                        {this.state.headwear.length !== 0 ? <button className="list-delete" value="headwear" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Vest</td>
                        {this.state.vest.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.vestImage} /></td> : <td></td>}
                        {this.state.vest.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/fishingproductsearch?type=vest'>Add Vest</a> : <td className="list-td">{this.state.vest}</td>}
                        {this.state.vest.length === 0 ? <td></td> : <td className="list-td">${this.state.vestPrice}</td>}
                        {this.state.vest.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.vl}>Buy Now!</button></td> : <td></td>}
                        {this.state.vest.length !== 0 ? <button className="list-delete" value="vest" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Pants</td>
                        {this.state.pants.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.pantsImage} /></td> : <td></td>}
                        {this.state.pants.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/fishingproductsearch?type=pants'>Add Pants</a> : <td className="list-td">{this.state.pants}</td>}
                        {this.state.pants.length === 0 ? <td></td> : <td className="list-td">${this.state.pantsPrice}</td>}
                        {this.state.pants.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.pl}>Buy Now!</button></td> : <td></td>}
                        {this.state.pants.length !== 0 ? <button className="list-delete" value="pants" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Hooks</td>
                        {this.state.hooks.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.hooksImage} /></td> : <td></td>}
                        {this.state.hooks.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/fishingproductsearch?type=hooks'>Add Hooks</a> : <td className="list-td">{this.state.hooks}</td>}
                        {this.state.hooks.length === 0 ? <td></td> : <td className="list-td">${this.state.hooksPrice}</td>}
                        {this.state.hooks.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.hl}>Buy Now!</button></td> : <td></td>}
                        {this.state.hooks.length !== 0 ? <button className="list-delete" value="hooks" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Tackle Box</td>
                        {this.state.tacklebox.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.tackleboxImage} /></td> : <td></td>}
                        {this.state.tacklebox.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/fishingproductsearch?type=tacklebox'>Add Tackle Box</a> : <td className="list-td">{this.state.tacklebox}</td>}
                        {this.state.tacklebox.length === 0 ? <td></td> : <td className="list-td">${this.state.tackleboxPrice}</td>}
                        {this.state.tacklebox.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.tbl}>Buy Now!</button></td> : <td></td>}
                        {this.state.tacklebox.length !== 0 ? <button className="list-delete" value="tacklebox" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <th className="list-th"></th>
                        <th className="list-th">Final Price</th>
                        <th className="list-th" >${this.state.finalPrice.toFixed(2)}</th>
                   </tr>
               </table>
               <div className="newlist">
                   <input type="text" onChange={e => this.setState({listName: e.target.value})} />
                   <button className="newlist-save" onClick={this.handleSave.bind(this)}>Save List</button>
               </div>
            </main>
        )
    }
}

export default FishingNewList

//Number(this.state.fishingrod.price) + Number(this.state.reel.price) + Number(this.state.bait.price) + Number(this.state.headwear.price) + Number(this.state.vest.price) + Number(this.state.pants.price) + Number(this.state.hooks.price) + Number(this.state.tacklebox.price)
