import type { FC, ReactElement } from "react";
import type { PricingPageResources } from "../../../types/Data/Pages/Pricing";
import { useRouteLoaderData } from "react-router-dom";
import cn from "classnames";
import SVG from "react-inlinesvg";
import Container from "../../../components/UI/Container";
import Wrapper from "../../../components/UI/Wrapper";
import ContainerTitle from "../../../components/UI/ContainerTitle";
import Link from "../../../components/UI/Link";
import Style from "./style.module.scss";

const CompareTable: FC = (): ReactElement => {

    const { compareTable: data } = useRouteLoaderData("pricing") as PricingPageResources;

    return (
        <section className={Style.section}>
            <Container>
                <Wrapper>
                    <ContainerTitle center={data.title.center}>{ data.title.text }</ContainerTitle>
                    <table className={Style.compare_table}>
                        <thead>
                        <tr>
                            {
                                data.table.labels.map(({ id, label, subtext }) => (
                                    <th key={id} className={Style.th}>
                                        { label }
                                        { subtext ? <span className={Style.subtext}>{ subtext }</span> : null }
                                    </th>
                                ))
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.table.rows.map(({ id, items }) => (
                                <tr key={id}>
                                    {
                                        items.map(({ id, link, text, feature }, index) => {

                                            if (link) {
                                                return (
                                                    <td key={id} className={Style.td}>
                                                        <div className={Style.button_container}>
                                                            <Link to={link.link.url}
                                                                  type={link.link.type}
                                                                  variant={link.link.variant}>
                                                                { link.link.text }
                                                            </Link>
                                                            { link.subtext && (
                                                                <span className={Style.subtext}>{ link.subtext }</span>
                                                            )}
                                                        </div>
                                                    </td>
                                                );
                                            }

                                            if (text) {
                                                return (
                                                    <td key={id}
                                                        className={cn(
                                                            Style.td,
                                                            index === 0 ? Style.label : Style.text
                                                        )}>
                                                        { text }
                                                    </td>
                                                );
                                            }

                                            if (feature !== undefined) {
                                                return (
                                                    <td key={id} className={Style.td}>
                                                        <SVG src={`icons/${feature ? "checkmark" : "close"}.svg`}
                                                             className={cn(
                                                                 Style.icon,
                                                                 feature ? Style.checkmark : Style.multiply
                                                             )}/>
                                                    </td>
                                                );
                                            }

                                            return <td></td>;

                                        })
                                    }
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </Wrapper>
            </Container>
        </section>
    );

}

export default CompareTable;