import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function AddPatientModal({ isOpen, onClose, onAddPatient }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contact: "",
    address: "",
    medicalHistory: "",
    lastVisit: new Date().toISOString().split("T")[0], // Set today as default
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "contact") {
      // Allow only numbers and '+' for the contact field
      const numericValue = value.replace(/[^0-9+]/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.age ||
      !formData.contact ||
      !formData.address ||
      !formData.medicalHistory
    ) {
      setError("All fields are required.");
      return;
    }
    setError(null);
    setIsSubmitting(true);
    try {
      await onAddPatient(formData);
      handleClose();
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      name: "",
      age: "",
      contact: "",
      address: "",
      medicalHistory: "",
      lastVisit: new Date().toISOString().split("T")[0],
    });
    setError(null);
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 animate-fadeIn"
          : "opacity-0 animate-fadeOut pointer-events-none"
      }`}
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div
        className={`relative bg-card rounded-2xl shadow-2xl w-full max-w-lg m-4 transition-transform duration-300 ${
          isOpen ? "animate-slideIn" : "animate-slideOut"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit}>
          <div className="p-6 sm:p-8">
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 cursor-pointer right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <h2 className="text-2xl font-bold font-headline text-primary text-center">
              Add New Patient
            </h2>

            <div className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700  mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 bg-background py-2 px-3 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700  mb-1"
                >
                  Age
                </label>
                <input
                  type="text"
                  name="age"
                  id="age"
                  value={formData.age}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Allow only digits and up to 2 digits
                    if (/^\d{0,2}$/.test(value)) {
                      handleChange(e);
                    }
                  }}
                  maxLength="2"
                  required
                  inputMode="numeric"
                  pattern="\d{1,2}"
                  className="block w-full rounded-md border-0 bg-background py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700  mb-1"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contact"
                  id="contact"
                  value={formData.contact}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Allow only digits and limit to 10 characters
                    if (/^\d{0,10}$/.test(value)) {
                      handleChange(e);
                    }
                  }}
                  maxLength="10"
                  required
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  className="block w-full rounded-md border-0 bg-background py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700  mb-1"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 bg-background py-2 px-3 text-gray-900  ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label
                  htmlFor="medicalHistory"
                  className="block text-sm font-medium text-gray-700  mb-1"
                >
                  Medical History
                </label>
                <textarea
                  name="medicalHistory"
                  id="medicalHistory"
                  value={formData.medicalHistory}
                  onChange={handleChange}
                  rows="3"
                  required
                  className="block w-full rounded-md border-0 bg-background py-2 px-3 text-gray-900  ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
            {error && (
              <p className="mt-4 text-center text-sm text-red-600">{error}</p>
            )}
          </div>

          <div className="bg-gray-50 px-6 py-4 rounded-b-2xl flex justify-end items-center gap-4">
            <button
              type="button"
              onClick={handleClose}
              className="bg-gray-200 cursor-pointer text-gray-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition-all duration-300"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary cursor-pointer text-primary-foreground font-bold py-2 px-6 rounded-lg shadow-md hover:!bg-[#2463ebe6] transition-all duration-300 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding..." : "Add Patient"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
