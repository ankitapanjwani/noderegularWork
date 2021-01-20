const events = require("events");

const eventEmitter = new events.EventEmitter();

//subscirbe

var callback = x => {
  console.log("On listener console....", x);
};
var onl = eventEmitter.on("myEvent1", callback);

var callback2 = x => {
  console.log("AddListener console....", x);
};
var addl = eventEmitter.addListener("myEvent2", callback2);

//triggering the event

// eventEmitter.removeListener("myEvent2", callback2);
eventEmitter.emit("myEvent1", "Event through on..");

eventEmitter.emit("myEvent2", "Event through addListener..");

//  eventEmitter.emit("newEvent","fourth");

const os = require("os");

//the amount of free memory space in bytes..
console.log("os.freename(): ", os.freemem());

//user's current home directory..
console.log("os.homedir(): ", os.homedir());


//returns host name of os as string
console.log("os.hostname(): ", os.hostname());

//returns the endianness of the cpu for which the nodejs binary was compiled..
console.log("os.endianness(): ", os.endianness());


//system activity calculated by the os returned as array
console.log("os.loadavg() ", os.loadavg());

//returns the platform of os as string like darwin ,linux etc.
console.log("os.platform() ", os.platform());

// returns the os as string
console.log("os.release() ", os.release());

//returns the operating system's default directory for temporary files as a string.
console.log("os.tmpdir() ", os.tmpdir());

//returns total memory of system in bytes format
console.log("os.totalmem() ",os.totalmem());

//returns the name of os in string format
console.log("os.type() ", os.type());

