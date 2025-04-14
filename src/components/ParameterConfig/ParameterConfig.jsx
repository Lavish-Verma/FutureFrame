import React, { useState } from 'react'
import './ParameterConfig.css'




const ParameterConfig = () => {

  const [isHorizon , setisHorizon]  = useState(false)
  const [isGrowthModel , setisGrowthModel]  = useState(false)
  const [isSeasonality , setisSeasonality]  = useState(false)
  const [isTrendComponents , setisTrendComponents]  = useState(false)
  const [isHolidays , setisHolidays]  = useState(false)
  const [isHyperParameter , setisHyperParameter]  = useState(false)

  // const handleisOpen = () =>{
  //   setisHorizon(prev => !prev);
  //   setisGrowthModel(prev => !prev);
  //   setisSeasonality(prev => !prev);
  //   setisTrendComponents(prev => !prev);
  //   setisHolidays(prev => !prev);
  //   setisHyperParameter(prev => !prev);
  // };




  return (
    <div className="parameterConfig">
        <h2>Parameter Configuration</h2>
        <p>In this section you can modify the algorithm settings. </p>
        

        <div className="accordion-block">
                <div className="accordion-title">Horizon <span onClick={() => setisHorizon(prev => !prev)}> {isHorizon ? '-' : '+'}</span> </div>
                {isHorizon  && (
                  <div className="accordion-content">
                  <p> Write how many future periods (days) to forecast ? </p>
                <label> <input id='horizon' type="text" name='horizon' placeholder='Select period to forecast'/>  </label>
                </div>
                )}
            </div>

            <div className="accordion-block">
                <div className="accordion-title">Growth Model <span onClick={() => setisGrowthModel(prev => !prev)}>+</span> </div>
                {isGrowthModel && (<div className="accordion-content">
                <label> <input type="radio" name='growth' value='Linear' /> Linear </label>
                <label> <input type="radio" name='growth' value='Logistic' /> Logistic </label>
                </div>)}
            </div>
            
            <div className="accordion-block">
                <div className="accordion-title">Seasonality <span onClick={() => setisSeasonality(prev => !prev)} >+</span> </div>
                { isSeasonality && ( <div className="accordion-content">
                <label> <input type="radio" name='seasonality' value='additive' /> Additive </label>
                <label> <input type="radio" name='seasonality' value='multiplicative' /> Multiplicative </label>
                </div>)}
            </div>

            <div className="accordion-block">
                <div className="accordion-title">Trend Components <span onClick={() => setisTrendComponents(prev => !prev)}>+</span> </div>
                { isTrendComponents && (<div className="accordion-content">
                <label> <input type="checkbox" name='growth' value='Linear' /> Daily </label>
                <label> <input type="checkbox" name='growth' value='Logistic' /> Weekly </label>
                <label> <input type="checkbox" name='growth' value='Logistic' /> Monthly </label>
                <label> <input type="checkbox" name='growth' value='Logistic' /> Yearly </label>
                </div>)}
            </div>

            <div className="accordion-block">
                <div className="accordion-title">Holidays <span onClick={() => setisHolidays(prev => !prev)}>+</span> </div>
                { isHolidays && (<div className="accordion-content">
                <label> <input type="radio" name='holiday' value='Linear' /> Linear </label>
                <label> <input type="radio" name='holiday' value='Logistic' /> Logistic </label>
                </div>)}
            </div>

            <div className="accordion-block">
                <div className="accordion-title"> Hyper Parameter <span onClick={() => setisHyperParameter(prev => !prev)}>+</span> </div>
                {isHyperParameter && (<div className="accordion-content">
                <label> <input type="radio" name='growth' value='Linear' /> Linear </label>
                <label> <input type="radio" name='growth' value='Logistic' /> Logistic </label>
                </div>)}
            </div>
    </div>
  )
}

export default ParameterConfig