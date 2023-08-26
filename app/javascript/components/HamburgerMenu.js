import React, { useState } from 'react';
import { FaHamburger, FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Transition } from '@headlessui/react'


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <React.Fragment>
      <div>
      <button
        className="relative flex text-xs sm:text-base md:text-lg lg:text-xl transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${isOpen ? '15rem' : '1rem'})` }} // Adjust the value as needed
        onClick={toggleMenu}
      >
        <Transition
          className="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
          show={isOpen}
          enter="transition ease-in-out duration-500 transform"
          enterFrom="rotate-180"
        >
          <FaTimes />
        </Transition>

        <Transition
          className="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
          show={!isOpen}
          enter="transition duration-500 transform"
          enterFrom="rotate-180"
        >
          <GiHamburgerMenu />
        </Transition>



      </button>

      <Transition
        className="fixed top-0 left-0 h-full w-56 w- bg-white text-gray-600 rounded shadow-lg "
        show={isOpen}
        enter="transition ease-in-out duration-500 transform"
        enterFrom="-translate-x-56"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-500 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-56"
      >
        <div>
          <div className="pt-3 h-16 w-full bg-blue-rotary  text-gray-600">
            <p className="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-3xl">Menu</p>
          </div>
          <a href="/" className="block hover:bg-gray-100 hover:text-blue-600 p-4 py-4">Home</a>
          <a href="type_items" className="block hover:bg-gray-100 hover:text-blue-600 p-4 py-4">Tipos de Itens</a>
          <a href="items" className="block hover:bg-gray-100 hover:text-blue-600 p-4 py-4">Itens</a>
          <a href="people" className="block hover:bg-gray-100 hover:text-blue-600 p-4 py-4">Pessoas</a>
          <a href="loans" className="block hover:bg-gray-100 hover:text-blue-600 p-4 py-4">Empréstimos</a>
        </div>
      </Transition>

    </div>
      </React.Fragment>
  );
}

export default HamburgerMenu
