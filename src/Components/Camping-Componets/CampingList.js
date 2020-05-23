import React from 'react'
import MultiSelect from '../multiSelect'

class CampingList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            results: [],
            hasChanged: false,
            hasSaved: false,
            headlamp: {name: '', price: 0, image: '', link: ''},
            compass: {name: '', price: 0, image: '', link: ''},
            trekkingpoles: {name: '', price: 0, image: '', link: ''},
            sling: {name: '', price: 0, image: '', link: ''},
            bipod: {name: '', price: 0, image: '', link: ''},
            essentialsmisc: {name: '', price: 0, image: '', link: ''},
            archery: {name: '', price: 0, image: '', link: ''},
            arrow: {name: '', price: 0, image: '', link: ''},
            arrhead: {name: '', price: 0, image: '', link: ''},
            archtrekkingpoles: {name: '', price: 0, image: '', link: ''},
            archsling: {name: '', price: 0, image: '', link: ''},
            archbipod: {name: '', price: 0, image: '', link: ''},
            miscarchery: {name: '', price: 0, image: '', link: ''},
            hikinghat: {name: '', price: 0, image: '', link: ''},
            covermask: {name: '', price: 0, image: '', link: ''},
            windbreaker: {name: '', price: 0, image: '', link: ''},
            hikingshirt: {name: '', price: 0, image: '', link: ''},
            hikingpants: {name: '', price: 0, image: '', link: ''},
            gaiter: {name: '', price: 0, image: '', link: ''},
            hikingpants: {name: '', price: 0, image: '', link: ''},
            hikingboot: {name: '', price: 0, image: '', link: ''},
            hikingbackpack: {name: '', price: 0, image: '', link: ''},
            binocularholder: {name: '', price: 0, image: '', link: ''},
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
            headlamp: getParseData.headlamp,
            compass: getParseData.compass,
            trekkingpoles: getParseData.trekkingpoles,
            sling: getParseData.sling,
            bipod: getParseData.bipod,
            essentialsmisc: getParseData.essentialsmisc,
            archery: getParseData.archery,
            arrow: getParseData.arrow,
            arrhead: getParseData.arrhead,
            archtrekkingpoles: getParseData.archtrekkingpoles,
            archsling: getParseData.archsling,
            archbipod: getParseData.archbipod,
            miscarchery: getParseData.miscarchery,
            hikinghat: getParseData.hikinghat,
            covermask: getParseData.covermask,
            windbreaker: getParseData.windbreaker,
            hikingshirt: getParseData.hikingshirt,
            hikingpants: getParseData.hikingpants,
            gaiter: getParseData.gaiter,
            hikingpants: getParseData.hikingpants,
            hikingboot: getParseData.hikingboot,
            hikingbackpack: getParseData.hikingbackpack,
            binocularholder: getParseData.binocularholder,
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
        console.log(this.state.tent)
        return(
            <main className="main-class">
                <h2 className="list-h2-topname">Hiking New List</h2>
                {this.state.hasChanged === true ? <button className="list-save" onClick={this.handleSave.bind(this)}>Save Delete</button> : null}
                {this.state.hasSaved === true ? <p className="list-hassaved">Everything has Saved!</p> : null}
                <table className="list-table">
                    <tr className="list-tr-th">
                       <th className="list-th">Gear Type</th>
                       <th className="list-th">Gear Image</th>
                       <th className="list-th">Gear Name</th>
                       <th className="list-th">Gear Price</th>
                    </tr>


                    <tr className="tr-list-break"><td className="td-list-break">Clothing</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Hiking Hat</td>
                         {this.state.hikinghat.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.hikinghat.image} /></td> : <td className="no-td"></td>}
                         {this.state.hikinghat.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=hikinghat'>Add Hiking Hat</a></td> : <td className="list-td">{this.state.hikinghat.name}</td>}
                         {this.state.hikinghat.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.hikinghat.price}</td>}
                         {this.state.hikinghat.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.hikinghat.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.hikinghat.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="hikinghat" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'hikinghat' ? <MultiSelect index={index} tdName='hikinghat' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.hikinghat.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Hiking Hat</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=hikinghat'>Add Extra Hiking Hat</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Windbreaker</td>
                         {this.state.windbreaker.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.windbreaker.image} /></td> : <td className="no-td"></td>}
                         {this.state.windbreaker.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=windbreaker'>Add Windbreakers</a></td> : <td className="list-td">{this.state.windbreaker.name}</td>}
                         {this.state.windbreaker.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.windbreaker.price}</td>}
                         {this.state.windbreaker.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.windbreaker.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.windbreaker.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="windbreaker" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'windbreaker' ? <MultiSelect index={index} tdName='Windbreaker' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.windbreaker.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Windbreaker</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=windbreaker'>Add Extra Windbreaker</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">hikingshirt</td>
                         {this.state.hikingshirt.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.hikingshirt.image} /></td> : <td className="no-td"></td>}
                         {this.state.hikingshirt.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=hikingshirt'>Add hikingshirt</a></td> : <td className="list-td">{this.state.hikingshirt.name}</td>}
                         {this.state.hikingshirt.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.hikingshirt.price}</td>}
                         {this.state.hikingshirt.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.hikingshirt.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.hikingshirt.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="hikingshirt" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'hikingshirt' ? <MultiSelect index={index} tdName='hikingshirt' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.hikingshirt.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra hikingshirt</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=hikingshirt'>Add Extra hikingshirt</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">hikingpants</td>
                         {this.state.hikingpants.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.hikingpants.image} /></td> : <td className="no-td"></td>}
                         {this.state.hikingpants.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=hikingpants'>Add hikingpants</a></td> : <td className="list-td">{this.state.hikingpants.name}</td>}
                         {this.state.hikingpants.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.hikingpants.price}</td>}
                         {this.state.hikingpants.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.hikingpants.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.hikingpants.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="hikingpants" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'hikingpants' ? <MultiSelect index={index} tdName='hikingpants' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.hikingpants.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra hikingpants</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=hikingpants'>Add Extra hikingpants</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Pants</td>
                         {this.state.hikingpants.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.hikingpants.image} /></td> : <td className="no-td"></td>}
                         {this.state.hikingpants.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=hikingpants'>Add Pants</a></td> : <td className="list-td">{this.state.hikingpants.name}</td>}
                         {this.state.hikingpants.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.hikingpants.price}</td>}
                         {this.state.hikingpants.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.hikingpants.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.hikingpants.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="hikingpants" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'hikingpants' ? <MultiSelect index={index} tdName='Pants' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.hikingpants.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Pants</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=hikingpants'>Add Extra Pants</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Hiking Boots</td>
                         {this.state.hikingboot.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.hikingboot.image} /></td> : <td className="no-td"></td>}
                         {this.state.hikingboot.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=hikingboot'>Add Hiking Boots</a></td> : <td className="list-td">{this.state.hikingboot.name}</td>}
                         {this.state.hikingboot.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.hikingboot.price}</td>}
                         {this.state.hikingboot.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.hikingboot.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.hikingboot.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="hikingboot" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'hikingboot' ? <MultiSelect index={index} tdName='Hiking Boots' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.hikingboot.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Hiking Boots</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=hikingboot'>Add Extra Hiking Boots</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Packs/Containers</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Backpack </td>
                         {this.state.hikingbackpack.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.hikingbackpack.image} /></td> : <td className="no-td"></td>}
                         {this.state.hikingbackpack.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=hikingbackpack'>Add Backpack</a></td> : <td className="list-td">{this.state.hikingbackpack.name}</td>}
                         {this.state.hikingbackpack.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.hikingbackpack.price}</td>}
                         {this.state.hikingbackpack.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.hikingbackpack.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.hikingbackpack.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="hikingbackpack" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'hikingbackpack' ? <MultiSelect index={index} tdName='Backpack' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.hikingbackpack.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Backpack</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=hikingbackpack'>Add Extra Backpack</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Water Bladder/Container </td>
                         {this.state.bladder.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.bladder.image} /></td> : <td className="no-td"></td>}
                         {this.state.bladder.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=bladder'>Add Water Bladder/Container</a></td> : <td className="list-td">{this.state.bladder.name}</td>}
                         {this.state.bladder.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.bladder.price}</td>}
                         {this.state.bladder.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.bladder.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.bladder.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="bladder" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'bladder' ? <MultiSelect index={index} tdName='Water Bladder/Container' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.bladder.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Water Bladder/Container</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=bladder'>Add Extra Water Bladder/Container</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}



                    <tr className="tr-list-break"><td className="td-list-break">Essentials</td></tr>
                    <tr className="list-tr">
                         <td className="list-td" >Headlamp</td>
                         {this.state.headlamp.name.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.headlamp.image} /></td> : <td className="no-td"></td>}
                         {this.state.headlamp.name.length === 0 ? <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=headlamp'>Add Headlamp</a></td> : <td className="list-td">{this.state.headlamp.name}</td>}
                         {this.state.headlamp.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.headlamp.price}</td>}
                         {this.state.headlamp.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.headlamp.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.headlamp.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="headlamp" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'headlamp' ? <MultiSelect index={index} tdName='Headlamp' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.headlamp.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Headlamp</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=headlamp'>Add Extra Headlamp</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Compass</td>
                         {this.state.compass.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.compass.image} /></td> : <td className="no-td"></td>}
                         {this.state.compass.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=compass'>Add Compass</a></td> : <td className="list-td">{this.state.compass.name}</td>}
                         {this.state.compass.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.compass.price}</td>}
                         {this.state.compass.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.compass.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.compass.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="compass" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'compass' ? <MultiSelect index={index} tdName='compass' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.compass.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Compass</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=compass'>Add Extra Compass</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Knives </td>
                         {this.state.knive.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.knive.image} /></td> : <td className="no-td"></td>}
                         {this.state.knive.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=knive'>Add Knives</a></td> : <td className="list-td">{this.state.knive.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=knive'>Add Extra Knives</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Trekking Poles</td>
                         {this.state.trekkingpoles.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.trekkingpoles.image} /></td> : <td className="no-td"></td>}
                         {this.state.trekkingpoles.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=trekkingpoles'>Add Trekking Poles</a></td> : <td className="list-td">{this.state.trekkingpoles.name}</td>}
                         {this.state.trekkingpoles.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.trekkingpoles.price}</td>}
                         {this.state.trekkingpoles.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.trekkingpoles.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.trekkingpoles.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="trekkingpoles" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'trekkingpoles' ? <MultiSelect index={index} tdName='trekkingpoles' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.trekkingpoles.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Trekking Poles</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=trekkingpoles'>Add Extra Trekking Poles</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Misc Essentials</td>
                         {this.state.essentialsmisc.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.essentialsmisc.image} /></td> : <td className="no-td"></td>}
                         {this.state.essentialsmisc.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=essentialsmisc'>Add Misc Essentials</a></td> : <td className="list-td">{this.state.essentialsmisc.name}</td>}
                         {this.state.essentialsmisc.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.essentialsmisc.price}</td>}
                         {this.state.essentialsmisc.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.sl}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.essentialsmisc.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="essentialsmisc" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'essentialsmisc' ? <MultiSelect index={index} tdName='Misc Essentials' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.essentialsmisc.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Misc Essentials</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=essentialsmisc'>Add Extra Misc Essentials</a></td>
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
                         <td className="list-td">Fire Starter </td>
                         {this.state.firestarter.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.firestarter.image} /></td> : <td className="no-td"></td>}
                         {this.state.firestarter.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=firestarter'>Add Fire Starter</a></td> : <td className="list-td">{this.state.firestarter.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editcampingproductsearch?type=firestarter'>Add Extra Fire Starter</a></td>
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