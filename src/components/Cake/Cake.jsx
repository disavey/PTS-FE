import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal.jsx";
import { addCake, deleteCake, getAllCakes } from "../../api/CakeApi.js";

const Cake = () => {
      const [modalOpen, setModalOpen] = useState(false);
    const openModals = () => setModalOpen(true);
    const closeModals = () => setModalOpen(false);

  const [cakes, setCakes] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [post, setPost] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
    ChefId: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    addCake(post)
      .then(response => {
        console.log("Kue berhasil ditambahkan:", response);
        setCakes(prevCakes => [...prevCakes, response]);  // Tambahkan kue baru ke state
        console.log("State cakes setelah submit:", cakes);  // Pastikan state diperbarui
        setOpenModal(false);  // Tutup modal
      })
      .catch(error => { 
        console.error("Error adding cake:", error);
      });
  }
  
  // Fetch cakes from API
  const fetchCake = async () => {
    try {
      const data = await getAllCakes();
      setCakes(data);
    } catch (error) {
      console.error("Error fetching cakes", error);
    }
  };

  useEffect(() => {
    fetchCake();
  }, []);

  // Handle cake deletion
  const handleDeleteCake = async (id) => {
    try {
      await deleteCake(id);
      fetchCake();
    } catch (error) {
      console.error("Error deleting cake", error);
    }
  };

  // Toggle modal visibility
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-full p-10 flex flex-col">
        <div className="w-32 border-2 text-center border-slate-500 p-3 rounded-md bg-yellow-600 text-white" onClick={handleOpenModal}>
          Tambah Kue
        </div>
        {openModal && (
          <Modal
            onClose={() => setOpenModal(false)}
            post={post}
            onChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cakes.map((cake) => (
            <div
              key={cake.id}
              className="border border-gray-300 rounded-lg shadow-lg overflow-hidden"
            >
              <img className="w-full h-48 object-cover" src={cake.imageUrl} alt={cake.name} />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{cake.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {cake.description.length > 100
                    ? `${cake.description.substring(0, 100)}...`
                    : cake.description}
                </p>
                <p className="text-lg font-bold mb-2">Rp {cake.price}</p>
                <div className="flex justify-between mt-4">
                  <Link
                    to={`/cake/edit/${cake.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDeleteCake(cake.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cake;
