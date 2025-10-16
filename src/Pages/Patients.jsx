import React, { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import PatientCard from "../Components/PatientCard";
import PatientModal from "../Components/PatientModal";
import AddPatientModal from "../Components/AddPatientModal";
import { patients as mockPatients } from "../utils/mock-data";
import { PlusIcon } from "@heroicons/react/24/solid";

const getInitialPatients = () => {
  const savedPatients = localStorage.getItem("patients");
  const localPatients = savedPatients ? JSON.parse(savedPatients) : [];
  const combined = [...localPatients, ...mockPatients];
  const uniquePatients = combined.filter(
    (patient, index, self) =>
      index === self.findIndex((p) => p.id === patient.id)
  );
  return uniquePatients;
};

export default function PatientsPage() {
  const [allPatients, setAllPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load initial patients
  useEffect(() => {
    setIsLoading(true);
    try {
      setAllPatients(getInitialPatients());
      setError(null);
    } catch (err) {
      setError("Failed to fetch patients.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Filter patients when search query changes
  useEffect(() => {
    const results = allPatients.filter((patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPatients(results);
  }, [searchQuery, allPatients]);

  // Save new patients to localStorage
  useEffect(() => {
    const userAddedPatients = allPatients.filter(
      (p) => !mockPatients.some((mp) => mp.id === p.id)
    );
    localStorage.setItem("patients", JSON.stringify(userAddedPatients));
  }, [allPatients]);

  const handleViewDetails = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedPatient(null);
    }, 200);
  };

  const handleAddPatient = (newPatientData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newPatient = {
          id: Date.now(),
          ...newPatientData,
        };
        setAllPatients((prev) => [newPatient, ...prev]);
        resolve();
      }, 1000);
    });
  };

  return (
    <>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h1 className="text-3xl font-bold font-headline text-gray-800 text-center md:text-left">
            Patient Records
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="w-full sm:w-auto bg-primary cursor-pointer text-primary-foreground text-white font-semibold py-2 px-4 rounded-md shadow-md hover:!bg-[#2463ebe6] transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <PlusIcon className="h-5 w-5" />
              Add New Patient
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-16">
            <p className="text-gray-500">Loading patients...</p>
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredPatients.map((patient) => (
                <PatientCard
                  key={patient.id}
                  patient={patient}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>

            {filteredPatients.length === 0 && !isLoading && (
              <div className="text-center py-16">
                <p className="text-gray-500">
                  No patients found matching your search.
                </p>
              </div>
            )}
          </>
        )}
      </main>

      {selectedPatient && (
        <PatientModal
          patient={selectedPatient}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}

      <AddPatientModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddPatient={handleAddPatient}
      />
    </>
  );
}
