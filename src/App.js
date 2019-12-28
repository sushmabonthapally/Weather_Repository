import React,{Component} from 'react';
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import {connect} from 'react-redux'

class Weather extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
 
  handleChange = (date) => {
    this.setState({
      startDate: date
    });
  };
 

  handleSubmit(e) {
    e.preventDefault();
    const data = {
          startDate : this.state.startDate.getDate()
        }
    
    axios.post('https://interview.com360degree.com/api/getWeather', data)
        .then(res => console.log(res.data))
        .catch(error=>
              {
                console.log("error",error);
              })
        }

        
  render() {
    return (
      <div className = "App">
          <div>
            <form onSubmit= {this.handleSubmit}>
            <label>Select Date: </label>
            <DatePicker
              className = "date"
              selected={ this.state.startDate}
              onChange={ this.handleChange }
            />
            </form>
          </div>
          <div>
        <div>
        {this.props.res.map((strResults)=>
                    {
                      let mainRes = "The weather details are not applicable for today's date. Select other date from Calendar";
                      let keys = Object.keys(strResults);
                      for(let i=0;i<=keys.length;i++)
                      {
                      if( Number(keys[i]) !== new Date().getDate() &&  Number(keys[i]) === this.state.startDate.getDate())
                      {
                       let val = strResults[this.state.startDate.getDate()];
                        mainRes = 
                       <ul>
                        <b>weatherDetails:</b> 
                         <li key = {val.temperature}>temperature : {val.temperature}</li>
                         <li key = {val.pressure}>pressure : {val.pressure}</li>
                         <li key = {val.humidity}>humidity : {val.humidity}</li>
                         <li key = {val.temp_min}>temp_min : {val.temp_min}</li>
                         <li key = {val.temp_max}>temp_max : {val.temp_max}</li>
                       </ul>
                      }    
                     }
                     return mainRes;
                  })
                }
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state)=>
{
  return{
    DateVal :state.startDate,
    res :state.weatherDetails
  };
};

const mapDispatchToProps = (dispatch)=>
{
return {
  onStartDate : ()=>dispatch({type:"DATERES"}),
  onWeatherDetails : ()=>dispatch({type : "STOREDRES"})
};

};
export default connect(mapStateToProps,mapDispatchToProps)(Weather)