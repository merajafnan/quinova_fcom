import React from 'react'

const Banner = () => {
    return (
        <div className='section-container bg-gradient-to-r  from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
            <div className="py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8">

                {/* images */}
                <div className='md:w-1/2'>
                    <img src="/images/home/banner.png" alt="" />
                    <div className='flex flex-col  md:flex-row items-center justify-around -mt-14 gap-2'>

                        <div className='flex bg-white py-2 px-3 rounded-xl items-center gap-3 shadow-md '>
                            <img src="/images/home/b-food1.png" alt="" className='rounded-2xl' />
                            <div className='space-y-1 '>
                                <h5>Spicy noodles</h5>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p className='text-red'>$18.0</p>
                            </div>
                        </div>


                        {/* Text */}
                        <div className='xl:flex hidden bg-white py-2 px-3 rounded-xl items-center gap-3 shadow-md '>
                            <img src="/images/home/b-food1.png" alt="" className='rounded-2xl' />
                            <div className='space-y-1 '>
                                <h5>Spicy noodles</h5>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p className='text-red'>$18.0</p>
                            </div>
                        </div>

                    </div>
                </div>



                <div className='md:w-1/2 space-y-7 px-4' >
                    <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>
                        Dive into Delights Of Delectable <span className='text-green'>Food</span>
                    </h2>
                    <p className=' text-xl text-[#4A4A4A]'>
                        Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
                    </p>
                    <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full '>Order Now</button>
                </div>


            </div>

        </div>
    )
}

export default Banner