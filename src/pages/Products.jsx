import React, { Fragment, useContext, useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast } from "react-toastify";
import request from "../server";
import Pagination from "../components/ui/Pagination";
import Loading from "../components/ui/Loading";
import { ModalContext } from "../context/modalContext";
import ModalProduct from "../components/ui/ModalProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });
  const { closeModal, isOpen, openModal } = useContext(ModalContext);
  const [selected, setSelected] = useState(null);

  //pagination

  const currentProducts = products.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const totalPages = Math.ceil(products.length / perPage);

  //pagination

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    setLoading(true);
    try {
      const { data } = await request.get("products");
      setProducts(data);
    } catch (error) {
      console.log(error);
      toast.error("serverda hatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    closeModal();
    setLoadingBtn(true);

    try {
      if (!selected) {
        await request.post(`products`, formData);
        setProducts((prev) => [...prev, formData]);
      } else {
        await request.put(`products/${selected}`, formData);
        setProducts((prev) => {
          prev.map((item) =>
            item.id === selected ? { ...item, ...formData } : item
          );
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("serverda hatolik yuz berdi");
    } finally {
      setLoadingBtn(false);
    }
    // await getProducts();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function editProduct(productId) {
    setSelected(productId);
    openModal();
    try {
      const { data } = await request.get(`products/${productId}`);
      const { title, price, description, category, image } = data;
      setFormData({
        title,
        price,
        description,
        category,
        image,
      });
      console.log(formData);
    } catch (error) {
      console.log(error);
      toast.error("serverda muomo yuzaga keldi!");
    }
  }

  async function deleteProducts(id) {
    setLoading(true);
    try {
      await request.delete(`products/${id}`);
      setProducts((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
      toast.warn("serverda hatolik");
    } finally {
      setLoading(false);
    }
    // await getProducts();
  }

  useEffect(() => {
    setSelected(null);
    setFormData({
      title: "",
      description: "",
      price: "",
      category: "",
      image: "",
    });
  }, [isOpen]);

  return (
    <Fragment>
      <div className="flex items-center justify-center ">
        <button
          className="text-[35px] rounded-lg p-2 text-gray-900 cursor-pointer hover:text-white hover:bg-blue-600"
          onClick={() => openModal()}
        >
          +
        </button>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="p-6 ">
          <div className="flex flex-col items-center gap-6">
            {currentProducts.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full md:h-20 bg-white shadow-lg rounded-lg flex flex-col sm:flex-row  sm:items-center sm:justify-between gap-6 p-3 sm:p-4 lg:p-6"
                >
                  <div className=" flex flex-col md:flex-row sm:items-center gap-6">
                    <LazyLoadImage
                      src={item.image}
                      alt={item.title}
                      effect="blur"
                      className=" w-full md:max-w-15 object-contain  rounded-2xl"
                    />
                    <div>
                      <h3 className="font-semibold font-serif text-gray-900 ">
                        {item.title}
                      </h3>
                      <h4 className="font-semibold font-serif text-gray-900 s">
                        $ {item.price}
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={() => editProduct(item.id)}
                      className="text-3xl text-blue-600 hover:cursor-pointer"
                    >
                      <FaUserEdit />
                    </button>
                    <button
                      onClick={() => deleteProducts(item.id)}
                      className="text-3xl text-red-600 hover:cursor-pointer"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {isOpen && (
            <ModalProduct
              closeModal={closeModal}
              openModal={openModal}
              isOpen={isOpen}
              onSubmit={onSubmit}
              handleChange={handleChange}
              formData={formData}
              loadingBtn={loadingBtn}
            />
          )}

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </Fragment>
  );
};

export default Products;
