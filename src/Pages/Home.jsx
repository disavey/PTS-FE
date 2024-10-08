import { useNavigate } from "react-router-dom";

function Home() {
    const navigate= useNavigate()
    function clickCake(){
        navigate("/cake")
    }

    function clickChef(){
      navigate("/chef")
    }
  return (
    <div
      className=" w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/public/background.jpg')",
      }}
    >
      <div className="">
        <h1 className="text-4xl font-bold font-serif text-white ">
          BAKERY SUBUH
        </h1>
      </div>
      <div className="text-white font-medium mx-36 p-11 bg-gray-500 rounded-lg ">
        <h1 className="text-white text-center text-xl font-medium">
          MANAGE & SEE
        </h1>
        <div className="flex my-10 gap-x-5 ">
          <div className=" flex flex-col">
            <button className=" bg-red-500 w-28 h-28 mb-10 rounded-md" onClick={clickCake}>
              Cake
            </button>
            <button className="bg-blue-500 w-28 h-28 rounded-md">
              Transaction
            </button>
          </div>
          <div className="flex flex-col ">
            <button className="bg-yellow-500 w-28 h-28 mb-10 rounded-md">
              Review
            </button>
            
            <button className="bg-purple-500 w-28 h-28 mb-10 rounded-md">
              User
            </button>

          </div>
            <button className="bg-lime-500 w-28 h-28 rounded-md" onClick={clickChef}>Chef</button>
        </div>
      </div>
    </div>
  );
}

export default Home