import { MdOutlineFileUpload } from "react-icons/md";

export default function Upload() {
  return (
    <main className="bg-gray-50 min-h-screen pb-20 px-4 lg:px-20 ">
      <div className="space-y-3 py-8">
        <h2 className="text-primary font-semibold text-xl">
          Yemkemo Restaurant & Bar
        </h2>
        <p className="text-accent font-semibold text-lg">
          {" "}
          More Info about Yemkemo
        </p>
      </div>

     <div className="w-full max-w-[726px] mx-auto">
         <div className="bg-secondary border border-gray-300 flex flex-col items-center justify-center space-y-10 py-8">
        <MdOutlineFileUpload className="text-5xl text-gray-500"/>
        <p className="text-3xl">Drag and drop photos here</p>
        <button className="bg-primary text-white p-2 rounded-lg">
          Browse Files
        </button>
      </div>

      <div className="flex items-center justify-around mt-12 px-10">
        <p className="text-accent font-bold">Go Back</p>
        <button className="bg-primary text-white p-2 rounded-lg">
          Upload
        </button>
      </div>
     </div>
    </main>
  );
}
