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
    coursesContainer.insertAdjacentHTML(
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
        case 'cheap': const freeCourse = courseArray.sort((a,b) => {
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
          const notFreeCourse = courseArray.sort((a,b) => {
            return b.price - a.price
          })
          categoryCourseContainer.innerHTML = ''
          renderCourseFunc(notFreeCourse, categoryCourseContainer)
          break;
        case 'score':
          const scoreCourse = courseArray.sort((a,b) => {
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
  console.log('out :', courseArray);

};

export {
  showAllCourses,
  showNewCourse,
  showArticle,
  showPopularCourse,
  showMenus,
  getAndShowCategory,
};
