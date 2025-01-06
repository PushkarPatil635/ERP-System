'use client';
import React, {useEffect, useState} from 'react';
import StudentTable from '@/components/StudentTable';
import { getStudents } from '@/services/api';

const page = () => {

  const[compStudent, setCompStudent] = useState([]);
  console.log("Computer student::",compStudent);
  
  useEffect(() => {
    const fetchCompStudents = async () => {
      const allStudents = await getStudents();
      const computerStudents = allStudents.filter(student => student.branch === 'Computer Science');
      setCompStudent(computerStudents);
    };
    // console.log("allStudents::", allStudents);
    fetchCompStudents();
  }, []);


  return (
    <div>
      <StudentTable
      students={compStudent}
      />
    </div>
  )
}

export default page
