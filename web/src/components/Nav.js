import React from "react";
import { Navbar, Text, Button, Link, Switch, Badge} from "@nextui-org/react";

export default function App() {
return (


    <Navbar variant="sticky">
        <Navbar.Brand> </Navbar.Brand>
        <Navbar.Content hideIn="xs" justify="center" align="center" variant="highlight">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
        <Badge>Dark Mode</Badge>
        <Switch />
        </Navbar.Content>
        </Navbar>

    );
}
