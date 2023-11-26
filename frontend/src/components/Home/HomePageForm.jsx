import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePageForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [inviteLink, setInviteLink] = useState("");

  const handleCreateBoard = () => {
    console.log();
    navigate("/board");
  };

  const handleJoinBoard = () => {
    console.log();
  };

  return (
    <form>
      <div className="">
        <div className="mt-5 grid grid-cols-1 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                onClick={handleCreateBoard}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join Board
              </button>
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="invite-link"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Invite Link
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="invite-link"
                id="invite-link"
                placeholder="Paste your intive link"
                value={inviteLink}
                onChange={(e) => setInviteLink(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                onSubmit={handleJoinBoard}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Board
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default HomePageForm;
