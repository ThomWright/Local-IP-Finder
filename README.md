# Local-IP-Finder

A quick and dirty utility I knocked up to help find the IP my TP-Link TL-WPA4220 is using. It seems to pick a random IP from `192.168.0.2-255` when it starts up.

This assumes there's nothing else on the network running on port 80. It prints the first IP it finds that responds with *200 - OK* or *401 - Unauthorized*, then exits.

Run `node index.js` to use.
