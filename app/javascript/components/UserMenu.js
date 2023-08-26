
import React from "react"
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const UserMenu = ({user_email}) => {
  return (
      <React.Fragment>
      <div className="absolute flex right-0 text-gray-600 text-xs sm:text-base md:text-lg lg:text-xl">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center  px-4 py-2 text-white">
          {user_email}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-600 hover:text-white"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <a href="/users/sign_out">
                  <button
                    className={`${
                      active ? 'bg-blue-rotary text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2`}
                  >
                    {active ? (
                      <LogoutActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <LogoutInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Sair
                  </button>
                  </a>
                )}
              </Menu.Item>
              
            </div>
            
           
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
      </React.Fragment>
  );
}

function LogoutInactiveIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#088cd4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 "
      stroke="#088cd4"
      >
      </path>
      <polyline points="16 17 21 12 16 7">
      </polyline>
      <line x1="21" y1="12" x2="9" y2="12">
      </line>
    </svg>



    
  )
}

function LogoutActiveIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6ec6f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 "
    stroke="#6ec6f5"
    >
    </path>
    <polyline points="16 17 21 12 16 7">
    </polyline>
    <line x1="21" y1="12" x2="9" y2="12">
    </line>
  </svg>
    
  )
}
  export default UserMenu