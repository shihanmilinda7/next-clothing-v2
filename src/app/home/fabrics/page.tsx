import NewFabric from "@/app/components/page-components/fabrics/addnew";
import { FabricTable } from "@/app/components/page-components/fabrics/table";

export default function Fabrics() {


  return (
    <div className="flex ml-3 flex-col bg-slate-200 w-full">
      <span className="text-3xl font-black leading-none text-gray-900 select-none">
        Fabri<span className="text-indigo-600">cs</span>
      </span>
      <div className="justify-end w-full flex mt-3">
        <NewFabric/>
      </div>
      <div className="flex w-full mt-3">
        <FabricTable/>
      </div>
    </div>
  );
}
