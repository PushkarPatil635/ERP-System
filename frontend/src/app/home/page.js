'use client'

import StudentTable from '../../components/StudentTable';
import { useEffect, useState } from 'react';
import { getStudents } from '../../services/api';
import StudentForm from '@/components/StudentForm';

const StudentsPage = () => {
    const [students, setStudents] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        branch: '',
        birthday: '',
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchStudents = async () => {
        try {
            const data = await getStudents();
            setStudents(data);
        } catch (error) {
            console.error("Error Fetching Students", error);
            
        }
    }
 
    const handleAddStudentModal = () => {
        setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setFormData([]);
    };
    

    useEffect(() => {
        // const fetchStudents = async () => {
        //     const data = await getStudents();
        //     setStudents(data);
            
        // };
        
        

        fetchStudents();
    }, [formData]);
    


    return (
        <div>
            <div className='' >
            <button
             className='absolute top-28 right-10 text-white bg-blue-500 p-4 rounded-lg'
             
              onClick={handleAddStudentModal} >
                Add Student
            </button>
            </div>
            <div className='' >
            <button
             className='absolute top-28 right-44 text-white bg-blue-500 p-4 rounded-lg'
             
              onClick={fetchStudents} >
                Refresh
            </button>
            </div>
            {isModalOpen && (
                <div className=''>
                <StudentForm
                    onClose={handleCloseModal}
                    formData={formData}
                    setFormData={setFormData}
                />
                </div>
            )}
            <StudentTable 
            students={students}
            setStudents={setStudents}
            
             />
        </div>
    );
};

export default StudentsPage;

