import React, { useState, Fragment } from "react";
import "./App.css";
import Heading from "./components/Header";
import Button from "./components/MsgButton";
import mqtt from "precompiled-mqtt"
import MessageBox from "./components/MessageBox";
import {useRef} from 'react';

const username = 'Communikey';
const password = 'talkToM3@h1vemq';
var count = 0;
var mymessage = "";
var messages = ["Element 1", "element 2", "element 3", " element 4", "element 5"];

var options = {
  username,
  password,
  retain: false,
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
    
    const newMessages =[...messages];
    newMessages.unshift(note);
    //newMessages.pop();
    setMessages(newMessages);
    
  });

  

 const [messages, setMessages]= useState(["Element 1", "element 2", "element 3", " element 4", "element 5"]);

  function publish(topic, msg, options) {

    
    if (client.connected == true) {

      client.publish(topic, msg, options);

    }
    
  }

  const push = ()=> {
    var mymessage = ref.current.value + " " + username;
    publish("Almeria22",mymessage)
  }

  let data = `name,age,city\\

      John,30,New York\\

      Jane,40,London\\

      Mike,25,Paris`;

let array = data.split("\\n").map(function (line) {
    return line.split(",");
});

console.log(array);

  const ref = useRef(null);

  return (

    <div>
      <section id="Header">
        <Heading />
      </section>

      <section id="outgoing">
        <div className="box" id="Messaging">
            <label htmlFor="message">My Textarea</label>
          <textarea ref={ref} id="message" name="message" />

          
          <Button onClick={push} text="senden" />
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