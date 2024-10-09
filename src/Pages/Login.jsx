import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  function klikLogin() {
    navigate("/home");
  }
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-700">
        <div className="bg-slate-200  w-1/3 border-2 border-black rounded-md ">
          <div className="flex flex-col justify-center gap-y-10">
            <h1 className="text-center text-2xl font-bold ">Login</h1>
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center p-2 gap-y-2 mx-auto">
              <div className="flex flex-col gap-y-1">
                <label htmlFor="" className="font-semibold">
                  Username
                </label>
                <input
                  className="border-2 border-black  rounded-md"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold">
                  Password
                </label>
                <input
                  className="border-2 border-black  rounded-md"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <button
                onClick={klikLogin}
                className="bg-blue-600 p-2 rounded-md text-white border-2 border-black font-semibold drop-shadow-md transition delay-75 hover:drop-shadow-xl"
              >
                Login
              </button>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
