import './Business.css'


function Business(props){
  const info = props.info

  return (
    <div className="business">
      <img className="business-picture" src={info.imageSrc}/>
      <div className='business-content'>
        <h4 className='business-name'>{info.name}</h4>
        <div className='business-details'>
          <div className="business-details-left">
            <p>{info.address}</p>
            <p>{info.city}</p>
            <p>{info.state} {info.zipCode}</p>
          </div>

          <div className="business-details-right">
            <p className='business-category'>{info.category}</p>
            <p className='business-rating'>{info.rating} stars</p>
            <p>{info.reviewCount}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Business;
