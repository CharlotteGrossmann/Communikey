
function MQTTConnect() {

var mqtt = require('mqtt');
var count = 0;
var client = mqtt.connect("mqtt://broker.hivemq.com", { clientId: "mqttjs01" });

//handle incoming messages
client.on('message', function (topic, message, packet) {
    console.log("message is " + message);
});


client.on("connect", function () {
    console.log("connected  " + client.connected);

})
//handle errors
client.on("error", function (error) {
    console.log("Can't connect" + error);
    process.exit(1)
});
//publish
function publish(topic, msg, options) {


    if (client.connected == true) {

        client.publish(topic, msg, options);

    }
    count += 1;
    if (count == 2) //ens script
        clearTimeout(timer_id); //stop timer
    client.end();
}

//////////////

var options = {
    retain: true,
    qos: 1
};
var topic = "Almeria22";
var message = "love this";
var topic_list = ["Almeria22"];
var topic_o = { "topic22": 2 };
client.subscribe(topic, { qos: 1 }); //single topic
var timer_id = setInterval(function () { publish(topic, message, options); }, 5000);
}
export default MQTTConnect;