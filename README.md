# 🔥 FIRE SLOTBOARD

실시간 보고서 관리 시스템 - Firebase Realtime Database 기반

## 📱 모바일 지원

- **PWA (Progressive Web App)** 지원
- **모바일 최적화** UI/UX
- **카카오톡 브라우저** 대응
- **Chrome/Safari** 권장

## 🚀 배포 방법

### GitHub Pages 사용

1. **저장소 생성**
   - GitHub에서 새 저장소 생성
   - 이름: `fire-slotboard`
   - Public 선택

2. **파일 업로드**
   - `fire.html`
   - `firebase-config.js`
   - `manifest.json`

3. **GitHub Pages 활성화**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main

4. **접속 URL**
   - `https://[사용자명].github.io/fire-slotboard/`

## 🔧 설정

### Firebase 설정

1. **Firebase Console** 접속
2. **Realtime Database** 활성화
3. **규칙 설정** (개발용):
   ```json
   {
     "rules": {
       ".read": true,
       ".write": true
     }
   }
   ```

### 모바일 접근

1. **카카오톡에서 링크 공유**
2. **"Chrome/Safari에서 열기"** 클릭
3. **PWA 설치** (선택사항)

## 📋 사용법

### 로그인
- **일반 사용자**: 비밀번호 `1234`
- **관리자**: 비밀번호 `9999`
- **지휘관**: 비밀번호 `4501`, `4503`, `4504`, `4505`, `4506`, `4507`

### 주요 기능
- **실시간 슬롯보드**
- **파일 업로드**
- **지시사항 전달**
- **로그 관리**
- **사용자 관리**

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Firebase Realtime Database
- **PWA**: Manifest, Service Worker
- **모바일**: 반응형 디자인

## 📞 지원

문제가 발생하면 GitHub Issues에 문의하세요.
