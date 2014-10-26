#!/bin/bash

while true; do
	sshpass -p hackathon ssh hackathon@192.168.1.146 'cd /opt/Raptor/; sudo python3 raptor.py appliance 0 all; exit' > tmpdata.csv
	cp tmpdata.csv permdata.csv
done
