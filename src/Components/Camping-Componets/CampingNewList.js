import React from 'react'
import MultiSelect from '../multiSelect'

class CampingNewList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listName: '',
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
            firestarter: {name: '', price: 0, image: '', link: ''},
            misc: {name: '', price: 0, image: '', link: ''},
            multiArr: {guns: [], multiPrice: 0},
            finalPrice: 0
        }
    }

    componentDidMount() {
        let priceFinal = 0
        let parseguns = JSON.parse(sessionStorage.getItem('guns'))
        let airpumpParse = JSON.parse(sessionStorage.getItem('airpump'))
        let coolerParse = JSON.parse(sessionStorage.getItem('cooler'))
        let parsesleepingcot = JSON.parse(sessionStorage.getItem('sleepingcot'))
        let parsethermos = JSON.parse(sessionStorage.getItem('thermos'))
        let parsecookingmisc = JSON.parse(sessionStorage.getItem('cookingmisc'))
        let parsestove = JSON.parse(sessionStorage.getItem('Stove'))
        let parselighter = JSON.parse(sessionStorage.getItem('lighter'))
        let parsecharcoal = JSON.parse(sessionStorage.getItem('charcoal'))
        let parseArchcooler = JSON.parse(sessionStorage.getItem('archcooler'))
        let parseArchsleepingcot = JSON.parse(sessionStorage.getItem('archsleepingcot'))
        let parseArchthermos = JSON.parse(sessionStorage.getItem('archthermos'))
        let parseMiscstove = JSON.parse(sessionStorage.getItem('miscstove'))
        let tentParse = JSON.parse(sessionStorage.getItem('tent'))
        let Parsepropane = JSON.parse(sessionStorage.getItem('propane'))
        let Parsetarp = JSON.parse(sessionStorage.getItem('tarp'))
        let stakesParse = JSON.parse(sessionStorage.getItem('stakes'))
        let shadetarpParse = JSON.parse(sessionStorage.getItem('shadetarp'))
        let ParseGaiter = JSON.parse(sessionStorage.getItem('gaiter'))
        let Parseaxe = JSON.parse(sessionStorage.getItem('axe'))
        let Parsehammer = JSON.parse(sessionStorage.getItem('hammer'))
        let Parsesleepingbag = JSON.parse(sessionStorage.getItem('sleepingbag'))
        let ParseBinocularholder = JSON.parse(sessionStorage.getItem('binocularholder'))
        let Parsepillow = JSON.parse(sessionStorage.getItem('pillow'))
        let binosParse = JSON.parse(sessionStorage.getItem('binos'))
        let ParseSpotting = JSON.parse(sessionStorage.getItem('spotting'))
        let rangefinderParse = JSON.parse(sessionStorage.getItem('rangefinder'))
        let Parseprocessing = JSON.parse(sessionStorage.getItem('processing'))
        let Parsewatercontainer = JSON.parse(sessionStorage.getItem('watercontainer'))
        let ParseReplacementblades = JSON.parse(sessionStorage.getItem('replacementblades'))
        let ParseSaw = JSON.parse(sessionStorage.getItem('saw'))
        let Parsesheer = JSON.parse(sessionStorage.getItem('sheer'))
        let ParseGamebag = JSON.parse(sessionStorage.getItem('gamebag'))
        let ParseGloves = JSON.parse(sessionStorage.getItem('gloves'))
        let Parselantern = JSON.parse(sessionStorage.getItem('lantern'))
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

        if(sessionStorage.getItem('airpump') !== null) {
            this.setState({
                airpump: {name: airpumpParse.name, price: airpumpParse.price, image: airpumpParse.image, link: airpumpParse.link}
            })
            priceFinal = priceFinal + airpumpParse.price
        }

        if(sessionStorage.getItem('cooler') !== null) {
            this.setState({
                cooler: {name: coolerParse.name, price: coolerParse.price, image: coolerParse.image, link: coolerParse.link}
            })
            priceFinal = priceFinal + coolerParse.price
        }

        if(sessionStorage.getItem('sleepingcot') !== null) {
            this.setState({
                sleepingcot: {name: parsesleepingcot.name, price: parsesleepingcot.price, image: parsesleepingcot.image, link: parsesleepingcot.link}
            })
            priceFinal = priceFinal + parsesleepingcot.price
        }

        if(sessionStorage.getItem('thermos') !== null) {
            this.setState({
                thermos: {name: parsethermos.name, price: parsethermos.price, image: parsethermos.image, link: parsethermos.link}
            })
            priceFinal = priceFinal + parsethermos.price
        }

        if(sessionStorage.getItem('cookingmisc') !== null) {
            this.setState({
                cookingmisc: {name: parsecookingmisc.name, price: parsecookingmisc.price, image: parsecookingmisc.image, link: parsecookingmisc.link}
            })
            priceFinal = priceFinal + parsecookingmisc.price
        }

        if(sessionStorage.getItem('Stove') !== null) {
            this.setState({
                stove: {name: parsestove.name, price: parsestove.price, image: parsestove.image, link: parsestove.link}
            })
            priceFinal = priceFinal + parsestove.price
        }

        if(sessionStorage.getItem('lighter') !== null) {
            this.setState({
                lighter: {name: parselighter.name, price: parselighter.price, image: parselighter.image, link: parselighter.link}
            })
            priceFinal = priceFinal + parselighter.price
        }

        if(sessionStorage.getItem('charcoal') !== null) {
            this.setState({
                charcoal: {name: parsecharcoal.name, price: parsecharcoal.price, image: parsecharcoal.image, link: parsecharcoal.link}
            })
            priceFinal = priceFinal + parsecharcoal.price
        }

        if(sessionStorage.getItem('archcooler') !== null) {
            this.setState({
                archcooler: {name: parseArchcooler.name, price: parseArchcooler.price, image: parseArchcooler.image, link: parseArchcooler.link}
            })
            priceFinal = priceFinal + parseArchcooler.price
        }

        if(sessionStorage.getItem('archsleepingcot') !== null) {
            this.setState({
                archsleepingcot: {name: parseArchsleepingcot.name, price: parseArchsleepingcot.price, image: parseArchsleepingcot.image, link: parseArchsleepingcot.link}
            })
            priceFinal = priceFinal + parseArchsleepingcot.price
        }

        if(sessionStorage.getItem('archthermos') !== null) {
            this.setState({
                archthermos: {name: parseArchthermos.name, price: parseArchthermos.price, image: parseArchthermos.image, link: parseArchthermos.link}
            })
            priceFinal = priceFinal + parseArchthermos.price
        }

        if(sessionStorage.getItem('miscstove') !== null) {
            this.setState({
                miscstove: {name: parseMiscstove.name, price: parseMiscstove.price, image: parseMiscstove.image, link: parseMiscstove.link}
            })
            priceFinal = priceFinal + parseMiscstove.price
        }

        if(sessionStorage.getItem('tent') !== null) {
            this.setState({
                tent: {name: tentParse.name, price: tentParse.price, image: tentParse.image, link: tentParse.link}
            })
            priceFinal = priceFinal + tentParse.price
        }

        if(sessionStorage.getItem('propane') !== null) {
            this.setState({
                propane: {name: Parsepropane.name, price: Parsepropane.price, image: Parsepropane.image, link: Parsepropane.link}
            })
            priceFinal = priceFinal + Parsepropane.price
        }

        if(sessionStorage.getItem('tarp') !== null) {
            this.setState({
                tarp: {name: Parsetarp.name, price: Parsetarp.price, image: Parsetarp.image, link: Parsetarp.link}
            })
            priceFinal = priceFinal + Parsetarp.price
        }

        if(sessionStorage.getItem('stakes') !== null) {
            this.setState({
                stakes: {name: stakesParse.name, price: stakesParse.price, image: stakesParse.image, link: stakesParse.link}
            })
            priceFinal = priceFinal + stakesParse.price
        }

        if(sessionStorage.getItem('shadetarp') !== null) {
            this.setState({
                shadetarp: {name: shadetarpParse.name, price: shadetarpParse.price, image: shadetarpParse.image, link: shadetarpParse.link}
            })
            priceFinal = priceFinal + shadetarpParse.price
        }

        if(sessionStorage.getItem('gaiter') !== null) {
            this.setState({
                gaiter: {name: ParseGaiter.name, price: ParseGaiter.price, image: ParseGaiter.image, link: ParseGaiter.link}
            })
            priceFinal = priceFinal + ParseGaiter.price
        }

        if(sessionStorage.getItem('axe') !== null) {
            this.setState({
                axe: {name: Parseaxe.name, price: Parseaxe.price, image: Parseaxe.image, link: Parseaxe.link}
            })
            priceFinal = priceFinal + Parseaxe.price
        }

        if(sessionStorage.getItem('hammer') !== null) {
            this.setState({
                hammer: {name: Parsehammer.name, price: Parsehammer.price, image: Parsehammer.image, link: Parsehammer.link}
            })
            priceFinal = priceFinal + Parsehammer.price
        }

        if(sessionStorage.getItem('sleepingbag') !== null) {
            this.setState({
                sleepingbag: {name: Parsesleepingbag.name, price: Parsesleepingbag.price, image: Parsesleepingbag.image, link: Parsesleepingbag.link}
            })
            priceFinal = priceFinal + Parsesleepingbag.price
        }

        if(sessionStorage.getItem('binocularholder') !== null) {
            this.setState({
                binocularholder: {name: ParseBinocularholder.name, price: ParseBinocularholder.price, image: ParseBinocularholder.image, link: ParseBinocularholder.link}
            })
            priceFinal = priceFinal + ParseBinocularholder.price
        }

        if(sessionStorage.getItem('pillow') !== null) {
            this.setState({
                pillow: {name: Parsepillow.name, price: Parsepillow.price, image: Parsepillow.image, link: Parsepillow.link}
            })
            priceFinal = priceFinal + Parsepillow.price
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

        if(sessionStorage.getItem('watercontainer') !== null) {
            this.setState({
                watercontainer: {name: Parsewatercontainer.name, price: Parsewatercontainer.price, image: Parsewatercontainer.image, link: Parsewatercontainer.link}
            })
            priceFinal = priceFinal + Parsewatercontainer.price
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

        if(sessionStorage.getItem('lantern') !== null) {
            this.setState({
                lantern: {name: Parselantern.name, price: Parselantern.price, image: Parselantern.image, link: Parselantern.link}
            })
            priceFinal = priceFinal + Parselantern.price
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
                airmattress: this.state.airmattress,
                airpump: this.state.airpump,
                cooler: this.state.cooler,
                sleepingcot: this.state.sleepingcot,
                thermos: this.state.thermos,
                cookingmisc: this.state.cookingmisc,
                stove: this.state.stove,
                lighter: this.state.lighter,
                charcoal: this.state.charcoal,
                archcooler: this.state.archcooler,
                archsleepingcot: this.state.archsleepingcot,
                archthermos: this.state.archthermos,
                miscstove: this.state.miscstove,
                tent: this.state.tent,
                propane: this.state.propane,
                tarp: this.state.tarp,
                stakes: this.state.stakes,
                shadetarp: this.state.shadetarp,
                gaiter: this.state.gaiter,
                axe: this.state.axe,
                hammer: this.state.hammer,
                sleepingbag: this.state.sleepingbag,
                binocularholder: this.state.binocularholder,
                pillow: this.state.pillow,
                binos: this.state.binos,
                spotting: this.state.spotting,
                rangefinder: this.state.rangefinder,
                processing: this.state.processing,
                watercontainer: this.state.watercontainer,
                replacementblades: this.state.replacementblades,
                saw: this.state.saw,
                sheer: this.state.sheer,
                gamebag: this.state.gamebag,
                gloves: this.state.gloves,
                lantern: this.state.lantern,
                medical: this.state.medical,
                waterpurifier: this.state.waterpurifier,
                gps: this.state.gps,
                firestarter: this.state.firestarter,
                misc: this.state.misc,
                multiArr: this.state.multiArr,
                finalPrice: this.state.finalPrice
    }

            let convert = JSON.stringify(newObj)

            localStorage.setItem(`Camping ${this.state.listName}`, convert)

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
                <h2 className="list-h2-topname">Camping New List</h2>
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
                         {this.state.tent.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=tent'>Add Tent</a></td> : <td className="list-td">{this.state.tent.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=tent'>Add Extra Tent</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Tarp</td>
                         {this.state.tarp.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.tarp.image} /></td> : <td className="no-td"></td>}
                         {this.state.tarp.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=tarp'>Add Tarp</a></td> : <td className="list-td">{this.state.tarp.name}</td>}
                         {this.state.tarp.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.tarp.price}</td>}
                         {this.state.tarp.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.tarp.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.tarp.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="tarp" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'tarp' ? <MultiSelect index={index} tdName='tarp' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.tarp.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Tarp</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=tarp'>Add Extra tarp</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Stakes</td>
                         {this.state.stakes.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.stakes.image} /></td> : <td className="no-td"></td>}
                         {this.state.stakes.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=stakes'>Add Stakes</a></td> : <td className="list-td">{this.state.stakes.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=stakes'>Add Extra Stakes</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Shade Tarp</td>
                         {this.state.shadetarp.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.shadetarp.image} /></td> : <td className="no-td"></td>}
                         {this.state.shadetarp.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=shadetarp'>Add Shade Tarp</a></td> : <td className="list-td">{this.state.shadetarp.name}</td>}
                         {this.state.shadetarp.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.shadetarp.price}</td>}
                         {this.state.shadetarp.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.shadetarp.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.shadetarp.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="shadetarp" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'shadetarp' ? <MultiSelect index={index} tdName='shadetarp' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.shadetarp.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Shade Tarp</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=shadetarp'>Add Extra Shade Tarp</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Axe</td>
                         {this.state.axe.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.axe.image} /></td> : <td className="no-td"></td>}
                         {this.state.axe.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=axe'>Add Axe</a></td> : <td className="list-td">{this.state.axe.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=axe'>Add Extra Axe</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Hammer</td>
                         {this.state.hammer.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.hammer.image} /></td> : <td className="no-td"></td>}
                         {this.state.hammer.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=hammer'>Add Hammer</a></td> : <td className="list-td">{this.state.hammer.name}</td>}
                         {this.state.hammer.name.length === 0 ? <td className="no-td"></td> : <td className="list-td">${this.state.hammer.price}</td>}
                         {this.state.hammer.name.length !== 0 ? <td className="list-td"><button className="buybutton" onClick={this.buyNow.bind(this)} value={this.state.hammer.link}>Buy Now!</button></td> : <td className="no-td"></td>}
                         {this.state.hammer.name.length !== 0 ? <td className="list-td"><button className="list-delete" value="hammer" onClick={this.handleDelete.bind(this)}>X</button></td> : <td className="no-td"></td>}
                    </tr>
                    {this.state.multiArr.guns !== null ? this.state.multiArr.guns.map((data, index) => {
                        return(data.type === 'hammer' ? <MultiSelect index={index} tdName='Hammer' data={data} handleDelete={this.handleDelete.bind(this)} buyNow={this.buyNow} value={index} /> : null )
                    }) : null}
                    {this.state.hammer.name.length !== 0 ? 
                          <tr className="list-tr">
                          <td className="list-td" >Add Extra Hammer</td>
                          <td className="no-td"></td>
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=hammer'>Add Extra Hammer</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Bedding</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Sleeping Bag </td>
                         {this.state.sleepingbag.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.sleepingbag.image} /></td> : <td className="no-td"></td>}
                         {this.state.sleepingbag.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=sleepingbag'>Add Sleeping Bag</a></td> : <td className="list-td">{this.state.sleepingbag.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=sleepingbag'>Add Extra Sleeping Bag</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Pillow </td>
                         {this.state.pillow.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.pillow.image} /></td> : <td className="no-td"></td>}
                         {this.state.pillow.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=pillow'>Add Pillow</a></td> : <td className="list-td">{this.state.pillow.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=pillow'>Add Extra Pillow</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td" >Air Mattress</td>
                         {this.state.airmattress.name.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.airmattress.image} /></td> : <td className="no-td"></td>}
                         {this.state.airmattress.name.length === 0 ? <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=airmattress'>Add Air Mattress</a></td> : <td className="list-td">{this.state.airmattress.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=airmattress'>Add Extra Air Mattress</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Air Pump</td>
                         {this.state.airpump.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.airpump.image} /></td> : <td className="no-td"></td>}
                         {this.state.airpump.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=airpump'>Add Air Pump</a></td> : <td className="list-td">{this.state.airpump.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=airpump'>Add Extra Air Pump</a></td>
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
                         {this.state.watercontainer.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=watercontainer'>Add Water Container</a></td> : <td className="list-td">{this.state.watercontainer.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=watercontainer'>Add Extra Water Container</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Coolers</td>
                         {this.state.cooler.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.cooler.image} /></td> : <td className="no-td"></td>}
                         {this.state.cooler.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=cooler'>Add Coolers</a></td> : <td className="list-td">{this.state.cooler.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=cooler'>Add Extra Coolers</a></td>
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
                         {this.state.cookingmisc.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=cookingmisc'>Add Misc Cooking</a></td> : <td className="list-td">{this.state.cookingmisc.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=cookingmisc'>Add Extra Misc Cooking</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Emergency</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Medical Kits </td>
                         {this.state.medical.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.medical.image} /></td> : <td className="no-td"></td>}
                         {this.state.medical.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=medical'>Add Medical Kits</a></td> : <td className="list-td">{this.state.medical.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=medical'>Add Extra Medical Kits</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Water Purifier </td>
                         {this.state.waterpurifier.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.waterpurifier.image} /></td> : <td className="no-td"></td>}
                         {this.state.waterpurifier.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=waterpurifier'>Add Water Purifier</a></td> : <td className="list-td">{this.state.waterpurifier.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=waterpurifier'>Add Extra Water Purifier</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">GPS </td>
                         {this.state.gps.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.gps.image} /></td> : <td className="no-td"></td>}
                         {this.state.gps.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=gps'>Add GPS</a></td> : <td className="list-td">{this.state.gps.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=gps'>Add Extra GPS</a></td>
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
                         {this.state.misc.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=misc'>Add Misc Gear</a></td> : <td className="list-td">{this.state.misc.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/campingproductsearch?type=misc'>Add Extra Misc Gear</a></td>
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

export default CampingNewList

//Number(this.state.tent.price) + Number(this.state.bedding.price) + Number(this.state.cookingstove.price) + Number(this.state.lantern.price) + Number(this.state.firstaid.price) + Number(this.state.firestarter.price) + Number(this.state.watercontainer.price) + Number(this.state.waterfilter.price)