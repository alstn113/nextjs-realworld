import styled from '@emotion/styled';
import TabList from '@/components/home/TabList';
import ArticleList from '@/components/article/ArticleList';

const MainView = () => {
  return (
    <Container>
      <TabList />
      <ArticleList />
    </Container>
  );
};
const Container = styled('div')`
  flex: 0 0 75%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;
export default MainView;
