# Redux 공부 




## Specification

- jsonplaceholder에서 제공하는 API를 사용해 리소스 가져오기
- `comments` Resource 사용.
- [jsonplaceholder 사이트](https://jsonplaceholder.typicode.com/)

## Redux
- React와 함께 많이 사용되는 상태관리 라이브러리. 
- 필요성: 프로젝트의 규모가 커질수록 컴포넌트 구조가 복잡해지고, 전달해야 하는 props의 깊이가 점점 깊어진다. 
이때 props가 필요한 곳으로 제대로 전달되게 하기 위하여, 실제로는 해당 props를 사용하지 않는 컴포넌트를 거쳐가며 리렌더링 하게 되는 비효율적인 작업이 이루어진다.
리덕스를 사용하게 되면 원하는 컴포넌트에 원하는 state와 함수를 할당해 줌으로써 더 편리하게 상태관리를 할 수 있다.

[참고 | velopert.log](https://velog.io/@velopert/Redux-1-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EA%B0%9C%EB%85%90%EC%A0%95%EB%A6%AC-zxjlta8ywt)