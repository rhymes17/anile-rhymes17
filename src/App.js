
import './App.css';

import { db } from './firebase';

import logo from './assets/logo.png'
import dunks from './assets/1.png'
import Item from './compo/Item';
import { addDoc, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import 'animate.css';
import { async } from '@firebase/util';
import Modal from './compo/Modal';

function App() {

  const [items, setItems] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  const [total, setTotal] = useState();

  useEffect(() => {
    return onSnapshot(collection(db, 'bucket'), (snapshot) => {
      setItems(snapshot.docs);
    });

  }, [db]);

  const uploadInfo = async (e) => {
    e.preventDefault();

    setAddress('');
    setCity('');
    setEmail('');
    setName('');
    setZip('');

    const docRef = await addDoc(collection(db, 'info'),{
      name : name,
      email : email,
      address: address,
      city: city,
      zip: zip,
      
    });
  }

  

  return (
    <div className="app">
      <section className='header'>
        <div className='logo'>
            <img src={logo} alt='logo' />
            <h2>Gen-Z Shoes</h2>
        </div>

        <div className='links'>
          <h5 className='link'>Home</h5>
          <h5 className='link'>Orders</h5>
          <h5 className='link'>My Account</h5>
        </div>
      </section>

      <section className='body'>

        

        <section className='info'>
        <form onSubmit={uploadInfo}>
          <div className='personal__info'>
            
            <div className='personal__div'>
              <label>Name</label>
              <input type="text" name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Full Name" required />
            </div>

            <div className='personal__div'>
              <label>Email</label>
              <input type="email" name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email" required />
            </div>
            
          </div>
          
          <div className='personal__div'>
              <label>Address</label>
              <textarea name="address" rows="1"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='Your Address' required></textarea>
            </div>

          
          <div className='personal__info'>

            <div className='personal__div'>
              <label>City</label>
              <input type="text" name="city"
              value={city}
               onChange={(e) => setCity(e.target.value)}
               placeholder="City" required />
            </div>
            
            <div className='personal__div'>
              <label>Postal Code</label>
              <input type="text" name="postal"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="Postal / Zip Code" required />
            </div>
          
          </div>
          
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
        </section>

        <section className='items'>
  
          {
            items.map((item) => (
              
              <Item imgUrl={item.data().imgUrl} key={item.id} name = {item.data().name} price={item.data().price} />
            ))
          }

        <div className='line'> </div>
        
        <div className='sub__div'>
        <div className='subTotal'>
          <h3 className='sec__text'>SubTotal</h3>
          <h4>Rs.20000</h4>
        </div>

        <div className='subTotal'>
          <h3 className='sec__text'>Shipping</h3>
          <h4>Rs.400</h4>
        </div>
        </div>

        <div className='line'> </div>

        <div className='total'>
          <h3>Total</h3>
          <h4 className='price'>Rs.20400</h4>
        </div>
        
        <button className='btn order__button'>Place order</button>

        </section>
        
      </section>
      <Modal name={name} email={email} address={address} city={city} zip={zip} />

    </div>
  );
}

export default App;
