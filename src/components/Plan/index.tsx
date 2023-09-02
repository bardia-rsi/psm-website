import type { FC, ReactElement } from "react";
import type { Plan as PlanDataStructure } from "../../types/Data/Plan";
import cn from "classnames";
import SVG from "react-inlinesvg";
import Link from "../UI/Link";
import Style from "./style.module.scss";

interface Props {
    data: PlanDataStructure;
    featuresLength?: number;
}

const Plan: FC<Props> = ({ data, featuresLength = data.features.length }): ReactElement => {

    const features: ReactElement[] = [];
    const discountedPrice: number = data.price?.discount
        ? Number((data.price.regular * (100 - data.price.discount) / 100).toFixed(2))
        : 0;

    for (let i = 0; i < featuresLength; i++) {

        const { id, content, icon, disabled } = data.features[i];

        features.push(
            <p key={id} className={cn(Style.feature, disabled && Style.disabled)}>
                {
                    icon
                        ? <SVG src={icon} className={Style.icon} />
                        : !disabled
                            ? <SVG src="icons/checkmark.svg" className={cn(Style.icon, Style.checkmark)} />
                            : <SVG src="icons/xmark.svg" className={Style.icon} />
                }
                <span className={Style.text}>{ content }</span>
            </p>
        );

    }

    return (
        <div className={cn(Style.container, Style[data.variant])}>
            <div className={Style.header}>
                {
                    data.price?.discount && (
                        <span className={Style.discount_offer_badge}>
                        save {data.price.discount}%
                    </span>
                    )
                }
                <h3 className={Style.name}>{ data.name }</h3>
                <h2 className={Style.price}>
                    <span className={Style.dollar_sign}>$</span>
                    <span className={Style.amount}>
                        {
                            data.price?.regular
                                ? data.price.discount ? discountedPrice : data.price.regular
                                : "0.00"
                        }
                    </span>
                </h2>
                { data.description && <p className={Style.description}>{ data.description }</p> }
                { data.price && (
                    <>
                        <p className={Style.per}>per { data.price.per }</p>
                        <p>
                            <span className={Style.regular_price}>{ data.price.regular * data.price.period }</span>
                            { data.price.discount && (
                                <span className={Style.discounted_price}>
                                    { discountedPrice * data.price.period }
                                </span>
                            )}
                            <span className={Style.payment_description}>{ data.price.description }</span>
                        </p>
                    </>
                )}
            </div>
            <div>
                <Link to={data.link.url} type={data.link.type} variant={data.link.variant} className={Style.plan_btn}>
                    { data.link.text }
                </Link>
                { features }
            </div>
        </div>
    );

}

export default Plan;