import Business from './Business.js'

import './BusinessList.css'

function BusinessList(props) {
  return (
    <div className="container business-list">
      {props.businesses.length > 0 ? (
        props.businesses.map((x) => <Business info={x} key={x.id} />)
      ) : (
        <h3>No businesss to display</h3>
      )}
    </div>
  )
}
export default BusinessList
