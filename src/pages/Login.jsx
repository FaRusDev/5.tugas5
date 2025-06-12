import Nav from "../components/Nav"
import { Link } from "react-router-dom"
import { useLogin } from "../services/zustandData"

export default function Login() {
  const { username, setUsername } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsername(e.target.email.value)
    console.log(username)
  }

  return (
    <>
      <Nav />
      <div className="flex justify-center items-center pt-30 pb-15 overflow-auto">
        <div
          id="cards"
          className="mx-auto container max-w-10/12 lg:max-w-8/12 flex flex-col bg-white p-5 gap-5 rounded-sm justify-center border border-gray-100 md:px-9 xl:px-12 xl:max-w-6/12 xl:gap-10"
        >
          <div className="flex flex-col gap-y-2 text-center justify-center items-center">
            <h3 className="font-poppins font-semibold text-2xl">
              Masuk ke Akun
            </h3>
            <p className="text-gray-500 text-sm font-DMSans tracking-widest">
              Yuk, lanjutin belajarmu di videobelajar.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            action="#"
            className="flex flex-col gap-y-6"
          >
            <div className="htmlForm-group flex flex-col gap-y-1">
              <label htmlFor="email" className="flex flex-row gap-x-2">
                <p className="font-DMSans text-gray-500 leading-tight text-sm font-normal tracking-wide">
                  E-Mail
                </p>
                <span>
                  <svg
                    width="7"
                    height="7"
                    viewBox="0 0 7 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.192 1.28L6.768 2.32L4.544 3.248L6.784 4.16L6.176 5.232L4.24 3.824L4.496 6.24H3.296L3.536 3.824L1.6 5.248L0.976 4.16L3.2 3.232L0.976 2.336L1.568 1.264L3.552 2.688L3.296 0.256H4.512L4.24 2.688L6.192 1.28Z"
                      fill="#FF5C2B"
                    />
                  </svg>{" "}
                </span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="rounded-md border border-gray-200 h-12 w-full focus:outline-none focus:ring-1 focus:ring-gray-300 text-sm text-gray-500 px-3"
              />
            </div>
            <div className="htmlForm-group flex flex-col gap-y-1">
              <label htmlFor="password" className="flex flex-row gap-x-2">
                <p className="font-DMSans text-gray-500 leading-tight text-sm font-normal tracking-wide">
                  Kata Sandi
                </p>
                <span>
                  <svg
                    width="7"
                    height="7"
                    viewBox="0 0 7 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.192 1.28L6.768 2.32L4.544 3.248L6.784 4.16L6.176 5.232L4.24 3.824L4.496 6.24H3.296L3.536 3.824L1.6 5.248L0.976 4.16L3.2 3.232L0.976 2.336L1.568 1.264L3.552 2.688L3.296 0.256H4.512L4.24 2.688L6.192 1.28Z"
                      fill="#FF5C2B"
                    />
                  </svg>{" "}
                </span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="rounded-md border border-gray-200 h-12 w-full focus:outline-none focus:ring-1 focus:ring-gray-300 text-sm text-gray-500 px-3"
                />
                <svg
                  width="22"
                  height="19"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-3.5 right-3.5"
                >
                  <path
                    d="M10.83 6L14 9.16V9C14 8.20435 13.6839 7.44129 13.1213 6.87868C12.5587 6.31607 11.7956 6 11 6H10.83ZM6.53 6.8L8.08 8.35C8.03 8.56 8 8.77 8 9C8 9.79565 8.31607 10.5587 8.87868 11.1213C9.44129 11.6839 10.2044 12 11 12C11.22 12 11.44 11.97 11.65 11.92L13.2 13.47C12.53 13.8 11.79 14 11 14C9.67392 14 8.40215 13.4732 7.46447 12.5355C6.52678 11.5979 6 10.3261 6 9C6 8.21 6.2 7.47 6.53 6.8ZM1 1.27L3.28 3.55L3.73 4C2.08 5.3 0.78 7 0 9C1.73 13.39 6 16.5 11 16.5C12.55 16.5 14.03 16.2 15.38 15.66L15.81 16.08L18.73 19L20 17.73L2.27 0M11 4C12.3261 4 13.5979 4.52678 14.5355 5.46447C15.4732 6.40215 16 7.67392 16 9C16 9.64 15.87 10.26 15.64 10.82L18.57 13.75C20.07 12.5 21.27 10.86 22 9C20.27 4.61 16 1.5 11 1.5C9.6 1.5 8.26 1.75 7 2.2L9.17 4.35C9.74 4.13 10.35 4 11 4Z"
                    fill="#3A3541"
                    fillOpacity="0.38"
                  />
                </svg>
              </div>
            </div>
            <div className="text-end">
              <a href="#" className="text-gray-500 font-DMSans text-sm">
                Lupa Password?
              </a>
            </div>

            <div className="flex flex-col gap-y-4 text-center justify-center">
              <button
                type="submit"
                className="bg-primary rounded-xl py-2 px-6 md:py-4"
              >
                <p className="text-white font-DMSans font-bold tracking-wider">
                  Masuk
                </p>
              </button>
              <Link
                to="/register"
                className="bg-primary-100 rounded-xl py-2 px-6 md:py-4"
              >
                <p className="text-primary font-DMSans font-bold tracking-wider">
                  Daftar
                </p>
              </Link>
            </div>
          </form>

          <div className="relative">
            <div className="py-[1px] w-full bg-gray-200"></div>
            <div className="absolute bg-white p-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="text-sm font-DMSans text-center text-gray-600 tracking-wide">
                atau
              </p>
            </div>
          </div>

          <a
            href="#"
            className="flex flex-row justify-center text-center rounded-xl border border-gray-200 px-7 py-2 gap-x-2 md:py-4"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9905 10.426C19.9905 9.58738 19.9224 8.97543 19.7752 8.34082H10.1992V12.1258H15.8201C15.7068 13.0664 15.0948 14.483 13.7349 15.4349L13.7159 15.5616L16.7436 17.9071L16.9534 17.9281C18.8798 16.1489 19.9905 13.5311 19.9905 10.426Z"
                fill="#4285F4"
              />
              <path
                d="M10.1992 20.3983C12.953 20.3983 15.2648 19.4917 16.9534 17.9279L13.7349 15.4347C12.8737 16.0353 11.7177 16.4546 10.1992 16.4546C7.50211 16.4546 5.21297 14.6754 4.39695 12.2163L4.27734 12.2265L1.12906 14.6629L1.08789 14.7774C2.76508 18.1091 6.21016 20.3983 10.1992 20.3983Z"
                fill="#34A853"
              />
              <path
                d="M4.39695 12.2164C4.18164 11.5818 4.05703 10.9018 4.05703 10.1993C4.05703 9.4966 4.18164 8.81668 4.38562 8.18207L4.37992 8.04691L1.19219 5.57129L1.08789 5.6209C0.396641 7.00348 0 8.55605 0 10.1993C0 11.8425 0.396641 13.395 1.08789 14.7775L4.39695 12.2164Z"
                fill="#FBBC05"
              />
              <path
                d="M10.1992 3.94367C12.1144 3.94367 13.4063 4.77094 14.1429 5.46227L17.0213 2.6518C15.2535 1.00859 12.953 0 10.1992 0C6.21016 0 2.76508 2.28914 1.08789 5.62086L4.38563 8.18203C5.21297 5.72289 7.50211 3.94367 10.1992 3.94367Z"
                fill="#EB4335"
              />
            </svg>
            <p className="font-DMSans font-bold text-sm tracking-wider leading-[1.4]">
              Masuk dengan Google
            </p>
          </a>
        </div>
      </div>
    </>
  )
}
