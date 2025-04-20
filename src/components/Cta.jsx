function Cta() {
  return (
    <section id="cta" className="text-center mx-auto max-w-10/12 my-6">
      <div className="flex flex-col gap-y-6 rounded-xl bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/cta-img.jpeg')] bg-cover bg-no-repeat bg-center py-16 px-5 md:px-16 md:py-14 lg:px-36 lg:py-16">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h2 className="text-white font-DMSans">NEWSLETTER</h2>
          <h2 className="text-white lg:text-5xl md:text-3xl text-xl font-bold">
            Mau Belajar Lebih Banyak?
          </h2>
          <p className="text-white lg:text-lg text-xs font-light">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik harisenin.com
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:relative">
          <input
            type="email"
            className="text-start rounded-2xl bg-white p-2 lg:p-5"
            placeholder="Masukkan Emailmu"
          />
          <a
            href="#"
            className="bg-secondary md:px-7 md:py-3 rounded-xl py-2.5 px-1.5 text-white text-xs md:text-sm lg:text-base lg:w-fit lg:absolute lg:right-2 lg:bottom-2"
          >
            Subscribe
          </a>
        </div>
      </div>
    </section>
  )
}

export default Cta
