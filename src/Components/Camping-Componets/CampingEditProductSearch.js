import React from 'react'

class CampingEditProductSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            secondKey: '',
            secondData: [],
            params: new URLSearchParams(window.location.search).get("type"),
            listName: sessionStorage.getItem('active')
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch(`./campingJson/${this.state.params}.json`).then(response => {
            console.log(response);
            return response.json();
          }).then(data => {
            this.setState({
                results: data.DATA
            })
            this.handleSecond(data.DATA)
          }).catch(error => {
            console.log(error);
          });

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
        console.log(third)
        this.handleThird(third)
    }

    handleThird(third) {
        this.setState({
            secondData: third
        })
    }


    handleClick(e) {
        let selected = {
            name: e.target.value,
            price: this.state.results[e.target.id].price,
            image: this.state.results[e.target.id].image,
            link: this.state.results[e.target.id].link
        }
        
        let editParse = JSON.parse(localStorage.getItem(this.state.listName))

        console.log(editParse)

        editParse[this.state.params] = selected.name

        editParse[`${this.state.params}Price`] = selected.price

        editParse[`${this.state.params}Image`] = selected.image

        editParse[`${this.state.params}Link`] = selected.Link

        localStorage.setItem(this.state.listName, JSON.stringify(editParse))

        window.location.assign('http://localhost:3000/campinglist')
    }

    render() {
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
                                <button type="button" onClick={this.handleClick} value={data.name} id={j}>Add {data.name}</button>
                                <td className="list-td"><img className="list-image" src={data.image} /></td>   
                                <td className="list-td">{this.state.secondData[j]}</td>
                                <td className="list-td">${data.price}</td>
                             </tr> )
                })}
                </table>
                <button className="list-back" onClick={() => { window.location.assign('http://localhost:3000/campinglist') }}>Back</button>
            </main>
        )
    }
}

export default CampingEditProductSearch