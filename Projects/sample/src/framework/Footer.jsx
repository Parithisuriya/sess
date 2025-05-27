import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white-200 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center md:items-start gap-10 px-4 sm:px-6">
        
        {/* Opening Hours */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3">
          <div className="bg-cyan-500 rounded-full p-4 mb-4">
            <img src="/run-icon.png" alt="Opening Hours Icon" className="h-10 w-10" />
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg sm:text-xl">Opening Hours</h3>
            <p className="text-base sm:text-lg">📅 Monday - Saturday: 10:00 AM - 08:00 PM</p>
            <p className="text-base sm:text-lg">📅 Sunday: Holiday</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3">
          <div className="bg-cyan-500 rounded-full p-4 mb-4">
            <img src="/phone-icon.png" alt="Phone Icon" className="h-10 w-10" />
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg sm:text-xl">Contact Info</h3>
            <p className="text-base sm:text-lg">📧 kanakasikhamonychellapan@gmail.com</p>
            <p className="text-base sm:text-lg">📞 +91 9739943744</p>
          </div>
        </div>

        {/* Office Location */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3">
          <div className="bg-cyan-500 rounded-full p-4 mb-4">
            <img src="/location-icon.png" alt="Location Icon" className="h-10 w-10" />
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg sm:text-xl">Our Office</h3>
            <p className="text-base sm:text-lg">
              Prem Bhavan, Fathimapuram,<br />
              Kollemcode, PIN - 629160
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
