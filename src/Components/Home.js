import React from 'react'

class Home extends React.Component {
    //http://localahost:3000/
    //https://outdoorgearapicker.now.sh/

    constructor (props) {
        super(props);
        this.state = {
            fetchData: [],
            arrJson: ['ammo.json','firestarter.json',' pants.json','tacklebox.json','bait.json' ,'firstaid.json', 'rangefinder.json' ,'tent.json','bedding.json','fishingrod.json','reel.json','vest.json','binos.json','headwear.json','rifle.json','watercontainer.json','cookingstove.json','hooks.json','scope.json','waterfilter.json','data.json','lantern.json,shirt.json'],
            results: Object.keys(localStorage),
            hunting: [],
            camping: [],
            fishing: []
        }
    }

    componentDidMount() {
        let ranNum = Math.floor(Math.random()*this.state.arrJson.length)
        fetch(`./allJson/${this.state.arrJson[ranNum]}`).then(response => {
            console.log(response);
            return response.json();
          }).then(data => {
            this.setState({
                fetchData: data.DATA
            })
            console.log(data)
          }).catch(error => {
            console.log(error);
          });
        sessionStorage.clear()

        let huntingArray = []
        let campingArray = []
        let fishingArray = []
        for (let i = 0; i < this.state.results.length; i++) {
            if(this.state.results[i].includes('Hunting')){
                huntingArray.push(this.state.results[i])
            }
            if(this.state.results[i].includes('Hiking')){
                campingArray.push(this.state.results[i])
            }
            if(this.state.results[i].includes('Fishing')){
                fishingArray.push(this.state.results[i])
            }
        }
        this.setState({
            hunting: huntingArray,
            camping: campingArray,
            fishing: fishingArray
        })
    }

    huntingClick(data) {
        sessionStorage.setItem('active', data)

        window.location.assign(`https://outdoorgearpicker.now.sh/huntinglist`)
    }

    campingClick(data) {
        sessionStorage.setItem('active', data)

        window.location.assign(`https://outdoorgearpicker.now.sh/campinglist`)
    }

    fishingClick(data) {
        sessionStorage.setItem('active', data)

        window.location.assign(`https://outdoorgearpicker.now.sh/fishinglist`)
    }

    handleDelete(e) {
        let reParse = this.state.hunting

        localStorage.removeItem(reParse[e.target.value])

        delete reParse[e.target.value]

        this.setState({
            hunting: reParse
        })
    }

    handleFishDelete(e) {
        let reFishParse = this.state.fishing

        localStorage.removeItem(reFishParse[e.target.value])

        delete reFishParse[e.target.value]

        this.setState({
            fishing: reFishParse
        })
    }

    handleCampingDelete(e) {
        let reCampParse = this.state.camping

        localStorage.removeItem(reCampParse[e.target.value])

        delete reCampParse[e.target.value]

        this.setState({
            camping: reCampParse
        })
    }

    handleBuyNow(e) {
        window.location.assign(`${e.target.value}`)
    }

    render() {
        return(
            <main>
                <div className="home-list-wrapper">
                    <div className="home-list">
                        <h2 className="home-h2" id="home-hunting">Hunting List</h2>
                        <div class='home-oldnew-list'>
                            <p className="home-new-p">Click <a href='https://outdoorgearpicker.now.sh/newhuntinglist'>here</a> or the plus sign to make a new list.</p>
                            {this.state.hunting.map((data, index) => {return <section className="home-listsec"><h3 value={data} onClick={() => this.huntingClick(data)} >{data.replace("Hunting", "")}</h3> <button className="home-list-delete" value={index} onClick={this.handleDelete.bind(this)}>X</button></section>})}
                            <a href='https://outdoorgearpicker.now.sh/newhuntinglist'><span className="home-plus" >&#43;</span></a>
                        </div>
                    </div>

                    <div className="home-list">
                        <h2 className="home-h2" id="home-camping">Hiking List</h2>
                        <div class='home-oldnew-list'>
                        <p className="home-new-p">Click <a href='https://outdoorgearpicker.now.sh/newcampinglist'>here</a> or the plus sign to make a new list.</p>
                            {this.state.camping.map((data, index) => {return <section className="home-listsec"><h3 value={data} onClick={() => this.campingClick(data)} >{data.replace("Hiking", "")}</h3> <button className="home-list-delete" value={index} onClick={this.handleCampingDelete.bind(this)}>X</button></section>})}
                            <a href='https://outdoorgearpicker.now.sh/newcampinglist' className="home-plus"><span className="home-plus" >&#43;</span></a>
                        </div>
                    </div>

                    <div className="home-list">
                        <h2 className="home-h2" id="home-fishing">Fishing List</h2>
                        <div class='home-oldnew-list'>
                            <p className="home-new-p">Click <a href='https://outdoorgearpicker.now.sh/newfishinglist'>here</a> or the plus sign to make a new list.</p>
                            {this.state.fishing.map((data, index) => {return <section className="home-listsec"><h3 value={data} onClick={() => this.fishingClick(data)} >{data.replace("Fishing", "")}</h3> <button className="home-list-delete" value={index} onClick={this.handleFishDelete.bind(this)}>X</button></section>})}
                            <a href='https://outdoorgearpicker.now.sh/newfishinglist' className="home-plus"><span className="home-plus" >&#43;</span></a>
                        </div>
                    </div>    
                </div>
                <div className="home-random-div">
                    {/*this.state.fetchData.map(data => {
                        return(
                            <section className="home-random-section">
                                <img className="home-random-img" src={data.image} />
                                <p className="home-random-p">{data.name}</p>
                                <button className="buybutton" onClick={this.handleBuyNow.bind(this)} value={data.link}>Buy Now!</button>
                            </section>
                        )
                    })*/}
                </div>
            </main>
        )
    }
}

export default Home