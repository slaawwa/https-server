
# https-server + inspect (debug)

## Debug

### In Chrome

	chrome://inspect/#devices

### In terminal

	```
	npm run backend:dev
	```

## SSL

### For generate key.pem and cert.pem

	```
	openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout cnf/key.pem -out cnf/cert.pem
	```

	And put prompt infomation
