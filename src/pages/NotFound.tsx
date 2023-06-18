import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex justify-center items-center h-screen p-2">
      <div className="text-center ">
        <h1 className="text-7xl mb-2">404</h1>
        <p className="text-gray-500 text-xl">페이지를 찾을 수 없습니다.</p>
        <p className="my-5">
          아래의 버튼을 눌러{" "}
          <strong className="text-red-500">해당 페이지</strong>로 돌아가세요.
        </p>
        <div className="flex justify-between items-center space-x-5">
          <Link to={"/signin"}>
            <button className="border-2 px-4 py-2 border-black hover:bg-black hover:text-white">
              LogIn
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="border-2 px-4 py-2 border-black hover:bg-black hover:text-white">
              SignUp
            </button>
          </Link>
          <Link to={"/todo"}>
            <button className="border-2 px-4 py-2 border-black hover:bg-black hover:text-white">
              Todo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
