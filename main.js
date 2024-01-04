document.addEventListener('DOMContentLoaded', function () {
    // 폴리곤 요소 선택
    let polygon = document.getElementById('clipPolygon');
    let polygonBack = document.getElementById('clipBack');

    // SVG 박스 크기
    let svgWidth = 600;
    let svgHeight = 600;

    // 회전 함수
    function rotatePolygonOnScroll() {
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;
        
        // 스크롤 위치에 따라 회전 각도 계산
        let angle = scrollPosition % 360;
        let superangle = angle * 0.3;

        // 회전 원점을 SVG 박스의 가운데로 설정
        let centerX = svgWidth / 2;
        let centerY = svgHeight / 2;
        polygon.style.transformOrigin = `${centerX}px ${centerY}px`;
        polygonBack.style.transformOrigin = `${centerX}px ${centerY}px`;

        // 폴리곤에 회전 적용
        polygon.style.transform = `rotate(${superangle}deg)`;
        polygonBack.style.transform = `rotate(${superangle}deg)`;
    }

    // 스크롤 이벤트에 회전 함수 연결
    window.addEventListener('scroll', rotatePolygonOnScroll);
});
