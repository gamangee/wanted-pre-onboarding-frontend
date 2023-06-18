import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../types/authType";
import { signInApi } from "../../service/authAPI";

export default function SignIn() {
  const { login, isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  // Assignment 4
  // 로컬 스토리지에 토큰이 있으면 투두리스트 페이지로 리다이렉트
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/todo");
    }
  });

  const [userInfo, setUserInfo] = useState<AuthData>({
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = useState<boolean>(false);

  const handleUserInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await signInApi(userInfo);

      if (response.status !== 200) {
        alert("로그인에 실패하였습니다.");
        return;
      }

      const token = response.data.access_token;
      login(token);
      alert("로그인을 성공하였습니다.");

      // Assignment 3
      // 로그인 완료 시 투두리스트 페이지로 이동
      navigate("/todo");
    } catch (error: any) {
      alert(`오류가 발생했습니다.\n다시 시도해주세요.`);
      console.log(error.response.data.message);
    }
  };

  // Assignment 1
  // 이메일, 비밀번호 유효성 검사 통과에 따른 버튼 활성화 여부
  useEffect(() => {
    if (userInfo.email.includes("@") && userInfo.password.length >= 8) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [userInfo]);

  return (
    <div className="flex justify-center items-center h-screen text-center">
      <form
        onSubmit={handleSignIn}
        className={`p-10 border-2 rounded-lg space-y-4 ${
          isValid ? "border-blue-500" : "border-black"
        }`}
      >
        <h1 className="text-lg font-bold mb-5">로그인</h1>
        <div className="flex justify-between items-center">
          <label htmlFor="email">이메일 </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleUserInfo}
            data-testid="email-input"
            placeholder="이메일을 입력해주세요."
            className="border border-black rounded-md px-3 py-1"
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호 </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userInfo.password}
            onChange={handleUserInfo}
            data-testid="password-input"
            placeholder="비밀번호를 입력해주세요."
            className="border border-black rounded-md px-3 py-1"
          />
        </div>
        <button
          className={` text-white px-10 py-2 rounded-md transition-all duration-300 ${
            isValid ? "bg-blue-500" : "bg-black"
          }`}
          disabled={!isValid}
          data-testid="signin-button"
          type="submit"
        >
          로그인
        </button>
      </form>
    </div>
  );
}
