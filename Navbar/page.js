"use client";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { productSearch } from "../Redux/action";

export default function Page() {
  const dispatch = useDispatch();
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img
            src="https://zameensquare.com/_next/static/media/zameen-logo.be926326.png"
            alt="logo"
            className="image-fluid w-10"
          ></img>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2  ms-3 mb-lg-0">
              <li class="nav-item">
                <Link className="text-decoration-none p-3 mt-2" href="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="text-decoration-none p-3 mt-2" href="/Upload">
                 Upload Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="text-decoration-none p-3 mt-2" href="/Wishlist">
                  My Wishlist
                </Link>
              </li>
              <li class="nav-item">
                <Link className="text-decoration-none p-3 mt-2" href="/MyUploads">
                  My Uploads
                </Link>
              </li>
            </ul>

            <div className="search-box ">
              <div class="input-group">
                <div class="form-outline" data-mdb-input-init>
                  <input
                    type="search"
                    id="form1"
                    class="form-control"
                    onChange={(e) =>
                      dispatch(productSearch(e.target.value))
                    }
                  />
                </div>
                <button type="button" class="btn btn-primary ms-3 rounded-3">Login</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
