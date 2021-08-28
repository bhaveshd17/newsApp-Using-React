import React, { Component } from 'react'


export default class NewsItems extends Component {

    render() {
        let {title, description, imageUrl, newsUrl} = this.props
        return (
            <div className="py-3 px-5">
                <div className="card mx-auto">
                <img src={imageUrl?imageUrl:"https://s.w-x.co/in-james%20webb%20telescope%20.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="blank" className="btn btn-sm btn-danger">Read More</a>
                </div>
                </div>
            </div>
        )
    }
}
