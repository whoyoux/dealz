import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const search = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchText.trim()) console.log(searchText);
  };
  return (
    <header className="flex flex-col items-center justify-between gap-5 py-8 px-10 md:flex-row md:gap-0">
      <h1 className="text-6xl font-medium text-red-500">Dealz</h1>
      <form
        onSubmit={search}
        className="flex items-center justify-center rounded-lg bg-zinc-600 px-4 py-4"
      >
        <input
          type="text"
          placeholder="cyberpunk 2077..."
          className="bg-zinc-600 placeholder:italic  focus:outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
      <Auth />
    </header>
  );
};

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};

const Auth = () => {
  const { data: session } = useSession();

  return (
    <div>
      {!!!session ? (
        <button onClick={() => signIn("discord")}>Login</button>
      ) : (
        <div>
          <img
            src={session.user.image || ""}
            alt="User image"
            className="h-16 w-16 cursor-pointer rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
