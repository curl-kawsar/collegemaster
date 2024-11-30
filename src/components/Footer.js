import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-8 mt-8">
      <div className="flex justify-start mb-8">
        <img src="/F.png" alt="Logo" className="h-16" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">Home</li>
            <li className="mb-2">About</li>
            <li className="mb-2">Services</li>
            <li className="mb-2">Partnership</li>
            <li className="mb-2">Packages</li>
            <li className="mb-2">Meet Our Team</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul>
            <li className="mb-2">5-Day Intensive</li>
            <li className="mb-2">Test Prep</li>
            <li className="mb-2">Admissions Service</li>
            <li className="mb-2">Scholarships</li>
            <li className="mb-2">Internship</li>
            <li className="mb-2">Events</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Countries</h3>
          <ul>
            <li className="mb-2">Saudi Arabia</li>
            <li className="mb-2">UAE</li>
            <li className="mb-2">Qatar</li>
            <li className="mb-2">Oman</li>
            <li className="mb-2">Kuwait</li>
            <li className="mb-2">Bahrain</li>
            <li className="mb-2">China</li>
            <li className="mb-2">India</li>
            <li>Qatar</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Subscribe Our Newsletter</h3>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mt-2 rounded border"
          />
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white h-6 w-6" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white h-6 w-6" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-white h-6 w-6" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-white h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}