import type { FC, ReactElement } from "react";
import type { Hero as Props } from "../../types/Elements/Hero";
import SVG from "react-inlinesvg";
import cn from "classnames";
import Container from "../../components/UI/Container";
import Wrapper from "../../components/UI/Wrapper";
import Link from "../../components/UI/Link";
import Style from "./style.module.scss";

const Hero: FC<Props> = ({ background = "primary", title, description, links, image, center }): ReactElement => (
    <Container className={Style[background]}>
        <Wrapper className={cn(Style.hero_wrapper, center && Style.center)}>
            <div className={Style.content}>
                <h1 className={Style.title}>{ title }</h1>
                { description && <p className={Style.description}>{ description }</p> }
                { links && (
                    <div className={Style.buttons}>
                        {
                            links.map(({ id, url, type, variant, text }) => (
                                <Link key={id} to={url} type={type} variant={variant}>{ text }</Link>
                            ))
                        }
                    </div>
                )}
            </div>
            { image && (
                <div className={Style.image}>
                    {
                        image.endsWith(".png")
                            ? <img src={image} alt="Product images on different divces" />
                            : <SVG src={image} width="100%" height="auto" />
                    }
                </div>
            ) }
        </Wrapper>
    </Container>
);

export default Hero;