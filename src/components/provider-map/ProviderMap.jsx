import "./ProviderMap.css"

const ProviderMap = () => {
    return(
        <div id="provider-map">
            <h2>Explore a healthcare location</h2>
            <p>View the location on the map below.</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26463.67073235349!2d-81.02543360791437!3d33.99359092978867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdoctors%20near%20me!5e0!3m2!1sen!2sus!4v1791825037729!5m2!1sen!2sus"></iframe>
        </div>
    )
}

export default ProviderMap;