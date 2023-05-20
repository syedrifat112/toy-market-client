import React from 'react';

const Test = () => {
    const features = [
        {
            icon:
            <div className="avatar  mx-auto mb-8">
            <div className="w-24 rounded-full ">
              <img src = {"https://i.ibb.co/fdMdkL1/pexels-cottonbro-studio-4252146.jpg"} />
            </div>
          </div>,
            title: "Merlin",
            desc: "Nisl vel pretium lectus quam id leo in vitae. Eros in cursus turpis massa. Blandit massa enim nec dui nunc. Turpis in eu mi bibendum neque egestas. Viverra nam libero justo laoreet sit amet cursus sit."
        },
        {
            icon:
            <div className="avatar  mx-auto mb-8">
            <div className="w-24 rounded-full ">
              <img src = {"https://i.ibb.co/fdMdkL1/pexels-cottonbro-studio-4252146.jpg"} />
            </div>
          </div>,
            title: "Delina",
            desc: "Nisl vel pretium lectus quam id leo in vitae. Eros in cursus turpis massa. Blandit massa enim nec dui nunc. Turpis in eu mi bibendum neque egestas. Viverra nam libero justo laoreet sit amet cursus sit."
        },
        {
            icon:
            <div className="avatar  mx-auto mb-8">
            <div className="w-24 rounded-full ">
              <img src = {"https://i.ibb.co/fdMdkL1/pexels-cottonbro-studio-4252146.jpg"} />
            </div>
          </div>,
            title: "Jack",
            desc: "Nisl vel pretium lectus quam id leo in vitae. Eros in cursus turpis massa. Blandit massa enim nec dui nunc. Turpis in eu mi bibendum neque egestas. Viverra nam libero justo laoreet sit amet cursus sit."
        }
    ]
    return (
        
        <div>
            <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='mb-16'>
                    
                    <p className="text-gray-800 text-3xl font-bold sm:text-5xl text-center ">
                    What our customers say
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}>
                                    <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center mx-auto">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl text-gray-800 font-semibold text-center ">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Test;