import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  MapPinIcon,
  ClockIcon,
  ClipboardDocumentListIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function PatientModal({ patient, isOpen, onClose }) {
  if (!patient) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 animate-fadeIn"
          : "opacity-0 animate-fadeOut pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div
        className={`relative bg-card rounded-2xl shadow-2xl w-full max-w-lg m-4 transition-transform duration-300 ${
          isOpen ? "animate-slideIn" : "animate-slideOut"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600  transition-colors"
            aria-label="Close"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <div className="text-center">
            <h2 className="text-2xl font-bold font-headline text-primary">
              {patient.name}
            </h2>
            <p className="text-sm text-gray-500 ">{patient.age} years old</p>
          </div>

          <div className="mt-6 border-t border-gray-200  pt-6 space-y-4 text-gray-700 ">
            <div className="flex items-start">
              <PhoneIcon className="h-5 w-5 mr-3 mt-1 text-gray-400 flex-shrink-0" />
              <div>
                <span className="font-semibold">Contact:</span>{" "}
                {patient.contact}
              </div>
            </div>
            <div className="flex items-start">
              <MapPinIcon className="h-5 w-5 mr-3 mt-1 text-gray-400 flex-shrink-0" />
              <div>
                <span className="font-semibold">Address:</span>{" "}
                {patient.address}
              </div>
            </div>
            <div className="flex items-start">
              <ClockIcon className="h-5 w-5 mr-3 mt-1 text-gray-400 flex-shrink-0" />
              <div>
                <span className="font-semibold">Last Visit:</span>{" "}
                {patient.lastVisit}
              </div>
            </div>
            <div className="flex items-start">
              <ClipboardDocumentListIcon className="h-5 w-5 mr-3 mt-1 text-gray-400 flex-shrink-0" />
              <div>
                <span className="font-semibold">Medical History:</span>{" "}
                {patient.medicalHistory}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 rounded-b-2xl text-right">
          <button
            onClick={onClose}
            className="bg-primary text-primary-foreground font-bold py-2 px-6 rounded-lg hover:!bg-[#2463ebe6] shadow-md transition-all duration-300 hover:cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
