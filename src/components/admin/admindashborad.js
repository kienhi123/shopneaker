import toastr from "toastr";

import "toastr/build/toastr.min.css";

const adminDashboard = {
    render() {
        return /* html */ `
        
        <div class="flex bg-gray-100 rounded-xl m-3 shadow-xl">
    <aside class="flex px-16 space-y-16 overflow-hidden m-3 pb-4 flex-col items-center justify-center rounded-tl-xl rounded-bl-xl bg-blue-800 shadow-lg">
    <div class="flex items-center justify-center pt-6 p-4 shadow-lg">
      
      <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      
    </div>
    <ul>
      <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg
        ><a href="">Dashboard</a>
      </li>
      <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg
        ><a href="/admin/table">Table</a>
      </li>
      <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg
        ><a href="/admin/add">Thêm Mới</a>
      </li>
      <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg
        ><a href="/admin/list">list</a>
      </li>
      <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg
        ><a href="">Exercise Plan</a>
      </li>
      <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg
        ><a href="">Registrations</a>
      </li>
      <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg
        ><a href="">Settings</a>
      </li>
     
  </aside>
  <main class="flex-col bg-indigo-50 w-full ml-4 pr-6">
    <div class="flex justify-between p-4 bg-white mt-3 rounded-xl shadow-lg">
      <h1 class="text-xl font-bold text-gray-700">Welcome to VietNam</h1>
      <div class="flex justify-between w-2/5">
        <div class="flex items-center border-2 p-2 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" placeholder="Search" class="ml-2 outline-none w-full" />
        </div>
        <div class="flex items-center space-x-6 pr-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 cursor-pointer text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <img src="https://i.imgur.com/iH7hkQb.png" alt="" class="cursor-pointer" />
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-4 space-x-4 s">
      <div class="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
        <img src="https://i.imgur.com/VHc5SJE.png" alt="" />
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-800">534</h1>
          <span class="text-gray-500">Coaches</span>
        </div>
      </div>
      <div class="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
        <img src="https://i.imgur.com/Qnmqkil.png" alt="" />
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-800">9.7k</h1>
          <span class="text-gray-500">Kids</span>
        </div>
      </div>
      <div class="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
        <img src="https://i.imgur.com/dJeEVcO.png" alt="" />
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-800">50 M</h1>
          <span class="text-gray-500">Revenue</span>
        </div>
      </div>
    </div>
    <div class="flex space-x-4">
      <div class="justify-between rounded-xl mt-4 p-4 bg-white shadow-lg">
        <h1 class="text-xl font-bold text-gray-800 mt-4">Today’s Status</h1>
        <div class="flex justify-between space-x-4 text-center mt-6">
          <div class="bg-indigo-50 rounded-xl p-10">
            <h3>8.7K</h3>
            <spnan>Total Present</spnan>
          </div>
          <div class="bg-indigo-50 rounded-xl p-10">
            <h3>99</h3>
            <spnan>Registrations</spnan>
          </div>
          <div class="bg-indigo-50 rounded-xl p-10">
            <h3>30</h3>
            <spnan>Totals Session</spnan>
          </div>
        </div>
      </div>
      <div class="justify-between rounded-xl mt-4 p-4 bg-white shadow-lg">
        <h1 class="text-xl font-bold text-gray-800 mt-4">Today’s Status</h1>
        <div class="flex justify-between space-x-4 text-center mt-6">
          <div class="bg-indigo-50 rounded-xl p-10">
            <h3>8.7K</h3>
            <spnan>Total Present</spnan>
          </div>
          <div class="bg-indigo-50 rounded-xl p-10">
            <h3>99</h3>
            <spnan>Registrations</spnan>
          </div>
          <div class="bg-indigo-50 rounded-xl p-10">
            <h3>30</h3>
            <spnan>Totals Session</spnan>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap mb-2">
    <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
        <div class="bg-green-600 border rounded shadow p-2">
            <div class="flex flex-row items-center">
                <div class="flex-shrink pl-1 pr-4"><i class="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                <div class="flex-1 text-right">
                    <h5 class="text-white">Total Revenue</h5>
                    <h3 class="text-white text-3xl">3249&euro;<span class="text-green-400"><i class="fas fa-caret-down"></i></span></h3>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2">
        <div class="bg-blue-600 border rounded shadow p-2">
            <div class="flex flex-row items-center">
                <div class="flex-shrink pl-1 pr-4"><i class="fas fa-users fa-2x fa-fw fa-inverse"></i></div>
                <div class="flex-1 text-right">
                    <h5 class="text-white">Total Users</h5>
                    <h3 class="text-white text-3xl">13 <span class="text-blue-400"><i class="fas fa-caret-up"></i></span></h3>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pr-3 xl:pl-1">
        <div class="bg-orange-600 border rounded shadow p-2">
            <div class="flex flex-row items-center">
                <div class="flex-shrink pl-1 pr-4"><i class="fas fa-user-plus fa-2x fa-fw fa-inverse"></i></div>
                <div class="flex-1 text-right pr-1">
                    <h5 class="text-white">New Users</h5>
                    <h3 class="text-white text-3xl">2 <span class="text-orange-400"><i class="fas fa-caret-up"></i></span></h3>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2 xl:pl-3 xl:pr-2">
        <div class="bg-purple-600 border rounded shadow p-2">
            <div class="flex flex-row items-center">
                <div class="flex-shrink pl-1 pr-4"><i class="fas fa-server fa-2x fa-fw fa-inverse"></i></div>
                <div class="flex-1 text-right">
                    <h5 class="text-white">Server Uptime</h5>
                    <h3 class="text-white text-3xl">76 days</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pl-2 xl:pr-3">
        <div class="bg-red-600 border rounded shadow p-2">
            <div class="flex flex-row items-center">
                <div class="flex-shrink pl-1 pr-4"><i class="fas fa-tasks fa-2x fa-fw fa-inverse"></i></div>
                <div class="flex-1 text-right">
                    <h5 class="text-white">To Do List</h5>
                    <h3 class="text-white text-3xl">7 tasks</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2 xl:pl-1">
        <div class="bg-pink-600 border rounded shadow p-2">
            <div class="flex flex-row items-center">
                <div class="flex-shrink pl-1 pr-4"><i class="fas fa-inbox fa-2x fa-fw fa-inverse"></i></div>
                <div class="flex-1 text-right">
                    <h5 class="text-white">Issues</h5>
                    <h3 class="text-white text-3xl">3 <span class="text-pink-400"><i class="fas fa-caret-up"></i></span></h3>
                </div>
            </div>
        </div>
    </div>
</div>
  </main>
</div>
        `;
    },

};
export default adminDashboard;
