## Database Handling Script.

source DB_User_Config.sh

function display_invoices {
    mysql -u $USER -p$PASS -e "select * from Bash_Scripting_DB.invoices;"
}

function insert_invoice {
    echo "enter customer name :"
    read cust_name
    echo "enter invoice date :"
    read inv_date
    echo "enter invoice total :"
    read inv_total
    
    mysql -u $USER -p$PASS -e "INSERT INTO Bash_Scripting_DB.invoices (Cust_name,inv_date, inv_total) VALUES (\"$cust_name\",\"$inv_date\", $inv_total);"

    echo "Invoice was inserted successfully!"
}

function delete_invoice {
    echo "Enter The ID of the employee that you want to delete :"
    read cust_id

    mysql -u $USER -p$PASS -e "DELETE FROM Bash_Scripting_DB.invoice_detail WHERE id=$cust_id;"

    echo "Invoice was deleted successfully!"
}