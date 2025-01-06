'use client';
import React, {useState, useEffect} from 'react';
import StudentTable from '@/components/StudentTable';
import { getStudents } from '@/services/api';

const page = () => {
  const [civilStudent, setCivilStudent] = useState([]);

  useEffect(() => {
    const fetchCivilStudents = async () => {
      const allStudents = await getStudents();
      const civilStudents = allStudents.filter(student => student.branch === 'Civil');
      setCivilStudent(civilStudents);
    };
    // console.log("allStudents::", allStudents);
    fetchCivilStudents();
  }, []);
  return (
    <div>
      <StudentTable
      students={civilStudent}
      />
    </div>
  )
}

export default page
