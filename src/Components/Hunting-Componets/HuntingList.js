import React from 'react'
import MultiSelect from '../multiSelect'

class HuntingList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            results: [],
            hasChanged: false,
            hasSaved: false,
            guns: {name: '', price: 0, image: '', link: ''},
            ammo: {name: '', price: 0, image: '', link: ''},
            scope: {name: '', price: 0, image: '', link: ''},
            sling: {name: '', price: 0, image: '', link: ''},
            bipod: {name: '', price: 0, image: '', link: ''},
            miscfirearm: {name: '', price: 0, image: '', link: ''},
            archery: {name: '', price: 0, image: '', link: ''},
            arrow: {name: '', price: 0, image: '', link: ''},
            arrhead: {name: '', price: 0, image: '', link: ''},
            archscope: {name: '', price: 0, image: '', link: ''},
            archsling: {name: '', price: 0, image: '', link: ''},
            archbipod: {name: '', price: 0, image: '', link: ''},
            miscarchery: {name: '', price: 0, image: '', link: ''},
            headwear: {name: '', price: 0, image: '', link: ''},
            covermask: {name: '', price: 0, image: '', link: ''},
            jacket: {name: '', price: 0, image: '', link: ''},
            shirt: {name: '', price: 0, image: '', link: ''},
            pants: {name: '', price: 0, image: '', link: ''},
            gaiter: {name: '', price: 0, image: '', link: ''},
            sock: {name: '', price: 0, image: '', link: ''},
            boot: {name: '', price: 0, image: '', link: ''},
            backpack: {name: '', price: 0, image: '', link: ''},
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
            guns: getParseData.guns,
            ammo: getParseData.ammo,
            scope: getParseData.scope,
            sling: getParseData.sling,
            bipod: getParseData.bipod,
            miscfirearm: getParseData.miscfirearm,
            archery: getParseData.archery,
            arrow: getParseData.arrow,
            arrhead: getParseData.arrhead,
            archscope: getParseData.archscope,
            archsling: getParseData.archsling,
            archbipod: getParseData.archbipod,
            miscarchery: getParseData.miscarchery,
            headwear: getParseData.headwear,
            covermask: getParseData.covermask,
            jacket: getParseData.jacket,
            shirt: getParseData.shirt,
            pants: getParseData.pants,
            gaiter: getParseData.gaiter,
            sock: getParseData.sock,
            boot: getParseData.boot,
            backpack: getParseData.backpack,
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
                {this.state.hasChanged === true ? <button className="list-save" onClick={this.handleSave.bind(this)}>Save Delete</button> : null}
                {this.state.hasSaved === true ? <p className="list-hassaved">Everything has Saved!</p> : null}
               <table className="list-table">
                    <tr className="list-tr-th">
                       <th className="list-th">Gear Type</th>
                       <th className="list-th">Gear Image</th>
                       <th className="list-th">Gear Name</th>
                       <th className="list-th">Gear Price</th>
                   </tr>
                   <tr className="tr-list-break"><td className="td-list-break">Firearms</td></tr>
                    <tr className="list-tr">
                         <td className="list-td" >Firearm</td>
                         {this.state.guns.name.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.guns.image} /></td> : <td className="no-td"></td>}
                         {this.state.guns.name.length === 0 ? <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=GUNS'>Add Firearm</a></td> : <td className="list-td">{this.state.guns.name}</td>}
                         {this.state.guns.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.guns.price}</td>}
                         {this.state.guns.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.guns.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.guns.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="guns" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'guns' ? <MultiSelect index={index} tdName='Firearm' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.guns.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Firearm</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=GUNS'>Add Extra Firearm</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Ammo</td>
                         {this.state.ammo.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.ammo.image} /></td> : <td className="no-td"></td>}
                         {this.state.ammo.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=AMMO'>Add Ammo</a></td> : <td className="list-td">{this.state.ammo.name}</td>}
                         {this.state.ammo.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.ammo.price}</td>}
                         {this.state.ammo.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.ammo.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.ammo.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="ammo" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'ammo' ? <MultiSelect index={index} tdName='Ammo' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.ammo.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Firearm</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=AMMO'>Add Extra Ammo</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Scope</td>
                         {this.state.scope.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.scope.image} /></td> : <td className="no-td"></td>}
                         {this.state.scope.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=scope'>Add Scope</a></td> : <td className="list-td">{this.state.scope.name}</td>}
                         {this.state.scope.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.scope.price}</td>}
                         {this.state.scope.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.scope.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.scope.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="scope" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'scope' ? <MultiSelect index={index} tdName='Scope' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.scope.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Scope</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=scope'>Add Extra Scope</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Sling</td>
                         {this.state.sling.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.sling.image} /></td> : <td className="no-td"></td>}
                         {this.state.sling.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=sling'>Add Sling</a></td> : <td className="list-td">{this.state.sling.name}</td>}
                         {this.state.sling.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.sling.price}</td>}
                         {this.state.sling.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.sling.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.sling.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="sling" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'sling' ? <MultiSelect index={index} tdName='Sling' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.sling.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra sling</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=sling'>Add Extra Sling</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Bipod</td>
                         {this.state.bipod.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.bipod.image} /></td> : <td className="no-td"></td>}
                         {this.state.bipod.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=bipod'>Add Bipod</a></td> : <td className="list-td">{this.state.bipod.name}</td>}
                         {this.state.bipod.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.bipod.price}</td>}
                         {this.state.bipod.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.bipod.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.bipod.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="bipod" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'bipod' ? <MultiSelect index={index} tdName='Bipod' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.bipod.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra bipod</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=bipod'>Add Extra Bipod</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Misc Firearm Parts</td>
                         {this.state.miscfirearm.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.miscfirearm.image} /></td> : <td className="no-td"></td>}
                         {this.state.miscfirearm.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=miscfirearm'>Add Firearm Parts</a></td> : <td className="list-td">{this.state.miscfirearm.name}</td>}
                         {this.state.miscfirearm.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.miscfirearm.price}</td>}
                         {this.state.miscfirearm.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.sl}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.miscfirearm.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="miscfirearm" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'miscfirearm' ? <MultiSelect index={index} tdName='Misc Firearm Parts' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.miscfirearm.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Misc Firearm Parts</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=miscfirearm'>Add Extra Misc Firearm Parts</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Archery</td></tr>
                    <tr className="list-tr">
                         <td className="list-td" >Bow</td>
                         {this.state.archery.name.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.archery.image} /></td> : <td className="no-td"></td>}
                         {this.state.archery.name.length === 0 ? <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=bow'>Add Archery</a></td> : <td className="list-td">{this.state.archery.name}</td>}
                         {this.state.archery.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.archery.price}</td>}
                         {this.state.archery.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.rl}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.archery.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="archery" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'bow' ? <MultiSelect index={index} tdName='Bow' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.archery.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Bow</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=bow'>Add Extra Bow</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Arrow</td>
                         {this.state.arrow.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.arrow.image} /></td> : <td className="no-td"></td>}
                         {this.state.arrow.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=arrow'>Add Arrow</a></td> : <td className="list-td">{this.state.arrow.name}</td>}
                         {this.state.arrow.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.arrow.price}</td>}
                         {this.state.arrow.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.arrow.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.arrow.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="arrow" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'arrow' ? <MultiSelect index={index} tdName='Arrow' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.arrow.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Arrow</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=arrow'>Add Extra Arrow</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Arrow Head</td>
                         {this.state.arrhead.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.arrhead.image} /></td> : <td className="no-td"></td>}
                         {this.state.arrhead.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=broadhead'>Add Arrow Head</a></td> : <td className="list-td">{this.state.arrhead.name}</td>}
                         {this.state.arrhead.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.arrhead.price}</td>}
                         {this.state.arrhead.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.arrhead.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.arrhead.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="arrhead" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'broadhead' ? <MultiSelect index={index} tdName='Arrow Heads' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.arrhead.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Arrow Heads</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=broadhead'>Add Extra Arrow Heads</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    {/*<tr className="list-tr">
                         <td className="list-td">Scope</td>
                         {this.state.archscope.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.archscope.image} /></td> : <td className="no-td"></td>}
                         {this.state.archscope.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=scope'>Add Scope</a></td> : <td className="list-td">{this.state.archscope.name}</td>}
                         {this.state.archscope.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.archscope.price}</td>}
                         {this.state.archscope.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.archscope.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.archscope.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="archscope" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    <tr className="list-tr">
                         <td className="list-td">Slings</td>
                         {this.state.archsling.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.archsling.image} /></td> : <td className="no-td"></td>}
                         {this.state.archsling.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=scope'>Add Slings</a></td> : <td className="list-td">{this.state.archsling.name}</td>}
                         {this.state.archsling.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.archsling.price}</td>}
                         {this.state.archsling.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.archsling.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.archsling.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="archsling" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    <tr className="list-tr">
                         <td className="list-td">bipod</td>
                         {this.state.archbipod.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.archbipod.image} /></td> : <td className="no-td"></td>}
                         {this.state.archbipod.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=archbipod'>Add bipod</a></td> : <td className="list-td">{this.state.archbipod.name}</td>}
                         {this.state.archbipod.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.scope.price}</td>}
                         {this.state.archbipod.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.archbipod.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.archbipod.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="archbipod" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>*/}
                    <tr className="list-tr">
                         <td className="list-td">Misc Archery Parts</td>
                         {this.state.miscarchery.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.miscarchery.image} /></td> : <td className="no-td"></td>}
                         {this.state.miscarchery.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=miscarchery'>Add Archery Parts</a></td> : <td className="list-td">{this.state.miscarchery.name}</td>}
                         {this.state.miscarchery.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.miscarchery.price}</td>}
                         {this.state.miscarchery.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.miscarchery.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.miscarchery.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="miscarchery" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'miscarchery' ? <MultiSelect index={index} tdName='Misc Archery Parts' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.miscarchery.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Misc Archery Parts</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=miscarchery'>Add Extra Misc Archery Parts</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}

                    <tr className="tr-list-break"><td className="td-list-break">Clothing</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">HeadWear</td>
                         {this.state.headwear.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.headwear.image} /></td> : <td className="no-td"></td>}
                         {this.state.headwear.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=headwear'>Add HeadWear</a></td> : <td className="list-td">{this.state.headwear.name}</td>}
                         {this.state.headwear.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.headwear.price}</td>}
                         {this.state.headwear.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.headwear.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.headwear.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="headwear" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'headwear' ? <MultiSelect index={index} tdName='HeadWear' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.headwear.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra HeadWear</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=headwear'>Add Extra HeadWear</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Face Covers/Masks</td>
                         {this.state.covermask.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.covermask.image} /></td> : <td className="no-td"></td>}
                         {this.state.covermask.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=covermask'>Add Face Covers/Masks</a></td> : <td className="list-td">{this.state.covermask.name}</td>}
                         {this.state.covermask.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.covermask.price}</td>}
                         {this.state.covermask.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.covermask.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.covermask.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="covermask" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'covermask' ? <MultiSelect index={index} tdName='Face Covers/Masks' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.covermask.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Face Covers/Masks</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=covermask'>Add Extra Face Covers/Masks</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Jackets/Heavy Clothes</td>
                         {this.state.jacket.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.jacket.image} /></td> : <td className="no-td"></td>}
                         {this.state.jacket.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=jacket'>Add Jackets</a></td> : <td className="list-td">{this.state.jacket.name}</td>}
                         {this.state.jacket.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.jacket.price}</td>}
                         {this.state.jacket.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.jacket.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.jacket.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="jacket" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'jacket' ? <MultiSelect index={index} tdName='Jackets/Heavy Clothes' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.jacket.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Jackets/Heavy Clothes</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=jacket'>Add Extra Jackets/Heavy Clothes</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Shirt</td>
                         {this.state.shirt.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.shirt.image} /></td> : <td className="no-td"></td>}
                         {this.state.shirt.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=shirt'>Add Shirt</a></td> : <td className="list-td">{this.state.shirt.name}</td>}
                         {this.state.shirt.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.shirt.price}</td>}
                         {this.state.shirt.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.shirt.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.shirt.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="shirt" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'shirt' ? <MultiSelect index={index} tdName='Shirt' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.shirt.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Shirt</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=shirt'>Add Extra Shirt</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Pants</td>
                         {this.state.pants.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.pants.image} /></td> : <td className="no-td"></td>}
                         {this.state.pants.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=pants'>Add Pants</a></td> : <td className="list-td">{this.state.pants.name}</td>}
                         {this.state.pants.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.pants.price}</td>}
                         {this.state.pants.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.pants.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.pants.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="pants" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'pants' ? <MultiSelect index={index} tdName='Pants' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.pants.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Pants</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=pants'>Add Extra Pants</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Gaiter</td>
                         {this.state.gaiter.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.gaiter.image} /></td> : <td className="no-td"></td>}
                         {this.state.gaiter.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=gaiter'>Add Gaiter</a></td> : <td className="list-td">{this.state.gaiter.name}</td>}
                         {this.state.gaiter.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.gaiter.price}</td>}
                         {this.state.gaiter.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.gaiter.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.gaiter.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="gaiter" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'gaiter' ? <MultiSelect index={index} tdName='Gaiter' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.gaiter.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Gaiter</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=gaiter'>Add Extra Gaiter</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Socks</td>
                         {this.state.sock.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.sock.image} /></td> : <td className="no-td"></td>}
                         {this.state.sock.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=sock'>Add Socks</a></td> : <td className="list-td">{this.state.sock.name}</td>}
                         {this.state.sock.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.sock.price}</td>}
                         {this.state.sock.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.sock.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.sock.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="sock" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'sock' ? <MultiSelect index={index} tdName='Socks' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.sock.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Socks</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=sock'>Add Extra Socks</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Boots</td>
                         {this.state.boot.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.boot.image} /></td> : <td className="no-td"></td>}
                         {this.state.boot.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=boot'>Add Boots</a></td> : <td className="list-td">{this.state.boot.name}</td>}
                         {this.state.boot.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.boot.price}</td>}
                         {this.state.boot.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.boot.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.boot.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="boot" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'boot' ? <MultiSelect index={index} tdName='Boots' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.boot.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Boots</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=boot'>Add Extra Boots</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Packs/Containers</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Backpacks </td>
                         {this.state.backpack.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.backpack.image} /></td> : <td className="no-td"></td>}
                         {this.state.backpack.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=backpack'>Add Backpacks</a></td> : <td className="list-td">{this.state.backpack.name}</td>}
                         {this.state.backpack.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.backpack.price}</td>}
                         {this.state.backpack.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.backpack.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.backpack.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="backpack" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'backpack' ? <MultiSelect index={index} tdName='BackPacks' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.backpack.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra BackPacks</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=backpack'>Add Extra BackPacks</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Binocular Holder </td>
                         {this.state.binocularholder.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.binocularholder.image} /></td> : <td className="no-td"></td>}
                         {this.state.binocularholder.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=binocularholder'>Add Binocular Holder</a></td> : <td className="list-td">{this.state.binocularholder.name}</td>}
                         {this.state.binocularholder.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.binocularholder.price}</td>}
                         {this.state.binocularholder.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.binocularholder.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.binocularholder.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="binocularholder" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'binocularholder' ? <MultiSelect index={index} tdName='Binocular Holder' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.binocularholder.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Binocular Holder</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=binocularholder'>Add Extra Binocular Holder</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Water Bladder/Container </td>
                         {this.state.bladder.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.bladder.image} /></td> : <td className="no-td"></td>}
                         {this.state.bladder.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=bladder'>Add Water Bladder/Container</a></td> : <td className="list-td">{this.state.bladder.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=bladder'>Add Extra Water Bladder/Container</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Optics</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Binoculars</td>
                         {this.state.binos.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.binos.image} /></td> : <td className="no-td"></td>}
                         {this.state.binos.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=binos'>Add Binoculars</a></td> : <td className="list-td">{this.state.binos.name}</td>}
                         {this.state.binos.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.binos.price}</td>}
                         {this.state.binos.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.binos.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.binos.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="binos" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'binos' ? <MultiSelect index={index} tdName='Binoculars' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.binos.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Binoculars</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=binos'>Add Extra Binoculars</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Spotting Scopes</td>
                         {this.state.spotting.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.spotting.image} /></td> : <td className="no-td"></td>}
                         {this.state.spotting.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=spotting'>Add Spotting Scopes</a></td> : <td className="list-td">{this.state.spotting.name}</td>}
                         {this.state.spotting.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.spotting.price}</td>}
                         {this.state.spotting.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.spotting.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.spotting.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="spotting" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'spotting' ? <MultiSelect index={index} tdName='Spotting Scopes' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.spotting.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Spotting Scopes</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=spotting'>Add Extra Spotting Scopes</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Rangefinder</td>
                         {this.state.rangefinder.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.rangefinder.image} /></td> : <td className="no-td"></td>}
                         {this.state.rangefinder.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=rangefinder'>Add Rangefinder</a></td> : <td className="list-td">{this.state.rangefinder.name}</td>}
                         {this.state.rangefinder.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.rangefinder.price}</td>}
                         {this.state.rangefinder.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.rangefinder.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.rangefinder.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="rangefinder" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'rangefinder' ? <MultiSelect index={index} tdName='Rangefinder' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.rangefinder.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Rangefinder</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=rangefinder'>Add Extra Rangefinder</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    


                    <tr className="tr-list-break"><td className="td-list-break">Field Care</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Processing Kits </td>
                         {this.state.processing.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.processing.image} /></td> : <td className="no-td"></td>}
                         {this.state.processing.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=processing'>Add Processing Kits</a></td> : <td className="list-td">{this.state.processing.name}</td>}
                         {this.state.processing.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.processing.price}</td>}
                         {this.state.processing.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.processing.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.processing.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="roccesing" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'processing' ? <MultiSelect index={index} tdName='Processing Kits' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.processing.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Processing Kits</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=processing'>Add Extra Processing Kits</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Knives </td>
                         {this.state.knive.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.knive.image} /></td> : <td className="no-td"></td>}
                         {this.state.knive.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=knive'>Add Knives</a></td> : <td className="list-td">{this.state.knive.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=knive'>Add Extra Knives</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Replacement Blades </td>
                         {this.state.replacementblades.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.replacementblades.image} /></td> : <td className="no-td"></td>}
                         {this.state.replacementblades.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=replacementblades'>Add Replacement Blades</a></td> : <td className="list-td">{this.state.replacementblades.name}</td>}
                         {this.state.replacementblades.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.replacementblades.price}</td>}
                         {this.state.replacementblades.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.replacementblades.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.replacementblades.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="replacementblades" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'replacementblades' ? <MultiSelect index={index} tdName='Replacement Blades' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.replacementblades.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Replacement Blades</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=replacementblades'>Add Extra Replacement Blades</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Saw </td>
                         {this.state.saw.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.saw.image} /></td> : <td className="no-td"></td>}
                         {this.state.saw.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=saw'>Add Saw</a></td> : <td className="list-td">{this.state.saw.name}</td>}
                         {this.state.saw.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.saw.price}</td>}
                         {this.state.saw.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.saw.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.saw.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="saw" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'saw' ? <MultiSelect index={index} tdName='Saw' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.saw.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Saw</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=saw'>Add Extra Saw</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Shears </td>
                         {this.state.sheer.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.sheer.image} /></td> : <td className="no-td"></td>}
                         {this.state.sheer.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=sheer'>Add Shears</a></td> : <td className="list-td">{this.state.sheer.name}</td>}
                         {this.state.sheer.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.sheer.price}</td>}
                         {this.state.sheer.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.sheer.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.sheer.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="sheer" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'sheer' ? <MultiSelect index={index} tdName='Shears' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.sheer.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Shears</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=sheer'>Add Extra Shears</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Game Bags </td>
                         {this.state.gamebag.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.gamebag.image} /></td> : <td className="no-td"></td>}
                         {this.state.gamebag.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=gamebag'>Add Game Bags</a></td> : <td className="list-td">{this.state.gamebag.name}</td>}
                         {this.state.gamebag.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.gamebag.price}</td>}
                         {this.state.gamebag.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.gamebag.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.gamebag.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="gamebag" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'gamebag' ? <MultiSelect index={index} tdName='Game Bags' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.gamebag.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Game Bags</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=gamebag'>Add Extra Game Bags</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Gloves </td>
                         {this.state.gloves.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.gloves.image} /></td> : <td className="no-td"></td>}
                         {this.state.gloves.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=gloves'>Add Gloves</a></td> : <td className="list-td">{this.state.gloves.name}</td>}
                         {this.state.gloves.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.gloves.price}</td>}
                         {this.state.gloves.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.gloves.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.gloves.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="gloves" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'gloves' ? <MultiSelect index={index} tdName='Gloves' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.gloves.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Gloves</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=gloves'>Add Extra Gloves</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Rope/Hanging Kit </td>
                         {this.state.rope.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.rope.image} /></td> : <td className="no-td"></td>}
                         {this.state.rope.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=rope'>Add Rope/Hanging Kit</a></td> : <td className="list-td">{this.state.rope.name}</td>}
                         {this.state.rope.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.rope.price}</td>}
                         {this.state.rope.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.rope.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.rope.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="rope" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'rope' ? <MultiSelect index={index} tdName='Rope/Hanging Kit' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.rope.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Rope/Hanging Kit</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=rope'>Add Extra Rope/Hanging Kit</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Emergency</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Medical Kits </td>
                         {this.state.medical.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.medical.image} /></td> : <td className="no-td"></td>}
                         {this.state.medical.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=medical'>Add Medical Kits</a></td> : <td className="list-td">{this.state.medical.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=medical'>Add Extra Medical Kits</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Water Purifier </td>
                         {this.state.waterpurifier.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.waterpurifier.image} /></td> : <td className="no-td"></td>}
                         {this.state.waterpurifier.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=waterpurifier'>Add Water Purifier</a></td> : <td className="list-td">{this.state.waterpurifier.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=waterpurifier'>Add Extra Water Purifier</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">GPS </td>
                         {this.state.gps.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.gps.image} /></td> : <td className="no-td"></td>}
                         {this.state.gps.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=gps'>Add GPS</a></td> : <td className="list-td">{this.state.gps.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=gps'>Add Extra GPS</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    {/*<tr className="list-tr">
                         <td className="list-td">Satalite Phone </td>
                         {this.state.satalite.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.satalite.image} /></td> : <td className="no-td"></td>}
                         {this.state.satalite.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=satalite'>Add Satalite Phone</a></td> : <td className="list-td">{this.state.satalite.name}</td>}
                         {this.state.satalite.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.satalite.price}</td>}
                         {this.state.satalite.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.satalite.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.satalite.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="satalite" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>*/}

                    <tr className="tr-list-break"><td className="td-list-break">Misc Gear</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Misc</td>
                         {this.state.misc.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.misc.image} /></td> : <td className="no-td"></td>}
                         {this.state.misc.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=misc'>Add Misc Gear</a></td> : <td className="list-td">{this.state.misc.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/editproductsearch?type=misc'>Add Extra Misc Gear</a></td>
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

export default HuntingList