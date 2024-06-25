import React from 'react'

function Footer() {
  return (

<footer class="rounded-lg shadow m-4  bg-black w-3/4 ">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-[#FAF0E6] sm:text-center">© 2024 <a href="/" class="hover:underline hover:text-[#FFD700]">Crypto Tracker™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-[#FAF0E6] sm:mt-0">
        <li>
            <a href="/" class="hover:underline hover:text-[#87CEEB] me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="/" class="hover:underline hover:text-[#87CEEB] me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="/" class="hover:underline hover:text-[#87CEEB] me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="/" class="hover:underline hover:text-[#87CEEB]">Contact</a>
        </li>
    </ul>
    </div>
</footer>

  )
}

export default Footer
