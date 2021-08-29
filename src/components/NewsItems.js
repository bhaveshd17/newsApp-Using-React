import React, { Component } from 'react'


export default class NewsItems extends Component {

    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props
        return (
            <div className="py-3 px-5">
                <div className="card mx-auto">
                <div style={{display: 'flex',justifyContent: 'flex-end',position: 'absolute',right: 0}}>
                <span className="badge rounded-pill bg-danger">
                    {source}
                </span>
                </div>
                <img src={imageUrl?imageUrl:"https://s.w-x.co/in-james%20webb%20telescope%20.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><span className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</span></p>
                    <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
                </div>
            </div>
        )
    }
}
