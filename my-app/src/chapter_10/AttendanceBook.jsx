import React from 'react';

const students = [
  {
    id : 1,
    name : "Inje"
  },
  {
    id : 2,
    name : "steve"
  },
  {
    id : 3,
    name : "Bill"
  },
]

function AttendanceBook(props){
  //1.id를 키값으로 사용
  //2.배열의 인덱스를 키값으로 사용
  //3.포매팅된문자열을 키값으로 사용
  return (
    <ul>
      {/* {students.map((student) => {
        return <li key={student.id}>{student.name}</li>
      })} */}
      {/* {students.map((student, index) => {
        return <li key={index}>{student.name}</li>
      })} */}
      {students.map((student,index) => {
        return <li key={`student_id-${student.id}`} id={`student_id-${student.id}`}>{student.name}</li>
      })}
    </ul>
  );
}

export default AttendanceBook;