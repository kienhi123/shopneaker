import toastr from "toastr";
import "toastr/build/toastr.min.css";
import $ from "jquery";
import validate from "jquery-validation";
import { signin } from "../api/user";

const Signin = {
    render() {
        return /* html */`
        <form id="formSignin">
        <div class="py-6 bg-gray-900 ">
  <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div class="hidden lg:block lg:w-1/2 bg-cover" style="background-image:url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"></div>
        <div class="w-full p-8 lg:w-1/2">
            <h2 class="text-2xl font-semibold text-gray-700 text-center">Đăng Nhập</h2>
            
            <div class="mt-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input name="email" id="email" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email">
            </div>
            <div class="mt-4">
                <div class="flex justify-between">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                </div>
                <input name="password"  id="password" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password">
            </div>
            <div class="mt-8">
                <button class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Đăng Nhập</button>
            </div>
          <div class="mt-3 text-center">
                 <p>Bạn chưa có tài khoản? <a class="text-blue-600" href="/signup">Signup</a></p>
           </div>
        </div>
    </div>
</div>
</form>
         `;
    },
    afterRender() {
        const vali = $("#formSignin").validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                },
                password: {
                    required: true,
                    minlength: 6,
                },
                messages: {
                    email: {
                        required: "We need your email address to contact you",
                        email:
                  "Your email address must be in the format of name@domain.com",
                    },
                    password: {
                        password: "Please enter at least 6 characters.",
                        required: "This field is required.",
                    },
                },
            },
        });
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            if (vali.validate().errorList.length === 0) {
                try {
                    const { data } = await signin({
                        email: document.querySelector("#email").value,
                        password: document.querySelector("#password").value,
                    });
                    // Lấy thông tin loacalStorage và hiển thị
                    localStorage.setItem("user", JSON.stringify(data.user));
                    toastr.success("Bạn đã đăng nhập thành công, chờ 3s để chuyển trang");
                    setTimeout(() => {
                        // kiểm tra quyền dựa trên ID
                        if (data.user.id === 1) {
                            document.location.href = "/admin/Dashboard";
                        } else {
                            document.location.href = "/";
                        }
                    }, 3000);
                } catch (error) {
                    toastr.error(error.response.data);
                // console.log(error.response.data);
                }
            }
        });
    },
};
export default Signin;
