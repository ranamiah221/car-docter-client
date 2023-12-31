import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();
    const { _id, title , price, img} = service;
    const { user }= useContext(AuthContext);

    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking ={
             customerName : name,
             email,
             date,
             img, 
             price : price,
             service_id: _id,
             service: title
        }
       
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers:{
                'content-type':'application/json',
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.insertedId){
                alert('service booked successfully');
            }
        })
    }
    return (
        <div>
            <h2 className="text-center text-4xl font-medium m-5">Booked Service : {title}</h2>
                <form onSubmit={handleBookService}>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                             <div className="form-control">
                                <label className="label">
                                      <span className="label-text">Name</span>
                                 </label>
                                      <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                             </div>
         
                             <div className="form-control">
                                 <label className="label">
                                       <span className="label-text">Date</span>
                                 </label>
                                      <input type="date" name="date" className="input input-bordered" required />
                             </div>
                             <div className="form-control">
                                  <label className="label">
                                      <span className="label-text">Email</span>
                                 </label>
                                        <input type="text" name="email" placeholder="email" defaultValue={user?.email}  className="input input-bordered" required />
                             </div>
                              <div className="form-control">
                                   <label className="label">
                                      <span className="label-text">Due amount</span>
                                  </label>
                                       <input type="text" defaultValue={price} className="input input-bordered" required />
                             </div>

                        </div>

                           <div className="form-control mt-6">
                                 <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                           </div>
                 </form> 
         </div>
    );
};

export default CheckOut;