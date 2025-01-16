"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const StudentTable = ({ students: initialStudents }) => {
    
    const [students, setStudents] = useState(initialStudents);
    

    // This effect will update the local state when new students are fetched
    useEffect(() => {
        setStudents(initialStudents);
    }, [initialStudents]);

    

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/students/${id}`);
            
            if (response.status === 200) {
                // Show success toast
                toast.success("Student deleted successfully!");
                alert("Student deleted successfully!")
    
                // Optimistically update the state by removing the student locally
                setStudents((prevStudents) => prevStudents.filter(student => student.id !== id));
    
                // Optionally fetch updated student list
               
            } else {
                // Show error toast if deletion was not successful
                toast.error("Failed to delete student. Please try again.");
                alert("Failed to delete student. Please try again.")
            }
        } catch (error) {
            console.error("Error deleting the student:", error);
            // Show error toast if there was an exception
            toast.error("An error occurred. Please try again.");
            alert("An error occurred. Please try again.")
        }
    };
    
    console.log("Students data:", students);
    
    return (
        <div>
            <div className="flex justify-center items-center mt-20 ml-72">
                <table className="w-[1500px] mx-auto mt-8 table-auto bg-white shadow-lg rounded-lg">
                    <thead className="bg-gray-300">
                        <tr>
                            <th className="py-4 px-6 border-b border-gray-200 text-gray-600 font-semibold text-center">ID</th>
                            <th className="py-4 px-6 border-b border-gray-200 text-gray-600 font-semibold text-center">Name</th>
                            <th className="py-4 px-6 border-b border-gray-200 text-gray-600 font-semibold text-center">Email</th>
                            <th className="py-4 px-6 border-b border-gray-200 text-gray-600 font-semibold text-center">Branch</th>
                            <th className="py-4 px-6 border-b border-gray-200 text-gray-600 font-semibold text-center">Birth Date</th>
                            <th className="py-4 px-6 border-b border-gray-200 text-gray-600 font-semibold text-center">Options</th>
                            
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {students && students.length > 0 ? (
                            students.map(student => (
                                <tr key={student.id} className="hover:bg-gray-50 transition duration-150 ease-in-out">
                                    <td className="text-center py-4 px-6 border-b border-gray-200 text-gray-700">{student.id}</td>
                                    <td className="text-center py-4 px-6 border-b border-gray-200 text-gray-700">{student.name}</td>
                                    <td className="text-center py-4 px-6 border-b border-gray-200 text-gray-700">{student.email}</td>
                                    <td className="text-center py-4 px-6 border-b border-gray-200 text-gray-700">{student.branch}</td>
                                    <td className="text-center py-4 px-6 border-b border-gray-200 text-gray-700">{student.birthday}</td>
                                    <td className="text-center py-4 px-6 border-b border-gray-200 text-gray-700">{student.student_id}
                                    <button
                                            onClick={() => handleDelete(student.id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 active:bg-red-700"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4 px-6 border-b border-gray-200 text-gray-700">No students found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentTable;
