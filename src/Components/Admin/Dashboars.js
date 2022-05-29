import React, { useEffect, useState } from "react";
import {
  Center,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Flex,
  Tfoot,
  Badge
} from "@chakra-ui/react";
import axios from "axios";

// const orders = [
//   {
//     userName: 'John Smith',
//     phone: '89514900000',
//     order: [
//       {
//         name: 'Суши 1',
//         count: 1,
//         pricePerItem: 590
//       },
//       {
//         name: 'Суши 2',
//         count: 2,
//         pricePerItem: 590
//       }
//     ]
//   },
//   {
//     userName: 'Denis Kikot',
//     phone: '89514900000',
//     order: [
//       {
//         name: 'Суши 1',
//         count: 3,
//         pricePerItem: 590
//       },
//       {
//         name: 'Суши 2',
//         count: 1,
//         pricePerItem: 590
//       }
//     ]
//   }
// ]

const TableRow = ({item}) => {
  return (
    <Tr>
      <Td>{item.user}</Td>
      <Td>{item.phone}</Td>
      <Td>{item.info}</Td>
      <Td isNumeric>{item.sum}</Td>
    </Tr>
  );
}

export default function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('https://sushi-shopp.herokuapp.com/api/orders')
      .then((res) => {
        setOrders(res.data.orders)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Center>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Таблица заказов</TableCaption>
          <Thead>
            <Tr>
              <Th>Пользователь</Th>
              <Th>Номер телефона</Th>
              <Th>Заказ</Th>
              <Th isNumeric>Сумма</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders && orders.map((order, id) => {
              return (
                <React.Fragment key={`order-${id}`}>
                  <TableRow item={order}/>
                </React.Fragment>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Center>
  );
}