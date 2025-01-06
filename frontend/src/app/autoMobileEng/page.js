'use client';
import React,{useState, useEffect} from 'react'
import StudentTable from '@/components/StudentTable'
import { getStudents } from '@/services/api'

const page = () => {
  const [autoMobileStudent, setAutoMobileStudent] = useState([]);

  useEffect(() => {
    const fetchAutoMobileStudents = async () => {
      const allStudents = await getStudents();
      const AutoMobileStudents = allStudents.filter(student => student.branch === 'AutoMobile');
      setAutoMobileStudent(AutoMobileStudents);
    };
    // console.log("allStudents::", allStudents);
    fetchAutoMobileStudents();
  }, []);
  return (
    <div>
      <StudentTable
        students={autoMobileStudent}
      />
    </div>
  )
}

export default page
