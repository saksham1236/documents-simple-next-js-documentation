import Link from "next/link"
import { GitHubLink, LinkedinLink, Navigations } from "@/settings/navigation"
import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi"

import { buttonVariants } from "@/components/ui/button"
import { SheetClose } from "@/components/ui/sheet"
import Anchor from "@/components/navigation/anchor"
import { Logo } from "@/components/navigation/logo"
import Search from "@/components/navigation/search"
import { SheetLeft } from "@/components/navigation/sidebar"
import { ModeToggle } from "@/components/navigation/theme-toggle"

export function Navbar() {
  return (
    <nav className="bg-opacity-5 sticky top-0 z-50 h-16 w-full border-b px-2 backdrop-blur-xl backdrop-filter md:px-4">
      <div className="mx-auto flex max-w-392 h-full items-center justify-between p-1 sm:p-3 md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeft />
          <div className="flex items-center gap-6">
            <div className="hidden md:flex">
              <Logo />
            </div>
            <div className="text-muted-foreground hidden items-center gap-2 text-sm font-medium md:flex">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Search />
          <div className="flex gap-2 sm:ml-0">
            {GitHubLink.href && (
              <Link
                href={GitHubLink.href}
                className={buttonVariants({ variant: "outline", size: "icon" })}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the repository on GitHub"
              >
                <FiGithub className="h-[1.1rem] w-[1.1rem]" />
              </Link>
            )}
            <Link
              href={LinkedinLink.href}
              className={buttonVariants({ variant: "outline", size: "icon" })}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View my Linkekin"
            >
              <FiLinkedin className="h-[1.1rem] w-[1.1rem]" />
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {Navigations.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="font-bold text-primary"
            absolute
            className="hover:bg-hover-b flex items-center gap-1 rounded-full py-2 px-4 text-sm transition-all"
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            {item.title}{" "}
            {item.external && (
              <FiArrowUpRight className="h-3 w-3 align-super" strokeWidth={3} />
            )}
          </Anchor>
        )
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        )
      })}
    </>
  )
}
