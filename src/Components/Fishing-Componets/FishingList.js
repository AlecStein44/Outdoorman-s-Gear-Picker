import React from 'react'
import MultiSelect from '../multiSelect'

class FishingList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            results: [],
            hasChanged: false,
            hasSaved: false,
            rod: {name: '', price: 0, image: '', link: ''},
            fishingline: {name: '', price: 0, image: '', link: ''},
            hook: {name: '', price: 0, image: '', link: ''},
            lure: {name: '', price: 0, image: '', link: ''},
            pliers: {name: '', price: 0, image: '', link: ''},
            essentialsmisc: {name: '', price: 0, image: '', link: ''},
            linecutter: {name: '', price: 0, image: '', link: ''},
            arrow: {name: '', price: 0, image: '', link: ''},
            arrhead: {name: '', price: 0, image: '', link: ''},
            archhook: {name: '', price: 0, image: '', link: ''},
            archlure: {name: '', price: 0, image: '', link: ''},
            archpliers: {name: '', price: 0, image: '', link: ''},
            misclinecutter: {name: '', price: 0, image: '', link: ''},
            bait: {name: '', price: 0, image: '', link: ''},
            covermask: {name: '', price: 0, image: '', link: ''},
            windbreaker: {name: '', price: 0, image: '', link: ''},
            hikingshirt: {name: '', price: 0, image: '', link: ''},
            gaiter: {name: '', price: 0, image: '', link: ''},
            wadder: {name: '', price: 0, image: '', link: ''},
            shoe: {name: '', price: 0, image: '', link: ''},
            tacklebox: {name: '', price: 0, image: '', link: ''},
            bottle: {name: '', price: 0, image: '', link: ''},
            bladder: {name: '', price: 0, image: '', link: ''},
            binos: {name: '', price: 0, image: '', link: ''},
            spotting: {name: '', price: 0, image: '', link: ''},
            rangefinder: {name: '', price: 0, image: '', link: ''},
            processing: {name: '', price: 0, image: '', link: ''},
            knive: {name: '', price: 0, image: '', link: ''},
            replacementblades: {name: '', price: 0, image: '', link: ''},
            saw: {name: '', price: 0, image: '', link: ''},
            sheer: {name: '', price: 0, image: '', link: ''},
            gamebag: {name: '', price: 0, image: '', link: ''},
            gloves: {name: '', price: 0, image: '', link: ''},
            rope: {name: '', price: 0, image: '', link: ''},
            medical: {name: '', price: 0, image: '', link: ''},
            waterpurifier: {name: '', price: 0, image: '', link: ''},
            gps: {name: '', price: 0, image: '', link: ''},
            firestarter: {name: '', price: 0, image: '', link: ''},
            misc: {name: '', price: 0, image: '', link: ''},
            multiArr: {guns: null},
            finalPrice: 0
        }
    }

    componentDidMount() {
        let getData = localStorage.getItem(sessionStorage.getItem('active'))

        let getParseData = JSON.parse(getData)
        console.log(getParseData)
        this.setState({
            results: getParseData,
            rod: getParseData.rod,
            fishingline: getParseData.fishingline,
            hook: getParseData.hook,
            lure: getParseData.lure,
            pliers: getParseData.pliers,
            essentialsmisc: getParseData.essentialsmisc,
            linecutter: getParseData.linecutter,
            arrow: getParseData.arrow,
            arrhead: getParseData.arrhead,
            archhook: getParseData.archhook,
            archlure: getParseData.archlure,
            archpliers: getParseData.archpliers,
            misclinecutter: getParseData.misclinecutter,
            bait: getParseData.bait,
            covermask: getParseData.covermask,
            windbreaker: getParseData.windbreaker,
            hikingshirt: getParseData.hikingshirt,
            wadder: getParseData.wadder,
            gaiter: getParseData.gaiter,
            wadder: getParseData.wadder,
            shoe: getParseData.shoe,
            tacklebox: getParseData.tacklebox,
            bottle: getParseData.bottle,
            bladder: getParseData.bladder,
            binos: getParseData.binos,
            spotting: getParseData.spotting,
            rangefinder: getParseData.rangefinder,
            processing: getParseData.processing,
            knive: getParseData.knive,
            replacementblades: getParseData.replacementblades,
            saw: getParseData.saw,
            sheer: getParseData.sheer,
            gamebag: getParseData.gamebag,
            gloves: getParseData.gloves,
            rope: getParseData.rope,
            medical: getParseData.medical,
            waterpurifier: getParseData.waterpurifier,
            gps: getParseData.gps,
            firestarter: getParseData.firestarter,
            misc: getParseData.misc,
            multiArr: getParseData.multiArr,
            finalPrice: Number(getParseData.finalPrice)
            
          })
    }

    handleDelete(e) {
        /*let name = e.target.value

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
        })*/
        if(isNaN(e.target.value) === false) {
            let deleteObj = this.state.multiArr
            let minusPrice = deleteObj.guns[e.target.value].price
            deleteObj.guns.splice(e.target.value , 1);
            deleteObj.multiPrice = deleteObj.multiPrice - minusPrice
            let donePrice = Number(this.state.finalPrice) - Number(minusPrice)
            console.log(deleteObj)
            this.setState({
                multiArr: deleteObj,
                finalPrice: Number(donePrice),
                hasChanged: true,
                hasSaved: false
            })
            sessionStorage.setItem('multi', JSON.stringify(deleteObj))
        } else {
            let name = e.target.value

            let num = this.state.finalPrice

            sessionStorage.removeItem(name)

            this.setState({
                [name]: {name: '', price: 0, image: '', link: ''},
                finalPrice:  Number(num) - Number(this.state[name].price),
                hasChanged: true,
                hasSaved: false
            })
        }
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


                   <tr className="tr-list-break"><td className="td-list-break">Essentials</td></tr>
                    <tr className="list-tr">
                         <td className="list-td" >Rod and Reel</td>
                         {this.state.rod.name.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.rod.image} /></td> : <td className="no-td"></td>}
                         {this.state.rod.name.length === 0 ? <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=rod'>Add Rod and Reel</a></td> : <td className="list-td">{this.state.rod.name}</td>}
                         {this.state.rod.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.rod.price}</td>}
                         {this.state.rod.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.rod.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.rod.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="rod" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'rod' ? <MultiSelect index={index} tdName='rod' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.rod.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Rod and Reel</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=rod'>Add Extra Rod and Reel</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Fishing Line</td>
                         {this.state.fishingline.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.fishingline.image} /></td> : <td className="no-td"></td>}
                         {this.state.fishingline.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=fishingline'>Add Fishing Line</a></td> : <td className="list-td">{this.state.fishingline.name}</td>}
                         {this.state.fishingline.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.fishingline.price}</td>}
                         {this.state.fishingline.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.fishingline.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.fishingline.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="fishingline" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'fishingline' ? <MultiSelect index={index} tdName='fishingline' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.fishingline.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Fishing Line</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=fishingline'>Add Extra Fishing Line</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Hooks</td>
                         {this.state.hook.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.hook.image} /></td> : <td className="no-td"></td>}
                         {this.state.hook.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=hook'>Add Hooks</a></td> : <td className="list-td">{this.state.hook.name}</td>}
                         {this.state.hook.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.hook.price}</td>}
                         {this.state.hook.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.hook.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.hook.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="hook" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'hook' ? <MultiSelect index={index} tdName='hook' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.hook.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Hooks</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=hook'>Add Extra Hooks</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Bait</td>
                         {this.state.bait.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.bait.image} /></td> : <td className="no-td"></td>}
                         {this.state.bait.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=bait'>Add Bait</a></td> : <td className="list-td">{this.state.bait.name}</td>}
                         {this.state.bait.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.bait.price}</td>}
                         {this.state.bait.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.bait.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.bait.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="bait" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'bait' ? <MultiSelect index={index} tdName='bait' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.bait.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Bait</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=bait'>Add Extra Bait</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Lures</td>
                         {this.state.lure.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.lure.image} /></td> : <td className="no-td"></td>}
                         {this.state.lure.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=lure'>Add Lures</a></td> : <td className="list-td">{this.state.lure.name}</td>}
                         {this.state.lure.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.lure.price}</td>}
                         {this.state.lure.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.lure.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.lure.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="lure" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'lure' ? <MultiSelect index={index} tdName='Lures' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.lure.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Lures</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=lure'>Add Extra Lures</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Knives </td>
                         {this.state.knive.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.knive.image} /></td> : <td className="no-td"></td>}
                         {this.state.knive.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=knive'>Add Knives</a></td> : <td className="list-td">{this.state.knive.name}</td>}
                         {this.state.knive.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.knive.price}</td>}
                         {this.state.knive.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.knive.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.knive.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="knive" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'knive' ? <MultiSelect index={index} tdName='Knives' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.knive.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Knives</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=knive'>Add Extra Knives</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">pliers</td>
                         {this.state.pliers.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.pliers.image} /></td> : <td className="no-td"></td>}
                         {this.state.pliers.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=pliers'>Add pliers</a></td> : <td className="list-td">{this.state.pliers.name}</td>}
                         {this.state.pliers.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.pliers.price}</td>}
                         {this.state.pliers.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.pliers.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.pliers.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="pliers" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'pliers' ? <MultiSelect index={index} tdName='pliers' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.pliers.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra pliers</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=pliers'>Add Extra pliers</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td" >Line Cutters</td>
                         {this.state.linecutter.name.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.linecutter.image} /></td> : <td className="no-td"></td>}
                         {this.state.linecutter.name.length === 0 ? <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=linecutter'>Add linecutter</a></td> : <td className="list-td">{this.state.linecutter.name}</td>}
                         {this.state.linecutter.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.linecutter.price}</td>}
                         {this.state.linecutter.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.rl}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.linecutter.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="linecutter" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'Line Cutters' ? <MultiSelect index={index} tdName='Line Cutters' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.linecutter.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Line Cutters</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=Line Cutters'>Add Extra Line Cutters</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Clothing</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Wadder</td>
                         {this.state.wadder.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.wadder.image} /></td> : <td className="no-td"></td>}
                         {this.state.wadder.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=wadder'>Add Wadder</a></td> : <td className="list-td">{this.state.wadder.name}</td>}
                         {this.state.wadder.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.wadder.price}</td>}
                         {this.state.wadder.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.wadder.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.wadder.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="wadder" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'wadder' ? <MultiSelect index={index} tdName='Wadder' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.wadder.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Wadder</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=wadder'>Add Extra Wadder</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Shoes</td>
                         {this.state.shoe.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.shoe.image} /></td> : <td className="no-td"></td>}
                         {this.state.shoe.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=shoe'>Add Shoes</a></td> : <td className="list-td">{this.state.shoe.name}</td>}
                         {this.state.shoe.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.shoe.price}</td>}
                         {this.state.shoe.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.shoe.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.shoe.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="shoe" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'shoe' ? <MultiSelect index={index} tdName='Shoes' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.shoe.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Shoes</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=shoe'>Add Extra Shoes</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Packs/Containers</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Tackle Box </td>
                         {this.state.tacklebox.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.tacklebox.image} /></td> : <td className="no-td"></td>}
                         {this.state.tacklebox.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=tacklebox'>Add Tackle Box</a></td> : <td className="list-td">{this.state.tacklebox.name}</td>}
                         {this.state.tacklebox.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.tacklebox.price}</td>}
                         {this.state.tacklebox.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.tacklebox.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.tacklebox.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="tacklebox" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'tacklebox' ? <MultiSelect index={index} tdName='Tackle Box' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.tacklebox.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Tackle Box</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=tacklebox'>Add Extra Tackle Box</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Water Water Bottle </td>
                         {this.state.bottle.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.bottle.image} /></td> : <td className="no-td"></td>}
                         {this.state.bottle.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=bottle'>Add Water Water Bottle</a></td> : <td className="list-td">{this.state.bottle.name}</td>}
                         {this.state.bottle.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.bottle.price}</td>}
                         {this.state.bottle.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.bottle.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.bottle.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="bottle" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'bottle' ? <MultiSelect index={index} tdName='Water Water Bottle' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.bottle.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Water Water Bottle</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=bottle'>Add Extra Water Water Bottle</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Emergency</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Medical Kits </td>
                         {this.state.medical.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.medical.image} /></td> : <td className="no-td"></td>}
                         {this.state.medical.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=medical'>Add Medical Kits</a></td> : <td className="list-td">{this.state.medical.name}</td>}
                         {this.state.medical.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.medical.price}</td>}
                         {this.state.medical.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.medical.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.medical.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="medical" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'medical' ? <MultiSelect index={index} tdName='Medical Kits' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.medical.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Medical Kits</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=medical'>Add Extra Medical Kits</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Water Purifier </td>
                         {this.state.waterpurifier.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.waterpurifier.image} /></td> : <td className="no-td"></td>}
                         {this.state.waterpurifier.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=waterpurifier'>Add Water Purifier</a></td> : <td className="list-td">{this.state.waterpurifier.name}</td>}
                         {this.state.waterpurifier.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.waterpurifier.price}</td>}
                         {this.state.waterpurifier.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.waterpurifier.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.waterpurifier.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="waterpurifier" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'waterpurifier' ? <MultiSelect index={index} tdName='Water Purifier' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.waterpurifier.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Water Purifier</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=waterpurifier'>Add Extra Water Purifier</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Fire Starter </td>
                         {this.state.firestarter.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.firestarter.image} /></td> : <td className="no-td"></td>}
                         {this.state.firestarter.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=firestarter'>Add Fire Starter</a></td> : <td className="list-td">{this.state.firestarter.name}</td>}
                         {this.state.firestarter.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.firestarter.price}</td>}
                         {this.state.firestarter.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.firestarter.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.firestarter.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="firestarter" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'firestarter' ? <MultiSelect index={index} tdName='GPS' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.gps.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Fire Starter</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=firestarter'>Add Extra Fire Starter</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">GPS </td>
                         {this.state.gps.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.gps.image} /></td> : <td className="no-td"></td>}
                         {this.state.gps.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=gps'>Add GPS</a></td> : <td className="list-td">{this.state.gps.name}</td>}
                         {this.state.gps.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.gps.price}</td>}
                         {this.state.gps.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.gps.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.gps.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="gps" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'gps' ? <MultiSelect index={index} tdName='GPS' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.gps.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra GPS</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=gps'>Add Extra GPS</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}

                    <tr className="tr-list-break"><td className="td-list-break">Misc Gear</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Misc</td>
                         {this.state.misc.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.misc.image} /></td> : <td className="no-td"></td>}
                         {this.state.misc.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=misc'>Add Misc Gear</a></td> : <td className="list-td">{this.state.misc.name}</td>}
                         {this.state.misc.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.misc.price}</td>}
                         {this.state.misc.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.misc.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.misc.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="misc" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'misc' ? <MultiSelect index={index} tdName='Misc Gear' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.misc.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Misc Gear</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editfishingproductsearch?type=misc'>Add Extra Misc Gear</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}

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