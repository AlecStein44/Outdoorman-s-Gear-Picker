import React from 'react'

class CampingList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            results: [],
            hasChanged: false,
            hasSaved: false,
            tent: '',
            tentPrice: 0,
            bedding: '',
            beddingPrice: 0,
            cookingstove: '',
            cookingstovePrice: 0,
            lantern: '',
            lanternPrice: 0,
            firstaid: '',
            firstaidPrice: 0,
            firestarter: '',
            firestarterPrice: 0,
            watercontainer: '',
            watercontainerPrice: 0,
            waterfilter: '',
            waterfilterPrice: 0,
            tentImage: '',
            beddingImage: '',
            cookingstoveImage: '',
            lanternImage: '',
            firstaidImage: '',
            firestarterImage: '',
            watercontainerImage: '',
            waterfilterImage: '',
            tl: '',
            bl: '',
            csl: '',
            ll: '',
            fal: '',
            fsl: '',
            wcl: '',
            wfl: '',
            finalPrice: 0
        }
    }

    componentDidMount() {
        let getData = localStorage.getItem(sessionStorage.getItem('active'))

        let getParseData = JSON.parse(getData)

        this.setState({
            results: getParseData,
            tent: getParseData.tent,
            bedding: getParseData.bedding,
            cookingstove: getParseData.cookingstove,
            lantern: getParseData.lantern,
            firstaid: getParseData.firstaid,
            firestarter: getParseData.firestarter,
            watercontainer: getParseData.watercontainer,
            waterfilter: getParseData.waterfilter,
            tentPrice: getParseData.tentPrice,
            beddingPrice: getParseData.beddingPrice,
            cookingstovePrice: getParseData.cookingstovePrice,
            lanternPrice: getParseData.lanternPrice,
            firstaidPrice: getParseData.firstaidPrice,
            firestarterPrice: getParseData.firestarterPrice,
            watercontainerPrice: getParseData.watercontainerPrice,
            waterfilterPrice: getParseData.waterfilterPrice,
            tentImage: getParseData.tentImage,
            beddingImage: getParseData.beddingImage,
            cookingstoveImage: getParseData.cookingstoveImage,
            lanternImage: getParseData.lanternImage,
            firstaidImage: getParseData.firstaidImage,
            firestarterImage: getParseData.firestarterImage,
            watercontainerImage: getParseData.watercontainerImage,
            waterfilterImage: getParseData.waterfilterImage,
            tl: getParseData.tentLink,
            bl: getParseData.beddinglLink,
            csl: getParseData.cookingstoveLink,
            ll: getParseData.lanternLink,
            fal: getParseData.firstaidLink,
            fsl: getParseData.firestarterLink,
            wcl: getParseData.wtercontainerLink,
            wfl: getParseData.waterfilterLink,
            finalPrice: Number(getParseData.tentPrice) + Number(getParseData.beddingPrice) + Number(getParseData.cookingstovePrice) + Number(getParseData.lanternPrice) + Number(getParseData.firstaidPrice) + Number(getParseData.firestarterPrice) + Number(getParseData.watercontainerPrice) + Number(getParseData.waterfilterPrice)
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

        localStorage.setItem(`Camping ${this.state.results.listName}`, saveStringify)

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
        console.log(this.state.tent)
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
                        <td className="list-td">tent</td>
                        {this.state.tent.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.tentImage} /></td> : <td></td>}
                        {this.state.tent.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/editcampingproductsearch?type=tent'>Add tent</a> : <td className="list-td">{this.state.tent}</td>}
                        {this.state.tent.length === 0 ? <td></td> : <td className="list-td">${this.state.tentPrice}</td>}
                        {this.state.tent.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.tl}>Buy Now!</button></td> : <td></td>}
                        {this.state.tent.length !== 0 ? <button className="list-delete" value="tent" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">bedding</td>
                        {this.state.bedding.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.beddingImage} /></td> : <td></td>}
                        {this.state.bedding.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/editcampingproductsearch?type=bedding'>Add bedding</a> : <td className="list-td">{this.state.bedding}</td>}
                        {this.state.bedding.length === 0 ? <td></td> : <td className="list-td">${this.state.beddingPrice}</td>}
                        {this.state.bedding.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.bl}>Buy Now!</button></td> : <td></td>}
                        {this.state.bedding.length !== 0 ? <button className="list-delete" value="bedding" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">cookingstove</td>
                        {this.state.cookingstove.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.cookingstoveImage} /></td> : <td></td>}
                        {this.state.cookingstove.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/editcampingproductsearch?type=cookingstove'>Add cookingstove</a> : <td className="list-td">{this.state.cookingstove}</td>}
                        {this.state.cookingstove.length === 0 ? <td></td> : <td className="list-td">${this.state.cookingstovePrice}</td>}
                        {this.state.cookingstove.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.csl}>Buy Now!</button></td> : <td></td>}
                        {this.state.cookingstove.length !== 0 ? <button className="list-delete" value="cookingstove" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">lantern</td>
                        {this.state.lantern.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.lanternImage} /></td> : <td></td>}
                        {this.state.lantern.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/editcampingproductsearch?type=lantern'>Add lantern</a> : <td className="list-td">{this.state.lantern}</td>}
                        {this.state.lantern.length === 0 ? <td></td> : <td className="list-td">${this.state.lanternPrice}</td>}
                        {this.state.lantern.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.ll}>Buy Now!</button></td> : <td></td>}
                        {this.state.lantern.length !== 0 ? <button className="list-delete" value="lantern" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">firstaid</td>
                        {this.state.firstaid.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.firstaidImage} /></td> : <td></td>}
                        {this.state.firstaid.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/editcampingproductsearch?type=firstaid'>Add firstaid</a> : <td className="list-td">{this.state.firstaid}</td>}
                        {this.state.firstaid.length === 0 ? <td></td> : <td className="list-td">${this.state.firstaidPrice}</td>}
                        {this.state.firstaid.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.fal}>Buy Now!</button></td> : <td></td>}
                        {this.state.firstaid.length !== 0 ? <button className="list-delete" value="firstaid" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">firestarter</td>
                        {this.state.firestarter.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.firestarterImage} /></td> : <td></td>}
                        {this.state.firestarter.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/editcampingproductsearch?type=firestarter'>Add firestarter</a> : <td className="list-td">{this.state.firestarter}</td>}
                        {this.state.firestarter.length === 0 ? <td></td> : <td className="list-td">${this.state.firestarterPrice}</td>}
                        {this.state.firestarter.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.fsl}>Buy Now!</button></td> : <td></td>}
                        {this.state.firestarter.length !== 0 ? <button className="list-delete" value="firestarter" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Water Container</td>
                        {this.state.watercontainer.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.watercontainerImage} /></td> : <td></td>}
                        {this.state.watercontainer.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/editcampingproductsearch?type=watercontainer'>Add Water Container</a> : <td className="list-td">{this.state.watercontainer}</td>}
                        {this.state.watercontainer.length === 0 ? <td></td> : <td className="list-td">${this.state.watercontainerPrice}</td>}
                        {this.state.watercontainer.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.wcl}>Buy Now!</button></td> : <td></td>}
                        {this.state.watercontainer.length !== 0 ? <button className="list-delete" value="watercontainer" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Water Filter</td>
                        {this.state.waterfilter.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.waterfilterImage} /></td> : <td></td>}
                        {this.state.waterfilter.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/editcampingproductsearch?type=waterfilter'>Add Water Filter</a> : <td className="list-td">{this.state.waterfilter}</td>}
                        {this.state.waterfilter.length === 0 ? <td></td> : <td className="list-td">${this.state.waterfilterPrice}</td>}
                        {this.state.waterfilter.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.wfl}>Buy Now!</button></td> : <td></td>}
                        {this.state.waterfilter.length !== 0 ? <button className="list-delete" value="waterfilter" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
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

export default CampingList
