import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export default class News extends Component {
    static defaultProps = {
        pageSize: 6,
        country: 'in',
        category: 'general',
    }

    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string,
    }

    
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1,
            
        }

    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=edafe320eef54a5b8fe85294a39f83b3&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
    }

    clickHandlePrev = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=edafe320eef54a5b8fe85294a39f83b3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles,
            loading: false

        })
    }
    clickHandleNext = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=edafe320eef54a5b8fe85294a39f83b3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page+1,
            articles: parsedData.articles,
            loading: false
        })
        
    }

    render() {
        return (
            <>
            <div className="container">
                <h1 className="text-center my-5">Squally News - Top Headline</h1>
                {this.state.loading && <Spinner />}
                {!this.state.loading && 
                    <div className="row mb-3">
                        {this.state.articles.map((elem)=>{
                            return <div key={elem.url} className="col-md-4">
                                        <NewsItems title={elem.title} 
                                        description={elem.description} 
                                        imageUrl={elem.urlToImage} 
                                        newsUrl={elem.url} />
                                    </div>
                        })}
                    
                    
                    </div>
                }
                
            </div>
            <div className="container my-5">
                <div className="d-flex justify-content-around">
                    <button disabled={this.state.page<=1?true:false} onClick={this.clickHandlePrev} className="btn btn-dark"><strong>&larr;</strong> Previous</button>
                    <button disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)?true:false} onClick={this.clickHandleNext} className="btn btn-dark">Next <strong>&rarr;</strong> </button>
                </div>
            </div>
            </>
        )
    }
}


