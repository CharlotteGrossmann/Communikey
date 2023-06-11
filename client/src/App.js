import React, { useState, Fragment } from "react";
import "./App.css";
 
var mqtt = require('mqtt');
const username = 'Communikey';
const password = 'talkToM3@h1vemq';

var options = {
  username,
  password,
  retain: true,
  clientId: "mqttjs01" ,
  qos: 1
};


var client = mqtt.connect("wss://e392ddf2f8ae4c36b47cc789127d293e.s2.eu.hivemq.cloud:8884/mqtt",options) ;
var topic = "Almeria22";

client.subscribe(topic, { qos: 1 }); //single topic

function App() {
  var note;
  
  client.on("connect", function () {
    console.log("connected  " + client.connected);

})
  client.on("message", function (topic, message) {
    note = message.toString();
    // Updates React state with message
    setMsg(note);
    console.log(note);
    
  });
 
  // Sets default React state
  const [msg, setMsg] = useState(
    <Fragment>
      <em>...</em>
    </Fragment>
  );
 


  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello MQTT in React</h1>
        <p>The message payload is: {msg}</p>
      </header>
    </div>
  );
}
export default App;