import React from 'react'

const NewsItem = (props)=> {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{position:'absolute', right:'0'}}>

            <span  className="badge rounded-pill bg-danger">
                {source}
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
            <img src={imageUrl===null? 'https://images.cnbctv18.com/wp-content/uploads/2022/06/nasa-capstone-1019x573.jpg': imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author===null? "Unknown": author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem