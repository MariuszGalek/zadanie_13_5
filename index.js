var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    
    if(input !== null) {
    	var instruction = input.toString().trim();
    	switch (instruction) {
    		case '/exit':
    			process.stdout.write('Quitting app!\n');
            	process.exit();
            	break;
    		case 'language':
    			process.stdout.write('System language: ' + process.env.LANG + '\n');
    			break;
    		case 'version':
    			process.stdout.write('Node version: ' + process.versions.node + '\n');
    			break;
    		case '/getOSinfo':
    			OSinfo.print();
    			break;
    		default:
    			process.stderr.write('Wrong instruction!\n');
    	}
    }
});