import { Disclosure } from '@headlessui/react';
import { Logo, UserProfileImage } from '../atoms/image';
import { MobileMenuButton,NotificationButton } from '../atoms/buttons';
import NavLink from '../molecules/navLink';

export default function MobileNavbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <MobileMenuButton open={open} />
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Logo />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <NavLink text="Dashboard" url="#" />
                  <NavLink text="Team" url="#" />
                  <NavLink text="Projects" url="#" />
                  <NavLink text="Calendar" url="#" />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <NotificationButton />
                <UserProfileImage />
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              <NavLink text="Dashboard" url="#" />
              <NavLink text="Team" url="#" />
              <NavLink text="Projects" url="#" />
              <NavLink text="Calendar" url="#" />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
