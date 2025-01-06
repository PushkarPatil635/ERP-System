'use client';
import React,{useState, useEffect} from 'react'
import StudentTable from '@/components/StudentTable'
import { getStudents } from '@/services/api'

const page = () => {
  const[mechanicalStudent, setMechanicalStudent] = useState([]);
  
  
  useEffect(() => {
    const fetchMechanicalStudents = async () => {
      const allStudents = await getStudents();
      const mechanicalStudents = allStudents.filter(student => student.branch === 'Mechanical');
      setMechanicalStudent(mechanicalStudents);
    };
    // console.log("allStudents::", allStudents);
    fetchMechanicalStudents();
  }, []);

  return (
    <div>
      <StudentTable
        students={mechanicalStudent}
      />
    </div>
  )
}

export default page