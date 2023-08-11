
import Image from "next/image";

export default function Loading() {
    return <figure style={{ padding: 100, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image
            src="/../public/home/Loading_2.gif"
            alt="icon loading"
            width={100}
            height={100}
            priority
            sizes='100vw'
        />
    </figure>
}