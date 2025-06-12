import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addCourse } from "../data/courses"
import Nav from "../components/Nav"
import axios from "axios"

const AddVideo = () => {
  const navigate = useNavigate()
  // const [form, setForm] = useState({})
  const [form, setForm] = useState({})
  const [cat, setCat] = useState([])

  const alamatAPI = import.meta.env.VITE_API_BASE_URL
  const addCourses = async (data, cat) => {
    try {
      await axios.post(`${alamatAPI}/courses`, {
        price: data.price,
        description: data.description,
        title: data.title,
        categories: cat,
      })
      console.log("data berhasil diinput")
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(cat)
    addCourses(form, cat)
    navigate("/")
  }

  return (
    <>
      <Nav />
      <form
        className="py-30 max-w-4/12 mx-auto flex flex-col space-y-5"
        onSubmit={handleSubmit}
      >
        <input
          className="border border-gray-300 rounded-xl p-3"
          // value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Judul Kursus"
          required
        />

        <input
          className="border border-gray-300 rounded-xl p-3"
          typeof="text"
          // value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Deskripsi"
          required
        />

        <input
          className="border border-gray-300 rounded-xl p-3"
          type="number"
          max={"200"}
          maxLength={"3"}
          // value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          placeholder="Harga"
          required
        />

        <div className="flex flex-col gap-y-2">
          <div className="space-x-3">
            <input
              name="desain"
              className="border border-gray-300 rounded-xl p-3"
              type="checkbox"
              value="desain"
              checked={cat.includes("desain")}
              onChange={(e) => {
                if (e.target.checked) {
                  setCat([...cat, e.target.value])
                } else {
                  setCat(cat.filter((item) => item !== e.target.value))
                }
              }}
            />
            <label htmlFor="desain">desain</label>
          </div>

          <div className="space-x-3">
            <input
              name="pemasaran"
              className="border border-gray-300 rounded-xl p-3"
              type="checkbox"
              value="pemasaran"
              checked={cat.includes("pemasaran")}
              onChange={(e) => {
                if (e.target.checked) {
                  setCat([...cat, e.target.value])
                } else {
                  setCat(cat.filter((item) => item !== e.target.value))
                }
              }}
            />
            <label htmlFor="pemasaran">pemasaran</label>
          </div>

          <div className="space-x-3">
            <input
              name="pengembangan-diri"
              className="border border-gray-300 rounded-xl p-3"
              type="checkbox"
              value="pengembangan-diri"
              checked={cat.includes("pengembangan-diri")}
              onChange={(e) => {
                if (e.target.checked) {
                  setCat([...cat, e.target.value])
                } else {
                  setCat(cat.filter((item) => item !== e.target.value))
                }
              }}
            />
            <label htmlFor="pengembangan-diri">pengembangan diri</label>
          </div>
          <div className="space-x-3">
            <input
              name="bisnis"
              className="border border-gray-300 rounded-xl p-3"
              type="checkbox"
              value="bisnis"
              checked={cat.includes("bisnis")}
              onChange={(e) => {
                if (e.target.checked) {
                  setCat([...cat, e.target.value])
                } else {
                  setCat(cat.filter((item) => item !== e.target.value))
                }
              }}
            />
            <label htmlFor="bisnis">bisnis</label>
          </div>
        </div>

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

export default AddVideo
