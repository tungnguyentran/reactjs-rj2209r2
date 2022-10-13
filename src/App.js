import logo from './logo.svg';
import './App.css';
import React from 'react';

const myStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h1>Project 01 - Todo List <span style={{ fontSize: '25px', color: 'gray'}}>React Js</span></h1>
        </div>
      </div>
      <hr />
      <div className='row'>
        <div className='col-4'>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder='Search item name' />
            <button className="btn btn-primary" type="button" id="button-addon2">Clear</button>
          </div>
        </div>
        <div className='col-3'>
          <div className="input-group mb-3">
            <select className="form-select" id="inputGroupSelect02">
              <option selected>Sort by</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <button class="btn btn-success" type="button">NAME - DESC</button>
          </div>
        </div>
        <div className='col-5'>
          <div className='row'>
            <div className='col-12 d-grid gap-2'>
              <button className='btn btn-primary btn-block'>Add Item</button>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-auto'>
              <input type="text" className="form-control" placeholder="Item name" />
            </div>
            <div className='col-auto'>
              <select className='form-select'>
                <option>Small</option>
              </select>
            </div>
            <div className='col-auto'>
              <button className='btn btn-primary'>Submit</button>
            </div>
            <div className='col-auto'>
              <button className='btn btn-outline-dark'>Cancel</button>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-12'>
          <div className='card border-success'>
          <h5 class="card-header bg-success text-white">List Item</h5>
          <div class="card-body">
            <table className='table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th className='text-center'>Level</th>
                  <th className='text-center'>Action</th>
                </tr>
                
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Tìm thấy mảnh vỡ máy bay rơi ở Iran làm 66 người chết</td>
                  <td className='text-center'><span className="badge text-bg-danger">High</span></td>
                  <td className='text-center'>
                    <button type='button' className='btn btn-warning' style={{ marginRight: '10px'}}>Edit</button>
                    <button type='button' className='btn btn-danger'>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><input type="text" className="form-control" value="F1 tổ chức ở Việt Name"/></td>
                  <td className='text-center'>
                    <select className='form-select'>
                      <option>Small</option>
                    </select>
                  </td>
                  <td className='text-center'>
                    <button type='button' className='btn btn-outline-dark' style={{ marginRight: '10px'}} onClick={() => {alert('Cancel')}}>Cancel</button>
                    <button type='button' className='btn btn-success'>Save</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
