import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RootState } from "@/store/store";
import { ChevronDown, ChevronRight, Laptop, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { popupTypes } from "../popupTypes";
import { TOGGLE } from "@/store/slices/popupSlice";
import { useGetCategoriesListQuery } from "@/store/apiServices/commonApi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import allPagesRoutes from "@/constants/allPagesRoutes";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DialogTitle } from "@radix-ui/react-dialog";

const Categories = () => {
  const [breadCrumps, setBreadCrumps] = useState<any[]>([
    {
      title: "Categories",
    },
  ]);
  const router = useRouter();
  const [categoriesChilds, setCategoriesChilds] = useState<any[]>([]);
  const isPopupOpen = useSelector((state: RootState) => state.popups.ISOPEN);
  const dispatch = useDispatch();
  const { data: categories, isLoading } = useGetCategoriesListQuery(undefined);
  console.log(categories);

  const onCategoryClick = (item: any) => {
    if (item?.child?.length) {
      setCategoriesChilds(item?.child);
      setBreadCrumps((prev) => [...prev, { title: item?.title }]);
    } else {
      router.push(allPagesRoutes?.PRODUCTS);
      dispatch(TOGGLE(popupTypes.CLOSE));
    }
  };

  const onClickBreadCrump = (item: any) => {
    router.push(item?.path);
    dispatch(TOGGLE(popupTypes.CLOSE));
  };

  return (
    <Dialog
      open={isPopupOpen === popupTypes.CATEGORIES}
      onOpenChange={(value) =>
        dispatch(
          TOGGLE(
            isPopupOpen === popupTypes.CLOSE
              ? popupTypes.CATEGORIES
              : popupTypes.CLOSE
          )
        )
      }
    >
      <DialogTrigger>
        <div className="cursor-pointer flex items-center">
          Shop <ChevronDown />
        </div>
      </DialogTrigger>
      <DialogContent className="border-none max-h-[500px] h-full overflow-hidden max-w-full w-full">
        <div className="relative p-5 w-full h-full  flex flex-col bg-white  shadow-lg  mt-2 rounded-[4px]">
          <DialogClose
            className="absolute bg-white rounded-full top-1  right-1 text-black hover:text-[#8d8e8f] cursor-pointer"
            asChild
          >
            <X size={28} strokeWidth={2} />
          </DialogClose>
          <DialogTitle className="font-semibold flex -mt-3 mb-2">
            {breadCrumps?.map((item: any, index: number) => (
              <span className="cursor-pointer" key={`breadcrupm-${item?.id}`}>
                {item?.title} {index === breadCrumps?.length - 1 ? null : "/ "}
              </span>
            ))}
          </DialogTitle>
          <div className="grid h-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-5">
            <ScrollArea className="max-h-[400px]  w-full  rounded-md flex flex-col gap-1">
              {categories?.data?.map(
                (item: {
                  title: string;
                  description: string;
                  icon: any;
                  child: any[];
                }) => (
                  <div
                    onClick={() => onCategoryClick(item)}
                    className="border group flex justify-between   border-[#f2f3f4] px-4 py-2 cursor-pointer "
                  >
                    <span
                      className="!visible"
                      dangerouslySetInnerHTML={{ __html: item?.icon }}
                    />
                    <Laptop className="mr-2" />
                    <div className="w-full font-semibold">
                      <h4 className="text-primary">{item.title}</h4>
                      <div className="text-[#989797]  leading-4  hidden group-hover:block  font-medium text-sm ">
                        {item?.description}
                      </div>
                    </div>
                    {item?.child?.length > 0 && <ChevronRight className="" />}
                  </div>
                )
              )}
            </ScrollArea>
            {categoriesChilds?.length > 0 && (
              <ScrollArea className=" md:col-span-2 sm:col-span-1 lg:col-span-3  max-h-[400px]">
                <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-2 lg:grid-cols-3 lg:col-span-3 ">
                  {categoriesChilds?.map(
                    (item: {
                      title: string;
                      description: string;
                      icon: any;
                      child: any[];
                    }) => (
                      <div
                        onClick={() => onCategoryClick(item)}
                        className="border group flex justify-between items-center h-14  border-[#f3f3f4] px-4 py-2 cursor-pointer "
                      >
                        <div className="flex gap-2">
                          <Laptop className="mr-2" />
                          {item.title}
                        </div>
                        {item?.child?.length > 0 && <ChevronRight />}
                      </div>
                    )
                  )}
                </div>
              </ScrollArea>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Categories;
