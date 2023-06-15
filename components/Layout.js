import Head from "next/head";
import { Navbar } from "react-bootstrap";
import Footerstrip from "./footerstrip";
import MainHeader from "./Main-header/mainHeader";

export default function Layout({children}) {

    return (
        <>
            <MainHeader />
                <main>{children}</main>
            {/* <Footerstrip /> */}
        </>
    )
}