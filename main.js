document.addEventListener('DOMContentLoaded', function () {
  console.log('✅ main.js 로드됨 - 기능 초기화 시작')

  // 1. 가려진 정보 보기 토글
  const toggleInfoBtn = document.getElementById('toggleInfo')
  const eyeIcon = document.getElementById('eyeIcon')
  const emailSpan = document.getElementById('email')
  const phoneSpan = document.getElementById('phone')

  if (!toggleInfoBtn || !emailSpan || !phoneSpan) {
    console.error('❌ 필수 요소(id="toggleInfo", "email", "phone")가 HTML에 없습니다!')
    return
  }

  toggleInfoBtn.addEventListener('click', function () {
    const isHidden = emailSpan.textContent.includes('*') || phoneSpan.textContent.includes('*')

    if (isHidden) {
      emailSpan.textContent = emailSpan.dataset.real // 원래 이메일 표시
      phoneSpan.textContent = phoneSpan.dataset.real // 원래 전화번호 표시
      eyeIcon.src = 'assets/icon-eye-on.png' // 눈 아이콘 변경
      // eslint-disable-next-line @stylistic/brace-style
    } else {
      emailSpan.textContent = 'dud*********@gmail.com' // 가려진 이메일
      phoneSpan.textContent = '010-****-0457' // 가려진 전화번호
      eyeIcon.src = 'assets/icon-eye-off.png' // 눈 아이콘 변경
    }
  })

  console.log('✅ 가려진 정보 보기 기능이 정상적으로 초기화되었습니다.')

  // 2. 이력서 제목 입력 필드 자동 저장
  const titleInput = document.querySelector('.title-input')
  if (titleInput) {
    titleInput.addEventListener('input', function () {
      localStorage.setItem('resumeTitle', titleInput.value)
    })

    if (localStorage.getItem('resumeTitle')) {
      titleInput.value = localStorage.getItem('resumeTitle')
    }
  }

  // 3. 학력/경력/스킬 섹션 추가 버튼 및 제목 클릭 기능
  document.querySelectorAll('.section-header').forEach((header) => {
    header.addEventListener('click', function (event) {
      const section = this.closest('.education')
      if (!section) return

      // + 버튼 클릭이 아니라면 추가
      if (!event.target.classList.contains('add-btn')) {
        addEducationItem(section)
      }
    })
  })

  document.querySelectorAll('.add-btn').forEach((button) => {
    button.addEventListener('click', function () {
      const section = this.closest('.education')
      if (section) {
        addEducationItem(section)
      }
    })
  })

  function addEducationItem(section) {
    const newItem = document.createElement('div')
    newItem.classList.add('education-item')
    newItem.innerHTML = `
      <input type="text" class="school-name-input" placeholder="학교 이름 입력">
      <input type="text" class="date-input" placeholder="입학 및 졸업 날짜">
      <input type="text" class="major-input" placeholder="전공 입력">
      <button class="remove-btn">삭제</button>
    `

    section.appendChild(newItem)

    // 삭제 버튼 기능 추가
    newItem.querySelector('.remove-btn').addEventListener('click', function () {
      newItem.remove()
    })
  }

  console.log('✅ 학력/경력/스킬 섹션 추가 기능이 정상적으로 초기화되었습니다.')

  // 4. 네비게이션 항목 토글 기능 (글씨 클릭도 가능하도록 수정)
  document.querySelectorAll('.career-item, .toggle-btn').forEach((item) => {
    item.addEventListener('click', function () {
      const listItem = this.closest('li')
      if (listItem) {
        listItem.classList.toggle('active')
        const toggleBtn = listItem.querySelector('.toggle-btn')
        if (toggleBtn) {
          toggleBtn.textContent = listItem.classList.contains('active') ? '-' : '+'
        }
      }
    })
  })

  console.log('✅ 네비게이션 토글 기능이 정상적으로 초기화되었습니다.')
  console.log('✅ 모든 기능이 정상적으로 초기화되었습니다.')
})
