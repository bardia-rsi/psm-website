import type { FC, ReactElement } from "react";
import type { SwiperOptions } from "swiper";
import type { Title } from "../../types/Elements/Title"
import type { Plan as PlanDataStructure } from "../../types/Data/Plan"
import type { Link } from "../../types/Elements/Link";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../components/UI/Container";
import Wrapper from "../../components/UI/Wrapper";
import ContainerTitle from "../../components/UI/ContainerTitle";
import Plan from "../../components/Plan";
import ContainerLink from "../../components/UI/ContainerLink";
import "swiper/scss";
import "swiper/scss/pagination";
import "./swiper.scss";

interface Props {
    data: {
        title: Title;
        slides: PlanDataStructure[];
        link?: Link;
    };
    planFeaturesLength?: number;
}

const Plans: FC<Props> = ({ data, planFeaturesLength }): ReactElement => {

    const breakpoints: SwiperOptions["breakpoints"] = {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }

    return (
        <Container>
            <Wrapper>
                <ContainerTitle center={data.title.center}>
                    { data.title.text }
                </ContainerTitle>
                <Swiper modules={[Pagination]}
                        slidesPerView={1}
                        spaceBetween={24}
                        pagination={{ clickable: true }}
                        breakpoints={breakpoints}>
                    {
                        data.slides.map((plan) => (
                            <SwiperSlide key={plan.id}>
                                <Plan data={plan} featuresLength={planFeaturesLength ?? undefined} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                { data.link ? <ContainerLink to={data.link.url}>{ data.link.text }</ContainerLink> : null }
            </Wrapper>
        </Container>
    );
}

export default Plans;