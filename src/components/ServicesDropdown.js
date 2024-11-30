import { FaUser, FaMapMarkerAlt, FaCalendarAlt, FaShoppingBag } from 'react-icons/fa';

export default function ServicesDropdown() {
  return (
    <section className="p-4 md:p-8 bg-white shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-blue-600 mb-4">Choose Service</h2>
          <select className="w-full border border-gray-300 rounded p-2">
            <option value="default">Default</option>
            <option value="tutoring">Tutoring</option>
          </select>
          <ul className="mt-4">
            <li className="p-2 border-b">SAT</li>
            <li className="p-2 border-b">Math</li>
            <li className="p-2">English</li>
          </ul>
        </div>
        <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg">
          <h2 className="text-lg md:text-xl font-bold text-blue-600 mb-4">Booking Details</h2>
          <form>
            <div className="relative mb-4">
              <FaShoppingBag className="absolute left-3 top-3 text-gray-400" />
              <p className="pl-10">Service</p>
            </div>
            <div className="relative mb-4">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <p className="pl-10">Employee</p>
            </div>
            <div className="relative mb-4">
              <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
              <p className="pl-10">Location</p>
            </div>
            <div className="relative mb-4">
              <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
              <p className="pl-10">Date & Time</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}