// import axios from "axios";
import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
import index from ".";
import { add } from "../../api/posts";
import { reRender } from "../../utils";

const Add = {
    render() {
        return /* html */`  
        <div class="flex bg-gray-100 rounded-xl m-3 shadow-xl">
        <aside class="flex px-16 space-y-16 overflow-hidden m-3 pb-4 flex-col items-center justify-center rounded-tl-xl rounded-bl-xl bg-blue-800 shadow-lg">
        <div class="flex items-center justify-center p-4 shadow-lg">
        <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        </div>
        <ul>
          <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg
            ><a href="admin/Dashboard">Dashboard</a>
          </li>
          <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg
            ><a href="pages/table">Table</a>
          </li>
          <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg
            ><a href="/admin/add">Thêm Mới</a>
          </li>
          <li class="flex space-x-2 mt-4 px-6 py-4 text-white hover:bg-white hover:text-blue-800 font-bold hover:rounded-br-3xl transition duration-100 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg
            ><a href="">Coaches</a>
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
        </ul>
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
        <h2 class="uppercase font-bold text-xl my-5 text-blue-800 px-4">Thêm Mới</h2>
        <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
           
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <form id="form-add-post">
                    <div>
                        <label for="">Tên Sản Phẩm</label>
                        <input type="text" name="title" class="rounded-sm" id="title-post" /><br />
                     </div> 
                     <div>  
                        <label for="">Mô tả</label>
                        <textarea name="desc"  cols="30" rows="10" class="rounded-sm" id="desc-post" placeholder="Description" ></textarea><br />
                        </div>
                        <div>
                        <label for="">Ảnh sản phẩm</label>
                        <input type="file" name="file" id="img-post" class="rounded-sm"  placeholder="Image"  />
                        </div>
                        <button>Thêm</button>
                    </form>
            
                </div>
            </div>
            </main> 
               
              
            </div>
          </div>
        </div>
        
        
        </div>
      </main>
    </div>
        
      </div>   
        `;
    },
    afterRender() {
        const vali = $("#form-add-post").validate({
            rules: {
                title: {
                    required: true,

                },
                file: {
                    required: true,
                },
                desc: {
                    required: true,

                },
                messages: {
                    title: {
                        required: "This field is required.",
                    },
                    file: {
                        required: "This field is required.",
                    },
                    password: {

                        required: "This field is required.",
                    },
                },
            },
        });

        const formAdd = document.querySelector("#form-add-post");
        const imgPost = document.querySelector("#img-post");
        const CLOUD_API = "https://api.cloudinary.com/v1_1/djultth5g/image/upload";
        const CLOUD_PRESET = "dxrqjome";

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            if (vali.errorList.length === 0) {
                const file = imgPost.files[0];
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUD_PRESET);

                const { data } = await axios.post(CLOUD_API, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                add({
                    title: document.querySelector("#title-post").value,
                    img: data.url,
                    desc: document.querySelector("#desc-post").value,
                });

                window.location.href = "/admin/list";
                reRender(index, "#app");
            }
        });
    },
};
export default Add;
