import React from 'react'

class Home extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            results: Object.keys(localStorage),
            hunting: [],
            camping: [],
            fishing: []
        }
    }

    componentDidMount() {
        let huntingArray = []
        let campingArray = []
        let fishingArray = []
        for (let i = 0; i < this.state.results.length; i++) {
            if(this.state.results[i].includes('Hunting')){
                huntingArray.push(this.state.results[i])
            }
            if(this.state.results[i].includes('Camping')){
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

        window.location.assign(`http://localhost:3000/huntinglist`)
    }

    render() {
        return(
            <main>
                <div className="home-list">
                    <h2 className="home-h2">Hunting List</h2>
                    {this.state.hunting.map(data => {return <h3 value={data} onClick={() => this.huntingClick(data)} >{data}</h3>})}
                    <img className="home-plus" src="https://lh3.googleusercontent.com/proxy/SxuI2vGrt26fyWUx-f_2KGvAsPv0o11XVRliOxLyEbUoOydbuOhTd1EaB7pr2rwRPPmclqdatXoTDMpFPcL9WvwnZrJKjfM" />
                </div>

                <div className="home-list">
                    <h2 className="home-h2">Hiking/Camping List</h2>
                    {this.state.camping.map(data => {return <h3 value={data} onClick={() => this.handleClick(data)} >{data}</h3>})}
                    <img className="home-plus" src="https://lh3.googleusercontent.com/proxy/SxuI2vGrt26fyWUx-f_2KGvAsPv0o11XVRliOxLyEbUoOydbuOhTd1EaB7pr2rwRPPmclqdatXoTDMpFPcL9WvwnZrJKjfM" />
                </div>\

                <div className="home-list">
                    <h2 className="home-h2">Fishing List</h2>
                    {this.state.fishing.map(data => {return <h3 value={data} onClick={() => this.handleClick(data)} >{data}</h3>})}
                    <img className="home-plus" src="https://lh3.googleusercontent.com/proxy/SxuI2vGrt26fyWUx-f_2KGvAsPv0o11XVRliOxLyEbUoOydbuOhTd1EaB7pr2rwRPPmclqdatXoTDMpFPcL9WvwnZrJKjfM" />
                </div>    
            </main>
        )
    }
}

export default Home