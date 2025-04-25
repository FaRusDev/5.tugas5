let _courses = JSON.parse(localStorage.getItem("courses")) || [
  {
    id: 1,
    imageUrl: "/big-4.png",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    instructor: {
      avatarUrl: "/avatar-big4.png",
      name: "Jenna Ortega",
      position: "Senior Accountant",
    },
    rating: {
      stars: 1,
      count: 86,
    },
    price: "Rp 300K",
    categories: ["pengembangan-diri"],
  },
  {
    id: 2,
    imageUrl: "/big-4.png",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    instructor: {
      avatarUrl: "/avatar-big4.png",
      name: "Jenna Ortega",
      position: "Senior Accountant",
    },
    rating: {
      stars: 2,
      count: 86,
    },
    price: "Rp 300K",
    categories: ["desain", "bisnis"],
  },
  {
    id: 3,
    imageUrl: "/big-4.png",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    instructor: {
      avatarUrl: "/avatar-big4.png",
      name: "Jenna Ortega",
      position: "Senior Accountant",
    },
    rating: {
      stars: 3.5,
      count: 86,
    },
    price: "Rp 300K",
    categories: ["desain"],
  },
  {
    id: 4,
    imageUrl: "/big-4.png",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    instructor: {
      avatarUrl: "/avatar-big4.png",
      name: "Jenna Ortega",
      position: "Senior Accountant",
    },
    rating: {
      stars: 3.5,
      count: 86,
    },
    price: "Rp 300K",
    categories: ["bisnis"],
  },
]

const saveToStorage = () => {
  localStorage.setItem("courses", JSON.stringify(_courses))
}

//untuk mengambil data semuanya
export const getAllCourses = () => [..._courses]

//untuk mengambil data dari Id
export const getCourseById = (id) =>
  _courses.find((course) => course.id === parseInt(id))

//untuk tambahkan course
export const addCourse = (newCourse) => {
  const id =
    _courses.length > 0 ? Math.max(..._courses.map((c) => c.id)) + 1 : 1
  _courses.push({ ...newCourse, id })
  saveToStorage()
  return _courses
}

//untuk update course
export const updateCourse = (id, updatedData) => {
  const index = _courses.findIndex((course) => course.id === parseInt(id))

  if (index !== -1) {
    _courses[index] = { ..._courses[index], ...updatedData }
    saveToStorage()
  }

  return _courses
}

// untuk hapus data
export const deleteCourse = (id) => {
  _courses = _courses.filter((course) => course.id !== parseInt(id))
  saveToStorage()
  return _courses
}
