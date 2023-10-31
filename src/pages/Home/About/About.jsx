import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                 <div className="lg:w-1/2 relative">
                     <img src={person} className='w-3/4 rounded-lg ' />
                     <img src={parts} className='w-1/2 rounded absolute right-4 top-1/2 border-8 border-white' />
                 </div>
                       
                  <div className=" lg:w-1/2">
                    <h4 className='text-[#FF3811] text-xl font-bold mb-5'>About Us</h4>
                       <h1 className="text-7xl font-bold mb-8">We are qualified & of experience in this field</h1>
                       <p className="py-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                       <p className='mb-8'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                      <button className="btn bg-red-500 text-white">Get More Info </button>
                  </div>
  </div>
</div>
    );
};

export default About;