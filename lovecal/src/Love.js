import React, {useState} from "react";
import axios from "axios";

import {
  Button,
} from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

const Love = () => {
  const [love, setLove] = useState(null)
  const [p1, setP1] = useState()
  const [p2, setP2] = useState()

  const fetchDetails = async ()=> {
    const options = {
      method: 'GET',
      url: 'https://love-calculator.p.rapidapi.com/getPercentage',
      params: {fname: p1, sname: p2},
      headers: {
        'x-rapidapi-key': 'fa56428338mshe8e5ab45e03c47ap1c811djsn2d705b1803d9',
        'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      setLove(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  return(
    <div className="container">
    <div className="jumbotron">
     <div className="container" style={{textAlign:"center"}}>
      <h1 className="display-4" style={{color:"#24292e"}}> Find Compatibility with your partner NOW! </h1>
      <p className="lead" style={{color:"#24292e"}}>Enter your name and the name of your partner/lover/crush to find Love compatibility and chances of successful love relationship.
      </p>          
    </div>
    </div>
    <div style={{textAlign:"center"}}>
      <div className="col-auto">
        <input
          type="text"
          value={p1}
          onChange={e => setP1(e.target.value)}
            placeholder="Your Name"
              />
        </div>
        <div>
          <br></br>
        </div>
        <div className="col-auto">
        <input
          type="text"
          value={p2}
          onChange={e => setP2(e.target.value)}
            placeholder="Partner's Name"
        />
        </div>
        <Button onClick={fetchDetails} color="primary mt-3">Find Compatability</Button>
      </div>
      {
        (love)?(
          <div className="mt-3">
          <p  style={{textAlign:"center"}}>Love Percentage: {love.percentage}</p>
          <p  style={{textAlign:"center"}}>Our say: {love.result}</p>
          </div>
        ):(
          null
        )
      }

    </div>
  );
};

export default Love;
