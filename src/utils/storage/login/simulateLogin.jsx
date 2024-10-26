export const mockDatabase = {
  students: [
    {
      documentType: "TI",
      name: "Martin Cardenas",
      last_name:"lastname ",
      profile_img:"https://i.ibb.co/wr9J45j/std9.jpg",
      number_identify: "12345678",
      password: "1234",
      dateOfBirth: "9/21/2009",
      grades: [
        {
          subject: "Ciencias sociales",
          code: "101",
          grades: [4.5, 3.7, 5.0],
          final: 4.4,
          points: 440,
        },
        {
          subject: "Lengua castellana",
          code: "102",
          grades: [5.4, 2.4, 6.7],
          final: 4.8,
          points: 480,
        },
        {
          subject: "Matematicas",
          code: "103",
          grades: [0.8, 8.1, 2.5],
          final: 3.8,
          points: 380,
        },
      ],
    },
  ],
};

export const authenticateStudent = (number_identify, password) => {
  const student = mockDatabase.students.find(
    (s) => s.number_identify === number_identify && s.password === password
  );
  return student || null;
};
