import CardVideos from "./CardVideos"

export default function Videos() {
  const courses = [
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
        stars: 3.5,
        count: 86,
      },
      price: "Rp 300K",
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
        stars: 3.5,
        count: 86,
      },
      price: "Rp 300K",
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
    },
  ]

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
        </div>

        <div className="overflow-x-hidden">
          <ul className="flex items-center gap-x-8 whitespace-nowrap">
            {/* <!-- Item aktif --> */}
            <li className="relative pb-6">
              <a href="#" className="text-[#F64920] font-medium text-sm">
                Semua Kelas
              </a>
              <div className="absolute bottom-0 left-0 w-1/2 h-2 rounded-xl bg-[#F64920]"></div>
            </li>

            {/* <!-- Item tidak aktif --> */}
            <li className="relative pb-6">
              <a href="#" className="text-gray-500 font-medium text-sm">
                Pemasaran
              </a>
              <div className="absolute bottom-0 left-0 w-1/2 h-2 rounded-xl bg-[#F64920] hidden"></div>
            </li>
            <li className="relative pb-6">
              <a href="#" className="text-gray-500 font-medium text-sm">
                Desain
              </a>
              <div className="absolute bottom-0 left-0 w-1/2 h-2 rounded-xl bg-[#F64920] hidden"></div>
            </li>

            <li className="relative pb-6">
              <a href="#" className="text-gray-500 font-medium text-sm">
                Pengembangan Diri
              </a>
              <div className="absolute bottom-0 left-0 w-1/2 h-2 rounded-xl bg-[#F64920] hidden"></div>
            </li>

            <li className="relative pb-6">
              <a href="#" className="text-gray-500 font-medium text-sm">
                Bisnis
              </a>
              <div className="absolute bottom-0 left-0 w-1/2 h-2 rounded-xl bg-[#F64920] hidden"></div>
            </li>
          </ul>
        </div>

        <div className="max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CardVideos
              key={course.id}
              imageUrl={course.imageUrl}
              title={course.title}
              description={course.description}
              instructor={course.instructor}
              rating={course.rating}
              price={course.price}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
