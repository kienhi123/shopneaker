// import axios from "axios";
import axios from "axios";
import index from ".";
import { add } from "../../api/posts";
import { reRender } from "../../utils";

const Add = {
    render() {
        return /* html */`      
      
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <form id="form-add-post">
                        <input type="text" class="border border-black" id="title-post" placeholder="Title"/><br />
                        <div><img width="200" src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" id="img-preview"/></div>
                        <input type="file" id="img-post" class="border border-black"  placeholder="Image" /> 
                        <textarea name=""  cols="30" rows="10" class="border border-black" id="desc-post" placeholder="Description"></textarea><br />
                        <button>Thêm</button>
                    </form>
                </div>
            </div>
            </main>
        </div>
        `;
    },
    afterRender() {
        // console.log(document.querySelector('#form-add-post'));
        const formAdd = document.querySelector("#form-add-post");
        const imgPost = document.querySelector("#img-post");
        const CLOUD_API = "https://api.cloudinary.com/v1_1/djultth5g/image/upload";
        const CLOUD_PRESET = "dxrqjome";

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();

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

            // fetch("http://localhost:3005/post", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         // 'Content-Type': 'application/x-www-form-urlencoded',
            //     },
            //     body: JSON.stringify(post),
            // });
            window.location.href = "/admin/list";
            reRender(index, "#app");
        });
    },
};
export default Add;
