"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { submit } from "@/Redux/action";

export default function Page() {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({
    name: "",
    Location: "",
    price: "",
    contact: "",
    image: "",
    description: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submit(details));
  };

  return (
    <form className="container my-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputHomeDescription" className="form-label">
          Home Description <small className="text-muted">(Ex: 1 BHK Apartment for Rent in Thanisandra, Bengaluru)</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputHomeDescription"
          name="name"
          value={details.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputLocation" className="form-label">
          Location <small className="text-muted">(Ex: Thanisandra, Bengaluru, Karnataka - 560045)</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputLocation"
          name="Location"
          value={details.Location}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPrice" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputPrice"
          name="price"
          value={details.price}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputContact" className="form-label">
          Contact
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputContact"
          name="contact"
          value={details.contact}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputImage" className="form-label">
          Image URL <small className="text-muted">(Ex: https://example.com/image.jpg)</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputImage"
          name="image"
          value={details.image}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputDescription" className="form-label">
          Description (About Home)
        </label>
        <textarea
          className="form-control"
          id="exampleInputDescription"
          name="description"
          value={details.description}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn bg-warning text-white">
        Submit
      </button>
    </form>
  );
}
