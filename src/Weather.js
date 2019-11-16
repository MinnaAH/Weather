import React from 'react';
const Weather = (props) => {
    var direction;
    if(props.wind_deg > 348.75 && props.wind_deg <= 11.25){direction = 'North';}
    else if(props.wind_deg > 11.25 && props.wind_deg <= 33.75){direction = 'North-Northeast';}
    else if(props.wind_deg > 33.75 && props.wind_deg <= 56.25){direction = 'Northeast';}
    else if(props.wind_deg > 56.25 && props.wind_deg <= 78.75){direction = 'East-Northeast';}
    else if(props.wind_deg > 78.75 && props.wind_deg <= 101.25){direction = 'East';}
    else if(props.wind_deg > 101.25 && props.wind_deg <= 123.75){direction = 'East-Southeast';}
    else if(props.wind_deg > 123.75 && props.wind_deg <= 146.25){direction = 'Southeast';}
    else if(props.wind_deg > 146.25 && props.wind_deg <= 168.75){direction = 'South-Southeast';}
    else if(props.wind_deg > 168.75 && props.wind_deg <= 191.25){direction = 'South';}
    else if(props.wind_deg > 191.25 && props.wind_deg <= 213.75){direction = 'South-Southwest';}
    else if(props.wind_deg > 213.75 && props.wind_deg <= 236.25){direction = 'Southwest';}
    else if(props.wind_deg > 236.25 && props.wind_deg <= 258.75){direction = 'West-Southwest';}
    else if(props.wind_deg > 258.75 && props.wind_deg <= 281.25){direction = 'West';}
    else if(props.wind_deg > 281.25 && props.wind_deg <= 303.75){direction = 'West-Northwest';}
    else if(props.wind_deg > 303.75 && props.wind_deg <= 326.25){direction = 'Northwest';}
    else if(props.wind_deg > 326.25 && props.wind_deg <= 348.75){direction = 'North-Northwest';}
    return (
        //Print location and temperature
        <div>
            {props.country && props.city && <h2 className="locationInfo">{props.city}, {props.country}: {props.description}</h2>}
            <div className="weather">
                    {props.temp &&
                        <div className="tempInfo">
                        <h3>Temperature</h3>
                            <p>Current emperature: <b>{props.temp} °C</b></p>
                            <p>Day's min temperature: <b>{props.min_temp} °C</b></p>
                            <p>Day's max temperature: <b>{props.max_temp} °C</b></p>
                        </div>
                    }
                    {props.wind &&
                        <div className="windInfo">
                        <h3>Wind</h3>
                            <p>Wind speed: <b>{props.wind} m/s</b></p>
                            <p>Wind direction: <b>{direction}</b></p>
                        </div>
                    }
                    {props.humidity &&
                        <div className="otherInfo">
                        <h3>Humidity and pressure</h3>
                            <p>Humidity: <b>{props.humidity} %</b></p>
                            <p>Pressure: <b>{props.pressure} hpa</b></p>
                        </div>
                    }
            </div>
        </div>
    )
}
 
export default Weather;
