var os = require('os');
var colors = require('colors');
var setTime = require('../modules/setTime');

function getOSinfo() {
    var type = os.type();
	if(type === 'Darwin') {
    	type = 'OSX';
	} else if(type === 'Windows_NT') {
    	type = 'Windows';
	}
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var fixedTime = setTime.fixTime(uptime);
	var userInfo = os.userInfo();
	console.log('System:'.grey, type);
	console.log('Release:'.red, release);
	console.log('CPU model:'.blue, cpu);
	console.log('Uptime: '.green, fixedTime);
	console.log('User name:'.yellow, userInfo.username);
	console.log('Home dir:'.cyan, userInfo.homedir);
}

exports.print = getOSinfo;