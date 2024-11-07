import React from 'react'
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/bg.jpg';

function Body() {
  const images = [
    {
      id: 1,
      image: img1,
      name: 'Coffee 1',
      price: '4.99',
      description: 'Description 1',
    },
    {
      id: 2,
      image: img2,
      name: 'Coffee 2',
      price: '5.99',
      description: 'Description 2',
    },
    {
      id: 3,
      image: img3,
      name: 'Coffee 3',
      price: '3.99',
      description: 'Description 3',
    },
    {
      id: 4,
      image: img4,
      name: 'Coffee 4',
      price: '6.99',
      description: 'Description 4',
    },
    {
      id: 5,
      image: img5,
      name: 'Coffee 5',
      price: '4.99',
      description: 'Description 5',
    },
    {
      id: 6,
      image: img6,
      name: 'Coffee 6',
      price: '5.99',
      description: 'Description 6',
    },
    {
      id: 7,
      image: img7,
      name: 'Coffee 7',
      price: '4.99',
      description: 'Description 7',
    },
    {
      id: 8,
      image: img8,
      name: 'Coffee 8',
      price: '6.99',
      description: 'Description 8',
    }
  ];

  return (
    <>
    <section className='h-[80vh] flex flex-col justify-center p-2  bg-cover bg-center' style={{ backgroundImage: `url(${img1})` }}>
    <h1 className='text-4xl font-bold  font-mono text-white'>Step into Style</h1>
    <p className='text-white'>Discover the perfect pair for every occasion</p>
    <button className='w-fit p-4 border border-white bg-transparent text-white py-2 rounded-lg hover:bg-white hover:text-black transition duration-300 font-bold mt-2'>Shop Now</button>
      </section>


        <section className='max-w-[1240px] mx-auto px-4 py-16 w-full'>
          <h1 className='text-4xl font-bold text-center font-mono text-black'>Our Coffee Offer</h1>
        </section>
        <div className="max-w-[1240px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mt-2">${product.price}</p>
                <div className="mt-4 space-y-2">
                  <button className="w-full bg-transparent text-black py-2 rounded-lg hover:bg-black hover:text-white   transition duration-300 border border-black">
                    Add to Cart
                  </button>
                  <button className="w-full border border-black text-black py-2 rounded-lg hover:bg-black  hover:text-white transition duration-300">
                    Quick View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default Body
