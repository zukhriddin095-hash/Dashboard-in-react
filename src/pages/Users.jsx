import React, { Fragment, useContext, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import request from "../server";
import { toast } from "react-toastify";
import Loading from "../components/ui/Loading";
import Modal from "../components/ui/Modal";
import { ModalContext } from "../context/modalContext";
import { IoMdAddCircleOutline } from "react-icons/io";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { closeModal, openModal, isOpen } = useContext(ModalContext);
  const [selected, setSelected] = useState(null);
  const [formData, setForm] = useState({
    email: "",
    password: "",
    userName: "",
  });

  //get users
  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    setLoading(true);
    try {
      const { data } = await request.get("users");
      setUsers(data);
    } catch (error) {
      console.log(error);
      toast.error("server bilan muomo bolyatpi");
    } finally {
      setLoading(false);
    }
  }

  //get users

  //edit function

  async function editUsers(id) {
    openModal();
    setSelected(id);

    try {
      const { data } = await request.get(`users/${id}`);
      setForm({
        email: data.email,
        password: data.password,
        userName: data.username,
      });
    } catch (error) {
      console.log(error);
      toast.error("serverda hatolik yuz berdi!");
    }
  }

  useEffect(() => {
    if (!isOpen) {
      setSelected(null);
      setForm({
        email: "",
        password: "",
        userName: "",
      });
    }
  }, [isOpen]);

  //edit function

  //edit submit
  function handleChange(e) {
    const { name, value } = e.target;

    setForm({ ...formData, [name]: value });
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      if (!selected) {
        // yangi user qo'shish
        await request.post("users", formData);

        toast.success("User added successfully");
      } else {
        // userni edit qilish
        await request.put(`users/${selected}`, formData);
        toast.success("User updated successfully");
      }
      await getUsers();
    } catch (error) {
      console.log(error);
      toast.error("Serverda hatolik yuz berdi!");
    } finally {
      closeModal();
    }
  }

  //edit submit

  //delete function

  async function deleteUsers(id) {
    try {
      await request.delete(`users/${id}`);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
      toast.warn("delate successfully");
    }
    // await getUsers();
  }

  //delete function

  return (
    <Fragment>
      <div className="flex items-center justify-around">
        <button
          onClick={() => openModal()}
          className="m-8 text-[35px] text-gray-900 hover:cursor-pointer transition hover:text-gray-700"
        >
          <IoMdAddCircleOutline />
        </button>
        <h3>Total: ({users?.length})</h3>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {users?.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" p-4 md:p-6 bg-white rounded-xl shadow lg:p-8 max-w-[280px]"
                >
                  <LazyLoadImage
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSToP5rz4ky9W48e8f3kQ8gdA_b7fyyjP68Eg&s"
                    alt="User-avatar"
                    effect="blur"
                    className="w-full object-contain mb-4 rounded-2xl"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 font-serif">
                        {item.username}
                      </h3>
                      <p className="text-blue-600" href="tell:+998984254521">
                        {item?.phone}
                      </p>
                      <h4 className="font-bold font-serif text-gray-900">
                        City: {item?.address?.city}
                      </h4>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <button
                        onClick={() => editUsers(item.id)}
                        className="text-3xl text-blue-600 hover:cursor-pointer"
                      >
                        <FaUserEdit />
                      </button>
                      <button
                        onClick={() => deleteUsers(item.id)}
                        className="text-3xl text-red-600 hover:cursor-pointer"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {isOpen ? (
        <Modal
          onSubmit={onSubmit}
          formData={formData}
          setForm={setForm}
          handleChange={handleChange}
          closeModal={closeModal}
        />
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Users;
