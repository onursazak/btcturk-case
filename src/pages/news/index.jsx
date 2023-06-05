import { API } from "@/api/api";
import NewsList from "@/pages/news/components/NewsList/NewsList";
import NewsSlider from "@/pages/news/components/NewsSlider/NewsSlider";
import { useGetIdFromSearchParams } from "@/hooks/useGetIdFromSearchParams";
import { useQuery } from "@tanstack/react-query";
import NewsTitle from "@/pages/news/components/NewsTitle/NewsTitle";

const News = () => {
  const id = useGetIdFromSearchParams();
  const { isError, isLoading, data } = useQuery({
    queryKey: ["list", id],
    queryFn: () => API.getHeadLines(id),
    refetchOnWindowFocus: false,
    refetchInterval: 1000 * 60,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const sourceName = data?.articles[0]?.source?.name;

  return (
    <main>
      <h4
        style={{ padding: "15px 15px", maxWidth: "1100px", margin: "0 auto" }}
      >
        Total articles: {data.totalResults}
      </h4>
      <NewsSlider items={data.sliderData} />
      <NewsTitle>{sourceName}</NewsTitle>
      <NewsList articles={data.articles} />
    </main>
  );
};

export default News;
