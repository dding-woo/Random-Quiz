# 숫자맞추기게임

1. 두 값 사이의 정수 난수를 생성하고 리턴 값을 상수에 저장한다.
2. 제출 버튼을 클릭하는 동작 이벤트리스너를 만든다.
3. 이벤트 리스너가 만들어지고 나서 input 텍스트를 읽어서 상수에 저장한다.  
4. 유저가 다시 수를 입력 할 수 있도록 value속성을 이용해서 input 안에 텍스트를 null값으로 다시 바꾸어 이전 값을 없애준다.
5. 

### 에러

1. 숫자가 아닌 스트링 값을 입력해도 입력 됨.
  - html에서 input type을 number로 변경. pattern특성을 이용해 0~9까지만 타이핑 가능
<br>
<br>
2. 알파벳 e뿐만 아니라 한글이 인식 되어서 input type이 number임에도 입력이 됨
  -문자를 Number로 형변형시 0으로 출력 됨 입력된 tempGuessInputText과 0을 비교해서 0이 면 
  정수가 아니라는 경고문이 뜨게 함.
  