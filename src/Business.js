import './Business.css'


function Business(props){
  const info = props.info

  return (
    <div className="business">
      <img className="business-picture" src={info.image_url}/>
      <div className='business-content'>
        <h4 className='business-name'>{info.name}</h4>
        <div className='business-details'>
          <div className="business-details-left">
            <p>{info.location.address1}{info.location.address2}{info.location.address3}</p>
            <p>{info.location.city}</p>
            <p>{info.location.state} {info.location.zip_code} - {info.location.country}</p>
          </div>

          <div className="business-details-right">
            <p className='business-category'>{info.categories.map(x => x.title).join(', ')}</p>
            <p className='business-rating'>{info.rating} stars</p>
            <p>{info.review_count}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Business;
