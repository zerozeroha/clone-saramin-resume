## 사람인 이력서 페이지 클론

### 파일 명안
- `index.html` : 페이지의 구성 요소를 제공
- `main.css` : 정보 사용자 화면 UI 설정
- `main.js` : 다음 기능을 진행
  - 공간 정보 보기 함수
  - 이력서 제목 자동 저장
  - 학력/경력/스킬 추가 기능
  - 네비공유 함수 작성
- `assets/` : 이미지 및 자동 페이지에 적용되는 유형의 인형 파일

### 적용된 기능
#### 1. 공간 정보 보기 타입에 따라 네비공유
- 사용자의 전화번호, 이메일 정보를 자동 가리기 타입에 따라 수직합니다.

#### 2. 이력서 제목 자동 저장
- 사용자가 이력서 제목을 입력하면 `localStorage` 에 저장되고 페이지 다시 로드할 때 반영됩니다.

#### 3. 학력/경력/스킬 추가 기능
- `+` 버튼 및 세션 토글 시 추가
- `제목` 및 `+` 버튼 클릭 시 새로운 학교, 이력, 스킬 등록 인턴 추가
- `삭제` 버튼 클릭 시 추가 인턴 제거

#### 4. 네비공유 함수 작성
- 아이콘 `+`/− 클릭 타입에 따라 네비공유 디스크를 타입
- `li` 항목을 클릭해도 네비 함수 작성 정보가 만들어진다.

### 적용 에디션
- 클릭 일정 조건 및 `eventListener` 적용
- `localStorage` 사용 제어
- 스탠딩 `CSS` 공통 UI 적용

### 소스 파일
- `assets/` 폴더에 UI 적용을 위한 이미지 파일 적용
- `icon-eye-on.png` / `icon-eye-off.png` : 공간 정보 타입 이미지



### 💻 기술 스택 정리 (Tech Stack)

#### **1. 프론트엔드 (Frontend)**
| 기술 | 설명 |
|------|------|
| **HTML5** | 웹페이지 구조 및 컨텐츠 마크업 |
| **CSS3** | 스타일링 및 반응형 디자인 구현 |
| **JavaScript (ES6+)** | 웹페이지 동적 기능 및 이벤트 핸들링 |

#### **2. 스타일링 (Styling)**
| 기술 | 설명 |
|------|------|
| **CSS Variables (`:root`)** | 전역적인 색상, 폰트 크기, 간격 등을 변수화 |
| **Flexbox / Grid** | 레이아웃을 구성하고 요소 정렬 |
| **반응형 디자인 (`@media`)** | 다양한 화면 크기에 맞춰 UI 자동 조정 |

#### **3. 인터랙션 및 기능 (Interactions & Features)**
| 기능 | 설명 |
|------|------|
| **이력서 제목 자동 저장** | `localStorage`를 활용해 입력한 제목 자동 저장 |
| **가려진 정보 보기** | 이메일, 전화번호를 `dataset`을 이용하여 가림/노출 기능 |
| **동적 요소 추가/삭제** | 학력, 경력, 스킬 섹션을 클릭 시 동적으로 추가/삭제 가능 |
| **네비게이션 토글** | `career-item` 클릭 시 토글 효과 (+, - 버튼도 적용) |

#### **4. Git & 협업 (Version Control & Collaboration)**
| 기술 | 설명 |
|------|------|
| **Git** | 프로젝트 버전 관리 및 협업 |
| **GitHub** | 원격 저장소 관리 및 코드 공유 |
| **브랜치 전략** | `main` 브랜치 관리, 추가 기능 구현 시 `feature` 브랜치 생성 |

#### **5. 기타 (Etc)**
| 기술 | 설명 |
|------|------|
| **ESLint** | 코드 품질 유지 및 일관성 유지 |
| **VSCode** | 코드 작성 및 디버깅 |
| **Chrome DevTools** | UI 디버깅 및 성능 분석 |


