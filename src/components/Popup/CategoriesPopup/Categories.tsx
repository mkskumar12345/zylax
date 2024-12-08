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
import { on } from "events";

const Categories = () => {
  const router = useRouter();
  const [categoriesChilds1, setCategoriesChilds1] = useState<any[]>([]);
  const [categoriesChilds2, setCategoriesChilds2] = useState<any[]>([]);
  const [categoriesChilds3, setCategoriesChilds3] = useState<any[]>([]);

  const isPopupOpen = useSelector((state: RootState) => state.popups.ISOPEN);
  const dispatch = useDispatch();
  const { data: categories, isLoading } = useGetCategoriesListQuery(undefined);

  const onCategoryClick = (item: any) => {
    if (item?.child?.length) {
      setCategoriesChilds1(item?.child);
      setCategoriesChilds2([]);
      setCategoriesChilds3([]);
    } else {
      router.push(`${allPagesRoutes?.PRODUCTS}?category=${item?.title}`);
      dispatch(TOGGLE(popupTypes.CLOSE));
    }
  };
  const onFirstChildHover = (item: any) => {
    if (item?.child?.length) {
      setCategoriesChilds2(item?.child);
      setCategoriesChilds3([]);
    } else {
      router.push(`${allPagesRoutes?.PRODUCTS}?category=${item?.title}`);
      dispatch(TOGGLE(popupTypes.CLOSE));
    }
  };
  const onSecondChildHover = (item: any) => {
    if (item?.child?.length) {
      setCategoriesChilds3(item?.child);
    } else {
      router.push(`${allPagesRoutes?.PRODUCTS}?category=${item?.title}`);
      dispatch(TOGGLE(popupTypes.CLOSE));
    }
  };
  const onThirdChildClick = (item: any) => {
    router.push(`${allPagesRoutes?.PRODUCTS}?category=${item?.title}`);
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
      <DialogContent className="border-none   max-h-[500px] h-full overflow-hidden max-w-full w-full">
        <div className="relative w-full h-full  flex flex-col bg-white  shadow-lg  mt-2 rounded-[4px]">
          <DialogClose
            className="absolute bg-white z-50 rounded-full -top-5  -right-5 text-black hover:text-[#8d8e8f] cursor-pointer"
            asChild
          >
            <X size={28} strokeWidth={2} />
          </DialogClose>
          <div className="grid h-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2  ">
            <ScrollArea className="max-h-[490px] p-4  w-full  rounded-md flex flex-col gap-1">
              {categories?.data?.map(
                (item: {
                  title: string;
                  description: string;
                  icon: any;
                  child: any[];
                }) => (
                  <div
                    onMouseEnter={() => {
                      item?.child?.length > 0 && onCategoryClick(item);
                    }}
                    onClick={() => {
                      onCategoryClick(item);
                    }}
                    className=" group flex justify-between hover:bg-[#f7f7f7]  px-1 py-2 cursor-pointer "
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
            {categoriesChilds1?.length > 0 && (
              <ScrollArea className="bg-[#f7f7f7] p-4 max-h-[490px]">
                <div className="w-full ">
                  {categoriesChilds1?.map(
                    (item: {
                      title: string;
                      description: string;
                      icon: any;
                      child: any[];
                    }) => (
                      <div
                        onMouseEnter={() => {
                          item?.child?.length > 0 && onFirstChildHover(item);
                        }}
                        onClick={() => {
                          onFirstChildHover(item);
                        }}
                        className=" group hover:bg-[#FFFFFF] hover:text-primary flex justify-between items-center py-2  px-4  cursor-pointer "
                      >
                        <div className="flex gap-2 font-semibold">
                          {/* <Laptop className="mr-2" /> */}
                          {item.title}
                        </div>
                        {item?.child?.length > 0 && <ChevronRight />}
                      </div>
                    )
                  )}
                </div>
              </ScrollArea>
            )}
            {categoriesChilds2?.length > 0 && (
              <ScrollArea className="  hover:bg-[#fffdfd] max-h-[490px] p-4">
                <div className="w-full  ">
                  {categoriesChilds2?.map(
                    (item: {
                      title: string;
                      description: string;
                      icon: any;
                      child: any[];
                    }) => (
                      <div
                        onMouseEnter={() => {
                          item?.child?.length > 0 && onSecondChildHover(item);
                        }}
                        onClick={() => {
                          onSecondChildHover(item);
                        }}
                        className=" group hover:bg-[#e3e3e3] hover:text-primary flex justify-between items-center py-2  px-4  cursor-pointer "
                      >
                        <div className="flex gap-2 font-semibold">
                          {item.title}
                        </div>
                        {item?.child?.length > 0 && <ChevronRight />}
                      </div>
                    )
                  )}
                </div>
              </ScrollArea>
            )}
            {categoriesChilds3?.length > 0 && (
              <ScrollArea className=" hover:bg-[#f7f7f7] max-h-[490px] p-4">
                <div className="w-full ">
                  {categoriesChilds3?.map(
                    (item: {
                      title: string;
                      description: string;
                      icon: any;
                      child: any[];
                    }) => (
                      <div
                        onClick={() => onThirdChildClick(item)}
                        className=" group flex justify-between items-center py-2  px-4  cursor-pointer "
                      >
                        <div className="flex gap-2 font-semibold">
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
