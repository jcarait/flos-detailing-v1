import { Navbar, Dropdown, Avatar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import badge from "../../badge.png";

export default function Nav(): JSX.Element {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand>
        <Image src={badge} height={50} width={50} layout="fixed" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flos Detailing
        </span>
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link>
          {" "}
          <div className="flex md:order-2">
            <Dropdown arrowIcon={false} inline={true} label={"Services"}>
              <Dropdown.Header>Services</Dropdown.Header>
              <Dropdown.Item>Detailing</Dropdown.Item>
              <Dropdown.Item>Paint Correction</Dropdown.Item>
              <Dropdown.Item>Paint Protection</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Window Tinting</Dropdown.Item>
            </Dropdown>
          </div>
        </Navbar.Link>

        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
