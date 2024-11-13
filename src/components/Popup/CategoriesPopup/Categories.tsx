import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronDown, ChevronRight } from "lucide-react";

const Categories = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="cursor-pointer flex items-center">
          List Categories <ChevronDown />
        </div>
      </DialogTrigger>
      <DialogContent className="border-none h-full  max-w-full w-full">
        <div className="relative p-5 w-full h-full flex flex-col bg-white text-primary shadow-lg  mt-2 rounded-[4px]">
          <DialogClose
            className="absolute top-2 right-2 text-black hover:text-[#8d8e8f] cursor-pointer"
            asChild
          >
            <button>✕</button>
          </DialogClose>
          <div className="flex gap-5">
            <div className="w-[200px]">
              <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-center items-center">
                Computer Accessories <ChevronRight />
              </div>
              <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-center items-center">
                Adapters <ChevronRight />
              </div>
              <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-center items-center">
                Batteries <ChevronRight />
              </div>
              <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-center items-center">
                Cables <ChevronRight />
              </div>
              <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-center items-center">
                Laptop <ChevronRight />
              </div>
              <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-center items-center">
                Cameras <ChevronRight />
              </div>
              <div className="border border-[#E5E6E8] w-[200px] h-[64px] flex justify-center items-center">
                Lighting <ChevronRight />
              </div>
            </div>
            <div className=" w-[800px] h-[400px] flex flex-wrap gap-5">
              <div className="flex flex-col ">
                <span>Computer Accessories</span>
                <span className="text-black">Cables</span>
                <span className="text-black">Consumables</span>
                <span className="text-black">Gaming Products</span>
                <span className="text-black">Point of Sale (Pos)</span>
              </div>
              <div className="flex flex-col ">
                <span>Computer Accessories</span>
                <span className="text-black">Cables</span>
                <span className="text-black">Consumables</span>
                <span className="text-black">Gaming Products</span>
                <span className="text-black">Point of Sale (Pos)</span>
              </div>
              <div className="flex flex-col ">
                <span>Computer Accessories</span>
                <span className="text-black">Cables</span>
                <span className="text-black">Consumables</span>
                <span className="text-black">Gaming Products</span>
                <span className="text-black">Point of Sale (Pos)</span>
              </div>
              <div className="flex flex-col ">
                <span>Computer Accessories</span>
                <span className="text-black">Cables</span>
                <span className="text-black">Consumables</span>
                <span className="text-black">Gaming Products</span>
                <span className="text-black">Point of Sale (Pos)</span>
              </div>
              <div className="flex flex-col ">
                <span>Computer Accessories</span>
                <span className="text-black">Cables</span>
                <span className="text-black">Consumables</span>
                <span className="text-black">Gaming Products</span>
                <span className="text-black">Point of Sale (Pos)</span>
              </div>
              <div className="flex flex-col ">
                <span>Computer Accessories</span>
                <span className="text-black">Cables</span>
                <span className="text-black">Consumables</span>
                <span className="text-black">Gaming Products</span>
                <span className="text-black">Point of Sale (Pos)</span>
              </div>
              <div className="flex flex-col ">
                <span>Computer Accessories</span>
                <span className="text-black">Cables</span>
                <span className="text-black">Consumables</span>
                <span className="text-black">Gaming Products</span>
                <span className="text-black">Point of Sale (Pos)</span>
              </div>
              <div className="flex flex-col ">
                <span>Computer Accessories</span>
                <span className="text-black">Cables</span>
                <span className="text-black">Consumables</span>
                <span className="text-black">Gaming Products</span>
                <span className="text-black">Point of Sale (Pos)</span>
              </div>

              <div className="flex flex-col ">
                <span>Computer Accessories</span>
                <span className="text-black">Cables</span>
                <span className="text-black">Consumables</span>
                <span className="text-black">Gaming Products</span>
                <span className="text-black">Point of Sale (Pos)</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Categories;
