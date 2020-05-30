import React from 'react'

class EditProductSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listName: sessionStorage.getItem('active'),
            results: [],
            oldResults: [],
            resultsloaded: false,
            nextUri: 'test',
            prevUri: 'test',
            search: '',
            activeName: '',
            manFil: '',
            activeFilter: {
                    filters: ['test']
                },
            manfilters: [],
            filter: [
                {
                    type: 'guns',
                    filters: ['Centerfire Rifle', 'Rimfire Rifle', 'Pistol', 'Shotgun']
                },
                {
                    type: 'ammo',
                    filters: ['Rifle', 'Rimfire', 'Pistol', 'Shells']
                },
                {
                    type: 'scope',
                    filters: ['2-12x', '3-18x', '5-25x', '1-8x', '5-30x', '4-16x', '3-9x']
                }
            ],
            filterOpen: false,
            isFilterActive: false,
            params: new URLSearchParams(window.location.search).get("type")
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch(`https://outdoorgearpicker-server.herokuapp.com/${this.state.params}`, {
           headers: {
               'Accept': 'application/json',
           },
         })
         .then(response => {return response.json()})
         .then(data => {
             JSON.stringify(data)
             console.log(JSON.stringify(data.Items))
             //let parseData = JSON.parse(data)
               this.setState({
                   results: data.Items,
                   oldResults: data.Items,
                   resultsloaded: true
               })
               this.handleNextApi(data['@nextpageuri'])
               this.handlePrevApi(data['@firstpageuri'])
               this.selectFilter()
             }).catch(error => {
               console.log(error);
             });
   
       }
   
       handleNextApi(uri) {
           fetch(`https://outdoorgearpicker-server.herokuapp.com/nextpage?uri=${uri}`, {
               headers: {
                   'Accept': 'application/json',
               },
           })
               .then(response => {return response.json()})
                   .then(data => {
                       //let parseData = JSON.parse(data)
                         this.setState({
                           nextUri: data
                         })
                       }).catch(error => {
                         console.log(error);
                   });
       }
   
       handlePrevApi(uri) {
           fetch(`https://outdoorgearpicker-server.herokuapp.com/nextpage?uri=${uri}`, {
               headers: {
                   'Accept': 'application/json',
               },
           })
               .then(response => {return response.json()})
                   .then(data => {
                       //let parseData = JSON.parse(data)
                         this.setState({
                           prevUri: data
                         })
                       }).catch(error => {
                         console.log(error);
                   });
       }

    selectFilter() {
        for(let i = 0; i < this.state.filter.length; i++) {
            if(this.state.filter[i].type === this.state.params.toLowerCase()) {
                this.setState({
                    activeFilter: this.state.filter[i]
                })
                console.log(this.state.filter[i])
            }
        }
        this.handleMan()
    }

    handleMan() {
        let filterList = this.state.activeFilter.filters
        let manFilterList = []

        for(let m = 0; m < this.state.results.length; m++) {
            if(manFilterList.includes(this.state.results[m].Manufacturer) === false ) {
                manFilterList.push(this.state.results[m].Manufacturer)
            }
        }
        this.setState({
            activeFilter: {
                filters: filterList
            },
            manfilters: manFilterList
        })
    }

    handleClick(e) {
        /*if(sessionStorage.getItem(this.state.params.toLowerCase()) === null){
            let selected = {
                name: this.state.results[e.target.id].Name,
                price: Number(this.state.results[e.target.id].CurrentPrice),
                image: this.state.results[e.target.id].ImageUrl,
                link: this.state.results[e.target.id].Url

            }

            let newParams = this.state.params.toLowerCase()

            console.log(selected.link)

            sessionStorage.setItem(newParams, JSON.stringify(selected))

            window.location.assign('https://outdoorgearpicker.now.sh/huntinglist')
        } else {
            let multiselected = {
                type: this.state.params.toLowerCase(),
                name: this.state.results[e.target.id].Name,
                price: Number(this.state.results[e.target.id].CurrentPrice),
                image: this.state.results[e.target.id].ImageUrl,
                link: this.state.results[e.target.id].Url
            }
            

            if(sessionStorage.getItem('multi') === null) {
                let multiObj = {
                    guns: [multiselected],
                    multiPrice: multiselected.price
                }
                sessionStorage.setItem('multi', JSON.stringify(multiObj))
            } else {
                let multiObj = JSON.parse(sessionStorage.getItem('multi'))

                multiObj.multiPrice = multiObj.multiPrice + multiselected.price

               multiObj.guns.push(multiselected)

                sessionStorage.setItem('multi', JSON.stringify(multiObj))
            }

            window.location.assign('https://outdoorgearpicker.now.sh/huntinglist')

        }*/
        let newParams = this.state.params.toLowerCase()
        let activeSess = JSON.parse(localStorage.getItem(this.state.listName))
        let selected = {
            type: this.state.params.toLocaleLowerCase(),
            name: this.state.results[e.target.id].Name,
            price: Number(this.state.results[e.target.id].CurrentPrice),
            image: this.state.results[e.target.id].ImageUrl,
            link: this.state.results[e.target.id].Url

        }
        if(activeSess.guns.name.length === 0) {
            
            activeSess[newParams] = selected

            localStorage.setItem(this.state.listName, JSON.stringify(activeSess))
        } else {
            activeSess.multiArr.guns.push(selected)
            activeSess.multiArr.multiPrice = activeSess.multiArr.multiPrice + selected.price

            localStorage.setItem(this.state.listName, JSON.stringify(activeSess))
        }

        window.location.assign('https://outdoorgearpicker.now.sh/huntinglist')
    }

    handleActive(event) {
        this.setState({
            activeName: event.target.value
        })
    }

    handleActiveTwo(ev) {
        this.setState({
            manFil: ev.target.value
        })
    }

    handleOpen() {
        this.setState(prevState => ({
            filterOpen: !prevState.filterOpen,

        }));
    }

    handleFilter(e) {
        e.preventDefault()
        let newResults = []
        let newActiveName = ''
        let newManFil = ''
        if(this.state.params === 'GUNS') {
            for(let l = 0; l < this.state.oldResults.length; l++) {
                if(this.state.oldResults[l].Labels[0] === this.state.activeName && this.state.oldResults[l].Manufacturer === this.state.manFil ) {
                    newResults.push(this.state.oldResults[l])
                    newActiveName = this.state.activeName
                    newManFil = this.state.manFil
                } else if(this.state.oldResults[l].Labels[0] === this.state.activeName && this.state.manFil === '') {
                    newResults.push(this.state.oldResults[l])
                    newActiveName = this.state.activeName
                    newManFil = ''
                } else if(this.state.activeName === '' && this.state.oldResults[l].Manufacturer === this.state.manFil) {
                    newResults.push(this.state.oldResults[l])
                    newActiveName = ''
                    newManFil = this.state.manFil
                } else if(this.state.activeName === '' && this.state.manFil === '') {
                    newResults = []
                }
            }
        } else {
            //console.log(typeof this.state.oldResults[0].Name)
            for(let l = 0; l < this.state.oldResults.length; l++) {
                if(this.state.oldResults[l].Name.toLowerCase().includes(this.state.activeName.toLowerCase()) === true && this.state.oldResults[l].Manufacturer === this.state.manFil ) {
                    newResults.push(this.state.oldResults[l])
                    newActiveName = this.state.activeName
                    newManFil = this.state.manFil
                } else if(this.state.oldResults[l].Name.toLowerCase().includes(this.state.activeName.toLowerCase()) === true && this.state.manFil === '') {
                    newResults.push(this.state.oldResults[l])
                    newActiveName = this.state.activeName
                    newManFil = ''
                } else if(this.state.activeName === '' && this.state.oldResults[l].Manufacturer === this.state.manFil) {
                    newResults.push(this.state.oldResults[l])
                    newActiveName = ''
                    newManFil = this.state.manFil
                } else if(this.state.activeName === '' && this.state.manFil === '') {
                    newResults = []
                }
            }
        }

        if(newResults.length !== 0) {
            this.setState({
                activeName: newActiveName,
                manFil: newManFil,
                results: newResults,
                filterOpen: false,
                isFilterActive: true
            })
        } else {
            this.setState({
                results: [],
                filterOpen: false,
                isFilterActive: false
            })
        }
    }

    handleSearch(e) {
        e.preventDefault()
        let searchResults = []
        for(let sr = 0; sr < this.state.results.length; sr++) {
            if(this.state.oldResults[sr].Name.includes(e.target.value) === true && e.target.value.length !== 0) {
                searchResults.push(this.state.oldResults[sr])
            } else if(e.target.value.length === 0 || e.target.length === '') {
                searchResults = this.state.oldResults
            }
        }
        this.setState({
            results: searchResults
        })
    }

    filterReset() {
        this.setState({
            activeName: '',
            manFil: '',
            results: this.state.oldResults,
            filterOpen: false,
            isFilterActive: false
        })
    }

    handleNext(e) {
        let newUri = this.state.nextUri
        console.log(newUri)
        this.setState({
            results: newUri.Items
        })
        fetch(`https://outdoorgearpicker-server.herokuapp.com/nextpage?uri=${newUri['@firstpageuri']}`, {
            headers: {
                'Accept': 'application/json',
            },
        })
            .then(response => {return response.json()})
                .then(data => {
                    //let parseData = JSON.parse(data)
                      this.setState({
                        nextUri: data,
                      })
                    }).catch(error => {
                      console.log(error);
                });
    }

    handlePrev(e) {
        let newUri = this.state.prevUri
        console.log(newUri)
        this.setState({
            results: newUri.Items
        })
        fetch(`https://outdoorgearpicker-server.herokuapp.com/nextpage?uri=${newUri['@firstpageuri']}`, {
            headers: {
                'Accept': 'application/json',
            },
        })
            .then(response => {return response.json()})
                .then(data => {
                    //let parseData = JSON.parse(data)
                      this.setState({
                        prevUri: data,
                      })
                    }).catch(error => {
                      console.log(error);
                });
    }

    render() {
        return(
            <main>
                <div className='div-filter'>
                    <section className="sec-filter-search">
                        <button className="list-filter-button" onClick={this.handleOpen.bind(this)}>Filter</button>
                        {this.state.isFilterActive === true && this.state.activeName !== '' ? <p className='p-filter'>Type: {this.state.activeName}</p> : null}
                        {this.state.isFilterActive === true && this.state.manFil !== '' ?<p className='p-filter'>Manufacturer: {this.state.manFil}</p> : null}
                    </section>
                    <input type='text' placeholder="Search Here" className='searchbar' onChange={this.handleSearch.bind(this)} />
                    <a onClick={this.handlePrev.bind(this) } value={this.state.prevUri} className="prevnext">Previous</a>
                    <a onClick={this.handleNext.bind(this) } value={this.state.nextUri} className="prevnext">Next</a>
                </div>
                {this.state.filterOpen === true ? <form onSubmit={this.handleFilter.bind(this)} className="filter">
                    <section className='sec-filter'>
                        <h4 className="filter-h4">Type</h4>
                        <select id="type" onClick={this.handleActive.bind(this)}>
                            <option value='' selected disabled hidden>Select an Option</option>
                            {this.state.activeFilter.filters.map((data, index) => {
                                return (
                                        <option name='filter' className="list-input" id={data[index]} value={data} >{data}</option>
                                )
                            })}
                        </select>
                    </section>
                    <h4 className="filter-h4">Manufacturer</h4>
                    <section className='sec-filter'>
                        <select id="manufacturer" onClick={this.handleActiveTwo.bind(this)}>
                            <option value='' selected disabled hidden>Select an Option</option>
                            {this.state.manfilters.map((data, index) => {
                                return (
                                    <option name='manfilter' className="list-input" id={data[index]} value={data} >{data}</option>
                                )
                            })}
                        </select>
                    </section>
                    <div className='div-filter'>
                        <input type='submit' className='filter-submit' value='Apply' />
                        <button className="filter-reset" onClick={this.filterReset.bind(this)}>Reset</button>
                    </div>
                </form> : null}
                {this.state.resultsloaded === false ? <p>Please wait while your products are loading. This might take some time.</p> : null}
                <table className="list-table">
                    <tr className="list-tr">
                        <th className="list-th">{this.state.params.charAt(0).toUpperCase() + 
                         this.state.params.slice(1)}</th>
                        <th className="list-th">Gear Image</th>
                        <th className="list-th">Manufacturer</th>
                        <th className="list-th">Gear Price</th>
                    </tr>
                {this.state.results.map((data, j)  => {
                    return ( <tr className="list-tr">            
                                <td className="list-td"><button className="list-button" type="button" onClick={this.handleClick} value={data.Name} id={j}>Add {data.Name}</button></td>
                                <td className="list-td"><img className="list-image" src={data.ImageUrl} /></td>   
                                <td className="list-td">{data.Manufacturer}</td>
                                <td className="list-td">${data.CurrentPrice}</td>
                             </tr> )
                })}
                </table>
            <button className="list-back" onClick={() => { window.location.assign('https://outdoorgearpicker.now.sh/huntinglist') }}>Back</button>
            <a onClick={this.handlePrev.bind(this) } value={this.state.prevUri} className="prevnext">Previous</a>
            <a onClick={this.handleNext.bind(this) } value={this.state.nextUri} className="prevnext">Next</a>
            </main>
        )
    }
}

export default EditProductSearch