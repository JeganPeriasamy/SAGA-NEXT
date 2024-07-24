"use client";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { productList,removeItem } from "../Redux/action";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.log(data);

  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div>
      <div className="row mt-5">
              <div className=" col d-flex ms-2 ">
              {data.map((item, id) => (
          <Link
            key={id}
            href={`Post/${item.id}`}
            className="text-decoration-none  text-dark "
          >
             <div class="card ms-1 border-0 shadow" >
              <img src={item.image} class="card-img-top rounded-5 " alt="..." />
              <div class="card-body">
                <h5 class="card-title text-primary">{item.name}</h5>
                <p class="card-text  text-muted">
                 {item.Location}
                </p>
                <div className="d-flex justify-content-between">
                <h5 class="card-text ">
                 ${item.price}
                </h5>
                <button type="button" class="btn btn-primary rounded-4 mb-0">view</button>
               
                </div>
                
                
              </div>
            </div>
           
          </Link>
        ))}
             
              </div>
            
            </div>
      
       
      </div>
    
  );
}

export default Main;


