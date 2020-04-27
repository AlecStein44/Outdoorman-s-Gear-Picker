import React from 'react'

class FishingList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            results: [],
            hasChanged: false,
            hasSaved: false,
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
        let getData = localStorage.getItem(sessionStorage.getItem('active'))

        let getParseData = JSON.parse(getData)

        this.setState({
            results: getParseData,
            fishingrod: getParseData.fishingrod,
            reel: getParseData.reel,
            bait: getParseData.bait,
            headwear: getParseData.headwear,
            vest: getParseData.vest,
            pants: getParseData.pants,
            hooks: getParseData.hooks,
            tacklebox: getParseData.tacklebox,
            fishingrodPrice: getParseData.fishingrodPrice,
            reelPrice: getParseData.reelPrice,
            baitPrice: getParseData.baitPrice,
            headwearPrice: getParseData.headwearPrice,
            vestPrice: getParseData.vestPrice,
            pantsPrice: getParseData.pantsPrice,
            hooksPrice: getParseData.hooksPrice,
            tackleboxPrice: getParseData.tackleboxPrice,
            fishingrodImage: getParseData.fishingrodImage,
            reelImage: getParseData.reelImage,
            baitImage: getParseData.baitImage,
            headwearImage: getParseData.headwearImage,
            vestImage: getParseData.vestImage,
            pantsImage: getParseData.pantsImage,
            hooksImage: getParseData.hooksImage,
            tackleboxImage: getParseData.tackleboxImage,
            frl: getParseData.fishingrodLink,
            rl: getParseData.reelLink,
            bl: getParseData.baitLink,
            hwl: getParseData.headwearLink,
            vl: getParseData.vestLink,
            pl: getParseData.pantsLink,
            hl: getParseData.hooksLink,
            tbl: getParseData.tackleboxLink,
            finalPrice: Number(getParseData.fishingrodPrice) + Number(getParseData.reelPrice) + Number(getParseData.baitPrice) + Number(getParseData.headwearPrice) + Number(getParseData.vestPrice) + Number(getParseData.pantsPrice) + Number(getParseData.hooksPrice) + Number(getParseData.tackleboxPrice)
        })
    }

    handleDelete(e) {
        let name = e.target.value

        let num = this.state.finalPrice

        let quotes = `${e.target.value}Price`

        let image = `${e.target.value}Image`

        let link = `${e.target.value}Link`

        let reParse = this.state.results

        reParse[e.target.value] = ''

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
            <main className="main-class">
                <h2 className="list-h2-topname">{this.state.results.listName}</h2>
                <table className="list-table">
                   <tr className="list-tr">
                       <th className="list-th">Gear Type</th>
                       <th className="list-th">Gear Image</th>
                       <th className="list-th">Gear Name</th>
                       <th className="list-th">Gear Price</th>
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Fishing Rod</td>
                        {this.state.fishingrod.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.fishingrodImage} /></td> : <td className="no-td"></td>}
                        {this.state.fishingrod.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=fishingrod'>Add Fishing Rod</a></td> : <td className="list-td">{this.state.fishingrod}</td>}
                        {this.state.fishingrod.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.fishingrodPrice}</td>}
                        {this.state.fishingrod.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.frl}>Buy Now!</button></td> : <td className="no-td"></td>}
                        {this.state.fishingrod.length !== 0 ? <td className="list-td"><button className="list-delete" value="fishingrod" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Reel</td>
                        {this.state.reel.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.reelImage} /></td> : <td className="no-td"></td>}
                        {this.state.reel.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=reel'>Add Reel</a></td> : <td className="list-td">{this.state.reel}</td>}
                        {this.state.reel.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.reelPrice}</td>}
                        {this.state.reel.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.rl}>Buy Now!</button></td> : <td className="no-td"></td>}
                        {this.state.reel.length !== 0 ? <td className="list-td"><button className="list-delete" value="reel" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Bait</td>
                        {this.state.bait.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.baitImage} /></td> : <td className="no-td"></td>}
                        {this.state.bait.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=bait'>Add Bait</a></td> : <td className="list-td">{this.state.bait}</td>}
                        {this.state.bait.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.baitPrice}</td>}
                        {this.state.bait.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.bl}>Buy Now!</button></td> : <td className="no-td"></td>}
                        {this.state.bait.length !== 0 ? <td className="list-td"><button className="list-delete" value="bait" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">HeadWear</td>
                        {this.state.headwear.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.headwearImage} /></td> : <td className="no-td"></td>}
                        {this.state.headwear.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=headwear'>Add HeadWear</a></td> : <td className="list-td">{this.state.headwear}</td>}
                        {this.state.headwear.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.headwearPrice}</td>}
                        {this.state.headwear.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.hwl}>Buy Now!</button></td> : <td className="no-td"></td>}
                        {this.state.headwear.length !== 0 ? <td className="list-td"><button className="list-delete" value="headwear" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Vest</td>
                        {this.state.vest.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.vestImage} /></td> : <td className="no-td"></td>}
                        {this.state.vest.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=vest'>Add Vest</a></td> : <td className="list-td">{this.state.vest}</td>}
                        {this.state.vest.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.vestPrice}</td>}
                        {this.state.vest.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.vl}>Buy Now!</button></td> : <td className="no-td"></td>}
                        {this.state.vest.length !== 0 ? <td className="list-td"><button className="list-delete" value="vest" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Pants</td>
                        {this.state.pants.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.pantsImage} /></td> : <td className="no-td"></td>}
                        {this.state.pants.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=pants'>Add Pants</a></td> : <td className="list-td">{this.state.pants}</td>}
                        {this.state.pants.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.pantsPrice}</td>}
                        {this.state.pants.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.pl}>Buy Now!</button></td> : <td className="no-td"></td>}
                        {this.state.pants.length !== 0 ? <td className="list-td"><button className="list-delete" value="pants" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Hooks</td>
                        {this.state.hooks.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.hooksImage} /></td> : <td className="no-td"></td>}
                        {this.state.hooks.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=hooks'>Add Hooks</a></td> : <td className="list-td">{this.state.hooks}</td>}
                        {this.state.hooks.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.hooksPrice}</td>}
                        {this.state.hooks.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.hl}>Buy Now!</button></td> : <td className="no-td"></td>}
                        {this.state.hooks.length !== 0 ? <td className="list-td"><button className="list-delete" value="hooks" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Tackle Box</td>
                        {this.state.tacklebox.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.tackleboxImage} /></td> : <td className="no-td"></td>}
                        {this.state.tacklebox.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=tacklebox'>Add Tackle Box</a></td> : <td className="list-td">{this.state.tacklebox}</td>}
                        {this.state.tacklebox.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.tackleboxPrice}</td>}
                        {this.state.tacklebox.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.tbl}>Buy Now!</button></td> : <td className="no-td"></td>}
                        {this.state.tacklebox.length !== 0 ? <td className="list-td"><button className="list-delete" value="tacklebox" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                   </tr>
                   <tr className="list-tr-price">
                        <th className="list-th"></th>
                        <th className="list-th"></th>
                        <th className="list-th"></th>
                        <th className="list-th" >Final Price ${this.state.finalPrice.toFixed(2)}</th>
                   </tr>
               </table>
               {this.state.hasChanged === true ? <button className="list-save" onClick={this.handleSave.bind(this)}>Save Delete</button> : null}
               {this.state.hasSaved === true ? <p className="list-hassaved">Everything has Saved!</p> : null}
            </main>
        )
    }
}

export default FishingList