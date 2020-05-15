import React from 'react'

class ProductSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            secondKey: '',
            secondData: [],
            params: new URLSearchParams(window.location.search).get("type")
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
       /* fetch(`./huntingJson/${this.state.params}.json`).then(response => {
            console.log(response);
            return response.json();
          }).then(data => {
            this.setState({
                results: data.DATA
            })
            this.handleSecond(data.DATA)
          }).catch(error => {
            console.log(error);
          });*/

var myHeaders = new Headers(); 
myHeaders.append("Accept", "application/json"); 
myHeaders.append("Authorization", "Basic SVJTWWtxVHlOZXAyMjI3NjI0NHBCOVR1QlVvQnl0WVROMToyR0JoYUd+dlFXWkJLcGpUb2h2U0pkcmFjbX5TZjl2aA==");
myHeaders.append("Cookie", "__cfduid=db5c683bcca0ddcdd9fcc40acd1f0354e1588710563");
myHeaders.append("RequestCredentials", "same-origin");

var requestOptions = { 
method: 'GET', 
headers: myHeaders, 
redirect: 'follow' 
};

fetch("https://api.impact.com/Mediapartners/IRSYkqTyNep22276244pB9TuBUoBytYTN1/Catalogs/ItemSearch?Query=Category='GUNS'", requestOptions) 
.then(response => response.text()) 
.then(result => console.log(result)) 
.catch(error => console.log('error', error));

    }

    handleSecond(data) {
        let second = Object.keys(data[0])

        let third = []

        let temp = data[0]

        this.setState({
            secondKey: second[1]
        })

        for(let i = 0; i < data.length; i++) {
            temp = data[i]
            third.push(temp[`${this.state.secondKey}`])
            console.log(temp)
        }
        console.log(second)
        this.handleThird(third)
    }

    handleThird(third) {
        this.setState({
            secondData: third
        })
    }


    handleClick(e) {
        let selected = {
            name: this.state.results[e.target.id].name,
            price: this.state.results[e.target.id].price,
            image: this.state.results[e.target.id].image,
            link: this.state.results[e.target.id].link

        }

        console.log(selected.link)

        sessionStorage.setItem(this.state.params, JSON.stringify(selected))

        window.location.assign('https://outdoorgearpicker.now.sh/newhuntinglist')
    }

    render() {
        console.log(this.state.results)
        return(
            <main>
                <table className="list-table">
                    <tr className="list-tr">
                        <th className="list-th">{this.state.params.charAt(0).toUpperCase() + 
                         this.state.params.slice(1)}</th>
                        <th className="list-th">Gear Image</th>
                        <th className="list-th">{this.state.secondKey}</th>
                        <th className="list-th">Gear Price</th>
                    </tr>
                {this.state.results.map((data, j)  => {
                    return ( <tr className="list-tr">            
                                <td className="list-td"><button className="list-button" type="button" onClick={this.handleClick} value={data.name} id={j}>Add {data.name}</button></td>
                                <td className="list-td"><img className="list-image" src={data.image} /></td>   
                                <td className="list-td">{this.state.secondData[j]}</td>
                                <td className="list-td">${data.price}</td>
                             </tr> )
                })}
                </table>
            <button className="list-back" onClick={() => { window.location.assign('https://outdoorgearpicker.now.sh/newhuntinglist') }}>Back</button>
            </main>
        )
    }
}

export default ProductSearch
