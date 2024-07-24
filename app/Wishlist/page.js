"use client"
import { useSelector } from "react-redux";
import Link from "next/link";
const Cart = () => {
    const data = useSelector((state) => state.cartData);
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
             <div class="card ms-1 border-0" >
              <img src={item.image} class="card-img-top rounded-5" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">
                 {item.price}
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