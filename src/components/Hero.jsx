function Hero() {
  return (
    <section id="hero" className="text-center mx-auto max-w-10/12 my-6">
      <div className="flex flex-col gap-y-6 rounded-xl bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/bg-img.jpeg')] bg-cover bg-no-repeat bg-center py-16 px-5 md:px-16 md:py-14 lg:px-36 lg:py-16 xl:py-50 xl:px-80 xl:gap-20">
        <div className="flex flex-col gap-3 justify-center items-center xl:gap-20">
          <h1 className="text-white lg:text-5xl md:text-3xl text-xl font-bold">
            Revolusi Pembelajaran: <br className="hidden xl:block" />
            Temukan Ilmu Baru melalui Platform Video Interaktif!
          </h1>
          <p className="text-white lg:text-lg text-xs font-light">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
        </div>
        <a
          href="#"
          className="bg-primary md:px-7 md:py-3 rounded-xl py-2.5 px-1.5 text-white text-xs md:text-sm lg:text-base"
        >
          Temukan Video Course untuk Dipelajari!
        </a>
      </div>
    </section>
  )
}
export default Hero
