import React, { useState } from 'react'
import './Analysis.css'
import assets from '../../assets/assets'
import ParameterConfig from '../../components/ParameterConfig/ParameterConfig'
import Forecast from '../../components/Forecast/Forecast'




const Analysis = () => {

  const[file , setfile] = useState('')

  const HandleFileChange = (e) =>{
    const selectedFile =    e.target.files[0];
    setfile(selectedFile);
  }


  return (
    <div className="Analysis">
      <header>
        <button> Logout</button>
      </header>
      <div className="main_form">
        <form >

          <div className="data_loading">
          <h3>Data Loading</h3>
          <input type="file" id='file_upload' onChange={HandleFileChange} accept='.csv' hidden/>
          <label htmlFor="file_upload">
          <img src={assets.folder_upload}/>
          <span>Click to upload file</span>
          </label>
          
          {file && 
          (
            <div className="file-wrapper">
            <p> <strong>File : </strong> {file.name}</p>
            <p><strong>Size : </strong>{(file.size / 1024).toFixed(2)}KB </p> 
            </div>
          )}
          </div>
          
          <div className="parameter-wrapper">
          <ParameterConfig />
          </div>
          
          <div className="parameter-wrapper">
          <Forecast />
          </div>

        </form>
      </div>
    </div>
  );
}

export default Analysis
