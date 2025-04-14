import React, { useState } from 'react'
import './Forecast.css'




const Forecast = () => {

  const [isFitChecked, setIsFitChecked] = useState(false)
  const [isForecastChecked, setIsForecastChecked] = useState(false)
  const [isComponentChecked, setIsComponentChecked] = useState(false)
  const [message, setMessage] = useState('')  //model fitted msg show krne k liye
  const [Forecastmessage, setForecastMessage] = useState('') 


  const handleFitChange = async(e) => {
    const checked = e.target.checked;   //true ya false
    setIsFitChecked(checked);

    if(checked){
      setMessage("Model Fitted Successfully!!"); 
      ///abhi dummy msg show kiya h , 
      // baad mein Backend ko request bhejna aur Backend response ke basis par message show karna hai
    }
    else{
      setMessage("");
    }
  };


  const handleForecastChange = async(e) =>{
    const checked = e.target.checked;
    setIsForecastChecked(checked);

    if(checked){
      setForecastMessage("Forecasting..");
    }else{
      setForecastMessage("")
    }
  }


  return (
    <div className="Forecast">
        <div className="Forecast-title">Forecast</div>
        <p>Fit the model on the data and generate future predictions</p>
        <div className="model-fitting">
            <p>Load a time series to activate</p>
            <div className="model-fiiting-options">
                <label > <input type="checkbox"  onChange={handleFitChange} checked={isFitChecked}/> Initialize model(Fit) </label>
                {/* Message section */}
                {message && <div className="message-box">{message}</div>}

                <label > <input type="checkbox" onChange={handleForecastChange} checked={isForecastChecked}/> Generate Forecast(Predict) </label>
                {/* Message section */}
                {Forecastmessage && <div className="message-box">{Forecastmessage}</div>}
                <label > <input type="checkbox" /> Show components </label>
            </div>
        </div>
    </div>
  )
}

export default Forecast