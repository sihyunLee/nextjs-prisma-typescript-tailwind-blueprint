import React from "react";
import Link from "next/link";
import { cls } from "@libs/client/utils";
import { useRouter } from "next/router";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div className="flex">
      <div>
        {" "}
        {hasTabBar ? (
          <nav className="bg-white max-w-xl text-gray-700 border-t fixed h-full px-4 pb-5 pt-3 flex flex-col  text-xs border-r space-y-4">
            <Link href="/">
              <a
                className={cls(
                  "flex flex-col items-center space-y-2 ",
                  router.pathname === "/"
                    ? "text-sky-500"
                    : "hover:text-gray-500 transition-colors"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </Link>

            <Link href="/">
              <a
                className={cls(
                  "flex flex-col items-center space-y-2 ",
                  router.pathname === "/"
                    ? "text-sky-500"
                    : "hover:text-gray-500 transition-colors"
                )}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </a>
            </Link>

            <Link href="/profile">
              <a
                className={cls(
                  "flex flex-col items-center space-y-2 ",
                  router.pathname === "/profile"
                    ? "text-sky-500"
                    : "hover:text-gray-500 transition-colors"
                )}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </a>
            </Link>
          </nav>
        ) : null}
      </div>
      <div className="bg-white mx-16 w-full h-12 max-w-xl text-lg font-medium  fixed text-gray-800 border-b top-0  flex items-center">
        {canGoBack ? (
          <button onClick={onClick} className="absolute left-4">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
        ) : null}
        {title ? (
          <span className={cls(canGoBack ? "mx-auto" : "", " px-4")}>
            {title}
          </span>
        ) : null}
      </div>
      <div className={cls("pt-12 mx-16", hasTabBar ? "pb-24" : "")}>
        {children}
      </div>
    </div>
  );
}
