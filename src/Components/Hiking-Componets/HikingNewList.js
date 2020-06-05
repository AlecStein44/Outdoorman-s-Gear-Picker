import React from 'react'
import MultiSelect from '../multiSelect'

class HikingNewList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listName: '',
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
            hikingsock: {name: '', price: 0, image: '', link: ''},
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
            multiArr: {guns: [], multiPrice: 0},
            finalPrice: 0
        }
    }

    componentDidMount() {
        let priceFinal = 0
        let parseguns = JSON.parse(sessionStorage.getItem('guns'))
        let compassParse = JSON.parse(sessionStorage.getItem('compass'))
        let trekkingpolesParse = JSON.parse(sessionStorage.getItem('trekkingpoles'))
        let parseSling = JSON.parse(sessionStorage.getItem('sling'))
        let parseBipod = JSON.parse(sessionStorage.getItem('bipod'))
        let parseessentialsmisc = JSON.parse(sessionStorage.getItem('essentialsmisc'))
        let parseArchery = JSON.parse(sessionStorage.getItem('bow'))
        let parseArrow = JSON.parse(sessionStorage.getItem('arrow'))
        let parseArrhead = JSON.parse(sessionStorage.getItem('broadhead'))
        let parseArchtrekkingpoles = JSON.parse(sessionStorage.getItem('archtrekkingpoles'))
        let parseArchsling = JSON.parse(sessionStorage.getItem('archsling'))
        let parseArchbipod = JSON.parse(sessionStorage.getItem('archbipod'))
        let parseMiscarchery = JSON.parse(sessionStorage.getItem('miscarchery'))
        let hikinghatParse = JSON.parse(sessionStorage.getItem('hikinghat'))
        let ParseCovermask = JSON.parse(sessionStorage.getItem('covermask'))
        let Parsewindbreaker = JSON.parse(sessionStorage.getItem('windbreaker'))
        let hikingshirtParse = JSON.parse(sessionStorage.getItem('hikingshirt'))
        let hikingpantsParse = JSON.parse(sessionStorage.getItem('hikingpants'))
        let ParseGaiter = JSON.parse(sessionStorage.getItem('gaiter'))
        let Parsehikingsock = JSON.parse(sessionStorage.getItem('hikingsock'))
        let Parsehikingboot = JSON.parse(sessionStorage.getItem('hikingboot'))
        let Parsehikingbackpack = JSON.parse(sessionStorage.getItem('hikingbackpack'))
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
        let Parsefirestarter = JSON.parse(sessionStorage.getItem('firestarter'))
        let ParseMisc = JSON.parse(sessionStorage.getItem('misc'))
        let PraseMulti = JSON.parse(sessionStorage.getItem('multi'))

        if(sessionStorage.getItem('guns') !== null) {
            this.setState({
                guns: {name: parseguns.name, price: parseguns.price, image: parseguns.image, link: parseguns.link}
            })
            priceFinal = priceFinal + parseguns.price
        }

        if(sessionStorage.getItem('compass') !== null) {
            this.setState({
                compass: {name: compassParse.name, price: compassParse.price, image: compassParse.image, link: compassParse.link}
            })
            priceFinal = priceFinal + compassParse.price
        }

        if(sessionStorage.getItem('trekkingpoles') !== null) {
            this.setState({
                trekkingpoles: {name: trekkingpolesParse.name, price: trekkingpolesParse.price, image: trekkingpolesParse.image, link: trekkingpolesParse.link}
            })
            priceFinal = priceFinal + trekkingpolesParse.price
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

        if(sessionStorage.getItem('essentialsmisc') !== null) {
            this.setState({
                essentialsmisc: {name: parseessentialsmisc.name, price: parseessentialsmisc.price, image: parseessentialsmisc.image, link: parseessentialsmisc.link}
            })
            priceFinal = priceFinal + parseessentialsmisc.price
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

        if(sessionStorage.getItem('archtrekkingpoles') !== null) {
            this.setState({
                archtrekkingpoles: {name: parseArchtrekkingpoles.name, price: parseArchtrekkingpoles.price, image: parseArchtrekkingpoles.image, link: parseArchtrekkingpoles.link}
            })
            priceFinal = priceFinal + parseArchtrekkingpoles.price
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

        if(sessionStorage.getItem('hikinghat') !== null) {
            this.setState({
                hikinghat: {name: hikinghatParse.name, price: hikinghatParse.price, image: hikinghatParse.image, link: hikinghatParse.link}
            })
            priceFinal = priceFinal + hikinghatParse.price
        }

        if(sessionStorage.getItem('covermask') !== null) {
            this.setState({
                covermask: {name: ParseCovermask.name, price: ParseCovermask.price, image: ParseCovermask.image, link: ParseCovermask.link}
            })
            priceFinal = priceFinal + ParseCovermask.price
        }

        if(sessionStorage.getItem('windbreaker') !== null) {
            this.setState({
                windbreaker: {name: Parsewindbreaker.name, price: Parsewindbreaker.price, image: Parsewindbreaker.image, link: Parsewindbreaker.link}
            })
            priceFinal = priceFinal + Parsewindbreaker.price
        }

        if(sessionStorage.getItem('hikingshirt') !== null) {
            this.setState({
                hikingshirt: {name: hikingshirtParse.name, price: hikingshirtParse.price, image: hikingshirtParse.image, link: hikingshirtParse.link}
            })
            priceFinal = priceFinal + hikingshirtParse.price
        }

        if(sessionStorage.getItem('hikingpants') !== null) {
            this.setState({
                hikingpants: {name: hikingpantsParse.name, price: hikingpantsParse.price, image: hikingpantsParse.image, link: hikingpantsParse.link}
            })
            priceFinal = priceFinal + hikingpantsParse.price
        }

        if(sessionStorage.getItem('gaiter') !== null) {
            this.setState({
                gaiter: {name: ParseGaiter.name, price: ParseGaiter.price, image: ParseGaiter.image, link: ParseGaiter.link}
            })
            priceFinal = priceFinal + ParseGaiter.price
        }

        if(sessionStorage.getItem('hikingsock') !== null) {
            this.setState({
                hikingsock: {name: Parsehikingsock.name, price: Parsehikingsock.price, image: Parsehikingsock.image, link: Parsehikingsock.link}
            })
            priceFinal = priceFinal + Parsehikingsock.price
        }

        if(sessionStorage.getItem('hikingboot') !== null) {
            this.setState({
                hikingboot: {name: Parsehikingboot.name, price: Parsehikingboot.price, image: Parsehikingboot.image, link: Parsehikingboot.link}
            })
            priceFinal = priceFinal + Parsehikingboot.price
        }

        if(sessionStorage.getItem('hikingbackpack') !== null) {
            this.setState({
                hikingbackpack: {name: Parsehikingbackpack.name, price: Parsehikingbackpack.price, image: Parsehikingbackpack.image, link: Parsehikingbackpack.link}
            })
            priceFinal = priceFinal + Parsehikingbackpack.price
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

        if(sessionStorage.getItem('firestarter') !== null) {
            this.setState({
                firestarter: {name: Parsefirestarter.name, price: Parsefirestarter.price, image: Parsefirestarter.image, link: Parsefirestarter.link}
            })
            priceFinal = priceFinal + Parsefirestarter.price
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
                headlamp: this.state.headlamp,
                compass: this.state.compass,
                trekkingpoles: this.state.trekkingpoles,
                sling: this.state.sling,
                bipod: this.state.bipod,
                essentialsmisc: this.state.essentialsmisc,
                archery: this.state.archery,
                arrow: this.state.arrow,
                arrhead: this.state.arrhead,
                archtrekkingpoles: this.state.archtrekkingpoles,
                archsling: this.state.archsling,
                archbipod: this.state.archbipod,
                miscarchery: this.state.miscarchery,
                hikinghat: this.state.hikinghat,
                covermask: this.state.covermask,
                windbreaker: this.state.windbreaker,
                hikingshirt: this.state.hikingshirt,
                hikingpants: this.state.hikingpants,
                gaiter: this.state.gaiter,
                hikingsock: this.state.hikingsock,
                hikingboot: this.state.hikingboot,
                hikingbackpack: this.state.hikingbackpack,
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
                firestarter: this.state.firestarter,
                misc: this.state.misc,
                multiArr: this.state.multiArr,
                finalPrice: this.state.finalPrice
    }

            let convert = JSON.stringify(newObj)

            localStorage.setItem(`Hiking ${this.state.listName}`, convert)

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
                <h2 className="list-h2-topname">Hiking New List</h2>
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
                         {this.state.hikinghat.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=hikinghat'>Add Hiking Hat</a></td> : <td className="list-td">{this.state.hikinghat.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=hikinghat'>Add Extra Hiking Hat</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Windbreaker</td>
                         {this.state.windbreaker.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.windbreaker.image} /></td> : <td className="no-td"></td>}
                         {this.state.windbreaker.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=windbreaker'>Add Windbreakers</a></td> : <td className="list-td">{this.state.windbreaker.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=windbreaker'>Add Extra Windbreaker</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">hikingshirt</td>
                         {this.state.hikingshirt.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.hikingshirt.image} /></td> : <td className="no-td"></td>}
                         {this.state.hikingshirt.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=hikingshirt'>Add hikingshirt</a></td> : <td className="list-td">{this.state.hikingshirt.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=hikingshirt'>Add Extra hikingshirt</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Pants</td>
                         {this.state.hikingpants.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.hikingpants.image} /></td> : <td className="no-td"></td>}
                         {this.state.hikingpants.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=hikingpants'>Add Pants</a></td> : <td className="list-td">{this.state.hikingpants.name}</td>}
                         {this.state.hikingpants.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.hikingpants.price}</td>}
                         {this.state.hikingpants.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.hikingpants.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.hikingpants.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="hikingpants" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'hikingpants' ? <MultiSelect index={index} tdName='hikingpants' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.hikingpants.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Pants</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=hikingpants'>Add Extra Pants</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Socks</td>
                         {this.state.hikingsock.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.hikingsock.image} /></td> : <td className="no-td"></td>}
                         {this.state.hikingsock.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=hikingsock'>Add Socks</a></td> : <td className="list-td">{this.state.hikingsock.name}</td>}
                         {this.state.hikingsock.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.hikingsock.price}</td>}
                         {this.state.hikingsock.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.hikingsock.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.hikingsock.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="hikingsock" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'hikingsock' ? <MultiSelect index={index} tdName='Socks' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.hikingsock.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Socks</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=hikingsock'>Add Extra Socks</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Hiking Boots</td>
                         {this.state.hikingboot.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.hikingboot.image} /></td> : <td className="no-td"></td>}
                         {this.state.hikingboot.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=hikingboot'>Add Hiking Boots</a></td> : <td className="list-td">{this.state.hikingboot.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=hikingboot'>Add Extra Hiking Boots</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Packs/Containers</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Backpacks </td>
                         {this.state.hikingbackpack.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.hikingbackpack.image} /></td> : <td className="no-td"></td>}
                         {this.state.hikingbackpack.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=hikingbackpack'>Add Backpacks</a></td> : <td className="list-td">{this.state.hikingbackpack.name}</td>}
                         {this.state.hikingbackpack.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.hikingbackpack.price}</td>}
                         {this.state.hikingbackpack.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.hikingbackpack.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.hikingbackpack.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="hikingbackpack" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'hikingbackpack' ? <MultiSelect index={index} tdName='BackPacks' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.hikingbackpack.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra BackPacks</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=hikingbackpack'>Add Extra BackPacks</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Water Bladder/Container </td>
                         {this.state.bladder.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.bladder.image} /></td> : <td className="no-td"></td>}
                         {this.state.bladder.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=bladder'>Add Water Bladder/Container</a></td> : <td className="list-td">{this.state.bladder.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=bladder'>Add Extra Water Bladder/Container</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}



                    <tr className="tr-list-break"><td className="td-list-break">Essentials</td></tr>
                    <tr className="list-tr">
                         <td className="list-td" >Headlamp</td>
                         {this.state.headlamp.name.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.headlamp.image} /></td> : <td className="no-td"></td>}
                         {this.state.headlamp.name.length === 0 ? <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=headlamp'>Add Headlamp</a></td> : <td className="list-td">{this.state.headlamp.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=headlamp'>Add Extra Headlamp</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Compass</td>
                         {this.state.compass.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.compass.image} /></td> : <td className="no-td"></td>}
                         {this.state.compass.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=compass'>Add Compass</a></td> : <td className="list-td">{this.state.compass.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=compass'>Add Extra Compass</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Knives </td>
                         {this.state.knive.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.knive.image} /></td> : <td className="no-td"></td>}
                         {this.state.knive.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=knive'>Add Knives</a></td> : <td className="list-td">{this.state.knive.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=knive'>Add Extra Knives</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Trekking Poles</td>
                         {this.state.trekkingpoles.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.trekkingpoles.image} /></td> : <td className="no-td"></td>}
                         {this.state.trekkingpoles.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=trekkingpoles'>Add Trekking Poles</a></td> : <td className="list-td">{this.state.trekkingpoles.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=trekkingpoles'>Add Extra Trekking Poles</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Misc Essentials</td>
                         {this.state.essentialsmisc.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.essentialsmisc.image} /></td> : <td className="no-td"></td>}
                         {this.state.essentialsmisc.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=essentialsmisc'>Add Misc Essentials</a></td> : <td className="list-td">{this.state.essentialsmisc.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=essentialsmisc'>Add Extra Misc Essentials</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Emergency</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Medical Kits </td>
                         {this.state.medical.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.medical.image} /></td> : <td className="no-td"></td>}
                         {this.state.medical.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=medical'>Add Medical Kits</a></td> : <td className="list-td">{this.state.medical.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=medical'>Add Extra Medical Kits</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Water Purifier </td>
                         {this.state.waterpurifier.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.waterpurifier.image} /></td> : <td className="no-td"></td>}
                         {this.state.waterpurifier.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=waterpurifier'>Add Water Purifier</a></td> : <td className="list-td">{this.state.waterpurifier.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=waterpurifier'>Add Extra Water Purifier</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Fire Starter </td>
                         {this.state.firestarter.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.firestarter.image} /></td> : <td className="no-td"></td>}
                         {this.state.firestarter.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=firestarter'>Add Fire Starter</a></td> : <td className="list-td">{this.state.firestarter.name}</td>}
                         {this.state.firestarter.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.firestarter.price}</td>}
                         {this.state.firestarter.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.firestarter.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.firestarter.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="firestarter" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'firestarter' ? <MultiSelect index={index} tdName='Fire Starter' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.firestarter.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Fire Starter</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=firestarter'>Add Extra Fire Starter</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">GPS </td>
                         {this.state.gps.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.gps.image} /></td> : <td className="no-td"></td>}
                         {this.state.gps.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=gps'>Add GPS</a></td> : <td className="list-td">{this.state.gps.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=gps'>Add Extra GPS</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}

                    <tr className="tr-list-break"><td className="td-list-break">Misc Gear</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Misc</td>
                         {this.state.misc.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.misc.image} /></td> : <td className="no-td"></td>}
                         {this.state.misc.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=misc'>Add Misc Gear</a></td> : <td className="list-td">{this.state.misc.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/hikingproductsearch?type=misc'>Add Extra Misc Gear</a></td>
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

export default HikingNewList

//Number(this.state.tent.price) + Number(this.state.bedding.price) + Number(this.state.cookingstove.price) + Number(this.state.lantern.price) + Number(this.state.firstaid.price) + Number(this.state.firestarter.price) + Number(this.state.watercontainer.price) + Number(this.state.waterfilter.price)