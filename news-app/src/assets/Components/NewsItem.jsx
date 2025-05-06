

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light h-70 my-2 mx-2 px-2 py-2">

  <img src={src} style={{height:"165px", objectFit:"cover"}} className="card-img-top" alt="news"/>
  
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):""}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
