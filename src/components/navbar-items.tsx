"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";

interface DashboardNavProps {
  items: NavItem[];
}

export function NavbarItems({ items }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2 w-full">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "externalLink"];

        return (
          item.href && (
            <Link key={item.label} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                <Icon className="mr-2 h-4 w-4" />

                <span className="font-medium">{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
