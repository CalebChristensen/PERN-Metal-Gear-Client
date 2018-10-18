import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const TheBossT = (props) => {
  return (
    <div>
      <hr />
      <Table>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Name</Th>
            <Th>Nationality</Th>
            <Th>Birth</Th>
            <Th>Death</Th>
            <Th>Weapon</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
          props.characters.map((character, id) => {
          return (
              <Tr key={id}>
              <Th scope="row">{character.id}</Th>
              <Td>{character.nameOfCharacter}</Td>
              <Td>{character.nationality}</Td>
              <Td>{character.birth}</Td>
              <Td>{character.death}</Td>
              <Td>{character.favoriteWeapon}</Td>
            </Tr>
          )})}
        </Tbody>
      </Table>
    </div>
  )
}

export default TheBossT;