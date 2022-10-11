import { useGlobal } from "../contexts/GlobalContext";

export default function Form({ setOpen }) {
  const {
    people,
    name,
    setName,
    title,
    setTitle,
    email,
    setEmail,
    role,
    setRole,
    setPeople,
    typeButton,
  } = useGlobal();

  function handlerSubmit(e) {
    e.preventDefault();

    let person = {
      id: 6846488,
      name,
      title,
      email,
      role,
    };
    if (typeButton === "add") {
      setPeople([...people, person]);
    } else {
      // filtramos el arreglo quitándole el antiguo person y luego lo agregamos
    }
    setOpen(false);
    console.log(name);
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handlerSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  name
                </label>
                <div className="mt-1">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Titke
                </label>
                <div className="mt-1">
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  role
                </label>
                <div className="mt-1">
                  <input
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    type="text"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {typeButton === "update" ? "Update" : "save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
