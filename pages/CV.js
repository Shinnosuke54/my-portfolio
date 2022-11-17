import Image from "next/image"
import { Container} from "reactstrap";

import cv from "../public/images/shinnosuke_ino_cv.png"


export default function CV(){
    return(
        <Container>
        
            <Image alt="hero-image" src={cv} />


        </Container>
    )
}