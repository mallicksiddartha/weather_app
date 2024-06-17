import './currentWeather.css';

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Some City</p>
                    <p className="weather-description">Sunny</p>
                </div>
                <img alt="weather" className="weather-icon" src="icons/01d.png" />
            </div>
            <div className='bottom'>
                <p className='temperature'>20°C</p>
                <div className='details'>
                    <div className='param-row'>
                        <span className='param-label'>Details</span>
                    </div>
                    <div className='param-row'>
                        <span className='param-label'>Feels like</span>
                        <span className='param-value'>23°C</span>
                    </div>
                    <div className='param-row'>
                        <span className='param-label'>Wind</span>
                        <span className='param-value'>4.3 m/s</span>
                    </div>
                    <div className='param-row'>
                        <span className='param-label'>Humidity</span>
                        <span className='param-value'>13%</span>
                    </div>
                    <div className='param-row'>
                        <span className='param-label'>Pressure</span>
                        <span className='param-value'>12 hPa</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CurrentWeather;