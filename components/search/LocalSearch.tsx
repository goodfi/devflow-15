"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { formUrlQuery, removeKeysFromeQuery } from "@/lib/url";

import { Input } from "../ui/input";

interface Props {
  route: string;
  imgSrc: string;
  otherClasses?: string;
  placeholder: string;
}

const LocalSearch = ({ route, imgSrc, otherClasses, placeholder }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const delatDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });

        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromeQuery({
            params: searchParams.toString(),
            keyToRemove: ["query"],
          });

          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);

    return () => clearTimeout(delatDebounceFn);
  }, [searchQuery, router, route, searchParams, pathname]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      <label htmlFor="search">
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt="search icon"
          className="invert-colors cursor-pointer"
        />
      </label>
      <Input
        id="search"
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular no-focus placeholder: text-dark400_light700 border-none bg-transparent shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
