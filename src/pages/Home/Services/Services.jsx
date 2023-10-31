import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";



const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]) 
    return (
        <div>
            <div className="text-center space-y-5 mt-10">
                 <h3 className="text-[#FF3811] text-xl font-bold">Services</h3>
                 <h2 className="text-5xl font-bold">Our Service Area</h2>
                 <p className="text-base text-gray-500">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;