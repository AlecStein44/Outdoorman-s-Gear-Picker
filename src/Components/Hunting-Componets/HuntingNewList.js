import React from 'react'
import MultiSelect from '../multiSelect'

class HuntingNewList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listName: '',
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
            multiArr: {guns: [], multiPrice: 0},
            finalPrice: 0
        }
    }

    componentDidMount() {
        let priceFinal = 0
        let parseguns = JSON.parse(sessionStorage.getItem('guns'))
        let ammoParse = JSON.parse(sessionStorage.getItem('ammo'))
        let scopeParse = JSON.parse(sessionStorage.getItem('scope'))
        let parseSling = JSON.parse(sessionStorage.getItem('sling'))
        let parseBipod = JSON.parse(sessionStorage.getItem('bipod'))
        let parseMiscfirearm = JSON.parse(sessionStorage.getItem('miscfirearm'))
        let parseArchery = JSON.parse(sessionStorage.getItem('bow'))
        let parseArrow = JSON.parse(sessionStorage.getItem('arrow'))
        let parseArrhead = JSON.parse(sessionStorage.getItem('broadhead'))
        let parseArchscope = JSON.parse(sessionStorage.getItem('archscope'))
        let parseArchsling = JSON.parse(sessionStorage.getItem('archsling'))
        let parseArchbipod = JSON.parse(sessionStorage.getItem('archbipod'))
        let parseMiscarchery = JSON.parse(sessionStorage.getItem('miscarchery'))
        let headwearParse = JSON.parse(sessionStorage.getItem('headwear'))
        let ParseCovermask = JSON.parse(sessionStorage.getItem('covermask'))
        let ParseJacket = JSON.parse(sessionStorage.getItem('jacket'))
        let shirtParse = JSON.parse(sessionStorage.getItem('shirt'))
        let pantsParse = JSON.parse(sessionStorage.getItem('pants'))
        let ParseGaiter = JSON.parse(sessionStorage.getItem('gaiter'))
        let ParseSock = JSON.parse(sessionStorage.getItem('sock'))
        let ParseBoot = JSON.parse(sessionStorage.getItem('boot'))
        let ParseBackpack = JSON.parse(sessionStorage.getItem('backpack'))
        let ParseBinocularholder = JSON.parse(sessionStorage.getItem('binocularholder'))
        let ParseBladder = JSON.parse(sessionStorage.getItem('bladder'))
        let binosParse = JSON.parse(sessionStorage.getItem('binos'))
        let ParseSpotting = JSON.parse(sessionStorage.getItem('spotting'))
        let rangefinderParse = JSON.parse(sessionStorage.getItem('rangefinder'))
        let Parseprocessing = JSON.parse(sessionStorage.getItem('processing'))
        let ParseKnive = JSON.parse(sessionStorage.getItem('knive'))
        let ParseReplacementblades = JSON.parse(sessionStorage.getItem('replacementblades'))
        let ParseSaw = JSON.parse(sessionStorage.getItem('saw'))
        let Parsesheer = JSON.parse(sessionStorage.getItem('sheer'))
        let ParseGamebag = JSON.parse(sessionStorage.getItem('gamebag'))
        let ParseGloves = JSON.parse(sessionStorage.getItem('gloves'))
        let ParseRope = JSON.parse(sessionStorage.getItem('rope'))
        let ParseMedical = JSON.parse(sessionStorage.getItem('medical'))
        let ParseWaterpurifier = JSON.parse(sessionStorage.getItem('waterpurifier'))
        let ParseGps = JSON.parse(sessionStorage.getItem('gps'))
        let ParseSatalite = JSON.parse(sessionStorage.getItem('satalite'))
        let ParseMisc = JSON.parse(sessionStorage.getItem('misc'))
        let PraseMulti = JSON.parse(sessionStorage.getItem('multi'))

        if(sessionStorage.getItem('guns') !== null) {
            this.setState({
                guns: {name: parseguns.name, price: parseguns.price, image: parseguns.image, link: parseguns.link}
            })
            priceFinal = priceFinal + parseguns.price
        }

        if(sessionStorage.getItem('ammo') !== null) {
            this.setState({
                ammo: {name: ammoParse.name, price: ammoParse.price, image: ammoParse.image, link: ammoParse.link}
            })
            priceFinal = priceFinal + ammoParse.price
        }

        if(sessionStorage.getItem('scope') !== null) {
            this.setState({
                scope: {name: scopeParse.name, price: scopeParse.price, image: scopeParse.image, link: scopeParse.link}
            })
            priceFinal = priceFinal + scopeParse.price
        }

        if(sessionStorage.getItem('sling') !== null) {
            this.setState({
                sling: {name: parseSling.name, price: parseSling.price, image: parseSling.image, link: parseSling.link}
            })
            priceFinal = priceFinal + parseSling.price
        }

        if(sessionStorage.getItem('bipod') !== null) {
            this.setState({
                bipod: {name: parseBipod.name, price: parseBipod.price, image: parseBipod.image, link: parseBipod.link}
            })
            priceFinal = priceFinal + parseBipod.price
        }

        if(sessionStorage.getItem('miscfirearm') !== null) {
            this.setState({
                miscfirearm: {name: parseMiscfirearm.name, price: parseMiscfirearm.price, image: parseMiscfirearm.image, link: parseMiscfirearm.link}
            })
            priceFinal = priceFinal + parseMiscfirearm.price
        }

        if(sessionStorage.getItem('bow') !== null) {
            this.setState({
                archery: {name: parseArchery.name, price: parseArchery.price, image: parseArchery.image, link: parseArchery.link}
            })
            priceFinal = priceFinal + parseArchery.price
        }

        if(sessionStorage.getItem('arrow') !== null) {
            this.setState({
                arrow: {name: parseArrow.name, price: parseArrow.price, image: parseArrow.image, link: parseArrow.link}
            })
            priceFinal = priceFinal + parseArrow.price
        }

        if(sessionStorage.getItem('broadhead') !== null) {
            this.setState({
                arrhead: {name: parseArrhead.name, price: parseArrhead.price, image: parseArrhead.image, link: parseArrhead.link}
            })
            priceFinal = priceFinal + parseArrhead.price
        }

        if(sessionStorage.getItem('archscope') !== null) {
            this.setState({
                archscope: {name: parseArchscope.name, price: parseArchscope.price, image: parseArchscope.image, link: parseArchscope.link}
            })
            priceFinal = priceFinal + parseArchscope.price
        }

        if(sessionStorage.getItem('archsling') !== null) {
            this.setState({
                archsling: {name: parseArchsling.name, price: parseArchsling.price, image: parseArchsling.image, link: parseArchsling.link}
            })
            priceFinal = priceFinal + parseArchsling.price
        }

        if(sessionStorage.getItem('archbipod') !== null) {
            this.setState({
                archbipod: {name: parseArchbipod.name, price: parseArchbipod.price, image: parseArchbipod.image, link: parseArchbipod.link}
            })
            priceFinal = priceFinal + parseArchbipod.price
        }

        if(sessionStorage.getItem('miscarchery') !== null) {
            this.setState({
                miscarchery: {name: parseMiscarchery.name, price: parseMiscarchery.price, image: parseMiscarchery.image, link: parseMiscarchery.link}
            })
            priceFinal = priceFinal + parseMiscarchery.price
        }

        if(sessionStorage.getItem('headwear') !== null) {
            this.setState({
                headwear: {name: headwearParse.name, price: headwearParse.price, image: headwearParse.image, link: headwearParse.link}
            })
            priceFinal = priceFinal + headwearParse.price
        }

        if(sessionStorage.getItem('covermask') !== null) {
            this.setState({
                covermask: {name: ParseCovermask.name, price: ParseCovermask.price, image: ParseCovermask.image, link: ParseCovermask.link}
            })
            priceFinal = priceFinal + ParseCovermask.price
        }

        if(sessionStorage.getItem('jacket') !== null) {
            this.setState({
                jacket: {name: ParseJacket.name, price: ParseJacket.price, image: ParseJacket.image, link: ParseJacket.link}
            })
            priceFinal = priceFinal + ParseJacket.price
        }

        if(sessionStorage.getItem('shirt') !== null) {
            this.setState({
                shirt: {name: shirtParse.name, price: shirtParse.price, image: shirtParse.image, link: shirtParse.link}
            })
            priceFinal = priceFinal + shirtParse.price
        }

        if(sessionStorage.getItem('pants') !== null) {
            this.setState({
                pants: {name: pantsParse.name, price: pantsParse.price, image: pantsParse.image, link: pantsParse.link}
            })
            priceFinal = priceFinal + pantsParse.price
        }

        if(sessionStorage.getItem('gaiter') !== null) {
            this.setState({
                gaiter: {name: ParseGaiter.name, price: ParseGaiter.price, image: ParseGaiter.image, link: ParseGaiter.link}
            })
            priceFinal = priceFinal + ParseGaiter.price
        }

        if(sessionStorage.getItem('sock') !== null) {
            this.setState({
                sock: {name: ParseSock.name, price: ParseSock.price, image: ParseSock.image, link: ParseSock.link}
            })
            priceFinal = priceFinal + ParseSock.price
        }

        if(sessionStorage.getItem('boot') !== null) {
            this.setState({
                boot: {name: ParseBoot.name, price: ParseBoot.price, image: ParseBoot.image, link: ParseBoot.link}
            })
            priceFinal = priceFinal + ParseBoot.price
        }

        if(sessionStorage.getItem('backpack') !== null) {
            this.setState({
                backpack: {name: ParseBackpack.name, price: ParseBackpack.price, image: ParseBackpack.image, link: ParseBackpack.link}
            })
            priceFinal = priceFinal + ParseBackpack.price
        }

        if(sessionStorage.getItem('binocularholder') !== null) {
            this.setState({
                binocularholder: {name: ParseBinocularholder.name, price: ParseBinocularholder.price, image: ParseBinocularholder.image, link: ParseBinocularholder.link}
            })
            priceFinal = priceFinal + ParseBinocularholder.price
        }

        if(sessionStorage.getItem('bladder') !== null) {
            this.setState({
                bladder: {name: ParseBladder.name, price: ParseBladder.price, image: ParseBladder.image, link: ParseBladder.link}
            })
            priceFinal = priceFinal + ParseBladder.price
        }

        if(sessionStorage.getItem('binos') !== null) {
            this.setState({
                binos: {name: binosParse.name, price: binosParse.price, image: binosParse.image, link: binosParse.link}
            })
            priceFinal = priceFinal + binosParse.price
        }

        if(sessionStorage.getItem('spotting') !== null) {
            this.setState({
                spotting: {name: ParseSpotting.name, price: ParseSpotting.price, image: ParseSpotting.image, link: ParseSpotting.link}
            })
            priceFinal = priceFinal + ParseSpotting.price
        }

        if(sessionStorage.getItem('rangefinder') !== null) {
            this.setState({
                rangefinder: {name: rangefinderParse.name, price: rangefinderParse.price, image: rangefinderParse.image, link: rangefinderParse.link}
            })
            priceFinal = priceFinal + rangefinderParse.price
        }

        if(sessionStorage.getItem('processing') !== null) {
            this.setState({
                processing: {name: Parseprocessing.name, price: Parseprocessing.price, image: Parseprocessing.image, link: Parseprocessing.link}
            })
            priceFinal = priceFinal + Parseprocessing.price
        }

        if(sessionStorage.getItem('knive') !== null) {
            this.setState({
                knive: {name: ParseKnive.name, price: ParseKnive.price, image: ParseKnive.image, link: ParseKnive.link}
            })
            priceFinal = priceFinal + ParseKnive.price
        }

        if(sessionStorage.getItem('replacementblades') !== null) {
            this.setState({
                replacementblades: {name: ParseReplacementblades.name, price: ParseReplacementblades.price, image: ParseReplacementblades.image, link: ParseReplacementblades.link}
            })
            priceFinal = priceFinal + ParseReplacementblades.price
        }

        if(sessionStorage.getItem('saw') !== null) {
            this.setState({
                saw: {name: ParseSaw.name, price: ParseSaw.price, image: ParseSaw.image, link: ParseSaw.link}
            })
            priceFinal = priceFinal + ParseSaw.price
        }

        if(sessionStorage.getItem('sheer') !== null) {
            this.setState({
                sheer: {name: Parsesheer.name, price: Parsesheer.price, image: Parsesheer.image, link: Parsesheer.link}
            })
            priceFinal = priceFinal + Parsesheer.price
        }

        if(sessionStorage.getItem('gamebag') !== null) {
            this.setState({
                gamebag: {name: ParseGamebag.name, price: ParseGamebag.price, image: ParseGamebag.image, link: ParseGamebag.link}
            })
            priceFinal = priceFinal + ParseGamebag.price
        }

        if(sessionStorage.getItem('gloves') !== null) {
            this.setState({
                gloves: {name: ParseGloves.name, price: ParseGloves.price, image: ParseGloves.image, link: ParseGloves.link}
            })
            priceFinal = priceFinal + ParseGloves.price
        }

        if(sessionStorage.getItem('rope') !== null) {
            this.setState({
                rope: {name: ParseRope.name, price: ParseRope.price, image: ParseRope.image, link: ParseRope.link}
            })
            priceFinal = priceFinal + ParseRope.price
        }

        if(sessionStorage.getItem('medical') !== null) {
            this.setState({
                medical: {name: ParseMedical.name, price: ParseMedical.price, image: ParseMedical.image, link: ParseMedical.link}
            })
            priceFinal = priceFinal + ParseMedical.price
        }

        if(sessionStorage.getItem('waterpurifier') !== null) {
            this.setState({
                waterpurifier: {name: ParseWaterpurifier.name, price: ParseWaterpurifier.price, image: ParseWaterpurifier.image, link: ParseWaterpurifier.link}
            })
            priceFinal = priceFinal + ParseWaterpurifier.price
        }

        if(sessionStorage.getItem('gps') !== null) {
            this.setState({
                gps: {name: ParseGps.name, price: ParseGps.price, image: ParseGps.image, link: ParseGps.link}
            })
            priceFinal = priceFinal + ParseGps.price
        }

        if(sessionStorage.getItem('satalite') !== null) {
            this.setState({
                satalite: {name: ParseSatalite.name, price: ParseSatalite.price, image: ParseSatalite.image, link: ParseSatalite.link}
            })
            priceFinal = priceFinal + ParseSatalite.price
        }

        if(sessionStorage.getItem('misc') !== null) {
            this.setState({
                misc: {name: ParseMisc.name, price: ParseMisc.price, image: ParseMisc.image, link: ParseMisc.link}
            })
            priceFinal = priceFinal + ParseMisc.price
        }

        if(sessionStorage.getItem('multi') !== null) {
            this.setState({
                multiArr: PraseMulti
            })
            console.log(PraseMulti)
            priceFinal = priceFinal + PraseMulti.multiPrice
        }

        this.setState({
            finalPrice: priceFinal
        })
    }

    handleSave() {
        if(this.state.listName.length !== 0) {
            let newObj = {
                listName: this.state.listName,
                guns: this.state.guns,
                ammo: this.state.ammo,
                scope: this.state.scope,
                sling: this.state.sling,
                bipod: this.state.bipod,
                miscfirearm: this.state.miscfirearm,
                archery: this.state.archery,
                arrow: this.state.arrow,
                arrhead: this.state.arrhead,
                archscope: this.state.archscope,
                archsling: this.state.archsling,
                archbipod: this.state.archbipod,
                miscarchery: this.state.miscarchery,
                headwear: this.state.headwear,
                covermask: this.state.covermask,
                jacket: this.state.jacket,
                shirt: this.state.shirt,
                pants: this.state.pants,
                gaiter: this.state.gaiter,
                sock: this.state.sock,
                boot: this.state.boot,
                backpack: this.state.backpack,
                binocularholder: this.state.binocularholder,
                bladder: this.state.bladder,
                binos: this.state.binos,
                spotting: this.state.spotting,
                rangefinder: this.state.rangefinder,
                processing: this.state.processing,
                knive: this.state.knive,
                replacementblades: this.state.replacementblades,
                saw: this.state.saw,
                sheer: this.state.sheer,
                gamebag: this.state.gamebag,
                gloves: this.state.gloves,
                rope: this.state.rope,
                medical: this.state.medical,
                waterpurifier: this.state.waterpurifier,
                gps: this.state.gps,
                satalite: this.state.satalite,
                misc: this.state.misc,
                multiArr: this.state.multiArr,
                finalPrice: this.state.finalPrice
    }

            let convert = JSON.stringify(newObj)

            localStorage.setItem(`Hunting ${this.state.listName}`, convert)

            window.location.assign('https://outdoorgearpicker.now.sh/')
        } else {
            alert('You need to add a List name')
        }
    }

    handleDelete(e) {
        if(isNaN(e.target.value) === false) {
            let deleteObj = this.state.multiArr
            let minusPrice = deleteObj.guns[e.target.value].price
            deleteObj.guns.splice(e.target.value , 1);
            deleteObj.multiPrice = deleteObj.multiPrice - minusPrice
            let donePrice = Number(this.state.finalPrice) - Number(minusPrice)
            console.log(deleteObj)
            this.setState({
                multiArr: deleteObj,
                finalPrice: Number(donePrice)
            })
            sessionStorage.setItem('multi', JSON.stringify(deleteObj))
        } else {
            let name = e.target.value

            let num = this.state.finalPrice

            sessionStorage.removeItem(name)

            this.setState({
                [name]: {name: '', price: 0, image: '', link: ''},
                finalPrice:  Number(num) - Number(this.state[name].price)
            })
        }
    }

    buyNow(e) {
        window.location.assign(e.target.value)
        //console.log(e.target.value)
    }
    
    render() {
        return(
            <main className="main-class">
                <h2 className="list-h2-topname">Hunting New List</h2>
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
                         {this.state.guns.name.length === 0 ? <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=GUNS'>Add Firearm</a></td> : <td className="list-td">{this.state.guns.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=GUNS'>Add Extra Firearm</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Ammo</td>
                         {this.state.ammo.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.ammo.image} /></td> : <td className="no-td"></td>}
                         {this.state.ammo.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=AMMO'>Add Ammo</a></td> : <td className="list-td">{this.state.ammo.name}</td>}
                         {this.state.ammo.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.ammo.price}</td>}
                         {this.state.ammo.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.ammo.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.ammo.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="ammo" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'ammo' ? <MultiSelect index={index} tdName='Ammo' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.ammo.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Ammo</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=AMMO'>Add Extra Ammo</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Scope</td>
                         {this.state.scope.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.scope.image} /></td> : <td className="no-td"></td>}
                         {this.state.scope.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=scope'>Add Scope</a></td> : <td className="list-td">{this.state.scope.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=scope'>Add Extra Scope</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Sling</td>
                         {this.state.sling.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.sling.image} /></td> : <td className="no-td"></td>}
                         {this.state.sling.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=sling'>Add Sling</a></td> : <td className="list-td">{this.state.sling.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=sling'>Add Extra Sling</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Bipod</td>
                         {this.state.bipod.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.bipod.image} /></td> : <td className="no-td"></td>}
                         {this.state.bipod.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=bipod'>Add Bipod</a></td> : <td className="list-td">{this.state.bipod.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=bipod'>Add Extra Bipod</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Misc Firearm Parts</td>
                         {this.state.miscfirearm.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.miscfirearm.image} /></td> : <td className="no-td"></td>}
                         {this.state.miscfirearm.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=miscfirearm'>Add Firearm Parts</a></td> : <td className="list-td">{this.state.miscfirearm.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=miscfirearm'>Add Extra Misc Firearm Parts</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Archery</td></tr>
                    <tr className="list-tr">
                         <td className="list-td" >Bow</td>
                         {this.state.archery.name.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.archery.image} /></td> : <td className="no-td"></td>}
                         {this.state.archery.name.length === 0 ? <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=bow'>Add Archery</a></td> : <td className="list-td">{this.state.archery.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=bow'>Add Extra Bow</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Arrow</td>
                         {this.state.arrow.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.arrow.image} /></td> : <td className="no-td"></td>}
                         {this.state.arrow.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=arrow'>Add Arrow</a></td> : <td className="list-td">{this.state.arrow.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=arrow'>Add Extra Arrow</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Arrow Head</td>
                         {this.state.arrhead.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.arrhead.image} /></td> : <td className="no-td"></td>}
                         {this.state.arrhead.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=broadhead'>Add Arrow Head</a></td> : <td className="list-td">{this.state.arrhead.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=broadhead'>Add Extra Arrow Heads</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    {/*<tr className="list-tr">
                         <td className="list-td">Scope</td>
                         {this.state.archscope.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.archscope.image} /></td> : <td className="no-td"></td>}
                         {this.state.archscope.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=scope'>Add Scope</a></td> : <td className="list-td">{this.state.archscope.name}</td>}
                         {this.state.archscope.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.archscope.price}</td>}
                         {this.state.archscope.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.archscope.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.archscope.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="archscope" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    <tr className="list-tr">
                         <td className="list-td">Slings</td>
                         {this.state.archsling.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.archsling.image} /></td> : <td className="no-td"></td>}
                         {this.state.archsling.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=scope'>Add Slings</a></td> : <td className="list-td">{this.state.archsling.name}</td>}
                         {this.state.archsling.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.archsling.price}</td>}
                         {this.state.archsling.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.archsling.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.archsling.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="archsling" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    <tr className="list-tr">
                         <td className="list-td">bipod</td>
                         {this.state.archbipod.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.archbipod.image} /></td> : <td className="no-td"></td>}
                         {this.state.archbipod.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=archbipod'>Add bipod</a></td> : <td className="list-td">{this.state.archbipod.name}</td>}
                         {this.state.archbipod.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.scope.price}</td>}
                         {this.state.archbipod.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.archbipod.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.archbipod.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="archbipod" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>*/}
                    <tr className="list-tr">
                         <td className="list-td">Misc Archery Parts</td>
                         {this.state.miscarchery.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.miscarchery.image} /></td> : <td className="no-td"></td>}
                         {this.state.miscarchery.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=miscarchery'>Add Archery Parts</a></td> : <td className="list-td">{this.state.miscarchery.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=miscarchery'>Add Extra Misc Archery Parts</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}

                    <tr className="tr-list-break"><td className="td-list-break">Clothing</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">HeadWear</td>
                         {this.state.headwear.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.headwear.image} /></td> : <td className="no-td"></td>}
                         {this.state.headwear.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=headwear'>Add HeadWear</a></td> : <td className="list-td">{this.state.headwear.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=headwear'>Add Extra HeadWear</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Face Covers/Masks</td>
                         {this.state.covermask.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.covermask.image} /></td> : <td className="no-td"></td>}
                         {this.state.covermask.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=covermask'>Add Face Covers/Masks</a></td> : <td className="list-td">{this.state.covermask.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=covermask'>Add Extra Face Covers/Masks</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Jackets/Heavy Clothes</td>
                         {this.state.jacket.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.jacket.image} /></td> : <td className="no-td"></td>}
                         {this.state.jacket.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=jacket'>Add Jackets</a></td> : <td className="list-td">{this.state.jacket.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=jacket'>Add Extra Jackets/Heavy Clothes</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Shirt</td>
                         {this.state.shirt.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.shirt.image} /></td> : <td className="no-td"></td>}
                         {this.state.shirt.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=shirt'>Add Shirt</a></td> : <td className="list-td">{this.state.shirt.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=shirt'>Add Extra Shirt</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Pants</td>
                         {this.state.pants.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.pants.image} /></td> : <td className="no-td"></td>}
                         {this.state.pants.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=pants'>Add Pants</a></td> : <td className="list-td">{this.state.pants.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=pants'>Add Extra Pants</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Gaiter</td>
                         {this.state.gaiter.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.gaiter.image} /></td> : <td className="no-td"></td>}
                         {this.state.gaiter.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=gaiter'>Add Gaiter</a></td> : <td className="list-td">{this.state.gaiter.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=gaiter'>Add Extra Gaiter</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Socks</td>
                         {this.state.sock.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.sock.image} /></td> : <td className="no-td"></td>}
                         {this.state.sock.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=sock'>Add Socks</a></td> : <td className="list-td">{this.state.sock.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=sock'>Add Extra Socks</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Boots</td>
                         {this.state.boot.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.boot.image} /></td> : <td className="no-td"></td>}
                         {this.state.boot.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=boot'>Add Boots</a></td> : <td className="list-td">{this.state.boot.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=boot'>Add Extra Boots</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Packs/Containers</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Backpacks </td>
                         {this.state.backpack.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.backpack.image} /></td> : <td className="no-td"></td>}
                         {this.state.backpack.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=backpack'>Add Backpacks</a></td> : <td className="list-td">{this.state.backpack.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=backpack'>Add Extra BackPacks</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Binocular Holder </td>
                         {this.state.binocularholder.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.binocularholder.image} /></td> : <td className="no-td"></td>}
                         {this.state.binocularholder.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=binocularholder'>Add Binocular Holder</a></td> : <td className="list-td">{this.state.binocularholder.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=binocularholder'>Add Extra Binocular Holder</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Water Bladder/Container </td>
                         {this.state.bladder.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.bladder.image} /></td> : <td className="no-td"></td>}
                         {this.state.bladder.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=bladder'>Add Water Bladder/Container</a></td> : <td className="list-td">{this.state.bladder.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=bladder'>Add Extra Water Bladder/Container</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Optics</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Binoculars</td>
                         {this.state.binos.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.binos.image} /></td> : <td className="no-td"></td>}
                         {this.state.binos.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=binos'>Add Binoculars</a></td> : <td className="list-td">{this.state.binos.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=binos'>Add Extra Binoculars</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Spotting Scopes</td>
                         {this.state.spotting.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.spotting.image} /></td> : <td className="no-td"></td>}
                         {this.state.spotting.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=spotting'>Add Spotting Scopes</a></td> : <td className="list-td">{this.state.spotting.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=spotting'>Add Extra Spotting Scopes</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Rangefinder</td>
                         {this.state.rangefinder.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.rangefinder.image} /></td> : <td className="no-td"></td>}
                         {this.state.rangefinder.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=rangefinder'>Add Rangefinder</a></td> : <td className="list-td">{this.state.rangefinder.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=rangefinder'>Add Extra Rangefinder</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    


                    <tr className="tr-list-break"><td className="td-list-break">Field Care</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">processing Kits </td>
                         {this.state.processing.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.processing.image} /></td> : <td className="no-td"></td>}
                         {this.state.processing.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=processing'>Add processing Kits</a></td> : <td className="list-td">{this.state.processing.name}</td>}
                         {this.state.processing.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.processing.price}</td>}
                         {this.state.processing.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.processing.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.processing.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="roccesing" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'processing' ? <MultiSelect index={index} tdName='processing Kits' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.processing.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra processing Kits</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=processing'>Add Extra processing Kits</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Knives </td>
                         {this.state.knive.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.knive.image} /></td> : <td className="no-td"></td>}
                         {this.state.knive.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=knive'>Add Knives</a></td> : <td className="list-td">{this.state.knive.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=knive'>Add Extra Knives</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Replacement Blades </td>
                         {this.state.replacementblades.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.replacementblades.image} /></td> : <td className="no-td"></td>}
                         {this.state.replacementblades.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=replacementblades'>Add Replacement Blades</a></td> : <td className="list-td">{this.state.replacementblades.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=replacementblades'>Add Extra Replacement Blades</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Saw </td>
                         {this.state.saw.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.saw.image} /></td> : <td className="no-td"></td>}
                         {this.state.saw.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=saw'>Add Saw</a></td> : <td className="list-td">{this.state.saw.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=saw'>Add Extra Saw</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Shears </td>
                         {this.state.sheer.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.sheer.image} /></td> : <td className="no-td"></td>}
                         {this.state.sheer.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=sheer'>Add Sheer</a></td> : <td className="list-td">{this.state.sheer.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=sheer'>Add Extra Shears</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Game Bags </td>
                         {this.state.gamebag.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.gamebag.image} /></td> : <td className="no-td"></td>}
                         {this.state.gamebag.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=gamebag'>Add Game Bags</a></td> : <td className="list-td">{this.state.gamebag.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=gamebag'>Add Extra Game Bags</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Gloves </td>
                         {this.state.gloves.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.gloves.image} /></td> : <td className="no-td"></td>}
                         {this.state.gloves.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=gloves'>Add Gloves</a></td> : <td className="list-td">{this.state.gloves.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=gloves'>Add Extra Gloves</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Rope/Hanging Kit </td>
                         {this.state.rope.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.rope.image} /></td> : <td className="no-td"></td>}
                         {this.state.rope.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=rope'>Add Rope/Hanging Kit</a></td> : <td className="list-td">{this.state.rope.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=rope'>Add Extra Rope/Hanging Kit</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Emergency</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Medical Kits </td>
                         {this.state.medical.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.medical.image} /></td> : <td className="no-td"></td>}
                         {this.state.medical.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=medical'>Add Medical Kits</a></td> : <td className="list-td">{this.state.medical.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=medical'>Add Extra Medical Kits</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Water Purifier </td>
                         {this.state.waterpurifier.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.waterpurifier.image} /></td> : <td className="no-td"></td>}
                         {this.state.waterpurifier.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=waterpurifier'>Add Water Purifier</a></td> : <td className="list-td">{this.state.waterpurifier.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=waterpurifier'>Add Extra Water Purifier</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">GPS </td>
                         {this.state.gps.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.gps.image} /></td> : <td className="no-td"></td>}
                         {this.state.gps.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=gps'>Add GPS</a></td> : <td className="list-td">{this.state.gps.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=gps'>Add Extra GPS</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    {/*<tr className="list-tr">
                         <td className="list-td">Satalite Phone </td>
                         {this.state.satalite.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.satalite.image} /></td> : <td className="no-td"></td>}
                         {this.state.satalite.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=satalite'>Add Satalite Phone</a></td> : <td className="list-td">{this.state.satalite.name}</td>}
                         {this.state.satalite.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.satalite.price}</td>}
                         {this.state.satalite.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.satalite.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.satalite.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="satalite" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>*/}

                    <tr className="tr-list-break"><td className="td-list-break">Misc Gear</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Misc</td>
                         {this.state.misc.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.misc.image} /></td> : <td className="no-td"></td>}
                         {this.state.misc.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=misc'>Add Misc Gear</a></td> : <td className="list-td">{this.state.misc.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/productsearch?type=misc'>Add Extra Misc Gear</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="list-tr-price">
                         <th className="list-th"><input className="newlist-input" type="text" onChange={e => this.setState({listName: e.target.value})} /><button className="newlist-save" onClick={this.handleSave.bind(this)}>Save List</button></th>
                         <th className="list-th"></th>
                         <th className="list-th"></th>
                         <th className="list-th" >Final Price ${this.state.finalPrice.toFixed(2)}</th>
                    </tr>
               </table>
            </main>
        )
    }
}

export default HuntingNewList

//Number(this.state.guns.price) + Number(this.state.ammo.price) + Number(this.state.scope.name.price) + Number(this.state.headwear.name.price) + Number(this.state.shirt.name.price) + Number(this.state.pants.name.price) + Number(this.state.binos.price) + Number(this.state.rangefinder.price)