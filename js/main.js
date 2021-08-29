//아주대 주요 건물 좌표 정보 배열
//placeCoordinates[index].xpos  //placeCoordinates[index].ypos
//0 성호관  1 아주대    2 도서관    3 체육관    4 남제관    5 용지관    6 화홍관    7 광교관    8 국제학사
//9 팔달관  10 동관    11 다산관   12 산학원
const placeCoordinates = [{
    xpos: "37.282906900486445",
    ypos: "127.0450830338577",
    place: "성호관"
    //성호관, placeCoordinates[0]
},
{
    xpos: "37.28303807126042",
    ypos: "127.04369611297821",
    place: "아주대"
    //아주대, placeCoordinates[1]
},
{
    xpos: "37.28186651308496",
    ypos: "127.04425360958005",
    place: "도서관"
    //도서관, placeCoordinates[2]
},
{
    xpos: "37.27991980230021",
    ypos: "127.0454815484203",
    place: "체육관"
    //체육관, placeCoordinates[3]
},
{
    xpos: "37.28404638739943",
    ypos: "127.045935094318",
    place: "남제관"
    //남제관, placeCoordinates[4]
},
{
    xpos: "37.28481219140623",
    ypos: "127.04613854002773",
    place: "용지관"
    //용지관, placeCoordinates[5]
},
{
    xpos: "37.285163481845345",
    ypos: "127.04643194954548",
    place: "화홍관"
    //화홍관, placeCoordinates[6]
}, {
    xpos: "37.28545172107622",
    ypos: "127.0466689389301",
    place: "광교관"
    //광교관, placeCoordinates[7]
},
{
    xpos: "37.28479370770169",
    ypos: "127.04731130320246",
    place: "국제학사"
    //국제학사, placeCoordinates[8]
}, {
    xpos: "37.2844073669552",
    ypos: "127.0444580765152",
    place: "팔달관"
    //팔달관, placeCoordinates[9]
},
{
    xpos: "37.283794929399775",
    ypos: "127.04373601841662",
    place: "동관"
    //동관, placeCoordinates[10]
},
{
    xpos: "37.2830815528071",
    ypos: "127.04776128827264",
    place: "다산관"
    //다산관, placeCoordinates[11]
},
{
    xpos: "37.28651529005975",
    ypos: "127.0457899948619",
    place: "산학원"
    //산학원, placeCoordinates[12]
}
];

//-------------------------------------------------------------------------------------------------------------

//교내 전체 코로나 확진자 리스트
const coronicList = [];

//확진자 리스트에 새로운 확진자를 추가하는 함수
function coronicList_push(year, month, date, place, identity) {
    let coronic = {
        year, month, date, place, identity
    };
    coronicList.push(coronic);
}

//확진자 리스트에 아래의 확진자들을 추가
coronicList_push(2021, 8, 29, [{ place: 2, hour: 17, min: 30 }, { place: 11, hour: 15, min: 50 }], "학생");
coronicList_push(2021, 8, 29, [{ place: 3, hour: 17, min: 30 }, { place: 5, hour: 15, min: 50 }], "교직원");

//0 성호관  1 아주대    2 도서관    3 체육관    4 남제관    5 용지관    6 화홍관    7 광교관    8 국제학사
//9 팔달관  10 동관    11 다산관   12 산학원

//-------------------------------------------------------------------------------------------------------------

const backToTop = document.getElementById('backtotop');

function checkScroll() {
    let pageYOffset = window.pageYOffset;

    if (pageYOffset != 0) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
}

function moveBackToTop() {
    if (window.pageYOffset > 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

window.addEventListener('scroll', checkScroll);
backToTop.addEventListener('click', moveBackToTop);

//-------------------------------------------------------------------------------------------------------------

//카카오맵 생성 및 마커 관련 API JS
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(placeCoordinates[1].xpos, placeCoordinates[1].ypos), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


//-------------------------------------------------------------------------------------------------------------

const timeline = document.getElementById('timelineSearchIcon');

timeline.addEventListener('click', timelineSearchIconClicked);

function timelineSearchIconClicked() {
    const year = document.getElementById('timelineYear');
    const yearValue = year.options[year.selectedIndex].value;
    const month = document.getElementById('timelineMonth');
    const monthValue = month.options[month.selectedIndex].value;
    const date = document.getElementById('timelineDate');
    const dateValue = date.options[date.selectedIndex].value;

    findCoronic(yearValue, monthValue, dateValue);
};

function findCoronic(yearValue, monthValue, dateValue) {
    let coronicReturnList = [];
    for (i = 0; i < coronicList.length; i++) {
        if (yearValue == coronicList[i].year && monthValue == coronicList[i].month && dateValue == coronicList[i].date) {
            coronicReturnList.push(coronicList[i]);
        }
    }
    makeMarker(coronicReturnList);
};

function makeMarker(coronicReturnList) {
    let asciiNum = 65;
    for (i = 0; i < coronicReturnList.length; i++) {
        for (j = 0; j < coronicReturnList[i].place.length; j++) {
            // 마커의 위치에 대한 index
            let markerIndex = coronicReturnList[i].place[j].place;
            // 마커가 표시될 위치
            var markerPosition = new kakao.maps.LatLng(placeCoordinates[markerIndex].xpos, placeCoordinates[markerIndex].ypos);
            // 마커를 생성
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });
            // 마커가 지도 위에 보이도록 표시
            marker.setMap(map);
            //인포윈도우 내용
            var iwContent = '<div style="padding:5px;font-size:0.8rem;">' + coronicReturnList[i].year + '년 ' + coronicReturnList[i].month +
                '월' + coronicReturnList[i].date + '일 <br>' + coronicReturnList[i].place[j].hour + '시 ' + coronicReturnList[i].place[j].min + '분 ' +
                placeCoordinates[markerIndex].place + ' ' + coronicReturnList[i].identity + String.fromCharCode(asciiNum) + '</div>',
                iwPosition = new kakao.maps.LatLng(placeCoordinates[0].xpos, placeCoordinates[0].ypos); //인포윈도우 표시 위치
            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                position: iwPosition,
                content: iwContent
            });
            // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
            infowindow.open(map, marker);
        }
        asciiNum++;
    }
}

//-------------------------------------------------------------------------------------------------------------