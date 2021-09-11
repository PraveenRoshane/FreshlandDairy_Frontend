import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import ShopOrderService from '../../API/ShopOrderService';
import Moment from 'moment';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  tableHeader: {
    fontWeight: 600,
  }
}));

export default function Orders() {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);

  const loaddata = () => {
    ShopOrderService.RerieveAllOrders()
      .then(response => { setOrders(response.data) })
  }

  useEffect(loaddata);

  return (
    <React.Fragment>
      <br/>
      <Title>All Orders</Title>
      <br/>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeader}>Transaction Number</TableCell>
            <TableCell className={classes.tableHeader}>Date</TableCell>
            <TableCell className={classes.tableHeader}>Name</TableCell>
            <TableCell className={classes.tableHeader}>Ship To</TableCell>
            <TableCell className={classes.tableHeader}>Contact Number</TableCell>
            <TableCell className={classes.tableHeader} align="right">Sale Amount</TableCell>
          </TableRow>  
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow key={row.transactionID}>
              <TableCell>{row.transactionID}</TableCell>
              <TableCell>{Moment(row.date).format('DD-MM-YYYY')}</TableCell>
              <TableCell>{row.customerName}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.number}</TableCell>
              <TableCell align="right">{parseFloat(row.amount).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}