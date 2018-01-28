var os = require('os');

function setTime(uptime) {
	var uptime = os.uptime();
	var hrs = Math.floor(uptime / 3600);
	var min = Math.floor(uptime % 3600 / 60);
	var sec = Math.floor(uptime % 3600 - min * 60);
	return hrs + 'hrs ' + min + 'min ' + sec + 'sec';
}
exports.fixTime = setTime;