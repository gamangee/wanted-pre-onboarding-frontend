import { useState } from "react";
import { AuthData } from "../../types/authType";

export default function SignIn() {
  const [userInfo, setUserInfo] = useState<AuthData>({
    email: "",
    password: "",
  });

  const handleUserInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-screen text-center">
      <form
        onSubmit={handleSignIn}
        className={`p-10 border-2 border-black rounded-lg space-y-4`}
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
          className={`bg-black hover:bg-gray-700 text-white px-10 py-2 rounded-md transition-all duration-300
        `}
          data-testid="signin-button"
          type="submit"
        >
          로그인
        </button>
      </form>
    </div>
  );
}
