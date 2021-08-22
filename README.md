# Redux 공부 

![Simpson Local](img/redux-logo.png)


#### spec

- jsonplaceholder에서 제공하는 API를 사용해 리소스 가져오기
- `comments` Resource 사용.
- [jsonplaceholder 사이트](https://jsonplaceholder.typicode.com/)

<img src="C:\project\redux-tutorial\redux-tutorial\img\redux-logo.png"/>

## Redux
- React와 함께 많이 사용되는 상태관리 라이브러리. 
- 필요성: 프로젝트의 규모가 커질수록 컴포넌트 구조가 복잡해지고, 전달해야 하는 props의 깊이가 점점 깊어진다. 
이때 props가 필요한 곳으로 제대로 전달되게 하기 위하여, 실제로는 해당 props를 사용하지 않는 컴포넌트를 거쳐가며 리렌더링 하게 되는 비효율적인 작업이 이루어진다.
리덕스를 사용하게 되면 원하는 컴포넌트에 원하는 state와 함수를 할당해 줌으로써 더 편리하게 상태관리를 할 수 있다.

[참고 | velopert.log](https://velog.io/@velopert/Redux-1-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EA%B0%9C%EB%85%90%EC%A0%95%EB%A6%AC-zxjlta8ywt)

## action
- 상태에 어떤 변화가 필요하면 `action`이 발생.
- type 필드는 필수 & state 업데이트 시 참고되는 이외의 값. 

## reducer
- 변화를 일으키는 함수.
    1) action을 만들어서 발생
    2) 리듀서가 현재 state와 전달받은 action객체를 파라미터로 받아옴
    3) 두 값을 참고해 새로운 상태를 만들어 return

## store
- 프로젝트에 redux를 적용해주는 역할.
- 한 개의 프로젝트는 한 개의 store만 가질 수 있음.
 
## store의 내장 함수
### › dispatch
- 액션을 발생 시키는 것
- `dispatch(action)` 형태로 사용.

### › subscribe
    const listener = () => {
        console.log('updated state-!!');
    }
    const unSubscribe = store.subscribe(listener);
    
    unSubscribe();    // 구독 비활성화할 때 호출
: subscriber 함수 안에 리스너를 넣어 호출해 주면, 리스너 함수가 액션이 디스패치 되어 상태가 업데이트 될 때마다 호출됨.

