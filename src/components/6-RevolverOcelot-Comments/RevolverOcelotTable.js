import React from 'react';
import { Table, Button } from 'reactstrap';

const RevolverOcelotTable = (props) => {
  return (
    <div>
      <h3>Revolver Ocelot</h3>
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
                <Button className="editBox" id={authcomment.id} onClick={props.delete} color="danger">Delete</Button>
                <Button className="editBox" id={authcomment.id} onClick={e => props.update(e, authcomment)} color="warning">Update</Button>
              </td>
            </tr>
          )})}
        </tbody>
      </Table>
    </div>
  )
}

export default RevolverOcelotTable;