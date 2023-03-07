import React from "react";
import { Navbar, Text, Button, Link, Switch, Badge} from "@nextui-org/react";

export default function App() {
return (


    <Navbar variant="sticky">
        <Navbar.Content hideIn="xs" justify="center" align="center" variant="highlight">
          <Navbar.Link isActive href="#">Input</Navbar.Link>
          <Navbar.Link href="#">Results</Navbar.Link>
          <Navbar.Link href="#">Data</Navbar.Link>
        </Navbar.Content>
        </Navbar>

    );
}
