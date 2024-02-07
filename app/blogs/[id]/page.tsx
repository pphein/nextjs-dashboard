import { Blog } from "@/app/lib/definitions";

export default function Page({
    props
}: {props: Blog}) {
    return (
        <h1>{props.title}</h1>
    )
}