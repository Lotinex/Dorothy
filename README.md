# Dorothy
> Road sign sentence maker   
> 도로명 표지판으로 말해요
> 

## 설치

```
npm install
```

## 사용법

작동을 테스트하려면

```
npm run test
```

원하는 문장을 생성하고 싶다면

```
ts-node src/index "<문장..>"
```

## 설정

``src/config.json`` 에서 글자의 가로와 세로의 길이,   
생성할 이미지의 가로와 세로의 크기를 변경할 수 있습니다.   
(기본적으로 모두 100이며 이미지의 크기는 문장의 크기에 따라 자동으로 변합니다.)   

## 글자에 관해..

문장 생성 과정에서 ``src/img`` 에 담긴 이미지들을 사용합니다.   
현재까지 **112** 개의 글자들이 수집되어 있으며, 필요 시 원활한 글자의 추가를 위해 추가 시 권장 방법을 서술합니다.


1. [주소정보누리집(도로명주소 안내시스템)](https://www.juso.go.kr/openIndexPage.do) 에 접속한 뒤, 원하는 글자를 입력하여 도로명을 찾습니다.   
![image](https://user-images.githubusercontent.com/34784356/154833743-3fcd17d3-7038-419b-aef0-88d636469e10.png)   

2. 찾은 도로명을 [구글 지도](https://www.google.com/maps/) 등 지도 제공 사이트에서 검색합니다.   
![image](https://user-images.githubusercontent.com/34784356/154833755-ee8c5a95-2efb-4df6-afed-1317b281dc18.png)   

3. 적당한 장소를 클릭하여 해당 도로가 있는 지역으로 이동합니다.   
![image](https://user-images.githubusercontent.com/34784356/154833776-72358d11-cbac-4f31-b727-1e6f3b1db5d4.png)   

4. 스트리트 뷰 기능을 사용하여 도로를 살펴봅니다. **이 때, 원하는 도로가 다른 도로로 빠지는 지점을 고르는 것이 좋습니다.**   
![스크린샷(632)](https://user-images.githubusercontent.com/34784356/154833876-ae4438e3-6aa0-445c-81c0-ac0aedccdd36.png)   

5. 주변을 살펴보고 표지판을 찾은 뒤, 적절히 잘라 ``src/img/글자.png`` 형태로 저장합니다.   
![스크린샷(633)](https://user-images.githubusercontent.com/34784356/154833888-e372edd5-d39e-4cea-a451-c63e4502ac49.png)
