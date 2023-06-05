import { useQuery } from "@tanstack/react-query";
import { API } from "@/api/api";
import { queryClient } from "@/main";
import { useState } from "react";
import CategoryFilters from "@/pages/main/components/CategoryFilters/CategoryFilters";
import styles from "./index.module.scss";
import Divider from "@/components/Divider/Divider";
import NewsSources from "@/pages/main/components/NewsSources/NewsSources";
import { removeFilterByIndex, addFilter } from "@/pages/main/utils";

const sourcesQueryKey = "sources";

const MainPage = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const { isError, isLoading, data } = useQuery({
    queryKey: [sourcesQueryKey],
    queryFn: API.getSources,
    refetchOnWindowFocus: false,
  });

  if (isError) return <div>Error!</div>;
  if (isLoading) return <div>Loading...</div>;

  const filterSources = (category) => {
    const _filters = [...selectedFilters];
    const foundIndex = _filters.indexOf(category);
    const isAddedPreviously = foundIndex > -1;

    const updatedFilters = isAddedPreviously
      ? removeFilterByIndex(_filters, foundIndex)
      : addFilter(_filters, category);

    setSelectedFilters(updatedFilters);
    updateSourcesData(updatedFilters);
  };

  function updateSourcesData(updatedFilters) {
    queryClient.setQueryData([sourcesQueryKey], (oldData) => {
      if (updatedFilters.length < 1) {
        return { ...oldData, sources: oldData.initialSources };
      }

      const filteredSources = oldData.initialSources.filter((source) => {
        return updatedFilters.includes(source.category);
      });

      return { ...oldData, sources: filteredSources };
    });
  }

  const { sources, categories } = data;

  return (
    <main className={styles.mainPage}>
      <CategoryFilters
        categories={categories}
        onCategoryClick={filterSources}
        selectedFilters={selectedFilters}
      />
      <Divider className={styles.divider} />
      <NewsSources sources={sources} />
    </main>
  );
};

export default MainPage;
