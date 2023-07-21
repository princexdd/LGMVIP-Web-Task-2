import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const delay = (seconds) => new Promise(resolve => setTimeout(resolve,seconds*1000));
  const wait = 1;
  const loadUser = async () => {
    setLoading(true);

    const response = await fetch('https://reqres.in/api/users?page=1');
    await delay(wait)

    const jsonResponse = await response.json();
    setLoading(false);
    setUsers(jsonResponse.data);
  };
  return (
   
    <div>
      <div className='loading'>
        {loading ? <>Loading.....</> : <> </>}
      </div>
      <div className="header">
        <h1 className="Brand-name">LGMVIP</h1>
        <button className="head-btn"  onClick={loadUser}>
        Get Users 
        </button>
      </div>
    
      <div className="user-data">
        {users.map(({ id, email, first_name, last_name, avatar }) => (
          <div className="card" style={{ width: '12rem' }}>
            <div className="main">
              <img className="card-img" src={avatar} alt="Cardimage" />
              <div className="card-body">
                <h5 className="card-id" key={id}>
                  ID: {id}
                </h5>
                <h5
                  className="card-title"
                  key={id}
                >{`${first_name} ${last_name}`}</h5>
                <p className="card-text" key={id}>
                  {email}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
