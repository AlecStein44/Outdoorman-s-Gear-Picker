import React from 'react'
import MultiSelect from '../multiSelect'

class FishingNewList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listName: '',
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
            hikingpants: {name: '', price: 0, image: '', link: ''},
            gaiter: {name: '', price: 0, image: '', link: ''},
            wadder: {name: '', price: 0, image: '', link: ''},
            shoe: {name: '', price: 0, image: '', link: ''},
            tacklebox: {name: '', price: 0, image: '', link: ''},
            binocularholder: {name: '', price: 0, image: '', link: ''},
            bottle: {name: '', price: 0, image: '', link: ''},
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
        let parserod = JSON.parse(sessionStorage.getItem('rod'))
        let fishinglineParse = JSON.parse(sessionStorage.getItem('fishingline'))
        let hookParse = JSON.parse(sessionStorage.getItem('hook'))
        let parselure = JSON.parse(sessionStorage.getItem('lure'))
        let parsepliers = JSON.parse(sessionStorage.getItem('pliers'))
        let parseessentialsmisc = JSON.parse(sessionStorage.getItem('essentialsmisc'))
        let parselinecutter = JSON.parse(sessionStorage.getItem('Line Cutters'))
        let parseArrow = JSON.parse(sessionStorage.getItem('arrow'))
        let parseArrhead = JSON.parse(sessionStorage.getItem('broadhead'))
        let parseArchhook = JSON.parse(sessionStorage.getItem('archhook'))
        let parseArchlure = JSON.parse(sessionStorage.getItem('archlure'))
        let parseArchpliers = JSON.parse(sessionStorage.getItem('archpliers'))
        let parseMisclinecutter = JSON.parse(sessionStorage.getItem('misclinecutter'))
        let baitParse = JSON.parse(sessionStorage.getItem('bait'))
        let ParseCovermask = JSON.parse(sessionStorage.getItem('covermask'))
        let Parsewindbreaker = JSON.parse(sessionStorage.getItem('windbreaker'))
        let hikingshirtParse = JSON.parse(sessionStorage.getItem('hikingshirt'))
        let hikingpantsParse = JSON.parse(sessionStorage.getItem('hikingpants'))
        let ParseGaiter = JSON.parse(sessionStorage.getItem('gaiter'))
        let Parsewadder = JSON.parse(sessionStorage.getItem('wadder'))
        let Parseshoe = JSON.parse(sessionStorage.getItem('shoe'))
        let Parsetacklebox = JSON.parse(sessionStorage.getItem('tacklebox'))
        let ParseBinocularholder = JSON.parse(sessionStorage.getItem('binocularholder'))
        let Parsebottle = JSON.parse(sessionStorage.getItem('bottle'))
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

        if(sessionStorage.getItem('rod') !== null) {
            this.setState({
                rod: {name: parserod.name, price: parserod.price, image: parserod.image, link: parserod.link}
            })
            priceFinal = priceFinal + parserod.price
        }

        if(sessionStorage.getItem('fishingline') !== null) {
            this.setState({
                fishingline: {name: fishinglineParse.name, price: fishinglineParse.price, image: fishinglineParse.image, link: fishinglineParse.link}
            })
            priceFinal = priceFinal + fishinglineParse.price
        }

        if(sessionStorage.getItem('hook') !== null) {
            this.setState({
                hook: {name: hookParse.name, price: hookParse.price, image: hookParse.image, link: hookParse.link}
            })
            priceFinal = priceFinal + hookParse.price
        }

        if(sessionStorage.getItem('lure') !== null) {
            this.setState({
                lure: {name: parselure.name, price: parselure.price, image: parselure.image, link: parselure.link}
            })
            priceFinal = priceFinal + parselure.price
        }

        if(sessionStorage.getItem('pliers') !== null) {
            this.setState({
                pliers: {name: parsepliers.name, price: parsepliers.price, image: parsepliers.image, link: parsepliers.link}
            })
            priceFinal = priceFinal + parsepliers.price
        }

        if(sessionStorage.getItem('essentialsmisc') !== null) {
            this.setState({
                essentialsmisc: {name: parseessentialsmisc.name, price: parseessentialsmisc.price, image: parseessentialsmisc.image, link: parseessentialsmisc.link}
            })
            priceFinal = priceFinal + parseessentialsmisc.price
        }

        if(sessionStorage.getItem('Line Cutters') !== null) {
            this.setState({
                linecutter: {name: parselinecutter.name, price: parselinecutter.price, image: parselinecutter.image, link: parselinecutter.link}
            })
            priceFinal = priceFinal + parselinecutter.price
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

        if(sessionStorage.getItem('archhook') !== null) {
            this.setState({
                archhook: {name: parseArchhook.name, price: parseArchhook.price, image: parseArchhook.image, link: parseArchhook.link}
            })
            priceFinal = priceFinal + parseArchhook.price
        }

        if(sessionStorage.getItem('archlure') !== null) {
            this.setState({
                archlure: {name: parseArchlure.name, price: parseArchlure.price, image: parseArchlure.image, link: parseArchlure.link}
            })
            priceFinal = priceFinal + parseArchlure.price
        }

        if(sessionStorage.getItem('archpliers') !== null) {
            this.setState({
                archpliers: {name: parseArchpliers.name, price: parseArchpliers.price, image: parseArchpliers.image, link: parseArchpliers.link}
            })
            priceFinal = priceFinal + parseArchpliers.price
        }

        if(sessionStorage.getItem('misclinecutter') !== null) {
            this.setState({
                misclinecutter: {name: parseMisclinecutter.name, price: parseMisclinecutter.price, image: parseMisclinecutter.image, link: parseMisclinecutter.link}
            })
            priceFinal = priceFinal + parseMisclinecutter.price
        }

        if(sessionStorage.getItem('bait') !== null) {
            this.setState({
                bait: {name: baitParse.name, price: baitParse.price, image: baitParse.image, link: baitParse.link}
            })
            priceFinal = priceFinal + baitParse.price
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

        if(sessionStorage.getItem('wadder') !== null) {
            this.setState({
                wadder: {name: Parsewadder.name, price: Parsewadder.price, image: Parsewadder.image, link: Parsewadder.link}
            })
            priceFinal = priceFinal + Parsewadder.price
        }

        if(sessionStorage.getItem('shoe') !== null) {
            this.setState({
                shoe: {name: Parseshoe.name, price: Parseshoe.price, image: Parseshoe.image, link: Parseshoe.link}
            })
            priceFinal = priceFinal + Parseshoe.price
        }

        if(sessionStorage.getItem('tacklebox') !== null) {
            this.setState({
                tacklebox: {name: Parsetacklebox.name, price: Parsetacklebox.price, image: Parsetacklebox.image, link: Parsetacklebox.link}
            })
            priceFinal = priceFinal + Parsetacklebox.price
        }

        if(sessionStorage.getItem('binocularholder') !== null) {
            this.setState({
                binocularholder: {name: ParseBinocularholder.name, price: ParseBinocularholder.price, image: ParseBinocularholder.image, link: ParseBinocularholder.link}
            })
            priceFinal = priceFinal + ParseBinocularholder.price
        }

        if(sessionStorage.getItem('bottle') !== null) {
            this.setState({
                bottle: {name: Parsebottle.name, price: Parsebottle.price, image: Parsebottle.image, link: Parsebottle.link}
            })
            priceFinal = priceFinal + Parsebottle.price
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
                rod: this.state.rod,
                fishingline: this.state.fishingline,
                hook: this.state.hook,
                lure: this.state.lure,
                pliers: this.state.pliers,
                essentialsmisc: this.state.essentialsmisc,
                linecutter: this.state.linecutter,
                arrow: this.state.arrow,
                arrhead: this.state.arrhead,
                archhook: this.state.archhook,
                archlure: this.state.archlure,
                archpliers: this.state.archpliers,
                misclinecutter: this.state.misclinecutter,
                bait: this.state.bait,
                covermask: this.state.covermask,
                windbreaker: this.state.windbreaker,
                hikingshirt: this.state.hikingshirt,
                hikingpants: this.state.hikingpants,
                gaiter: this.state.gaiter,
                wadder: this.state.wadder,
                shoe: this.state.shoe,
                tacklebox: this.state.tacklebox,
                binocularholder: this.state.binocularholder,
                bottle: this.state.bottle,
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

            localStorage.setItem(`Fishing ${this.state.listName}`, convert)

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
                <h2 className="list-h2-topname">Fishing New List</h2>
                <table className="list-table">
                    <tr className="list-tr-th">
                       <th className="list-th">Gear Type</th>
                       <th className="list-th">Gear Image</th>
                       <th className="list-th">Gear Name</th>
                       <th className="list-th">Gear Price</th>
                    </tr>


                    <tr className="tr-list-break"><td className="td-list-break">Essentials</td></tr>
                    <tr className="list-tr">
                         <td className="list-td" >Rod and Reel</td>
                         {this.state.rod.name.length !== 0 ? <td className="list-td"><img className="list-image" src={this.state.rod.image} /></td> : <td className="no-td"></td>}
                         {this.state.rod.name.length === 0 ? <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=rod'>Add Rod and Reel</a></td> : <td className="list-td">{this.state.rod.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=rod'>Add Extra Rod and Reel</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Fishing Line</td>
                         {this.state.fishingline.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.fishingline.image} /></td> : <td className="no-td"></td>}
                         {this.state.fishingline.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=fishingline'>Add Fishing Line</a></td> : <td className="list-td">{this.state.fishingline.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=fishingline'>Add Extra Fishing Line</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Hooks</td>
                         {this.state.hook.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.hook.image} /></td> : <td className="no-td"></td>}
                         {this.state.hook.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=hook'>Add Hooks</a></td> : <td className="list-td">{this.state.hook.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=hook'>Add Extra Hooks</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Bait</td>
                         {this.state.bait.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.bait.image} /></td> : <td className="no-td"></td>}
                         {this.state.bait.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=bait'>Add Bait</a></td> : <td className="list-td">{this.state.bait.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=bait'>Add Extra Bait</a></td>
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
                         {this.state.knive.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=knive'>Add Knives</a></td> : <td className="list-td">{this.state.knive.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=knive'>Add Extra Knives</a></td>
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
                         {this.state.wadder.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=wadder'>Add Wadder</a></td> : <td className="list-td">{this.state.wadder.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=wadder'>Add Extra Wadder</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Shoes</td>
                         {this.state.shoe.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.shoe.image} /></td> : <td className="no-td"></td>}
                         {this.state.shoe.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=shoe'>Add Shoes</a></td> : <td className="list-td">{this.state.shoe.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=shoe'>Add Extra Shoes</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Packs/Containers</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Tackle Box </td>
                         {this.state.tacklebox.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.tacklebox.image} /></td> : <td className="no-td"></td>}
                         {this.state.tacklebox.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=tacklebox'>Add Tackle Box</a></td> : <td className="list-td">{this.state.tacklebox.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=tacklebox'>Add Extra Tackle Box</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Water Water Bottle </td>
                         {this.state.bottle.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.bottle.image} /></td> : <td className="no-td"></td>}
                         {this.state.bottle.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=bottle'>Add Water Water Bottle</a></td> : <td className="list-td">{this.state.bottle.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=bottle'>Add Extra Water Water Bottle</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}


                    <tr className="tr-list-break"><td className="td-list-break">Emergency</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Medical Kits </td>
                         {this.state.medical.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.medical.image} /></td> : <td className="no-td"></td>}
                         {this.state.medical.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=medical'>Add Medical Kits</a></td> : <td className="list-td">{this.state.medical.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=medical'>Add Extra Medical Kits</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Water Purifier </td>
                         {this.state.waterpurifier.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.waterpurifier.image} /></td> : <td className="no-td"></td>}
                         {this.state.waterpurifier.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=waterpurifier'>Add Water Purifier</a></td> : <td className="list-td">{this.state.waterpurifier.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=waterpurifier'>Add Extra Water Purifier</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">Fire Starter </td>
                         {this.state.firestarter.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.firestarter.image} /></td> : <td className="no-td"></td>}
                         {this.state.firestarter.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=firestarter'>Add Fire Starter</a></td> : <td className="list-td">{this.state.firestarter.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=firestarter'>Add Extra Fire Starter</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}
                    <tr className="list-tr">
                         <td className="list-td">GPS </td>
                         {this.state.gps.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.gps.image} /></td> : <td className="no-td"></td>}
                         {this.state.gps.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=gps'>Add GPS</a></td> : <td className="list-td">{this.state.gps.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=gps'>Add Extra GPS</a></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                          <td className="no-td"></td>
                    </tr> : null}

                    <tr className="tr-list-break"><td className="td-list-break">Misc Gear</td></tr>
                    <tr className="list-tr">
                         <td className="list-td">Misc</td>
                         {this.state.misc.name.length !== 0 ? <td className="list-td" ><img className="list-image" src={this.state.misc.image} /></td> : <td className="no-td"></td>}
                         {this.state.misc.name.length === 0 ? <td className="list-td"><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=misc'>Add Misc Gear</a></td> : <td className="list-td">{this.state.misc.name}</td>}
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
                          <td className="list-td" ><a className="newlist-a" href='https://outdoorgearpicker.now.sh/fishingproductsearch?type=misc'>Add Extra Misc Gear</a></td>
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

export default FishingNewList

//Number(this.state.fishingrod.price) + Number(this.state.reel.price) + Number(this.state.bait.price) + Number(this.state.headwear.price) + Number(this.state.vest.price) + Number(this.state.pants.price) + Number(this.state.hooks.price) + Number(this.state.tacklebox.price)