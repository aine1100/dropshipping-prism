import Sidenav from "../components/Sidenav"
import Top from "../components/Top"
import StatCard from "../components/StatCard"

export default function Dashboad() {
    return(
        <main className="flex">
            <Sidenav />
            <section className="pl-[3rem] pt-[5rem]">
            <Top />
            <StatCard />
            </section>
        </main>
    )
}