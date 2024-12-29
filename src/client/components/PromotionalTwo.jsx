import React from 'react'
import { Link } from 'react-router-dom'

const PromotionalTwo = () => {
    return (
        <section className="promotional-banner mt-32">
            <div className="container container-lg">
                <div className="row gy-4">
                <div className="row gy-4">
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <div className="position-relative rounded-16 overflow-hidden z-1 p-32">
            <img
                src="assets/images/bg/promo-bg-img1.png"
                alt=""
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
            />
            <div className="flex-between flex-wrap gap-16" style={{ height: "176px" }}>
                <div className="">
                    <span className="text-heading text-sm mb-8">Latest Deal</span>
                    <h6 className="mb-0">Laptop Dell Inspiron 15 3520</h6>
                    <Link
                        to="/shop"
                        className="d-inline-flex align-items-center gap-8 mt-16 text-heading text-md fw-medium border border-top-0 border-end-0 border-start-0 border-gray-900 hover-text-main-two-600 hover-border-main-two-600"
                    >
                        Shop Now
                        <span className="icon text-md d-flex">
                            <i className="ph ph-plus" />
                        </span>
                    </Link>
                </div>
                <div className="pe-xxl-4">
                    {/*                         <img src="assets/images/logo/logo.png" alt="Logo" /> */}
                    <img src="assets/images/product/dell1.png" alt="" width="176" height="174" />
                </div>
            </div>
        </div>
    </div>
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <div className="position-relative rounded-16 overflow-hidden z-1 p-32">
            <img
                src="assets/images/bg/promo-bg-img2.png"
                alt=""
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
            />
            <div className="flex-between flex-wrap gap-16" style={{ height: "176px" }}>
                <div className="">
                    <span className="text-heading text-sm mb-8">Get 60% Off</span>
                    <h6 className="mb-0">Microsoft Surface Laptop Studio</h6>
                    <Link
                        to="/shop"
                        className="d-inline-flex align-items-center gap-8 mt-16 text-heading text-md fw-medium border border-top-0 border-end-0 border-start-0 border-gray-900 hover-text-main-two-600 hover-border-main-two-600"
                    >
                        Shop Now
                        <span className="icon text-md d-flex">
                            <i className="ph ph-plus" />
                        </span>
                    </Link>
                </div>
                <div className="pe-xxl-4">
                    <img src="assets/images/product/mic1.png" alt="" width="150" height="174" />
                </div>
            </div>
        </div>
    </div>
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <div className="position-relative rounded-16 overflow-hidden z-1 p-32">
            <img
                src="assets/images/bg/promo-bg-img3.png"
                alt=""
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
            />
            <div className="flex-between flex-wrap gap-16" style={{ height: "176px" }}>
                <div className="">
                    <span className="text-heading text-sm mb-8">Start From 11.110.000đđ</span>
                    <h6 className="mb-0">MacBook Pro 14 M4 Pro</h6>
                    <Link
                        to="/shop"
                        className="d-inline-flex align-items-center gap-8 mt-16 text-heading text-md fw-medium border border-top-0 border-end-0 border-start-0 border-gray-900 hover-text-main-two-600 hover-border-main-two-600"
                    >
                        Shop Now
                        <span className="icon text-md d-flex">
                            <i className="ph ph-plus" />
                        </span>
                    </Link>
                </div>
                <div className="pe-xxl-4">
                    <img src="assets/images/product/mac1.png" alt="" width="150" height="174" />
                </div>
            </div>
        </div>
    </div>
</div>

                </div>
            </div>
        </section>

    )
}

export default PromotionalTwo