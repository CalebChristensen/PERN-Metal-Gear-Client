import React from 'react';
import { Table, Button } from 'reactstrap';

const TheBossTable = (props) => {
  return (
    <div className="App2">
      <h3>The Boss</h3>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {
          props.authcomment.map((authcomment, id) => {
          return (
              <tr key={id}>
              <th scope="row">{authcomment.id}</th>
              <td>{authcomment.username}</td>
              <td>{authcomment.authcomment}</td>
              <td>
                <Button className="editBox" id={authcomment.id} onClick={props.delete} >Delete</Button>
                <Button className="editBox" id={authcomment.id} onClick={e => props.update(e, authcomment)} >Update</Button>
              </td>
            </tr>
          )})}
        </tbody>
      </Table>
    </div>
  )
}

export default TheBossTable;