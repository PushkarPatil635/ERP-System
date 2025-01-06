// import Image from "next/image";
// <Image
// className="dark:invert"
// src="https://nextjs.org/icons/next.svg"
// alt="Next.js logo"
// width={180}
// height={38}
// priority
// />

import React from 'react';
import StudentForm from '@/components/StudentForm';

const page = () => {
  return (
    <div>
      <StudentForm/>
    </div>
  )
}

export default page
