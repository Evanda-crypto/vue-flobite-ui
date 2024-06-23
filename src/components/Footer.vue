<template>
    
    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <router-link :to="{name:'home'}" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </router-link>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <router-link :to="{name:'about'}" class="hover:underline me-4 md:me-6">About</router-link>
                </li>
                <li>
                    <router-link :to="{name:'services'}" class="hover:underline me-4 md:me-6">Services</router-link>
                </li>
                <li>
                    <router-link :to="{name:'gallery'}" class="hover:underline me-4 md:me-6">Gallery</router-link>
                </li>
                <li>
                    <router-link :to="{name:'contact'}" class="hover:underline">Contact</router-link>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>



  </template>max-w-screen-xl