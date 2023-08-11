import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { mockTransactions } from "../mockData";
import Typography from '@mui/material/Typography';

function TransactionLog() {
  return (
    <div className='transactions'>
      <center><Typography component="h1" variant="h4" color="primary">
      Recent Transactions</Typography></center>
      <List>
        {mockTransactions.map((transaction, index) => (
          <div key={index}>
            <ListItem>
              {`ID: ${transaction.txId}`}</ListItem>

              <ListItem>{`User: ${transaction.user}, 
              Date: ${transaction.date}, 
              Cost: $${transaction.cost}`}
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );
}

export default TransactionLog;
