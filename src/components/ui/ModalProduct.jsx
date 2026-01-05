import React from "react";

const ModalProduct = ({
  onSubmit,
  handleChange,
  formData,
  closeModal,
  loadingBtn,
}) => {
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
              Title
            </label>

            <input
              onChange={(e) => handleChange(e)}
              className="mt-1 w-full rounded-lg border p-2 border-gray-300 focus:border-indigo-500 focus:outline-none"
              name="title"
              value={formData?.title}
              type="text"
              placeholder="title"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-900"
              htmlFor="Price"
            >
              price
            </label>

            <input
              onChange={(e) => handleChange(e)}
              className="mt-1 w-full border p-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
              name="price"
              value={formData?.price}
              type="number"
              placeholder="price"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-900"
              htmlFor="message"
            >
              description
            </label>

            <input
              onChange={(e) => handleChange(e)}
              className="mt-1 w-full border p-2 resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
              name="description"
              value={formData?.description}
              placeholder="description"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-900"
              htmlFor="message"
            >
              category
            </label>

            <input
              onChange={(e) => handleChange(e)}
              className="mt-1 w-full border p-2 resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
              name="category"
              value={formData?.category}
              placeholder="category"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-900"
              htmlFor="message"
            >
              image
            </label>

            <input
              onChange={(e) => handleChange(e)}
              className="mt-1 w-full border p-2 resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
              name="image"
              value={formData?.image}
              placeholder="image (url)"
            />
          </div>

          <button
            className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600 hover:cursor-pointer"
            type="submit"
          >
            {loadingBtn ? "loading . . ." : "Submit"}
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

export default ModalProduct;
