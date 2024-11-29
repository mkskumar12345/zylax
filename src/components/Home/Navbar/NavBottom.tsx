"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import allPagesRoutes from "@/constants/allPagesRoutes";

const NavBottom = ({ authToken }: { authToken: string | undefined }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<any>(null);
  const [parentCategories, setParentCategories] = useState<any>(null);
  const [childMenuOpen, setChildMenuOpen] = useState(false);
  const [childMenuItems, setChildMenuItems] = useState<any>(null);
  const [childMenuHover, setChildMenuHover] = useState<any>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const fetchNavigation = async () => {
    const requestOptions: any = { method: "GET", redirect: "follow" };
    const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_APP_URL}/common/navigation-menu`, requestOptions);
    const json = await response.json();
    setCategories((prev: any) => json?.data);
  };

  const getChild = (id: number): any => {
    const newMenus = categories.filter((item: any) => item.parent_id === id)
    const child = [];
    for (let menu of newMenus) {
      child.push({ ...menu, child: getChild(menu.id) })
    }
    return child;
  }

  useEffect(() => {
    if (categories) {
      const newNav = [];
      for (let category of categories) {
        if (category.parent_id == 0) {
          newNav.push({ ...category, child: getChild(category.id) })
        }
      }
      setParentCategories(newNav);
    }
  }, [categories])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    fetchNavigation();
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("click", closeServices);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("click", closeServices);
    };
  }, []);

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
  };

  const closeServices = (e: MouseEvent) => {
    if (
      servicesRef.current &&
      !servicesRef.current.contains(e.target as Node)
    ) {
      setIsServicesOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsServicesOpen(false);
  };

  const handleChildMenu = (item: any) => {
    setChildMenuOpen(true);
    setChildMenuItems(item);
  }

  return (
    <div className="bg-primary">
      <div className="container  hidden lg:flex justify-evenly text-secondary py-2 font-semibold">
        <Link href={allPagesRoutes.HOME} title="Home">
          Home
        </Link>

        <div className="relative z-50" ref={dropdownRef}>
          <div className="cursor-pointer flex items-center" onClick={toggleDropdown}>
            Shop by Categories <ChevronDown className="ml-1" size={18} />
          </div>

          {isOpen && (
            <div className="absolute w-[1200px] max-h-[500px] overflow-y-auto bg-white text-primary shadow-lg mt-2 rounded-md">
              {childMenuOpen ?
                (
                  <div className="grid grid-cols-4 gap-2 bg-gray-100">
                    <div className="bg-white p-3 min-h-[200px]">
                      <div className="flex cursor-pointer items-center" onClick={() => setChildMenuOpen(false)} >
                        <ChevronLeft size={14} />
                        <span className="text-lg font-semibold">Back</span>
                      </div>
                      <div className="flex" >
                        <img src="https://imagecdn.jw.com.au/media/snowdog/menu/node/l/a/laptops-tablets-menu.png" alt="image" className="w-[50px] h-[50px] pr-2" />
                        <div className="flex flex-col">
                          <span className="text-2xl font-semibold line-clamp-1">{childMenuItems.name}</span>
                          <span className="text-sm text-gray-400" contentEditable='true' dangerouslySetInnerHTML={{ __html: childMenuItems.description }}></span>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 min-h-[200px]">
                      <ul>
                        <li className="hover:bg-white hover:text-black px-2 py-1" onMouseOver={() => setChildMenuHover(null)}>
                          <b><Link href={`/category/${childMenuItems.slug}`} onClick={handleLinkClick}>All {childMenuItems.name}</Link></b>
                        </li>
                        {childMenuItems && childMenuItems.child.map((item: any, indax: any) => {
                          const child = item?.child?.length > 0 ? item : null;
                          return (<li className="hover:bg-white hover:text-black px-2 py-1" onMouseOver={() => setChildMenuHover(child)}>
                            <Link href={`/category/${item.slug}`} onClick={handleLinkClick}>{item.name}</Link>
                          </li>);
                        })}
                      </ul>
                    </div>
                    {childMenuHover &&
                      <div className="col-span-2 p-2 min-h-[200px] bg-white">
                        <ul>
                          <li className="hover:bg-white hover:text-black px-2 py-1">
                            <b><Link href={`/category/${childMenuHover.slug}`} onClick={handleLinkClick}>All {childMenuHover.name}</Link></b>
                          </li>
                          {childMenuHover && childMenuHover.child.map((item: any, indax: any) => {
                            return (<li className="hover:bg-white hover:text-black px-2 py-1">
                              <Link href={`/category/${item.slug}`} onClick={handleLinkClick}>{item.name}</Link>
                            </li>);
                          })}
                        </ul>
                      </div>
                    }
                  </div>
                ) : (
                  <div className="grid grid-cols-4 gap-2 p-2">
                    {parentCategories && parentCategories.map((item: any, indax: any) => {
                      return (<div className="flex cursor-pointer hover:shadow hover:border p-2" onClick={() => handleChildMenu(item)} >
                        <img src="https://imagecdn.jw.com.au/media/snowdog/menu/node/l/a/laptops-tablets-menu.png" alt="image" className="w-[50px] h-[50px] pr-2" />
                        <div className="flex flex-col">
                          <span className="text-2xl font-semibold line-clamp-1">{item.name}</span>
                          <span className="text-sm text-gray-400 line-clamp-2" contentEditable='true' dangerouslySetInnerHTML={{ __html: item.description }}></span>
                        </div>
                      </div>);
                    })}
                  </div>
                )}
            </div>
          )}
        </div>
        <div className="relative" ref={servicesRef}>
          <button
            onClick={toggleServices}
            className="dropdown-toggle flex items-center"
          >
            Services <ChevronDown className="ml-1" size={18} />
          </button>
          {isServicesOpen && (
            <div className="absolute mt-2 w-56 bg-white border border-gray-200 shadow-md rounded-md z-10">
              <Link
                href={allPagesRoutes.BUSINESS_IT_SUPPORT}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-black hover:text-[#D30200] hover:bg-slate-100"
              >
                Business IT support
              </Link>
              <Link
                href={allPagesRoutes.CLOUD_STORAGE_AND_BACKUP}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-black hover:text-[#D30200] hover:bg-slate-100"
              >
                Cloud Storage and Backup
              </Link>
              <Link
                href={allPagesRoutes.EMAIL_SUPPORT_AND_BACKUP}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-black hover:text-[#D30200] hover:bg-slate-100"
              >
                Email Support And Services
              </Link>
              <Link
                href={allPagesRoutes.computer_repairs}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-black hover:text-[#D30200] hover:bg-slate-100"
              >
                Computer Repairs
              </Link>
              <Link
                href={allPagesRoutes.Laptop_Repairs_Sydney}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-black hover:text-[#D30200] hover:bg-slate-100"
              >
                Laptop Repairs Sydney
              </Link>
              <Link
                href={allPagesRoutes.Mobile_Repairs}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-black hover:text-[#D30200] hover:bg-slate-100"
              >
                Mobile Repairs
              </Link>
              <Link
                href={allPagesRoutes.tablet_repairs}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-black hover:text-[#D30200] hover:bg-slate-100"
              >
                Tablet Repairs
              </Link>
              <Link
                href={allPagesRoutes.Macbook_repairs}
                onClick={handleLinkClick}
                className="block px-4 py-2 text-black hover:text-[#D30200] hover:bg-slate-100"
              >
                Macbook Repairs
              </Link>
            </div>
          )}
        </div>
        <Link href={allPagesRoutes?.PRODUCTS} title="products">
          Products
        </Link>
        <Link href={allPagesRoutes.BRANDS} title="shop by brands">
          Shop by Brands
        </Link>
        <Link href={allPagesRoutes.BLOGS} title="blogs">
          Blogs
        </Link>
        {/* <Link href={"#"}>Blog</Link> */}
        <Link href={allPagesRoutes.ABOUT_US} title="about us">
          About Us
        </Link>
        <Link href={allPagesRoutes?.CONTACT_US} title="Contact us">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default NavBottom;
