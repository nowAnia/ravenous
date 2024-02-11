import Business from './Business.js'

import './BusinessList.css'


function BusinessList(props){
  return (
    <div className='container business-list'>
      {props.businesses.map(x =>
        <Business info={x} key={x.id}/>
      )}
    </div>
  )
}
export default BusinessList
