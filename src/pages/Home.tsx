import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-x-10 flex justify-center items-center h-screen text-center">
      <Link to="/signin">
        <div>
          <p className="mb-3">회원이라면,</p>
          <button
            className={
              "text-white px-10 py-2 rounded-md bg-black hover:bg-gray-700"
            }
          >
            로그인
          </button>
        </div>
      </Link>
      <div className="w-0.5 h-32 bg-black" />
      <Link to="/signup">
        <div>
          <p className="mb-3">아직 회원이 아니시라면,</p>
          <button
            className={
              "text-white px-10 py-2 rounded-md bg-black  hover:bg-gray-700"
            }
          >
            회원가입
          </button>
        </div>
      </Link>
    </div>
  );
}
