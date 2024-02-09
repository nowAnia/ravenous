import Business from './Business.js'
import informations from './library.js'
import './BusinessList.css'


function BusinessList(){
  return (
  <div className='business-list'>
    <Business business_info={informations[0]} />
    <Business business_info={informations[0]} />
    <Business business_info={informations[0]} />
    <Business business_info={informations[0]} />
    <Business business_info={informations[0]} />
    <Business business_info={informations[0]} />
    <Business business_info={informations[0]} />

  </div>
  )
}
export default BusinessList