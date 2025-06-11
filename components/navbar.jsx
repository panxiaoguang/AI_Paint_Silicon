"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Avatar,
} from "@heroui/react";

export const BellIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M18 3a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path>
      <path d="M19.97 10.59c.01.14.03.27.03.41 0 3.31-3.59 6-8 6h-.33L9 19v-2.42l-.64-.25C5.67 15.29 4 13.25 4 10.99c0-3.31 3.59-6 8-6 .37 0 .74.03 1.09.06.13-.7.41-1.35.81-1.91-.62-.1-1.25-.15-1.9-.15C6.49 3 2 6.59 2 11c0 2.91 1.9 5.51 5 6.93V23l5.34-4c5.36-.14 9.66-3.67 9.66-8 0-.6-.09-1.18-.24-1.74a5.1 5.1 0 0 1-1.78 1.33Z"></path>
    </svg>
  );
};

export default function NavbarComponent() {
  return (
    <Navbar isBordered maxWidth="full">
      <NavbarBrand className="mr-4">
        <h1 className="text-2xl font-bold text-gray-900 tracking-wider">
          Image<span className="text-secondary">Gen</span>
        </h1>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button isIconOnly variant="light" color="secondary">
            <BellIcon />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src="/dog.jpeg"
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
