import type { FC, ReactElement } from "react";
import type { WebsiteSettings } from "../../types/Data/Settings";
import { useRouteLoaderData } from "react-router-dom";
import Container from "../../components/UI/Container";
import Wrapper from "../../components/UI/Wrapper";
import Link from "../../components/UI/Link";
import SocialIcon from "../../components/UI/SocialIcon";
import Style from "./style.module.scss";

const Footer:FC = (): ReactElement => {

    const { footer: data } = useRouteLoaderData("layout") as WebsiteSettings;

    return (
        <footer className={Style.footer}>
            <Container>
                <Wrapper>
                    <div className={Style.link_sections}>
                        {
                            data.sections.map(({ id, title, baseUrl, links }) => (
                                <div key={id} className={Style.section}>
                                    <h6 className={Style.section_title}>{ title }</h6>
                                    {
                                        links.map(({ id, url, text }) => (
                                            <Link key={id} to={(baseUrl ?? "") +  url} type="simple">
                                                { text }
                                            </Link>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <hr className={Style.divider} />
                    <div className={Style.bottom_section}>
                        <p className={Style.copyright}>{ data.copyrights }</p>
                        <div className={Style.social_media}>
                            <span className={Style.follow_text}>{ data.socialMedia.text }</span>
                            <div className={Style.social_icons}>
                                {
                                    data.socialMedia.icons.map(({ id, url, name }) => (
                                        <SocialIcon key={id} to={url} name={name} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </Container>
        </footer>
    );

}

export default Footer;