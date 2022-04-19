# 구현한 방법과 이유, 간략한 내용

## 1. toggle

useState를 사용하여 toggle 상태값(boolean)을 props로 넘겨주어 상태값에 따라 css를 변경하는 방법으로 구현했습니다. true인지 false인지에 따라 css로 구별하는 방법이 제일 간단한 방법인것 같아서 사용했습니다.

## 2. tab

useState를 사용해 tab nav의 첫번째 값을 초기값으로 지정한 변수를 만들고 각 탭을 클릭할 시 클릭한 값으로 state가 변경되고 state를 props로 넘겨주어 조건에 따라 css를 변경하는 방식으로 구현했습니다.

## 3. slider

slider는 하단 버튼을 클릭하거나 input을 조절한 값을 state에 담아 props로 넘겨주고 background-size로 위치를 조절했습니다.
각 퍼센트는 배열에 담아 map을 사용해 표시했습니다

## 4. input

email의 경우 이메일 정규표현식 조건에 부합하지 않으면 input에서 포커스가 아웃되었을때 error 메세지가 나와야 하기 때문에 onBlur 이벤트를 사용하여 적용했습니다. 조건에 부합할 경우 true값을 넘겨주어 color를 변경했습니다. password는 버튼을 클릭할 시 true면 type을 text로 false면 password로 삼항연산자를 사용하여 구별했습니다.

## 5. dropdown

초기값을 false로 셋팅해둔 state에 dropdown을 클릭하면 state를 true로 변경하여 dropdown이 열리게 하였고 검색은 배열로 만들어 둔 dropdown item들 값에서 input에 입력한 문자열을 포함하는지 확인하여 포함하는 것들만 filter 함수를 통해 변수에 담아 map을 사용해 표시했습니다
포함여부는 같은 조건에서 확인 할 수 있게 dropdown option값과 input 입력값을 모두 소문자로 변경하여 확인했습니다.
dropdown이 아닌 외부영역 클릭시 dropdown이 닫히게 하기 위해 useRef 함수를 사용해서 html element태그에 접근하여 useEffect를 사용해 해당 element 영역 외의 부분을 클릭하면 닫히게 구현하였습니다.
<br>

<br>

<br>

# 구현하면서 어려웠던 점과 해결과정과 방법

toggle과 tab은 구현하면서 크게 어려웠던 점은 없었습니다.
slider에서 사용한 input="range"는 많이 써보지 않아서 input range style을 구글링하여 style 적용하는 법을 참고했습니다.
dropdown에서 특정 영역 외의 부분을 클릭했을때 이벤트를 발생시키기 위해 onBlur를 사용하려 했으나 onBlur는 input 같은 초점을 맞출 수 있는 요소에 사용하는게 적절 하다고 하여 useRef함수를 찾아서 사용했습니다. react 공식문서와 블로그를 참고하여 적용했습니다.
