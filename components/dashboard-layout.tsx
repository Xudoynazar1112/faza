"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "./auth-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  ChevronRight,
  Lock,
  User,
  LogOut,
  CreditCard,
  Wallet,
  BarChart2,
  LifeBuoy,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  hasLock?: boolean;
  children?: SidebarItemProps[];
}

function SidebarItem({
  href,
  icon,
  label,
  isActive,
  hasLock,
  children,
}: SidebarItemProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  if (children) {
    return (
      <div className="space-y-1">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
        >
          <div className="flex items-center gap-3">
            {icon}
            <span>{label}</span>
          </div>
          {hasLock ? (
            <Lock className="h-4 w-4" />
          ) : isExpanded ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
        {isExpanded && (
          <div className="ml-6 space-y-1">
            {children.map((child) => (
              <SidebarItem key={child.href} {...child} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors",
        isActive
          ? "bg-blue-50 text-blue-700"
          : "text-gray-700 hover:bg-gray-100"
      )}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>
      {hasLock && <Lock className="h-4 w-4" />}
    </Link>
  );
}

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { logout, userEmail } = useAuth();

  const sidebarItems: SidebarItemProps[] = [
    {
      href: "/dashboard",
      icon: <CreditCard className="w-5 h-5 text-blue-600" />, // My accounts
      label: "My accounts",
      isActive: pathname === "/dashboard",
    },
    {
      href: "#",
      icon: <Wallet className="w-5 h-5 text-blue-600" />, // Payments & wallet
      label: "Payments & wallet",
      children: [
        {
          href: "/transaction-history",
          icon: <CreditCard className="w-4 h-4 text-gray-400" />,
          label: "Transaction history",
          isActive: pathname === "/transaction-history",
        },
        {
          href: "/deposit",
          icon: <CreditCard className="w-4 h-4 text-gray-400" />,
          label: "Deposit",
          isActive: pathname === "/deposit",
          hasLock: true,
        },
        {
          href: "/withdrawal",
          icon: <CreditCard className="w-4 h-4 text-gray-400" />,
          label: "Withdrawal",
          isActive: pathname === "/withdrawal",
          hasLock: true,
        },
        {
          href: "/crypto-wallet",
          icon: <Wallet className="w-4 h-4 text-gray-400" />,
          label: "Crypto wallet",
          isActive: pathname === "/crypto-wallet",
          hasLock: true,
        },
      ],
    },
    {
      href: "/analytics",
      icon: <BarChart2 className="w-5 h-5 text-blue-600" />, // Analytics
      label: "Analytics",
      isActive: pathname === "/analytics",
      hasLock: true,
    },
    {
      href: "/support",
      icon: <LifeBuoy className="w-5 h-5 text-blue-600" />, // Support hub
      label: "Support hub",
      isActive: pathname === "/support",
      hasLock: true,
    },
    {
      href: "#",
      icon: <Settings className="w-5 h-5 text-blue-600" />, // Settings
      label: "Settings",
      children: [
        {
          href: "/profile",
          icon: <User className="w-4 h-4 text-gray-400" />,
          label: "Profile",
          isActive: pathname === "/profile",
        },
        {
          href: "/security",
          icon: <Lock className="w-4 h-4 text-gray-400" />,
          label: "Security",
          isActive: pathname === "/security",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">Faza Liquit</h1>
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-sm group cursor-pointer hover:bg-blue-50 px-2 py-1 rounded transition"
            >
              <Wallet className="w-5 h-5 text-blue-600" />
              <span className="font-semibold group-hover:text-blue-700">
                8,013
              </span>
              <span className="text-gray-500">USD</span>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer rounded px-2 py-1 hover:bg-blue-50 transition select-none">
                  <User className="h-4 w-4" />
                  <ChevronDown className="h-4 w-4" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={logout}
                  className="flex items-center gap-2 text-red-600"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-r border-gray-200 min-h-[calc(100vh-73px)]">
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item) => (
              <SidebarItem key={item.href} {...item} />
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
