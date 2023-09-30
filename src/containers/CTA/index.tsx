import type { FC, ReactElement } from "react";
import type { CTA as Props } from "../../types/Elements/CTA";
import cn from "classnames";
import SVG from "react-inlinesvg";
import Container from "../../components/UI/Container";
import Wrapper from "../../components/UI/Wrapper";
import ContainerTitle from "../../components/UI/ContainerTitle";
import Link from "../../components/UI/Link";
import Style from "./style.module.scss";

const CTA: FC<Props> = ({ title, subtitle, links, features }): ReactElement => (
    <section className={Style.cta}>
        <Container>
            <Wrapper className={Style.wrapper}>
                <ContainerTitle center={title.center} className={Style.cta_title}>
                    { title.text }
                </ContainerTitle>
                { subtitle && (
                    <h5 className={cn(Style.subtitle, subtitle.center && Style.center)}>{ subtitle.text }</h5>
                )}
                <div className={Style.buttons}>
                    {
                        links.map(({ id, link, subtext }) => (
                            <div key={id}>
                                <Link to={link.url}
                                      type={link.type}
                                      variant={link.variant}
                                      className={Style.btn_wide}>
                                    { link.text }
                                </Link>
                                { subtext ? <p className={Style.subtext}>{ subtext }</p> : null }
                            </div>
                        ))
                    }
                </div>
                { features && (
                    <div className={Style.features}>
                        {
                            features.map(({ id, text, icon }) => (
                                <div key={id} className={Style.feature}>
                                    <SVG src={icon} className={Style.icon} />
                                    <p className={Style.text}>{ text }</p>
                                </div>
                            ))
                        }
                    </div>
                )}
            </Wrapper>
        </Container>
    </section>
);

export default CTA;