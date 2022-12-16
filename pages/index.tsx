import Link from "next/link";
import React from "react";
import { Title } from "./administration/styled";

function Home() {
    return (
        <Title>
            <Link href="/administration/LoggerSearch">Go to Logger Search page</Link>
        </Title>
    );
}

export default Home;
