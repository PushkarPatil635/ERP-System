
'use client'
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const StudentForm = ({ onClose, formData = {}, setFormData }) => {


    // Update state with user input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        onClose();
        setFormData({});


        try {
            // Send POST request to the backend
            await axios.post('http://localhost:8000/students', formData);

            // Trigger a success notification
            alert('Student added successfully!');
            
            // Reset the form
           
        } catch (error) {
            console.error('There was an error adding the student:', error);
            alert('Failed to add student.');
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-1/3 shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-center w-full bg-gray-500 text-white px-4 py-2 rounded-lg mt-0">
                    <p>Add New Student</p>
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Student's Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name || ''}
                                onChange={handleInputChange}
                                className="mt-1 p-2 border border-gray-300 w-full rounded-md focus:border-blue-500 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email || ''}
                                onChange={handleInputChange}
                                className="mt-1 p-2 border border-gray-300 w-full rounded-md focus:border-blue-500 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch</label>
                            <select
                                id="branch"
                                name="branch"
                                value={formData.branch || ''}
                                onChange={handleInputChange}
                                className="mt-1 p-2 border border-gray-300 w-full rounded-md focus:border-blue-500 focus:outline-none"
                            >
                                <option value="" disabled>Select Branch</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Information Technology">Information Technology</option>
                                <option value="Civil">Civil</option>
                                <option value="AutoMobile">AutoMobile</option>
                                <option value="Mechanical">Mechanical</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">Birthday</label>
                            <input
                                type="date"
                                id="birthday"
                                name="birthday"
                                value={formData.birthday || ''}
                                onChange={handleInputChange}
                                className="mt-1 p-2 border border-gray-300 w-full rounded-md focus:border-blue-500 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            onC
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default StudentForm;

