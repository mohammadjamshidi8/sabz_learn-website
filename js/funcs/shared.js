import { getMe } from "./auth.js";


window.addEventListener('load', () => {
    getMe()
})


const showAllCourses = async () => {
    const coursesContainer = document.querySelector('#courses-container')

    const res = await fetch('http://localhost:4000/v1/courses')

    const courses = await res.json()

    courses.map(course => {
        coursesContainer.insertAdjacentHTML('beforeend', `
        <div class="bg-white rounded-md">

          <div class="relative">
            <span class="absolute px-3 py-1 bg-green-500 text-white rounded-full top-3 right-3">۶۰%</span>
            <img src="http://localhost:4000/courses/covers/${course.cover}" class="w-full rounded-xl mb-3 aspect-video h-[170px]" alt="">
          </div>

          <div class="flex flex-col gap-y-4 px-6 mt-4">

            <h3 class="font-black font-dana line-clamp-1">${course.name}</h3>

            <span class="line-clamp-1">${course.description}</span>

            <div class="flex items-center justify-between">
              <div class="flex gap-x-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <span class="text-sm">${course.creator}</span>
              </div>
              <div class="flex gap-x-1 items-center">
                <span class="text-yellow-600">۵.۰</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="orange" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </div>
            </div>
            <div class="w-[90%] h-[1px] bg-slate-300 self-center"></div>

            <div class="flex justify-between items-center">
              <div class="flex items-center gap-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                <span>${course.registers}</span>
              </div>
              <div class="flex">
                <span class="text-lg text-green-500 font-dana font-black">${course.price === 0 ? 'رایگان' : course.price.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
        `)
    })
}

export { showAllCourses }