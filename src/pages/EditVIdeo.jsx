import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateCourse, getCourseById } from "../data/courses"
import Nav from "../components/Nav"

const EditVideo = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [form, setForm] = useState({
    imageUrl: "/big-4.png",
    title: "",
    description: "",
    instructor: {
      avatarUrl: "/avatar-big4.png",
      name: "Jenna Ortega",
      position: "Senior Accountant",
    },
    rating: {
      stars: 2,
      count: 86,
    },
    price: "",
    categories: ["pemasaran"],
  })

  useEffect(() => {
    const course = getCourseById(id)
    if (course) setForm(course)
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    updateCourse(id, form)
    navigate(`/`)
  }

  return (
    <>
      <Nav />
      <form
        className="py-30 max-w-6/12 mx-auto flex flex-col space-y-5"
        onSubmit={handleSubmit}
      >
        <input
          className="border border-gray-300 rounded-xl p-3"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Judul Kursus"
          required
        />

        <input
          className="border border-gray-300 rounded-xl p-3"
          typeof="text"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Deskripsi"
          required
        />

        <input
          className="border border-gray-300 rounded-xl p-3"
          type="number"
          max={"200"}
          maxLength={"3"}
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          placeholder="Harga"
          required
        />

        <button
          className="p-3 bg-[#F64920] text-white rounded-2xl hover:cursor-pointer"
          type="submit"
        >
          Simpan
        </button>
      </form>
    </>
  )
}

export default EditVideo
