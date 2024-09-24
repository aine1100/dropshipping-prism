import Sidenav from "../components/Sidenav"
import Top from "../components/Top"

export default function Dashboad() {
    return(
        <main className="flex">
            <Sidenav />
            <section className="pl-[3rem] pt-[5rem]">
            <Top />
            </section>
        </main>
    )
}