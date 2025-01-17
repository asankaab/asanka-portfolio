import { getUser } from "@/hooks/useData"
import Link from "next/link";
import * as motion from "framer-motion/client"
import { parent } from "../animation";
import Spacer from "@/components/Spacer";

export default async function Page() {

    const user = await getUser();
    return (
        <motion.div variants={parent} viewport={{once: true}} initial="hidden" whileInView="visible" className="container w-full mx-auto px-3">
            <Spacer/>
            <section>
                <div className="grid gap-2">
                    <h2 className="text-2xl md:text-2xl">Contact</h2>
                    <p><span className="text-xs">Email </span><Link href={"mailto:" + user.email}>{user.email}</Link></p>
                </div>
            </section>
        </motion.div>
    )
}