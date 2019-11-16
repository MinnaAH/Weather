import React, { Component } from 'react';
import Search from './Search.js';
import Saved from './Saved.js';
import Weather from './Weather';
import './App.css';

const apiKey = 'apikey';

class App extends Component {
  constructor(props){
    super();

    this.state={
      city: null,
      description: null,
      temp: null,
      min_temp: null,
      max_temp: null,
      pressure: null,
      humidity: null,
      wind: null,
      wind_deg: null,
      saved: [],
      saveLocal: JSON.parse(localStorage.getItem('value')),
    }
  }

  //Get and set temperature, city and country
  getTemp = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    try{
      const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
      const data = await api.json();

      this.setState({
        description: data.weather[0].description,
        temp: data.main.temp,
        min_temp: data.main.temp_min,
        max_temp: data.main.temp_max,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        wind_deg: data.wind.deg,
        country: data.sys.country,
        city: data.name,
      })
    }
    catch(e){
      alert("Something went wrong! Check city name");
    }
  }

  //Handle saving city
  saveCity = async(e) =>{
    e.preventDefault();
    var i=0;
    //localStorage.clear()
    if(this.state.saveLocal === null){
      if(this.state.city !== null){        
        this.setState({
          saved: localStorage.setItem('value',JSON.stringify(this.state.saved.concat(this.state.city))),
          saveLocal: JSON.parse(localStorage.getItem('value')),
        })
      }
      else{
        alert("Before saving, search city's weather info!")
      }
    }
    else{
      for(i=0; i<this.state.saveLocal.length; i++){
        if(this.state.saveLocal[i] === this.state.city){
          break;
        }
      }
      if(i === this.state.saveLocal.length){
          localStorage.setItem('value',JSON.stringify(this.state.saveLocal.concat(this.state.city)));
          this.setState({
            saveLocal: JSON.parse(localStorage.getItem('value')),
          });
      }
      else{
        alert("You have already saved this city!")
      }
    }
  }

  //Get data from saved cities
  getTempSaved = async (e) =>{
    const city = e.target.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const data = await api.json();
    
    this.setState({
      description: data.weather[0].description,
      temp: data.main.temp,
      min_temp: data.main.temp_min,
      max_temp: data.main.temp_max,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      wind: data.wind.speed,
      wind_deg: data.wind.deg,
      country: data.sys.country,
      city: data.name,
    })
  }
  
  render() {
    return (
      <div className="app">
        <div>
        <h1>Search weather information</h1>
          <div className="search">
            <Search loadTemp={this.getTemp} saveInput={this.saveCity}/>
          </div>
          <div className="weatherData">
              <Weather 
                temp={this.state.temp}
                min_temp={this.state.min_temp}
                max_temp={this.state.max_temp}
                humidity= {this.state.humidity}
                pressure= {this.state.pressure}
                wind= {this.state.wind}
                wind_deg={this.state.wind_deg}
                city={this.state.city}
                country={this.state.country}
                description={this.state.description}
              />
            </div>
            <div className="saved">
              <Saved
              submit={this.getTempSaved}
              saveLocal={this.state.saveLocal}
              />
            </div>
            </div>
        </div>
    );
  }
}
export default App;
