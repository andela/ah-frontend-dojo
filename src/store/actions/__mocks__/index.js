const data = {
  register: {
    userData: {
      user: {
        username: 'lamech',
        email: 'lamech@bolon.com',
        password: 'Password#1',
      },
    },
    signupSuccess: {
      token: 'hsjsiewiow984ho3490nownb[9wh9',
    },
    signupError: {
      signupError: {
        errors: {
          username: '',
          email: '',
          password: '',
        },
      },
    },
  },
  login: {
    success: {
      user: {
        username: 'dojo',
        email: 'ahbackenddojo@gmail.com',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOjEsInVzZXJuYW1lIjoiZG9qbyIsImVtYWlsIjoiYWhiYWNrZW5kZG9qb0BnbWFpbC5jb20iLCJpYXQiOjE1MTYyMzkwMjJ9.yTCWAyuTKtmMtT8_lNxxaMYXelWKSuasMgCv4DyNbKE',
      },
    },
    failure: {
      errors: {
        error: [
          'A user with this email and password was not found.',
        ],
      },
    },
  },
  articleData: {
    success: {
      article: {
        id: 5,
        slug: 'how-to-write-unit-tests-with-tdd-sq8w',
        title: 'How to write unit tests with TDD',
        body: 'Writing Unit test with TDD',
        description: 'This article is about how to write unittests using pytest',
        author: 'adojo',
        publish_status: false,
        createdAt: '2019-06-13T13:09:22.983075Z',
        updatedAt: '2019-06-13T13:09:22.983234Z',
        delete_status: false,
        tagList: [],
        time_to_read: 1,
        read_stats: {
          views: 0,
          reads: 0
        },
        likeCount: [
          {
            likes: 0,
            dislikes: 0
          }
        ]
      }
    },
    failure: {
      errors: {
        error: [
          'A user with this email and password was not found.',
        ],
      },
    },
  },
};

export default data;
