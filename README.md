# K-ATS Studio — Android APK build

이 프로젝트는 업로드된 `index_v3.html`을 그대로 기반으로 Android APK로 패키징합니다.

## 포함된 기능
- 기존 K-ATS Studio 화면/메뉴/ATS 분석/리포트 유지
- 채용공고 추가/수정/삭제
- 지원자 추가/수정/삭제
- 지원자 단계 드래그 이동
- localStorage 데이터 저장
- PDF 이력서 텍스트 추출
- Gemini PDF/이력서 분석
- GitHub Actions에서 Debug APK 자동 빌드

## GitHub에서 APK 만들기
1. 이 프로젝트 전체를 GitHub 저장소에 올립니다.
2. GitHub의 `Actions` 탭 → `Build Android APK`를 실행합니다.
3. 실행이 끝나면 Actions의 해당 workflow run → `Artifacts`에서 APK ZIP을 받습니다.

## Gemini API Key
보안을 위해 API Key를 소스에 넣지 않았습니다.
앱 실행 후 `지원자 관리` 또는 `ATS 분석` → `⚙ AI 설정`에서 입력하세요.

주의: 모바일 클라이언트에 직접 입력한 Gemini API Key 역시 앱을 사용하는 기기에서 추출될 수 있습니다.
실서비스/다중 사용자 환경에서는 Gemini 호출을 서버(예: Supabase Edge Function 등) 뒤로 옮기는 것을 권장합니다.

## PDF
현재 HTML의 PDF.js 기반 추출 방식을 유지합니다. Android WebView에서 HTTPS CDN을 사용할 수 있도록 인터넷 권한을 포함합니다.
