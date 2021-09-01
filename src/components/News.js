import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

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
    capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page:1,
            totalResults: 0,
            
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - Squally News`

    }

    async updatePage(){
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`
        this.setState({loading: true})
        let data = await fetch(url)
        this.props.setProgress(30)
        let parsedData = await data.json()
        this.props.setProgress(70)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
        this.props.setProgress(100)
    }

    async componentDidMount(){
        this.updatePage()
    }

    fetchMoreData = async() => {
        this.setState({page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        })
    };

    render() {
        return (
            <>
                <h1 className="text-center my-5">{this.capitalizeFirstLetter(this.props.category)} - Top Headline</h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner/>}
                >
                <div className="container">
                <div className="row mb-3">
                        {this.state.articles.map((elem)=>{
                            return <div key={elem.url} className="col-md-4">
                                        <NewsItems title={elem.title} 
                                        description={elem.description} 
                                        imageUrl={elem.urlToImage} 
                                        newsUrl={elem.url} 
                                        author={elem.author}
                                        date={elem.publishedAt}
                                        source={elem.source.name}/>
                                        
                                    </div>
                        })}
                </div>
                </div>
                </InfiniteScroll>
            
            </>
        )
    }
}


