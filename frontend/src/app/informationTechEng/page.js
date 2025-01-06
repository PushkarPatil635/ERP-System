'use client';
import React, {useEffect, useState} from 'react';
import StudentTable from '@/components/StudentTable';
import { getStudents } from '@/services/api';



const page = () => {

  const [infotechStudent, setInfotechStudent] = useState([]);

  useEffect(() => {
    const fetchITStudents = async () => {
      const allStudents = await getStudents();
      const iTStudent = allStudents.filter(student => student.branch === 'Information Technology');
      setInfotechStudent(iTStudent);
    };
    // console.log("allStudents::", allStudents);
    fetchITStudents();
  }, []);

  return (
    <div>
      <StudentTable
      students={infotechStudent}
      />
    </div>
  )
}

export default page
