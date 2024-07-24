"use client"
import { useSelector } from "react-redux";
import Link from "next/link";
const Cart = () => {
    const data = useSelector((state) => state.userData);
      return (<div>

        <div>
      <div className="row ">
              <div className=" col d-flex ms-2 ">
              {data.map((item, id) => (
          <Link
            key={id}
            href={`Post/${item.id}`}
            className="text-decoration-none  text-dark "
          >
             <div class="card ms-1" >
              <img src={item.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-primary">{item.name}</h5>
                <p class="card-text text-muted">
                <i class="fa-solid fa-location-dot"></i>
                 {item.Location}
                </p>
                <h5 class="card-text ">
                 ${item.price}
                </h5>
                <p class="card-text text-muted">
                 {item.postedOn}
                </p>
                
              </div>
            </div>
           
          </Link>
        ))}
             
              </div>
            
            </div>
      
       
      </div>

 
    </div>)
}

export default Cart;