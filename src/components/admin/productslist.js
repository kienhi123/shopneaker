const adminproductsList = {
    render() {
        return /* html */ `
        <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
       <tr>
         <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-amber-400">STT</th>
         <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-amber-400">Tên</th>
         <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-amber-400">Mô tả</th>
       </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
           <tr>
             <td class="px-6 py-4 whitespace-nowrap bg-pink-200">1</td>
             <td class="px-6 py-4 whitespace-nowrap bg-pink-200">Tên bài viết</td>
             <td class="px-6 py-4 whitespace-nowrap bg-pink-200">Mô tả bài viết</td>
             <td class="">
             <button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Edit </button>
             <button class="py-2 px-4 bg-red-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Delete</button>
             </td>
           </tr>


           <tr>
             <td class="px-6 py-4 whitespace-nowrap bg-pink-200">2</td>
             <td class="px-6 py-4 whitespace-nowrap bg-pink-200">Tên bài viết</td>
             <td class="px-6 py-4 whitespace-nowrap bg-pink-200">Mô tả bài viết</td>
             <td class="">
             <button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Edit </button>
             <button class="py-2 px-4 bg-red-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Delete</button>
             </td>
           </tr>

           <tr>
             <td class="px-6 py-4 whitespace-nowrap bg-pink-200">3</td>
             <td class="px-6 py-4 whitespace-nowrap bg-pink-200">Tên bài viết</td>
             <td class="px-6 py-4 whitespace-nowrap bg-pink-200">Mô tả bài viết</td>
             <td>
             <button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Edit </button>
             <button class="py-2 px-4 bg-red-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Delete</button>
             </td>
           </tr>
   
        </tbody>
   
    
   
     </table>
   
        `;
    },
};
export default adminproductsList;
