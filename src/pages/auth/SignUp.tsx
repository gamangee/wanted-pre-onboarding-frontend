import { useEffect, useState } from "react";
import { AuthData } from "../../types/authType";
import { useNavigate } from "react-router-dom";
import { signUpApi } from "../../service/authAPI";

export default function SignUp() {
  const navigate = useNavigate();

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

  // Assignment 1
  // 이메일, 비밀번호 유효성 검사 통과에 따른 버튼 활성화 여부
  useEffect(() => {
    if (userInfo.email.includes("@") && userInfo.password.length >= 8) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [userInfo]);

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await signUpApi(userInfo);

      if (response.status !== 201) {
        alert("회원가입에 실패하였습니다.");
      }

      alert("회원가입을 성공하였습니다.");

      // Assignment 2
      // 회원가입 정상 완료시 로그인 페이지로 이동
      navigate("/signin");
    } catch (error: any) {
      alert(`오류가 발생했습니다.\n다시 시도해주세요.`);
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen text-center">
      <form
        onSubmit={handleSignUp}
        className={`p-10 border-2 rounded-lg space-y-4 ${
          isValid ? "border-blue-500" : "border-black"
        }`}
      >
        <h1 className="text-lg font-bold mb-5">회원가입</h1>
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
          data-testid="signup-button"
          type="submit"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
