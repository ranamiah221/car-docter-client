 import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const {_id, title, img, price }=service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} className="rounded-xl w-full h-full" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-3xl font-medium">{title}</h2>
        <div>
          <p className="text-xl font-medium text-red-600">Price : $ {price}</p>
            <Link to={`/checkout/${_id}`}>
                 <button className="btn btn-primary mt-4">Book Now</button>
            </Link>
        </div>
          
        </div>
      </div>
    );
};

export default ServiceCard;