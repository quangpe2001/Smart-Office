import React from 'react';
import './index.css';
import Bach_khoa_logo from "../Assets/Bach_khoa_logo.png";


const index = () => {
    return (
      
        <body>
        <div class="header">
            <table className="table_header" border="0">
                <tr>
                    <td><img src={Bach_khoa_logo} className="logo" alt=""/><p className="header_title">Bach Khoa Smart Office</p> </td>
                </tr>
            </table>
            <br></br>
            
            <table className="table_body" border="1">
                <tr border="1">
                    <td className="td1">Humidity</td>
                    <td className="td1">Light intensity</td>
                </tr>
                <tr>
                    <td className="td2">
                        <div className="tab">
                            <div className="humidity">
                                <div className="outer">
                                    <div className="inner">
                                        <div id="number">
                                            65%
                                        </div>
                                    </div>
                                </div>
                        
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#e91e63" />
                                        <stop offset="100%" stop-color="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>
                            </div>
                        </div>
                    </td>

                    <td className="td2">
                        <div className="tab">
                            <div className="humidity">
                                <div className="outer">
                                    <div className="inner">
                                        <div id="number1">
                                            65%
                                        </div>
                                    </div>
                                </div>
                        
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#e91e63" />
                                        <stop offset="100%" stop-color="#673ab7" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>
                            </div>
                        </div>
                    </td>
                    
                    
                </tr>
                <tr>
                    <td className="td3">Temperature</td>
                    <td className="td3">LED Automation</td>
                </tr>
                <tr>
                <td className="td4">
                    <tab className="thermal iicon">
                        <i class="bi bi-thermometer-half "></i>30<sup>o</sup>C
                    </tab>
                </td>
                <td className="td4">
                    <div class="center">
                        <input type="checkbox"></input>
                    </div>
                </td>
                </tr>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </table>
            {/* <table className="table_body" border="0">
                <tr>
                    <td className="td3">Temperature</td>
                    <td className="td3">LED Automation</td>
                </tr>
                {/* <tr>
                <td className="td3"><i class="bi bi-thermometer-half"></i><p class="thermal">30<sup>o</sup>C</p></td>
                <td className="td3">
                    <div class="center">
                        <input type="checkbox"></input>
                    </div>
                </td>
                </tr>
            </table>      */}
        </div>
        </body>
    )
}

export default index