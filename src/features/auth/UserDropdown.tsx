import React from "react";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { useNavigate } from "react-router";

const UserDropdown = () => {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <User className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <User className="h-[1.2rem] w-[1.2rem]" />
          <span>User Details</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate("/login")}>
          <div className="row-center gap-2">
            <LogOut className="h-[1.2rem] w-[1.2rem]" />
            <span>Sign out</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
