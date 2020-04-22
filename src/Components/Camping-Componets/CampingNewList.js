import React from 'react'

class FishingNewList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listName: '',
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
        let priceFinal = 0
        let tentParse = JSON.parse(sessionStorage.getItem('tent'))
        let beddingParse = JSON.parse(sessionStorage.getItem('bedding'))
        let cookingstoveParse = JSON.parse(sessionStorage.getItem('cookingstove'))
        let lanternParse = JSON.parse(sessionStorage.getItem('lantern'))
        let firstaidParse = JSON.parse(sessionStorage.getItem('firstaid'))
        let firestarterParse = JSON.parse(sessionStorage.getItem('firestarter'))
        let watercontainerParse = JSON.parse(sessionStorage.getItem('watercontainer'))
        let waterfilterParse = JSON.parse(sessionStorage.getItem('waterfilter'))

        console.log(tentParse)

        if(sessionStorage.getItem('tent') !== null) {
            this.setState({
                tent: tentParse.name,
                tentPrice: tentParse.price,
                tentImage: tentParse.image,
                tl: tentParse.link
            })
            priceFinal = priceFinal + tentParse.price
        }

        if(sessionStorage.getItem('bedding') !== null) {
            this.setState({
                bedding: beddingParse.name,
                beddingPrice: beddingParse.price,
                beddingImage: beddingParse.image,
                bl: beddingParse.link
            })
            priceFinal = priceFinal + beddingParse.price
        }

        if(sessionStorage.getItem('cookingstove') !== null) {
            this.setState({
                cookingstove: cookingstoveParse.name,
                cookingstovePrice: cookingstoveParse.price,
                cookingstoveImage: cookingstoveParse.image,
                csl: cookingstoveParse.link
            })
            priceFinal = priceFinal + cookingstoveParse.price
        }

        if(sessionStorage.getItem('lantern') !== null) {
            this.setState({
                lantern: lanternParse.name,
                lanternPrice: lanternParse.price,
                lanternImage: lanternParse.image,
                ll: lanternParse.link
            })
            priceFinal = priceFinal + lanternParse.price
        }

        if(sessionStorage.getItem('firstaid') !== null) {
            this.setState({
                firstaid: firstaidParse.name,
                firstaidPrice: firstaidParse.price,
                firstaidImage: firstaidParse.image,
                fal: firstaidParse.link
            })
            priceFinal = priceFinal + firstaidParse.price
        }

        if(sessionStorage.getItem('firestarter') !== null) {
            this.setState({
                firestarter: firestarterParse.name,
                firestarterPrice: firestarterParse.price,
                firestarterImage: firestarterParse.image,
                fsl: firestarterParse.link
            })
            priceFinal = priceFinal + firestarterParse.price
        }

        if(sessionStorage.getItem('watercontainer') !== null) {
            this.setState({
                watercontainer: watercontainerParse.name,
                watercontainerPrice: watercontainerParse.price,
                watercontainerImage: watercontainerParse.image,
                wcl: watercontainerParse.link
            })
            priceFinal = priceFinal + watercontainerParse.price
        }

        if(sessionStorage.getItem('waterfilter') !== null) {
            this.setState({
                waterfilter: waterfilterParse.name,
                waterfilterPrice: waterfilterParse.price,
                waterfilterImage: waterfilterParse.image,
                wfl: waterfilterParse.link
            })
            priceFinal = priceFinal + waterfilterParse.price
        }

        this.setState({
            finalPrice: priceFinal
        })
    }

    handleSave() {
        if(this.state.listName.length !== 0) {
            let newObj = {
                listName: this.state.listName,
                tent: this.state.tent,
                bedding: this.state.bedding,
                cookingstove: this.state.cookingstove,
                lantern: this.state.lantern,
                firstaid: this.state.firstaid,
                firestarter: this.state.firestarter,
                watercontainer: this.state.watercontainer,
                waterfilter: this.state.waterfilter,
                tentPrice: this.state.tentPrice,
                beddingPrice: this.state.beddingPrice,
                cookingstovePrice: this.state.cookingstovePrice,
                lanternPrice: this.state.lanternPrice,
                firstaidPrice: this.state.firstaidPrice,
                firestarterPrice: this.state.firestarterPrice,
                watercontainerPrice: this.state.watercontainerPrice,
                waterfilterPrice: this.state.waterfilterPrice,
                tentImage: this.state.tentImage,
                beddingImage: this.state.beddingImage,
                cookingstoveImage: this.state.cookingstoveImage,
                lanternImage: this.state.lanternImage,
                firstaidImage: this.state.firstaidImage,
                firestarterImage: this.state.firestarterImage,
                watercontainerImage: this.state.watercontainerImage,
                waterfilterImage: this.state.waterfilterImage,
                tentLink: this.state.tl,
                beddingLink: this.state.bl,
                cookingstoveLink: this.state.csl,
                lanternLink: this.state.ll,
                firstaidLink: this.state.fal,
                firestarterLink: this.state.fsl,
                watercontainerLink: this.state.wcl,
                waterfilterLink: this.state.wfl
            }

            let convert = JSON.stringify(newObj)

            localStorage.setItem(`Camping ${this.state.listName}`, convert)

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
                        <td className="list-td">tent</td>
                        {this.state.tent.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.tentImage} /></td> : <td></td>}
                        {this.state.tent.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/campingproductsearch?type=tent'>Add tent</a> : <td className="list-td">{this.state.tent}</td>}
                        {this.state.tent.length === 0 ? <td></td> : <td className="list-td">${this.state.tentPrice}</td>}
                        {this.state.tent.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.tl}>Buy Now!</button></td> : <td></td>}
                        {this.state.tent.length !== 0 ? <button className="list-delete" value="tent" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">bedding</td>
                        {this.state.bedding.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.beddingImage} /></td> : <td></td>}
                        {this.state.bedding.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/campingproductsearch?type=bedding'>Add bedding</a> : <td className="list-td">{this.state.bedding}</td>}
                        {this.state.bedding.length === 0 ? <td></td> : <td className="list-td">${this.state.beddingPrice}</td>}
                        {this.state.bedding.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.bl}>Buy Now!</button></td> : <td></td>}
                        {this.state.bedding.length !== 0 ? <button className="list-delete" value="bedding" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">cookingstove</td>
                        {this.state.cookingstove.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.cookingstoveImage} /></td> : <td></td>}
                        {this.state.cookingstove.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/campingproductsearch?type=cookingstove'>Add cookingstove</a> : <td className="list-td">{this.state.cookingstove}</td>}
                        {this.state.cookingstove.length === 0 ? <td></td> : <td className="list-td">${this.state.cookingstovePrice}</td>}
                        {this.state.cookingstove.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.csl}>Buy Now!</button></td> : <td></td>}
                        {this.state.cookingstove.length !== 0 ? <button className="list-delete" value="cookingstove" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">lantern</td>
                        {this.state.lantern.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.lanternImage} /></td> : <td></td>}
                        {this.state.lantern.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/campingproductsearch?type=lantern'>Add lantern</a> : <td className="list-td">{this.state.lantern}</td>}
                        {this.state.lantern.length === 0 ? <td></td> : <td className="list-td">${this.state.lanternPrice}</td>}
                        {this.state.lantern.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.ll}>Buy Now!</button></td> : <td></td>}
                        {this.state.lantern.length !== 0 ? <button className="list-delete" value="lantern" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">firstaid</td>
                        {this.state.firstaid.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.firstaidImage} /></td> : <td></td>}
                        {this.state.firstaid.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/campingproductsearch?type=firstaid'>Add firstaid</a> : <td className="list-td">{this.state.firstaid}</td>}
                        {this.state.firstaid.length === 0 ? <td></td> : <td className="list-td">${this.state.firstaidPrice}</td>}
                        {this.state.firstaid.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.fal}>Buy Now!</button></td> : <td></td>}
                        {this.state.firstaid.length !== 0 ? <button className="list-delete" value="firstaid" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">firestarter</td>
                        {this.state.firestarter.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.firestarterImage} /></td> : <td></td>}
                        {this.state.firestarter.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/campingproductsearch?type=firestarter'>Add firestarter</a> : <td className="list-td">{this.state.firestarter}</td>}
                        {this.state.firestarter.length === 0 ? <td></td> : <td className="list-td">${this.state.firestarterPrice}</td>}
                        {this.state.firestarter.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.fsl}>Buy Now!</button></td> : <td></td>}
                        {this.state.firestarter.length !== 0 ? <button className="list-delete" value="firestarter" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Water Container</td>
                        {this.state.watercontainer.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.watercontainerImage} /></td> : <td></td>}
                        {this.state.watercontainer.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/campingproductsearch?type=watercontainer'>Add Water Container</a> : <td className="list-td">{this.state.watercontainer}</td>}
                        {this.state.watercontainer.length === 0 ? <td></td> : <td className="list-td">${this.state.watercontainerPrice}</td>}
                        {this.state.watercontainer.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.wcl}>Buy Now!</button></td> : <td></td>}
                        {this.state.watercontainer.length !== 0 ? <button className="list-delete" value="watercontainer" onClick={this.handleDelete.bind(this)}>X</button> : <td></td>}
                   </tr>
                   <tr className="list-tr">
                        <td className="list-td">Water Filter</td>
                        {this.state.waterfilter.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.waterfilterImage} /></td> : <td></td>}
                        {this.state.waterfilter.length === 0 ? <a className="newlist-a" href='https://outdoorgearpicker.herokuapp.com/campingproductsearch?type=waterfilter'>Add Water Filter</a> : <td className="list-td">{this.state.waterfilter}</td>}
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
               <div className="newlist">
                   <input type="text" onChange={e => this.setState({listName: e.target.value})} />
                   <button className="newlist-save" onClick={this.handleSave.bind(this)}>Save List</button>
               </div>
            </main>
        )
    }
}

export default FishingNewList

//Number(this.state.tent.price) + Number(this.state.bedding.price) + Number(this.state.cookingstove.price) + Number(this.state.lantern.price) + Number(this.state.firstaid.price) + Number(this.state.firestarter.price) + Number(this.state.watercontainer.price) + Number(this.state.waterfilter.price)
