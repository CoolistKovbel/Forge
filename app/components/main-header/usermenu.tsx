
import Link from "next/link";
import { SignOutButton } from "../SignOutButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDown } from "lucide-react";


interface UserMenuProps {
    user: any;
}


export function UserMenu({user}:UserMenuProps) {

    console.log(user)


  return (
    <DropdownMenu>

      <DropdownMenuTrigger className="w-[100px] flex items-center justify-between">{user.username} <ArrowDown /></DropdownMenuTrigger>

      <DropdownMenuContent>

        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem><Link href="/settings">Profile</Link></DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>

        <SignOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
