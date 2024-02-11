import Business from './Business.js'
import informations from './library.js'
import './BusinessList.css'


function BusinessList(){
  return (
    <div className='container business-list'>
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
