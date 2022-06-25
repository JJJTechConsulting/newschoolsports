export interface AllPostsForHome {
  edges: {
    node: {
      title: string;
      excerpt: string;
      slug: string;
      date: string;
      content: HTMLElement;
      featuredImage: {
        node: {
          sourceUrl: string;
        };
      };
      categories: {
        edges: {
          node: {
            name: string;
          };
        };
      };
      author: {
        node: {
          name: string;
          firstName: string;
          lastName: string;
          avatar: {
            url: string;
          };
        };
      };
    };
  }[];
}

export interface Post {
  post: {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
    categories: {
      edges: {
        node: {
          name: string;
        };
      };
    };
    author: {
      node: {
        name: string;
        firstName: string;
        lastName: string;
        avatar: {
          url: string;
        };
      };
    };
    content: HTMLElement;
  };
}

export interface Author {
  node: {
    name: string;
    firstName: string;
    lastName: string;
    avatar: {
      url: string;
    };
  };
}
