import {
  UserIcon,
  CakeIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function PatientCard({ patient, onViewDetails }) {
  return (
    <div className="bg-card rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-[#2463eb1a] flex items-center justify-center">
              <UserIcon className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div>
            <div className="text-lg font-bold text-primary">{patient.name}</div>
          </div>
        </div>

        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <CakeIcon className="h-4 w-4 mr-2 text-gray-400" />
            <span>{patient.age} years old</span>
          </div>
          <div className="flex items-center">
            <PhoneIcon className="h-4 w-4 mr-2 text-gray-400" />
            <span>{patient.contact}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-2 text-gray-400" />
            <span>Last visit: {patient.lastVisit}</span>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => onViewDetails(patient)}
            className="w-full bg-accent text-accent-foreground font-semibold py-2 px-4 rounded-lg cursor-pointer hover:!bg-[#19b86ee6] transition-colors duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
