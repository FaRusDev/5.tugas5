import { useEffect, useState } from "react"
import CardVideos from "./CardVideos"
import { getAllCourses, deleteCourse } from "../data/courses"
import { Link } from "react-router-dom"

export default function Videos() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [courses, setCourses] = useState([])

  useEffect(() => {
    setCourses(getAllCourses)
  }, [])

  const displayCategories = [
    { id: "all", catName: "Semua Kelas" },
    { id: "desain", catName: "Desain" },
    { id: "pemasaran", catName: "Pemasaran" },
    { id: "pengembangan-diri", catName: "Pengembangan Diri" },
    { id: "bisnis", catName: "Bisnis" },
  ]

  // filter card berdasarkan kateogori
  const filterCards =
    activeCategory === "all"
      ? courses
      : courses.filter((course) => course.categories.includes(activeCategory))

  // fungsi untuk memsaukkan kategori berdasarkan filter diatas
  const handleCategoryChange = (category) => {
    setIsTransitioning(true)
    setActiveCategory(category)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 300)
  }

  //fungsi untuk hapus course
  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus kursus ini?")) {
      const updatedCourses = deleteCourse(id)
      setCourses(updatedCourses)
    }
  }

  return (
    <section id="video" className="text-center mx-auto max-w-10/12 my-6">
      <div className="flex text-start flex-col gap-y-6">
        <div className="flex flex-col gap-y-3">
          <h2 className="text-2xl font-semibold">
            Koleksi Video <br className="md:hidden" />
            Pembelajaran Unggulan
          </h2>
          <p className="text-gray-500">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>

          <Link
            to="/addVideo"
            className="bg-amber-600 p-2 text-center text-white rounded-4xl max-w-2/6"
          >
            Tambah Video
          </Link>
        </div>

        <div className="overflow-x-scroll md:overflow-auto">
          <ul className="flex items-center gap-x-8 whitespace-nowrap ">
            {displayCategories.map((category) => (
              <li
                className={`relative pb-6 group hover:cursor-pointer  `}
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
              >
                <button
                  className={`font-medium text-sm group-hover:cursor-pointer group-hover:text-[#F64920] transition-all duration-300 ${
                    activeCategory === category.id ? `text-[#F64920]` : ``
                  } `}
                >
                  {category.catName}
                </button>
                <div
                  className={` group-hover:block absolute bottom-0 left-0 w-1/2 h-2 rounded-xl bg-[#F64920] ${
                    activeCategory === category.id ? `block` : `hidden`
                  }`}
                ></div>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity  `}
        >
          {filterCards.map((course, index) => (
            <div
              key={course.id}
              className={`
                transition-all duration-500 ease-out
                ${
                  isTransitioning
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }
              `}
              style={{
                transitionDelay: isTransitioning ? "0ms" : `${index * 50}ms`,
              }}
            >
              <CardVideos
                id={course.id}
                imageUrl={course.imageUrl}
                title={course.title}
                description={course.description}
                instructor={course.instructor}
                rating={course.rating}
                price={course.price}
                categories={course.categories}
              />

              <Link
                to={`/editVideo/${course.id}`}
                className="p-3 bg-[#F64920] mt-2 rounded-xl shadow-2xl hover:cursor-pointer text-white mr-2"
              >
                Edit
              </Link>
              <button
                className="p-3 bg-[#F64920] mt-2 rounded-xl shadow-2xl hover:cursor-pointer text-white"
                onClick={() => handleDelete(course.id)}
              >
                Hapus
              </button>
            </div>
          ))}

          {/* Empty State */}
          {filterCards.length === 0 && (
            <p className="text-gray-500 py-10">
              Tidak ada kursus dalam kategori ini
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
