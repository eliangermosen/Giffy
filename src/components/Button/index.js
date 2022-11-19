import React from "react";
import { Button, Link } from "./styles"

export default function ButtonComponent({children, href, size = 'small'}){
    return href
    ? <Link href={href} size={size}>{children}</Link>
    : <Button size={size}>{children}</Button>
}