import React from 'react'
import MultiSelect from '../multiSelect'

class CampingList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            results: [],
            hasChanged: false,
            hasSaved: false,
            tent: {name: '', price: 0, image: '', link: ''},
            airmattress: {name: '', price: 0, image: '', link: ''},
            airpump: {name: '', price: 0, image: '', link: ''},
            cooler: {name: '', price: 0, image: '', link: ''},
            sleepingcot: {name: '', price: 0, image: '', link: ''},
            thermos: {name: '', price: 0, image: '', link: ''},
            cookingmisc: {name: '', price: 0, image: '', link: ''},
            stove: {name: '', price: 0, image: '', link: ''},
            lighter: {name: '', price: 0, image: '', link: ''},
            charcoal: {name: '', price: 0, image: '', link: ''},
            archcooler: {name: '', price: 0, image: '', link: ''},
            archsleepingcot: {name: '', price: 0, image: '', link: ''},
            archthermos: {name: '', price: 0, image: '', link: ''},
            miscstove: {name: '', price: 0, image: '', link: ''},
            tent: {name: '', price: 0, image: '', link: ''},
            propane: {name: '', price: 0, image: '', link: ''},
            tarp: {name: '', price: 0, image: '', link: ''},
            stakes: {name: '', price: 0, image: '', link: ''},
            shadetarp: {name: '', price: 0, image: '', link: ''},
            gaiter: {name: '', price: 0, image: '', link: ''},
            axe: {name: '', price: 0, image: '', link: ''},
            hammer: {name: '', price: 0, image: '', link: ''},
            sleepingbag: {name: '', price: 0, image: '', link: ''},
            binocularholder: {name: '', price: 0, image: '', link: ''},
            pillow: {name: '', price: 0, image: '', link: ''},
            binos: {name: '', price: 0, image: '', link: ''},
            spotting: {name: '', price: 0, image: '', link: ''},
            rangefinder: {name: '', price: 0, image: '', link: ''},
            processing: {name: '', price: 0, image: '', link: ''},
            watercontainer: {name: '', price: 0, image: '', link: ''},
            replacementblades: {name: '', price: 0, image: '', link: ''},
            saw: {name: '', price: 0, image: '', link: ''},
            sheer: {name: '', price: 0, image: '', link: ''},
            gamebag: {name: '', price: 0, image: '', link: ''},
            gloves: {name: '', price: 0, image: '', link: ''},
            lantern: {name: '', price: 0, image: '', link: ''},
            medical: {name: '', price: 0, image: '', link: ''},
            waterpurifier: {name: '', price: 0, image: '', link: ''},
            gps: {name: '', price: 0, image: '', link: ''},
            satalite: {name: '', price: 0, image: '', link: ''},
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
            tent: getParseData.tent,
            airmattress: getParseData.airmattress,
            airpump: getParseData.airpump,
            cooler: getParseData.cooler,
            sleepingcot: getParseData.sleepingcot,
            thermos: getParseData.thermos,
            cookingmisc: getParseData.cookingmisc,
            stove: getParseData.stove,
            lighter: getParseData.lighter,
            charcoal: getParseData.charcoal,
            archcooler: getParseData.archcooler,
            archsleepingcot: getParseData.archsleepingcot,
            archthermos: getParseData.archthermos,
            miscstove: getParseData.miscstove,
            tent: getParseData.tent,
            propane: getParseData.propane,
            tarp: getParseData.tarp,
            stakes: getParseData.stakes,
            shadetarp: getParseData.shadetarp,
            gaiter: getParseData.gaiter,
            axe: getParseData.axe,
            hammer: getParseData.hammer,
            sleepingbag: getParseData.sleepingbag,
            binocularholder: getParseData.binocularholder,
            pillow: getParseData.pillow,
            binos: getParseData.binos,
            spotting: getParseData.spotting,
            rangefinder: getParseData.rangefinder,
            processing: getParseData.processing,
            watercontainer: getParseData.watercontainer,
            replacementblades: getParseData.replacementblades,
            saw: getParseData.saw,
            sheer: getParseData.sheer,
            gamebag: getParseData.gamebag,
            gloves: getParseData.gloves,
            lantern: getParseData.lantern,
            medical: getParseData.medical,
            waterpurifier: getParseData.waterpurifier,
            gps: getParseData.gps,
            satalite: getParseData.satalite,
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
            let minusPrice = deleteObj.airmattress[e.target.value].price
            deleteObj.airmattress.splice(e.target.value , 1);
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
        //console.log(this.state.tent)
        return(
            <main className="main-class">
                <h2 className="list-h2-topname">Camping New List</h2>
                {this.state.hasChanged === true ? <button className="list-save" onClick={this.handleSave.bind(this)}>Save Delete</button> : null}
                {this.state.hasSaved === true ? <p className="list-hassaved">Everything has Saved!</p> : null}
                <table className="list-table">
                    <tr className="list-tr-th">
                       <th className="list-th">Gear Type</th>
                       <th className="list-th">Gear Image</th>
                       <th className="list-th">Gear Name</th>
                       <th className="list-th">Gear Price</th>
                    </tr>


                    <tr className="tr-list-break"><td className="td-list-break">Shelter</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Tent</td>
                         {this.state.tent.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.tent.image} /></td> : <td className="no-td"></td>}
                         {this.state.tent.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=tent'>Add Tent</a></td> : <td className="list-td">{this.state.tent.name}</td>}
                         {this.state.tent.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.tent.price}</td>}
                         {this.state.tent.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.tent.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.tent.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="tent" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'tent' ? <MultiSelect index={index} tdName='tent' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.tent.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Tent</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=tent'>Add Extra Tent</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Stakes</td>
                         {this.state.stakes.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.stakes.image} /></td> : <td className="no-td"></td>}
                         {this.state.stakes.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=stakes'>Add Stakes</a></td> : <td className="list-td">{this.state.stakes.name}</td>}
                         {this.state.stakes.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.stakes.price}</td>}
                         {this.state.stakes.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.stakes.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.stakes.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="stakes" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'stakes' ? <MultiSelect index={index} tdName='stakes' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.stakes.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Stakes</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=stakes'>Add Extra Stakes</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Canopy</td>
                         {this.state.shadetarp.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.shadetarp.image} /></td> : <td className="no-td"></td>}
                         {this.state.shadetarp.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=shadetarp'>Add Canopy</a></td> : <td className="list-td">{this.state.shadetarp.name}</td>}
                         {this.state.shadetarp.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.shadetarp.price}</td>}
                         {this.state.shadetarp.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.shadetarp.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.shadetarp.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="shadetarp" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'shadetarp' ? <MultiSelect index={index} tdName='shadetarp' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.shadetarp.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Canopy</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=shadetarp'>Add Extra Canopy</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Axe</td>
                         {this.state.axe.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.axe.image} /></td> : <td className="no-td"></td>}
                         {this.state.axe.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=axe'>Add Axe</a></td> : <td className="list-td">{this.state.axe.name}</td>}
                         {this.state.axe.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.axe.price}</td>}
                         {this.state.axe.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.axe.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.axe.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="axe" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'axe' ? <MultiSelect index={index} tdName='Axe' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.axe.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Axe</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=axe'>Add Extra Axe</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Bedding</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Sleeping Bag </td>
                         {this.state.sleepingbag.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.sleepingbag.image} /></td> : <td className="no-td"></td>}
                         {this.state.sleepingbag.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=sleepingbag'>Add Sleeping Bag</a></td> : <td className="list-td">{this.state.sleepingbag.name}</td>}
                         {this.state.sleepingbag.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.sleepingbag.price}</td>}
                         {this.state.sleepingbag.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.sleepingbag.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.sleepingbag.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="sleepingbag" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'sleepingbag' ? <MultiSelect index={index} tdName='Sleeping Bag' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.sleepingbag.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Sleeping Bag</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=sleepingbag'>Add Extra Sleeping Bag</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Pillow </td>
                         {this.state.pillow.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.pillow.image} /></td> : <td className="no-td"></td>}
                         {this.state.pillow.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=pillow'>Add Pillow</a></td> : <td className="list-td">{this.state.pillow.name}</td>}
                         {this.state.pillow.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.pillow.price}</td>}
                         {this.state.pillow.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.pillow.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.pillow.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="pillow" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'pillow' ? <MultiSelect index={index} tdName='Pillow' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.pillow.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Pillow</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=pillow'>Add Extra Pillow</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td" >Air Mattress</td>
                         {this.state.airmattress.name.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.airmattress.image} /></td> : <td className="no-td"></td>}
                         {this.state.airmattress.name.length === 0 ? <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=airmattress'>Add Air Mattress</a></td> : <td className="list-td">{this.state.airmattress.name}</td>}
                         {this.state.airmattress.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.airmattress.price}</td>}
                         {this.state.airmattress.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.airmattress.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.airmattress.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="airmattress" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'airmattress' ? <MultiSelect index={index} tdName='airmattress' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.airmattress.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Air Mattress</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=airmattress'>Add Extra Air Mattress</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Air Pump</td>
                         {this.state.airpump.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.airpump.image} /></td> : <td className="no-td"></td>}
                         {this.state.airpump.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=airpump'>Add Air Pump</a></td> : <td className="list-td">{this.state.airpump.name}</td>}
                         {this.state.airpump.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.airpump.price}</td>}
                         {this.state.airpump.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.airpump.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.airpump.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="airpump" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'airpump' ? <MultiSelect index={index} tdName='airpump' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.airpump.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Air Pump</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=airpump'>Add Extra Air Pump</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Sleeping Cot or Pad</td>
                         {this.state.sleepingcot.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.sleepingcot.image} /></td> : <td className="no-td"></td>}
                         {this.state.sleepingcot.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=sleepingcot'>Add Sleeping Cot or Pad</a></td> : <td className="list-td">{this.state.sleepingcot.name}</td>}
                         {this.state.sleepingcot.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.sleepingcot.price}</td>}
                         {this.state.sleepingcot.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.sleepingcot.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.sleepingcot.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="sleepingcot" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'sleepingcot' ? <MultiSelect index={index} tdName='sleepingcot' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.sleepingcot.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Sleeping Cot or Pad</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=sleepingcot'>Add Extra Sleeping Cot or Pad</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}



                    <tr className="tr-list-break"><td className="td-list-break">Cooking</td></tr>
                    
                    <tr className="list-tr">
                         <td className="list-td">Water Container </td>
                         {this.state.watercontainer.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.watercontainer.image} /></td> : <td className="no-td"></td>}
                         {this.state.watercontainer.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=watercontainer'>Add Water Container</a></td> : <td className="list-td">{this.state.watercontainer.name}</td>}
                         {this.state.watercontainer.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.watercontainer.price}</td>}
                         {this.state.watercontainer.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.watercontainer.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.watercontainer.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="watercontainer" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'watercontainer' ? <MultiSelect index={index} tdName='Water Container' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.watercontainer.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Water Container</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=watercontainer'>Add Extra Water Container</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Coolers</td>
                         {this.state.cooler.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.cooler.image} /></td> : <td className="no-td"></td>}
                         {this.state.cooler.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=cooler'>Add Coolers</a></td> : <td className="list-td">{this.state.cooler.name}</td>}
                         {this.state.cooler.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.cooler.price}</td>}
                         {this.state.cooler.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.cooler.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.cooler.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="cooler" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'cooler' ? <MultiSelect index={index} tdName='cooler' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.cooler.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Coolers</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=cooler'>Add Extra Coolers</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Thermos</td>
                         {this.state.thermos.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.thermos.image} /></td> : <td className="no-td"></td>}
                         {this.state.thermos.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=thermos'>Add Thermos</a></td> : <td className="list-td">{this.state.thermos.name}</td>}
                         {this.state.thermos.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.thermos.price}</td>}
                         {this.state.thermos.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.thermos.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.thermos.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="thermos" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'thermos' ? <MultiSelect index={index} tdName='thermos' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.thermos.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Thermos</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=thermos'>Add Extra Thermos</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td" >Stove</td>
                         {this.state.stove.name.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.stove.image} /></td> : <td className="no-td"></td>}
                         {this.state.stove.name.length === 0 ? <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=Stove'>Add stove</a></td> : <td className="list-td">{this.state.stove.name}</td>}
                         {this.state.stove.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.stove.price}</td>}
                         {this.state.stove.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.rl}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.stove.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="stove" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'stove' ? <MultiSelect index={index} tdName='Stove' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.stove.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Stove</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=Stove'>Add Extra Stove</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Propane</td>
                         {this.state.propane.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.propane.image} /></td> : <td className="no-td"></td>}
                         {this.state.propane.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=propane'>Add Propane</a></td> : <td className="list-td">{this.state.propane.name}</td>}
                         {this.state.propane.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.propane.price}</td>}
                         {this.state.propane.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.propane.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.propane.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="propane" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'propane' ? <MultiSelect index={index} tdName='Propane' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.propane.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Propane</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=propane'>Add Extra Propane</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Charcoal</td>
                         {this.state.charcoal.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.charcoal.image} /></td> : <td className="no-td"></td>}
                         {this.state.charcoal.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=charcoal'>Add Charcoal</a></td> : <td className="list-td">{this.state.charcoal.name}</td>}
                         {this.state.charcoal.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.charcoal.price}</td>}
                         {this.state.charcoal.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.charcoal.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.charcoal.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="charcoal" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'charcoal' ? <MultiSelect index={index} tdName='Charcoal' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.charcoal.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Charcoal</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=charcoal'>Add Extra Charcoal</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Lighter/Matches</td>
                         {this.state.lighter.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.lighter.image} /></td> : <td className="no-td"></td>}
                         {this.state.lighter.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=lighter'>Add Lighter/Matches</a></td> : <td className="list-td">{this.state.lighter.name}</td>}
                         {this.state.lighter.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.lighter.price}</td>}
                         {this.state.lighter.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.lighter.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.lighter.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="lighter" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'lighter' ? <MultiSelect index={index} tdName='lighter' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.lighter.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Lighter/Matches</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=lighter'>Add Extra Lighter/Matches</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Misc Cooking</td>
                         {this.state.cookingmisc.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.cookingmisc.image} /></td> : <td className="no-td"></td>}
                         {this.state.cookingmisc.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=cookingmisc'>Add Misc Cooking</a></td> : <td className="list-td">{this.state.cookingmisc.name}</td>}
                         {this.state.cookingmisc.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.cookingmisc.price}</td>}
                         {this.state.cookingmisc.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.sl}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.cookingmisc.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="cookingmisc" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'cookingmisc' ? <MultiSelect index={index} tdName='Misc Cooking' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.cookingmisc.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Misc Cooking</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=cookingmisc'>Add Extra Misc Cooking</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Emergency</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Medical Kits </td>
                         {this.state.medical.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.medical.image} /></td> : <td className="no-td"></td>}
                         {this.state.medical.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=medical'>Add Medical Kits</a></td> : <td className="list-td">{this.state.medical.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=medical'>Add Extra Medical Kits</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Water Purifier </td>
                         {this.state.waterpurifier.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.waterpurifier.image} /></td> : <td className="no-td"></td>}
                         {this.state.waterpurifier.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=waterpurifier'>Add Water Purifier</a></td> : <td className="list-td">{this.state.waterpurifier.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=waterpurifier'>Add Extra Water Purifier</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">GPS </td>
                         {this.state.gps.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.gps.image} /></td> : <td className="no-td"></td>}
                         {this.state.gps.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=gps'>Add GPS</a></td> : <td className="list-td">{this.state.gps.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=gps'>Add Extra GPS</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}

                    <tr className="tr-list-break"><td className="td-list-break">Misc Gear</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Lantern </td>
                         {this.state.lantern.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.lantern.image} /></td> : <td className="no-td"></td>}
                         {this.state.lantern.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=lantern'>Add Lantern</a></td> : <td className="list-td">{this.state.lantern.name}</td>}
                         {this.state.lantern.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.lantern.price}</td>}
                         {this.state.lantern.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.lantern.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.lantern.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="lantern" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'lantern' ? <MultiSelect index={index} tdName='Lantern' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.lantern.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Lantern</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=lantern'>Add Extra Lantern</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Misc</td>
                         {this.state.misc.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.misc.image} /></td> : <td className="no-td"></td>}
                         {this.state.misc.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=misc'>Add Misc Gear</a></td> : <td className="list-td">{this.state.misc.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=misc'>Add Extra Misc Gear</a></td>
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

export default CampingList