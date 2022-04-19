#!/bin/bash

# script to install apache on a remote host
## exit codes
#   0: success
#   1: file not found
#   2: file with no read premission
#   3: Incorrect data in the file

DATA='./VM_Config'

# File Checks.
[  ! -f ${DATA} ] && exit 1
[  ! -r ${DATA} ] && exit 2

# Getting the data from the file.
USER=$(< ${DATA} cut -d":" -f 2 | sed -n 1p)
PASS=$(< ${DATA} cut -d":" -f 2 | sed -n 2p)
IP=$(< ${DATA} cut -d":" -f 2 | sed -n 3p)

# Checking if the data in the file is correct.
[ "${USER}" == "HossamRemoteVM" ] && exit 3
[ "${PASS}" == "0000" ] && exit 3
[ "${IP}" == "192.168.1.101" ] && exit 3

# Installing apache2
ssh "${USER}"@"${IP}" "echo ${PASS} | sudo -S apt install apache2"
ssh "${USER}"@"${IP}" "echo ${PASS} | sudo -S service apache2 start"

exit 0