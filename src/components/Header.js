import React from 'react'
import logo from "../images/logo_pay.png"
const Header = () => {
  return (
    <div>

      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
           
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center">

               <a href="/" className="flex-shrink-0" aria-current="page">
              <img
                className="h-8 w-auto"
                src={logo}
                alt="Your Company"
              />
            </a>
              </div>

              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <a href="/payment" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" >payment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header
