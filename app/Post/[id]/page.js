"use client";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { book, removeCart,removeItem } from "../../../Redux/action";

function Post({ params }) {
  const dispatch = useDispatch();
  const [post, setPost] = useState([]);
  const data = useSelector((state) => state.productData);
  const id = params.id;
  console.log(id);
  const Data = data.filter((data) => data.id === id);
  // console.log(Data)
  useEffect(() => {
    setPost(Data);
  }, []);
  console.log(post);
  return (
    <>
      {post.map((value, index) => (
        <div key={id} className="ms-5 ">
        
            <img className="col-6" src={value.image} alt="" />
            <div className="text-primary">{value.name} </div>
            <div>{value.Location} </div>
            <div>{value.price} </div>
            <div>{value.postedOn} </div>
            <div>{value.bed} </div>
            <button
              onClick={() => dispatch(book(value))}
              type="button"
              class="btn btn-success"
            >
              Add to wishlist
            </button>
            <button
              type="button"
              class="btn btn-danger ms-2"
              onClick={() => dispatch(removeCart(value.id))}
            >
              Remove
            </button>
            <button type="button" class="btn btn-primary rounded-4 mb-0" onClick={()=>dispatch(removeItem(value.id))}>DELETE</button>
          </div>
         
        
      ))}
    </>
  );
}

export default Post;
