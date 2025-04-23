import FAQ from "./faq/page";

export default function Landing(){
    return(
        <>
{/* Hero */}

<div className="overflow-x-hidden bg-gray-50">
    <header className="relative py-4 md:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
                <div className="flex-shrink-0">
                    <a href="/homepage" title="" className="flex rounded text-2xl font-bold outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                        {/* <img className="w-auto h-8" src="https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg" alt="" /> */}
                        CampusNova
                    </a>
                </div>

                <div className="flex lg:hidden">
                    <button type="button" className="text-gray-900">
                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <div className="hidden lg:absolute lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
                    <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Experts </a>
                    <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Community Groups </a>
                    <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Support </a>
                </div>

                <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                    <a href="/auth/login" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Login </a>
                    <a
                        href="/auth/signup"
                        title=""
                        className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white"
                        role="button"
                    >
                        Join community
                    </a>
                </div>
            </div>
        </div>
    </header>

    <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
                <p className="inline-flex px-4 py-2 text-base text-gray-900 border border-gray-200 rounded-full font-pj">Designed for Students, Managed by Educators</p>
                <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Empowering education through seamless digital access</h1>
                <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 font-inter">Access academic tools, schedules, resources, and updates all in one place.
                Manage your college life effortlessly with our all-in-one platform.</p>

                <div className="relative inline-flex mt-10 group ">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg  group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <a href="/auth/signup" title="" className="relative inline-flex items-center justify-center border border-2 border-gray-900  px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl  hover:text-black hover:bg-gray-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                    Get access to your personalized dashboard
                    </a>
                </div>
            </div>
        </div>
        <div className="mt-16 md:mt-20"></div>
    </section>
</div>

<section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">Make every step student-focused</h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">Empower learning, collaboration, and growth at every stage of your academic journey.</p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div className="md:p-8 lg:p-14">
                {/* SVG */}
                <svg className="mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Academic Support</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Access live chat with mentors, personalized academic help, and 24/7 support—anytime you need it.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                {/* SVG */}
                <svg className="mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 27H19V45H27V27Z" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 37H1V45H9V37Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M45 17H37V45H45V17Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 17L15 7L23 15L37 1" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28 1H37V10" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Progress Tracking</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">View performance insights, assignment deadlines, and learning trends in one clear dashboard.
                </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                {/* SVG */}
                <svg className="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41 1H1V41H41V1Z" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 7H7V20H18V7Z" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 26H7V35H18V26Z" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M35 7H24V35H35V7Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Smart Onboarding</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Get started easily with guided walkthroughs, course recommendations, and orientation tools.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
                {/* SVG */}
                <svg className="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.66667 25H6C3.23858 25 1 27.2386 1 30V37C1 39.7614 3.23858 42 6 42H36C38.7614 42 41 39.7614 41 37V30C41 27.2386 38.7614 25 36 25H31.8333C30.2685 25 29 26.2685 29 27.8333C29 29.3981 27.7315 30.6667 26.1667 30.6667H15.3333C13.7685 30.6667 12.5 29.3981 12.5 27.8333C12.5 26.2685 11.2315 25 9.66667 25Z"
                        fill="#D4D4D8"
                    />
                    <path d="M9 9H33" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 17H33" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 25H13V31H29V25H41" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M37 1H5C2.79086 1 1 2.79086 1 5V37C1 39.2091 2.79086 41 5 41H37C39.2091 41 41 39.2091 41 37V5C41 2.79086 39.2091 1 37 1Z" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Course Catalog</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Explore a curated library of subjects and certifications—organized and personalized for you.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                {/* SVG */}
                <svg className="mx-auto" width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M30.562 18.4609C30.0511 17.9392 29.4292 17.5392 28.7426 17.2907C28.0559 17.0422 27.3221 16.9516 26.5956 17.0256C25.8692 17.0996 25.1687 17.3362 24.5462 17.718C23.9237 18.0998 23.3952 18.6169 23 19.2309C22.6049 18.6167 22.0764 18.0995 21.4539 17.7176C20.8315 17.3357 20.1309 17.099 19.4044 17.025C18.6779 16.951 17.944 17.0417 17.2573 17.2903C16.5706 17.5389 15.9488 17.939 15.438 18.4609C14.5163 19.4035 14.0002 20.6695 14.0002 21.9879C14.0002 23.3063 14.5163 24.5722 15.438 25.5149L23 33.1999L30.564 25.5159C31.485 24.5726 32.0004 23.3064 32 21.988C31.9997 20.6696 31.4835 19.4037 30.562 18.4609Z"
                        fill="#D4D4D8"
                        stroke="#161616"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M41 41H5C3.93913 41 2.92172 40.5786 2.17157 39.8284C1.42143 39.0783 1 38.0609 1 37V1H17L22 9H45V37C45 38.0609 44.5786 39.0783 43.8284 39.8284C43.0783 40.5786 42.0609 41 41 41Z"
                        stroke="#161616"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Learning Quality</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Every lecture and resource is reviewed for clarity, value, and impact—ensuring excellence in education.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                {/* SVG */}
                <svg className="mx-auto" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 7C34.941 7 43 15.059 43 25C43 34.941 34.941 43 25 43C15.059 43 7 34.941 7 25" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 1C9.059 1 1 9.059 1 19H19V1Z" fill="#D4D4D8" stroke="#161616" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Outcome-Focused</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Visualize your learning outcomes, certificate milestones, and future roadmap clearly and confidently.</p>
            </div>
        </div>
    </div>
</section>



{/* FAQ */}

<FAQ/>


{/* CTA */}

<section className="py-10 bg-white sm:py-16 lg:py-24">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="max-w-2xl mx-auto text-center">
      <div className="flex items-center justify-center">
        <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
          <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg" alt="" />
        </div>

        <div className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
          <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg" alt="" />
        </div>

        <div className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
          <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg" alt="" />
        </div>
      </div>

      <h2 className="mt-8 text-3xl font-bold leading-tight text-black lg:mt-12 sm:text-4xl lg:text-5xl">
      Be part of a connected, smarter campus experience.
      </h2>
      <p className="max-w-xl mx-auto mt-6 text-xl text-gray-600 md:mt-10">
      Access all your academic tools, updates, and communication in one place.
      </p>

      <a
        href="/auth/signup"
        title=""
        className="inline-flex items-center justify-center px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-gray-700 border border-transparent rounded-md lg:mt-12 hover:bg-gray-900 focus:bg-gray-900"
        role="button"
      >
        <svg
          className="w-5 h-5 mr-2 -ml-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Get instant access to CampusNova
      </a>
    </div>
  </div>
</section>



{/* Footer */}


<section className="py-10 bg-white sm:pt-16 lg:pt-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
            <div className="col-span-2 md:col-span-4 xl:pr-8">
                <img className="w-auto h-9" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />

                <p className="text-base leading-relaxed text-gray-600 mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

            </div>

            <div className="lg:col-span-2">
                <p className="text-base font-semibold text-gray-900">Company</p>

                <ul className="mt-6 space-y-5">
                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> About </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Features </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Works </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Career </a>
                    </li>
                </ul>
            </div>

            <div className="lg:col-span-2">
                <p className="text-base font-semibold text-gray-900">Help</p>

                <ul className="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Customer Support </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Delivery Details </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Privacy Policy </a>
                    </li>
                </ul>
            </div>

            <div className="lg:col-span-2">
                <p className="text-base font-semibold text-gray-900">Resources</p>

                <ul className="mt-6 space-y-5">
                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Free eBooks </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Development Tutorial </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> How to - Blog </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> YouTube Playlist </a>
                    </li>
                </ul>
            </div>

            <div className="lg:col-span-2">
                <p className="text-base font-semibold text-gray-900">Extra Links</p>

                <ul className="mt-6 space-y-5">
                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Customer Support </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Delivery Details </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-gray-600 focus:text-gray-600"> Privacy Policy </a>
                    </li>
                </ul>
            </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <div className="sm:flex sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600">© Copyright 2021, All Rights Reserved by Postcraft</p>

            <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
                <li>
                    <a
                        href="#"
                        title=""
                        className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-black hover:text-white focus:text-white hover:bg-black hover:border-black focus:border-black"
                    >
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                            ></path>
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        title=""
                        className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-black hover:text-white focus:text-white hover:bg-black hover:border-black focus:border-black"
                    >
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        title=""
                        className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-black hover:text-white focus:text-white hover:bg-black hover:border-black focus:border-black-600"
                    >
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                            <circle cx="16.806" cy="7.207" r="1.078"></circle>
                            <path
                                d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                            ></path>
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        title=""
                        className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-black hover:text-white focus:text-white hover:bg-black hover:border-black focus:border-black"
                    >
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                            ></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</section>




</>
    )
}