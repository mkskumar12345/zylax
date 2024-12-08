import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RootState } from "@/store/store";
import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Laptop,
  MoveLeft,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useDispatch, useSelector } from "react-redux";
import { popupTypes } from "../popupTypes";
import { TOGGLE } from "@/store/slices/popupSlice";
import { useGetCategoriesListQuery } from "@/store/apiServices/commonApi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import allPagesRoutes from "@/constants/allPagesRoutes";
import { ScrollArea } from "@/components/ui/scroll-area";

const Categories = () => {
  const router = useRouter();
  const { data: categories } = useGetCategoriesListQuery(undefined);

  const isPopupOpen = useSelector((state: RootState) => state.popups.ISOPEN);
  const dispatch = useDispatch();

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
        <div className="lg:block hidden">
          <CategoriesAfterLG
            categories={categories}
            router={router}
            dispatch={dispatch}
          />
        </div>
        <div className="hidden  sm:block lg:hidden">
          <CategoriesBeforeLG
            categories={categories}
            router={router}
            dispatch={dispatch}
          />
        </div>
        <div className="block sm:hidden">
          <CategoriesBeforeSM
            categories={categories}
            router={router}
            dispatch={dispatch}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Categories;

//
const CategoriesAfterLG = ({ categories, router, dispatch }: any) => {
  const [categoriesChilds1, setCategoriesChilds1] = useState<any[]>([]);
  const [categoriesChilds2, setCategoriesChilds2] = useState<any[]>([]);
  const [categoriesChilds3, setCategoriesChilds3] = useState<any[]>([]);

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
                onClick={() => onCategoryClick(item)}
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
          <ScrollArea className="  hover:bg-[#f7f7f7] max-h-[490px] p-4">
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
                    className=" group hover:bg-[#FFFFFF] hover:text-primary flex justify-between items-center py-2  px-4  cursor-pointer "
                  >
                    <div className="flex gap-2 font-semibold">{item.title}</div>
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
                    <div className="flex gap-2 font-semibold">{item.title}</div>
                    {item?.child?.length > 0 && <ChevronRight />}
                  </div>
                )
              )}
            </div>
          </ScrollArea>
        )}
      </div>
    </div>
  );
};

const CategoriesBeforeLG = ({ categories, router, dispatch }: any) => {
  const [categoriesChilds, setCategoriesChilds] = useState<any[]>([]);

  const onCategoryClick = (item: any) => {
    if (item?.child?.length) {
      setCategoriesChilds(item?.child);
    } else {
      router.push(`${allPagesRoutes?.PRODUCTS}?category=${item?.title}`);
      dispatch(TOGGLE(popupTypes.CLOSE));
    }
  };

  return (
    <div className="relative w-full h-full  flex flex-col bg-white  shadow-lg  mt-2 rounded-[4px]">
      <DialogClose
        className="absolute bg-white z-50 rounded-full -top-5  -right-5 text-black hover:text-[#8d8e8f] cursor-pointer"
        asChild
      >
        <X size={28} strokeWidth={2} />
      </DialogClose>
      <div className="grid h-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2   ">
        <ScrollArea className="max-h-[490px] p-4  w-full  rounded-md flex flex-col gap-1">
          {categories?.data?.map(
            (item: {
              title: string;
              description: string;
              icon: any;
              child: any[];
            }) => (
              <div
                onClick={() => onCategoryClick(item)}
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
        {categoriesChilds?.length > 0 && (
          <ScrollArea className="bg-[#f7f7f7] p-4 max-h-[490px]">
            <div className="w-full ">
              {categoriesChilds?.map(
                (item: {
                  title: string;
                  description: string;
                  icon: any;
                  child: any[];
                }) => (
                  <div
                    onClick={() => {
                      onCategoryClick(item);
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
      </div>
    </div>
  );
};

const CategoriesBeforeSM = ({ categories, router, dispatch }: any) => {
  const [categoriesChilds, setCategoriesChilds] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const onCategoryClick = (item: any) => {
    if (item?.child?.length) {
      setCategoriesChilds(item?.child);
    } else {
      router.push(`${allPagesRoutes?.PRODUCTS}?category=${item?.title}`);
      dispatch(TOGGLE(popupTypes.CLOSE));
    }
  };

  return (
    <div className="relative w-full h-full  flex flex-col bg-white  shadow-lg  mt-2 rounded-[4px]">
      <DialogClose
        className="absolute bg-white z-50 rounded-full -top-5  -right-5 text-black hover:text-[#8d8e8f] cursor-pointer"
        asChild
      >
        <X size={28} strokeWidth={2} />
      </DialogClose>
      {selectedCategory && (
        <div className="w-full ">
          <div
            onClick={() => {
              setSelectedCategory(null);
              setCategoriesChilds([]);
            }}
            className="flex items-center py-4  px-4 my-1 border-b border-b-[#F0F0F0] cursor-pointer "
          >
            <div>
              <ChevronLeft />
            </div>
            <div className="flex gap-2 font-semibold">
              {selectedCategory?.title}
            </div>
          </div>
        </div>
      )}
      <div className="grid h-full  grid-cols-1   ">
        {!selectedCategory && (
          <ScrollArea className="max-h-[490px] p-4  w-full  rounded-md flex flex-col gap-1">
            {categories?.data?.map(
              (item: {
                title: string;
                description: string;
                icon: any;
                child: any[];
              }) => (
                <div
                  onClick={() => {
                    onCategoryClick(item);
                    {
                      item?.child?.length > 0 && setSelectedCategory(item);
                    }
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
        )}
        {categoriesChilds?.length > 0 && (
          <ScrollArea className="bg-[#f7f7f7] p-4 max-h-[490px]">
            <div className="w-full ">
              {categoriesChilds?.map(
                (item: {
                  title: string;
                  description: string;
                  icon: any;
                  child: any[];
                }) => (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div
                        // onClick={() => {
                        //   onCategoryClick(item);
                        // }}
                        className=" group hover:bg-[#FFFFFF] hover:text-primary flex justify-between items-center py-2  px-4  cursor-pointer "
                      >
                        <div className="flex gap-2 font-semibold">
                          {/* <Laptop className="mr-2" /> */}
                          {item.title}
                        </div>
                        {item?.child?.length > 0 && <ChevronRight />}
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="border-[#c3c3c4] rounded-[8px]">
                      {item?.child?.map((child: any) => (
                        <DropdownMenuItem
                          onClick={() => {
                            if (child?.child?.length == 0) {
                              router.push(
                                `${allPagesRoutes?.PRODUCTS}?category=${item?.title}`
                              );
                              dispatch(TOGGLE(popupTypes.CLOSE));
                            }
                          }}
                        >
                          {child.title}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              )}
            </div>
          </ScrollArea>
        )}
      </div>
    </div>
  );
};
