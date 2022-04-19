#!/bin/bash

source DB_invoices.sh

function app() {
    while [ 1 ]; do
        echo -ne "
        Welcome to invoices app
        1- Display Invoices.
        2- Insert Invoice.
        3- Delete Invoice.
        4- Exit.
        Please choose an option:  "
        
        read -r choice
        
        case $choice in
            1)
                display_invoices
            ;;
            2)
                insert_invoice
            ;;
            3)
                delete_invoice
            ;;
            4)
                echo "Thank you for using our app."
                exit 0
            ;;
            *)
                echo "Wrong option, Please choose an option from the menu"
                exit 1
            ;;
        esac
    done
}

app