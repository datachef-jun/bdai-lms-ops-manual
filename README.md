# BDAI LMS 운영진 빠른 시작 메뉴얼

정적 사이트입니다. GitHub Pages로 배포됩니다.

- 로컬 미리보기: 저장소 루트에서 `python3 -m http.server 8765 --directory ops-manual` 후 `http://127.0.0.1:8765/`
- 배포 URL (Pages 활성화 후): `https://datachef-jun.github.io/bdai-lms/`
- 수정: `ops-manual/index.html` 중심으로 섹션을 추가하면 됩니다.

`main`에 `ops-manual/**`이 푸시되면 `.github/workflows/ops-manual-pages.yml`이 자동 배포합니다.
첫 배포 전 GitHub 저장소 **Settings → Pages → Source: GitHub Actions** 로 설정하세요.
