import React from "react";
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

const orders = [
  {
    userName: 'John Smith',
    phone: '89514900000',
    order: [
      {
        name: 'Суши 1',
        count: 1,
        pricePerItem: 590
      },
      {
        name: 'Суши 2',
        count: 2,
        pricePerItem: 590
      }
    ]
  },
  {
    userName: 'Denis Kikot',
    phone: '89514900000',
    order: [
      {
        name: 'Суши 1',
        count: 3,
        pricePerItem: 590
      },
      {
        name: 'Суши 2',
        count: 1,
        pricePerItem: 590
      }
    ]
  }
]

const TableRow = ({item}) => {
  const {userName, phone, order} = item;
  const itemList = order.map(i => {return `${i.name} (${i.count})`}).join(', ');
  const orderCost = order.reduce(
    (previousValue, currentValue) => previousValue + currentValue.count * currentValue.pricePerItem,
    0
  );

  console.log(orderCost)
  return (
    <Tr>
      <Td>{userName}</Td>
      <Td>{phone}</Td>
      <Td>{itemList}</Td>
      <Td isNumeric>{orderCost}</Td>
    </Tr>
  );
}

export default function Dashboard() {
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
            {orders.map((order, id) => {
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