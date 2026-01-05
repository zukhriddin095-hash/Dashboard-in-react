const Modal = ({ closeModal, handleChange, onSubmit, formData }) => {
  return (
    <div
      className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <h2
          id="modalTitle"
          className="text-xl font-bold text-gray-900 sm:text-2xl"
        >
          Modal Title
        </h2>

        <form
          onSubmit={(e) => onSubmit(e)}
          className="w-87.5 space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6"
        >
          <div>
            <label
              className="block text-sm font-medium text-gray-900"
              htmlFor="name"
            >
              User Name
            </label>

            <input
              onChange={(e) => handleChange(e)}
              className="mt-1 w-full rounded-lg border p-2 border-gray-300 focus:border-indigo-500 focus:outline-none"
              name="userName"
              value={formData?.userName}
              type="text"
              placeholder="userName"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>

            <input
              onChange={(e) => handleChange(e)}
              className="mt-1 w-full border p-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
              name="email"
              value={formData?.email}
              type="email"
              placeholder="Your email"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-900"
              htmlFor="message"
            >
              password
            </label>

            <input
              onChange={(e) => handleChange(e)}
              className="mt-1 w-full border p-2 resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
              name="password"
              value={formData?.password}
              placeholder="Your password"
            />
          </div>

          <button
            className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600 hover:cursor-pointer"
            type="submit"
          >
            Send Message
          </button>
        </form>

        <footer className="mt-6 flex justify-end gap-2">
          <button
            onClick={closeModal}
            type="button"
            className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
