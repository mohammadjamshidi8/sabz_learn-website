import { getMe, login } from "./auth.js";
import { getUrlParam } from "./utiles.js";

window.addEventListener("load", () => {
  getMe();
});

const showAllCourses = async () => {
  const coursesContainer = document.querySelector("#courses-container");

  const res = await fetch("http://localhost:4000/v1/courses");

  const courses = await res.json();

  courses.map((course) => {
    console.log(course);
    coursesContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="bg-white rounded-md">

          <div class="relative">
            <span class="absolute px-3 py-1 bg-green-500 text-white rounded-full top-3 right-3">۶۰%</span>
            <a href="course.html?name=${course.shortName}">
            <img src="http://localhost:4000/courses/covers/${course.cover}" class="w-full rounded-xl mb-3 aspect-video h-[170px]" alt="">
            </a>
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
                <span class="text-lg text-green-500 font-dana font-black">${course.price === 0 ? "رایگان" : course.price.toLocaleString()
      }</span>
              </div>
            </div>
          </div>
        </div>
        `
    );
  });
};

const showNewCourse = async () => {
  const popularCourseContainer = document.querySelector(
    "#new-course-container"
  );

  const res = await fetch("http://localhost:4000/v1/courses/popular");
  const data = await res.json();

  data.map((course) => {
    popularCourseContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="swiper-slide">
            <div class="bg-white rounded-md pb-10">

              <div class="relative">
                <span class="absolute px-3 py-1 bg-green-500 text-white rounded-full top-3 right-3">۶۰%</span>
                <img src="http://localhost:4000/courses/covers/${course.cover
      }" class="w-full rounded-xl mb-3 aspect-video h-[170px]" alt="">
              </div>

              <div class="flex flex-col gap-y-4 px-6 mt-4">

                <h3 class="font-black font-dana line-clamp-1">${course.name
      }</h3>

                <span class="line-clamp-1">${course.description}</span>

                <div class="flex items-center justify-between">
                  <div class="flex gap-x-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <span>${course.creator}</span>
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

                <div class="flex justify-between pb-10">
                  <div class="flex items-center gap-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    <span>${course.registers}</span>
                  </div>
                  <div class="flex flex-col items-end">
                    <span class="text-lg text-green-500 font-dana font-black">${course.price === 0
        ? "رایگان"
        : course.price.toLocaleString()
      }</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        `
    );
  });
};

const showArticle = async () => {
  const articleContainer = document.querySelector("#article-container");

  const res = await fetch("http://localhost:4000/v1/articles");

  const articles = await res.json();

  articles.slice(0, 4).forEach((article) => {
    articleContainer.insertAdjacentHTML(
      "beforeend",
      `
    <div class="bg-white rounded-md overflow-hidden">

          <div class="relative">
            <img src="http://localhost:4000/courses/covers/${article.cover}" alt="">
            <span
              class="w-full h-full absolute bg-gradient-to-t from-white to-transparent opacity-60 top-0 right-0"></span>
          </div>

          <div class="flex flex-col gap-y-4 px-6 mt-4">

            <h3 class="font-bold font-dana line-clamp-1">${article.title}</h3>

            <span class="line-clamp-4 font-thin">${article.description}</span>

            <div class="flex items-center justify-between">
              <div class="flex gap-x-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <span class="font-bold text-[12px]">${article.creator.name}</span>
              </div>
              <div class="flex gap-x-1 items-center font-thin">
                <span class="text-sm">۱۴۰۳/۰۱/۰۲</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </div>
            </div>
            <div class="w-[90%] h-[1px] bg-slate-300 self-center"></div>

            <div class="flex justify-center">
              <button class="hover:text-green-500">
                <a href="#">مطالعه مقاله</a>
              </button>
            </div>
          </div>
        </div>
    `
    );
  });
};

const showPopularCourse = async () => {
  const popularCourseContainer = document.querySelector(
    "#popular-course-container"
  );

  const res = await fetch("http://localhost:4000/v1/courses/popular");

  const courses = await res.json();

  courses.forEach((course) => {
    popularCourseContainer.insertAdjacentHTML(
      "beforeend",
      `
    <div class="bg-white rounded-md">

          <div class="relative">
            <span class="absolute px-3 py-1 bg-green-500 text-white rounded-full top-3 right-3">۶۰%</span>
            <img src="http://localhost:4000/courses/covers/${course.cover
      }" class="w-full rounded-xl mb-3 aspect-video h-[170px]" alt="">
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
                <span>${course.creator}</span>
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

            <div class="flex justify-between">
              <div class="flex items-center gap-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                <span>${course.registers}</span>
              </div>
              <div class="flex flex-col items-end">
                <span class="text-lg text-green-500 font-dana font-black">${course.price === 0 ? "رایگان" : course.price.toLocaleString()
      }</span>
              </div>
            </div>
          </div>

        </div>
    `
    );
  });
};

const showMenus = async () => {
  const navbarMenuContainer = document.querySelector("#navbar-menu");

  const res = await fetch("http://localhost:4000/v1/menus");

  const menus = await res.json();

  menus.map((menu) => {
    navbarMenuContainer.insertAdjacentHTML(
      "beforeend",
      `
    <li class="flex flex-col gap-y-4 relative group">

                <div class="flex gap-x-1 items-center">
                  <a class="top-nav__menu-link" href=category.html?cat=${menu.href
      }>${menu.title}</a>
                  ${menu.submenus.length
        ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>

                <div class="top-nav__menu-dropdown">
                  <div>
                    ${menu.submenus
          .map((item) => `<a href="#">${item.title}</a>`)
          .join("")}
                  </div>
                </div>

              </li>`
        : ""
      }
    `
    );
  });
};

const renderCourseFunc = (array, container) => {
  console.log('array::', array);
  if (array.length) {
    array.forEach((course) => {
      container.insertAdjacentHTML("beforeend",
        `
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
              <span>${course.creator}</span>
            </div>
            <div class="flex gap-x-1 items-center">
              <span class="text-yellow-600">${course.courseAverageScore}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="orange" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </div>
          </div>
          <div class="w-[90%] h-[1px] bg-slate-300 self-center"></div>
            
          <div class="flex justify-between">
            <div class="flex items-center gap-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
              <span>${course.registers}</span>
            </div>
            <div class="flex flex-col items-end">
              <span class="text-lg text-green-500 font-dana font-black">${course.price === 0 ? "رایگان" : course.price.toLocaleString()}</span>
            </div>
          </div>
        </div>
            
      </div>
  `
      );
    });
  } else {
    container.className = ''
    container.insertAdjacentHTML('beforeend', `
<div class="w-full bg-rose-300 py-5 px-4 rounded-md">متاسفانه دوره ای وجود ندارد</div>
`)
  }
}

const getAndShowCategory = async () => {

  let categoryName = getUrlParam("cat");
  categoryName = categoryName.replace("category-info/", "");

  const categoryCourseContainer = document.querySelector("#category-course-container");

  const sortItems = document.querySelectorAll('#sort-items input')

  const res = await fetch(
    `http://localhost:4000/v1/courses/category${categoryName}`
  );

  const data = await res.json();

  let courseArray = [...data]

  sortItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const userSelectionSort = e.target.dataset.key

      switch (userSelectionSort) {
        case 'cheap': const freeCourse = courseArray.sort((a, b) => {
          return a.price - b.price
        })
          categoryCourseContainer.innerHTML = ''
          renderCourseFunc(freeCourse, categoryCourseContainer)
          break;
        case 'all':
          categoryCourseContainer.innerHTML = ''
          renderCourseFunc(courseArray, categoryCourseContainer)
          break;
        case 'expensive':
          const notFreeCourse = courseArray.sort((a, b) => {
            return b.price - a.price
          })
          categoryCourseContainer.innerHTML = ''
          renderCourseFunc(notFreeCourse, categoryCourseContainer)
          break;
        case 'score':
          const scoreCourse = courseArray.sort((a, b) => {
            return b.courseAverageScore - a.courseAverageScore
          })
          categoryCourseContainer.innerHTML = ''
          renderCourseFunc(scoreCourse, categoryCourseContainer)
          break;
        default: categoryCourseContainer.innerHTML = ''
          renderCourseFunc(courseArray, categoryCourseContainer)
          break;
      }
    })
  })

  renderCourseFunc(courseArray, categoryCourseContainer)

  searchCourseFunc(data)

};

const searchCourseFunc = (courseArray) => {
  const searchCourseElem = document.querySelector('#category-search')
  const categoryCourseContainer = document.querySelector("#category-course-container");

  searchCourseElem.addEventListener('input', (e) => {
    let userInput = e.target.value
    const filterCourse = courseArray.filter(course => course.name.includes(userInput))
    categoryCourseContainer.innerHTML = ''
    categoryCourseContainer.className = 'grid grid-cols-3 gap-5'
    renderCourseFunc(filterCourse, categoryCourseContainer)
  })
}

const getAndShowSingleCourse = async (key) => {

  let totalMins = 0
  let totalSec = 0
  let hours = null
  let minutes = null

  const singleCourseTitle = document.querySelector('#single-course-title')
  const breadcrumbTitle = document.querySelector('#breadcrumb-title')
  const breadcrumbCategory = document.querySelector('#breadcrumb-category')
  const breadcrumbDescription = document.querySelector('#single-course-des')
  const singleCoursePrice = document.querySelector('#single-course-price')
  const singleCourseImage = document.querySelector('#single-course-image')
  const singleCourseRegister = document.querySelector('#single-course-register')
  const singleCourseStatus = document.querySelector('#single-course-status')
  const singleCourseSupport = document.querySelector('#single-course-support')
  const singleCourseDate = document.querySelector('#single-course-date')
  const singleCourseTime = document.querySelector('#single-course-time')
  const singleCourseStudents = document.querySelector('#single-course-students')
  const singleCourseCreator = document.querySelector('#single-course-creator')
  const singleCourseCreatorImage = document.querySelector('#single-course-creator-image')
  const singleCourseFullDescription = document.querySelector('#single-course-full-des')
  const singleCourseSessionLength = document.querySelector('#single-course-session-length')
  const singleCourseSessionTime = document.querySelector('#single-course-session-time')
  const singleCourseSessionAccordion = document.querySelector('#accordion-body')

  const res = await fetch(`http://localhost:4000/v1/courses/${key}`)

  const data = await res.json()


  singleCourseTitle.innerHTML = data.name
  breadcrumbTitle.innerHTML = data.name
  breadcrumbCategory.innerHTML = data.categoryID.title
  breadcrumbDescription.innerHTML = data.description
  singleCoursePrice.innerHTML = data.price === 0 ? "رایگان" : `${data.price.toLocaleString()} تومان`
  singleCourseImage.setAttribute('src', `http://localhost:4000/courses/covers/${data.cover}`)
  singleCourseRegister.innerHTML = data.isUserRegisteredToThisCourse ? 'شما دانشجوی این دوره هستید' : 'ثبت نام در دوره'
  singleCourseStatus.innerHTML = data.isComplete ? 'تکمیل شده' : 'در حال برگزاری'
  singleCourseSupport.innerHTML = data.support
  singleCourseDate.innerHTML = data.updatedAt.slice(0, 10)

  if (data.sessions.length) {
    data.sessions.forEach(item => {
      let second = +(item.time.slice(3, 5))
      let minute = +(item.time.slice(0, 2))
      totalMins += minute
      totalSec += second
      hours = Math.floor(totalMins / 60)
      minutes = Math.round((totalSec / 60) + totalMins % 60)
      singleCourseTime.innerHTML = `${hours} ساعت و ${minutes} دفیفه`
    })
  } else {
    singleCourseTime.innerHTML = 'جلسه ای وجود ندارد'
  }

  singleCourseStudents.innerHTML = data.courseStudentsCount

  singleCourseCreator.innerHTML = `${data.creator.name} | مدرس دوره `

  singleCourseCreatorImage.setAttribute('src', `http://localhost:4000/courses/covers${data.creator.profile}`)

  singleCourseFullDescription.innerHTML = data.description

  singleCourseSessionLength.innerHTML = `${data.sessions.length} جلسه`
  singleCourseSessionTime.innerHTML = (hours && minutes) ? `${hours} ساعت و ${minutes} دفیفه` : `0 دقیقه`

  if (data.sessions.length) {
    data.sessions.forEach((session, index) => {
      singleCourseSessionAccordion.insertAdjacentHTML('beforeend', `
      <div class="flex items-center justify-between py-2 border border-b-[1px] border-b-white">
      <div class="flex items-center gap-x-3">
          <span class="px-2 bg-white">${index + 1}</span>
          <span>
          <a href="#">${session.title}</a>
          </span>
      </div>
      <div class="flex gap-x-1 items-center">
      ${session.free ? '' : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>`}
          <span>${session.time}</span>
      </div>
    </div>
    `)
    })
  } else {
    singleCourseSessionAccordion.insertAdjacentHTML('beforeend', `
  <div class="flex items-center justify-between py-2 border border-b-[1px] border-b-white">
    <div class="flex items-center gap-x-3">
        <span class="text-rose-400">هنوز جلسه ای ضبط نشده!</span>
    </div>
    
  </div>
  `)
  }



}

const getAndShowRelatedCourse = async (key) => {

  const singleCourseRelatedWrapper = document.querySelector('#single-course-related-wrapper')

  const res = await fetch(`http://localhost:4000/v1/courses/related/${key}`)
  const data = await res.json()

  console.log(data);

  if (data.length) {
    data.forEach(course => {
      singleCourseRelatedWrapper.insertAdjacentHTML('beforeend', `
      <div class="rounded-md bg-gray-200 flex items-center justify-between p-3 mt-5">
       <div class="flex items-center gap-x-3">
           <img src="http://localhost:4000/courses/covers/${course.cover}" class="h-14 rounded-md"
               alt="">
           <span>
               <a href="course.html?name=${course.shortName}">${course.name}</a>
           </span>
       </div>
       <div class="flex items-center gap-x-1">
           <span class="text-sky-400">
               <a href="course.html?name=${course.shortName}">مشاهده</a>
           </span>
           <div class="bg-sky-400 rounded-full p-1">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke-width="2.5" stroke="currentColor" class="w-3 h-3 text-white">
                   <path stroke-linecap="round" stroke-linejoin="round"
                       d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
               </svg>
           </div>
       </div>
      </div>
    `)
    })

  } else {
    // 
  }

}

export {
  showAllCourses,
  showNewCourse,
  showArticle,
  showPopularCourse,
  showMenus,
  getAndShowCategory,
  getAndShowSingleCourse,
  getAndShowRelatedCourse
};
