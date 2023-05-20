import React from 'react';

const Banner = () => {
    return (
        <div>
            <section className="py-2">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-indigo-600 font-medium">
                            Over 200 successful Order
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                        It's never been easier to invest in your kid's toys
                        </h2>
                        <p>
                        Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Faucibus interdum posuere lorem ipsum dolor. Eu tincidunt tortor aliquam nulla facilisi cras. Venenatis lectus magna.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <a className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                                Let's get started
                            </a>
                        </div>
                    </div>
                    <div className='md:mr-20'>
                        <img
                            src={"https://i.ibb.co/xHRC80Y/41dwjbdrd-AL-AC-SR360-460.jpg"}
                            className=" w-full"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;