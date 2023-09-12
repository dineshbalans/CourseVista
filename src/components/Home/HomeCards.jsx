const HomeCards = () => {
    return(
         <section className="w-full absolute mt-20 pt-6">  
        <div className="w-[95%] xl:w-[85%] mx-auto">
          <div className="flex flex-wrap justify-center text-lg text-[#2F3F50] ">
            <div className="w-full py-3 md:w-1/3 p-2 lg:p-4 xl:p-6">
              <div className="bg-white rounded-lg border border-transparent shadow-xl px-5 py-8">
                <svg
                  class="w-12 h-12 text-[#0D68AE] mx-auto dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1M5 19h5m-9-9h5m4-4h8a1 1 0 0 1 1 1v12H9V7a1 1 0 0 1 1-1Zm6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                  />
                </svg>
                <h2 className="pt-5 pb-3 font-bold text-xl text-center">Actionable Training</h2>
                <h3 className="text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error, repellat reiciendis.
                </h3>
              </div>
            </div>
            <div className="w-full py-3 md:w-1/3 p-2 lg:p-4 xl:p-6">
              <div className="bg-white rounded-lg border border-transparent shadow-xl px-5 py-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-12 h-12 text-[#0D68AE] fill-[#0D68AE] mx-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                  />
                </svg>

                <h2 className="pt-5 pb-3 font-bold text-xl text-center">Interesting Quizzes</h2>
                <h3 className="text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error, repellat reiciendis.
                </h3>
              </div>
            </div>
            <div className="w-full py-3 md:w-1/3 p-2 lg:p-4 xl:p-6 ">
              <div className="bg-white rounded-lg border border-transparent shadow-xl px-5 py-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-12 h-12 text-[#0D68AE] mx-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
                <h2 className="pt-5 pb-3 font-bold text-xl text-center">Premium Material</h2>
                <h3 className="text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error, repellat reiciendis.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default HomeCards;