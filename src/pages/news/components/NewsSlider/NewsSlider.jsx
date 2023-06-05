import Slider from "react-slick";
import Card from "@/components/Card/Card";
import "./NewsSlider.scss";
import { useGetDeviceType } from "@/hooks/useGetDeviceType";
import { truncate } from "@/utils/string";

const NewsSlider = ({ items }) => {
  const { isDesktop } = useGetDeviceType();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktop ? 3 : 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="newsSliderContainer">
      <div>
        <Slider {...settings}>
          {items.map((item) => {
            return (
              <Card
                key={item.title}
                data={item}
                urlToImage={item.urlToImage}
                title={isDesktop ? truncate(item.title, 55) : item.title}
                description={
                  isDesktop ? truncate(item.description, 100) : item.description
                }
                publishedAt={item.publishedAt}
                sourceId={item.source.id}
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default NewsSlider;
