  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";

  const AddCake = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [ChefId, setChefId] = useState(""); // State untuk menyimpan ChefId
    const [chefs, setChefs] = useState([]); // State untuk daftar chef

    const navigate = useNavigate();

    useEffect(() => {
      const getChefs = async () => {
        try {
          const response = await axios.get("http://localhost:3000/chef");
          setChefs(response.data); // Simpan daftar chef di state
        } catch (error) {
          console.log(error);
        }
      };

      getChefs();
    }, []);

    const saveCake = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:3000/cake/post", {
          name,
          price: parseInt(price), 
          description,
          imageUrl,
          ChefId : ChefId,
        });
        navigate("/cake"); 
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          <form onSubmit={saveCake}>
            <div className="field">
              <label className="label">Nama Kue</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan Nama Kue"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Harga</label>
              <div className="control">
                <input
                  type="number"
                  className="input"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Masukkan Harga"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Deskripsi</label>
              <div className="control">
                <textarea
                  className="textarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Masukkan Deskripsi"
                  required
                ></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">URL Gambar</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Masukkan URL Gambar"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Pilih Chef</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    value={ChefId}
                    onChange={(e) => setChefId(e.target.value)}
                    required
                  >
                    <option value="">Pilih Chef</option>
                    {chefs.map((Chef) => (
                      <option key={Chef.id} value={Chef.id}>
                        {Chef.id}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-success">
                Simpan Kue
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default AddCake;
