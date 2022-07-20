import { FunctionComponent } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import { useBlogPostsContext } from '@contextProviders/BlogPostsProvider';

const BlogPageHeader: FunctionComponent = () => {
  const { searchPostsQuery } = useBlogPostsContext();

  return (
    <Box mt={{ base: 10, lg: 8 }} mb={16} ml={{ base: 5, lg: 12 }}>
      <Heading as="h1" size="h2" fontSize="4.5xl" fontWeight="bold" mb={4}>
        {searchPostsQuery ? `Search result for "${searchPostsQuery}"` : 'Featured Articles'}
      </Heading>

      {!searchPostsQuery && (
        <Text fontSize="lg" fontWeight="normal" color="brand.900">
          Articles on Customer Engagement, Support, Product, and more
        </Text>
      )}
    </Box>
  );
};

export default BlogPageHeader;
