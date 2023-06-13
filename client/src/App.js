import React, { useState, Fragment } from "react";
import "./App.css";
import Heading from "./components/Header";
import Button from "./components/MsgButton";
import Chakras from "./components/Chakras";

var mqtt = require('mqtt');
const username = 'Communikey';
const password = 'talkToM3@h1vemq';
var count = 0;
var mymessage = "";
var messages = ["Element 1", "element 2", "element 3", " element 4", "element 5"];

var options = {
  username,
  password,
  retain: true,
  clientId: "mqttjs01",
  qos: 1
};


var client = mqtt.connect("wss://e392ddf2f8ae4c36b47cc789127d293e.s2.eu.hivemq.cloud:8884/mqtt", options);
var topic = "Almeria22";

client.subscribe(topic, { qos: 1 }); //single topic

const App=() => {
  var note;

  client.on("connect", function () {
    console.log("connected  " + client.connected);

  })
  client.on("message", function (topic, message) {
    note = message.toString();
    // Updates React state with message
    setMsg(note);
    console.log(note);
    const newMessages =[...messages];
    newMessages.unshift(note);
    newMessages.pop();
    setMessages(newMessages);
  });

  const [msg, setMsg] = useState(
    <Fragment>
      <em>...</em>
    </Fragment>
  );

 const [messages, setMessages]= useState(["Element 1", "element 2", "element 3", " element 4", "element 5"]);

  function publish(topic, msg, options) {


    if (client.connected == true) {

      client.publish(topic, msg, options);

    }
    count += 1;
    if (count == 2) //ens script
      clearTimeout(timer_id); //stop timer
    client.end();
  }
  var timer_id = setInterval(function () { publish(topic, mymessage, options); }, 5000);

  const push = ()=> {
    const newMessages =[...messages];
    newMessages.unshift("lol");
    newMessages.pop();
    setMessages(newMessages);
  }

  return (

    <div>
      <section id="Header">
        <Heading />
      </section>

      <section id="outgoing">
        <div className="box" id="Messaging">
          <Button onClick={push} text="senden" />
        </div>
        <div className="box" id="Chakras">
         
          <Button text="speichern" />
        </div>
      </section>

      <section className="box" id="Feed">
        <div>
          <ul>
            {messages.map((element, index) => (<li key={index}>{element}</li>))}
            
          </ul>
        </div>
      </section>




    </div>

  );
}
export default App;