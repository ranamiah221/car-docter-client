import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingsRow from "./BookingsRow";
import axios from "axios";



const Bookings = () => {
    const {user}= useContext(AuthContext);
    const [bookings, setBookings]= useState([]);
    const url= `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(()=>{
      axios.get(url, {withCredentials: true})
      .then(res =>{
        setBookings(res.data)
      })
        // fetch(url)
        // .then(res => res.json())
        // .then(data => setBookings(data))
    },[url])

    const handleDelete = id =>{
      const proceed = confirm('Are you sure want to delete');
      if(proceed){
        fetch(`http://localhost:5000/bookings/${id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount>0){
            alert('deleted successful');
            const remaining = bookings.filter(booking => booking._id !== id);
             setBookings(remaining);
          }
        })
      }
    }
    const handleBookingConfirm= id =>{
      const proceed = confirm('Are you sure want to Confirm');
      if(proceed){
        fetch(`http://localhost:5000/bookings/${id}`,{
          method:'PATCH',
          headers:{
            'content-type':'application/json',
          },
          body:JSON.stringify({status:'confirm'}),
        })
        .then(res=>res.json())
        .then(data =>{
          console.log(data)
          if(data.modifiedCount>0){
            alert('confirm')
            const remaining = bookings.filter(booking => booking._id !== id);
            const updated = bookings.find( booking=>booking._id ==id);
            updated.status='confirm'
            const newBooking = [updated, ...remaining];
            setBookings(newBooking); 
          }
        })
      }
    }
    return (
        <div>
            <h2 className="text-5xl font-medium text-center m-10">Your Booking :{bookings.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>service</th>
        <th>order date</th>
        <th>price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        bookings.map(booking => <BookingsRow key={booking._id} booking={booking}
        handleDelete={handleDelete}
        handleBookingConfirm={handleBookingConfirm}
        ></BookingsRow>)
      }
   
   
    </tbody>
   
    
  </table>
</div>

        </div>
    );
};

export default Bookings;