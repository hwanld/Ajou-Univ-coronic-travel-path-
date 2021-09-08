//아주대 주요 건물 좌표 정보 배열
//placeCoordinates[index].xpos  //placeCoordinates[index].ypos
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
},
{
    xpos: "37.28346603769236",
    ypos: "127.04376965752795",
    place: "원천관"
    //원천관, placeCoordinates[13]
},
{
    xpos: "37.28223241318523",
    ypos: "127.04753804484503",
    place: "연암관"
    //연암관, placeCoordinates[14]
},
{
    xpos: "37.283363802252445 ",
    ypos: "127.04605872055546 ",
    place: "신학생회관"
    //신학생회관, placeCoordinates[15]
},
{
    xpos: "37.282316233282216",
    ypos: "127.04634280893518",
    place: "율곡관"
    //율곡관, placeCoordinates[16]
},
{
    xpos: "37.27922652346397",
    ypos: "127.04410265898133 ",
    place: "캠퍼스플라자"
    //캠퍼스플라자, placeCoordinates[17]
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
coronicList_push(2021, 6, 7, [{ place: 13, s_hour: 10, s_min: 30, e_hour: 12, e_min: 00 }, { place: 2, s_hour: 12, s_min: 00, e_hour: 12, e_min: 55 }], "재학생");
coronicList_push(2021, 6, 16, [{ place: 11, s_hour: 15, s_min: 00, e_hour: 16, e_min: 20 }], "재학생");
coronicList_push(2021, 6, 17, [{ place: 11, s_hour: 12, s_min: 00, e_hour: 16, e_min: 15 }], "재학생");
coronicList_push(2021, 6, 29, [{ place: 14, s_hour: 7, s_min: 00, e_hour: 17, e_min: 00 }, { place: 15, s_hour: 11, s_min: 00, e_hour: 11, e_min: 05 }], "대학원생");
coronicList_push(2021, 6, 30, [{ place: 14, s_hour: 7, s_min: 00, e_hour: 16, e_min: 30 }], "대학원생");
coronicList_push(2021, 7, 1, [{ place: 14, s_hour: 7, s_min: 00, e_hour: 13, e_min: 30 }], "대학원생");
coronicList_push(2021, 7, 2, [{ place: 14, s_hour: 7, s_min: 00, e_hour: 17, e_min: 00 }], "대학원생");
coronicList_push(2021, 7, 1, [{ place: 6, s_hour: 0, s_min: 00, e_hour: 24, e_min: 00 }], "대학원생");
coronicList_push(2021, 7, 2, [{ place: 6, s_hour: 0, s_min: 00, e_hour: 24, e_min: 00 }], "대학원생");
coronicList_push(2021, 7, 3, [{ place: 6, s_hour: 0, s_min: 00, e_hour: 24, e_min: 00 }], "대학원생");
coronicList_push(2021, 7, 8, [{ place: 1 }], "대학원생"); //ERROR!
coronicList_push(2021, 7, 12, [{ place: 1 }], "교수A 및 교직원"); //ERROR!
coronicList_push(2021, 7, 26, [{ place: 16, s_hour: 9, s_min: 00, e_hour: 10, e_min: 00 }, { place: 9, s_hour: 10, s_min: 00, e_hour: 14, e_min: 00 }], "외부 공사 근로자");
coronicList_push(2021, 7, 26, [{ place: 2, s_hour: 0, s_min: 00, e_hour: 24, e_min: 00 }], "자료실 면학장학생");
coronicList_push(2021, 7, 27, [{ place: 2, s_hour: 0, s_min: 00, e_hour: 24, e_min: 00 }], "자료실 면학장학생");
coronicList_push(2021, 7, 28, [{ place: 2, s_hour: 0, s_min: 00, e_hour: 24, e_min: 00 }], "자료실 면학장학생");
coronicList_push(2021, 7, 29, [{ place: 2, s_hour: 0, s_min: 00, e_hour: 24, e_min: 00 }], "자료실 면학장학생");
coronicList_push(2021, 8, 1, [{ place: 1 }], "재학생 2명"); //ERROR! //ERROR!(INDEX)
coronicList_push(2021, 7, 30, [{ place: 17, s_hour: 9, s_min: 20, e_hour: 17, e_min: 30 }], " 거주 재학생");
coronicList_push(2021, 8, 4, [{ place: 5, s_hour: 0, s_min: 00, e_hour: 24, e_min: 00 }], " 거주 재학생");
coronicList_push(2021, 8, 2, [{ place: 16, s_hour: 8, s_min: 20, e_hour: 16, e_min: 00 }, { place: 11, s_hour: 16, s_min: 00, e_hour: 16, e_min: 15 }], "교직원");
coronicList_push(2021, 8, 3, [{ place: 16, s_hour: 8, s_min: 20, e_hour: 11, e_min: 00 }], "교직원");
coronicList_push(2021, 8, 6, [{ place: 8, s_hour: 0, s_min: 00, e_hour: 24, e_min: 00 }], " 거주 재학생");
coronicList_push(2021, 8, 6, [{ place: 5, s_hour: 0, s_min: 00, e_hour: 24, e_min: 00 }], " 거주 재학생");//ERROR!
coronicList_push(2021, 8, 25, [{ place: 1 }], "재학생A, 대학원생A, 교직원"); //ERROR!
coronicList_push(2021, 8, 30, [{ place: 8, s_hour: 0, s_min: 00, e_hour: 24, e_min: 00 }], " 거주 재학생");
coronicList_push(2021, 8, 29, [{ place: 13, s_hour: 9, s_min: 00, e_hour: 18, e_min: 00 }], "재학생 2명");
coronicList_push(2021, 9, 8, [{ place: 1 }], "재학생");

//0 성호관  1 아주대    2 도서관    3 체육관    4 남제관    5 용지관    6 화홍관    7 광교관    8 국제학사
//9 팔달관  10 동관    11 다산관   12 산학원   13 원천관   14 연암관   15 신학     16 율곡관   17 캠퍼스플라자


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


let today = new Date();
document.getElementById("timeline-date-default").innerHTML = today.getDate();
document.getElementById("timeline-month-default").innerHTML = today.getMonth() + 1;
document.getElementById("timeline-year-default").innerHTML = today.getFullYear();

findCoronic(today.getFullYear(), today.getMonth() + 1, today.getDate());
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
    makeMarker(coronicReturnList, yearValue, monthValue, dateValue);
};

function makeMarker(coronicReturnList, yearValue, monthValue, dateValue) {
    //카카오맵 생성 및 마커 관련 API JS
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(placeCoordinates[1].xpos, placeCoordinates[1].ypos), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    //선택한 날짜에 확진자가 없는 경우
    if (coronicReturnList.length == 0) {
        let markerIndex = 1;
        var markerPosition = new kakao.maps.LatLng(placeCoordinates[markerIndex].xpos, placeCoordinates[markerIndex].ypos);
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
        var iwContent = '<div style="padding:5px;font-size:0.7rem;">' + yearValue + '년 ' + monthValue +
            '월' + dateValue + '일 <br> 교내 확진자 없음 </div>'

        var infowindow = new kakao.maps.InfoWindow({
            position: iwPosition,
            content: iwContent
        });
        infowindow.open(map, marker);
    }
    //선택한 날짜에 확진자가 있는 경우
    else {
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
                if (markerIndex == 1) {
                    var iwContent = '<div style="padding:5px;font-size:0.7rem;">' + coronicReturnList[i].year + '년 ' + coronicReturnList[i].month +
                        '월' + coronicReturnList[i].date + '일 <br>' + coronicReturnList[i].identity + String.fromCharCode(asciiNum) + '<br>교내 동선 해당없음 </div>'
                }
                else {
                    var iwContent = '<div style="padding:5px;font-size:0.7rem;">' + coronicReturnList[i].year + '년 ' + coronicReturnList[i].month +
                        '월' + coronicReturnList[i].date + '일 <br>' + coronicReturnList[i].place[j].s_hour + '시 ' + coronicReturnList[i].place[j].s_min + '분 ~ '
                        + coronicReturnList[i].place[j].e_hour + '시 ' + coronicReturnList[i].place[j].e_min + '분<br>' +
                        placeCoordinates[markerIndex].place + ' ' + coronicReturnList[i].identity + String.fromCharCode(asciiNum) + '</div>',
                        iwPosition = new kakao.maps.LatLng(placeCoordinates[0].xpos, placeCoordinates[0].ypos); //인포윈도우 표시 위치
                }
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
}

//-------------------------------------------------------------------------------------------------------------

const todayButton = document.getElementById('todayButton');
todayButton.addEventListener('click', todayButtonClicked);

function todayButtonClicked() {

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    document.getElementById("timeline-date-default").innerHTML = today.getDate();
    document.getElementById("timeline-month-default").innerHTML = today.getMonth() + 1;
    document.getElementById("timeline-year-default").innerHTML = today.getFullYear();

    findCoronic(year, month, date);
};


const yesterdayButton = document.getElementById('yesterdayButton');
yesterdayButton.addEventListener('click', yesterdayButtonClicked);

function yesterdayButtonClicked() {
    let today = new Date();
    let yesterday = new Date(today.setDate(today.getDate() - 1));
    let year = yesterday.getFullYear();
    let month = yesterday.getMonth() + 1;
    let date = yesterday.getDate();

    document.getElementById("timeline-date-default").innerHTML = yesterday.getDate();
    document.getElementById("timeline-month-default").innerHTML = yesterday.getMonth() + 1;
    document.getElementById("timeline-year-default").innerHTML = yesterday.getFullYear();

    findCoronic(year, month, date);
};

const beforeYesterdayButton = document.getElementById('beforeYesterdayButton');
beforeYesterdayButton.addEventListener('click', beforeYesterdayButtonClicked);

function beforeYesterdayButtonClicked() {
    let today = new Date();
    let beforeYesterday = new Date(today.setDate(today.getDate() - 2));
    let year = beforeYesterday.getFullYear();
    let month = beforeYesterday.getMonth() + 1;
    let date = beforeYesterday.getDate();

    document.getElementById("timeline-date-default").innerHTML = beforeYesterday.getDate();
    document.getElementById("timeline-month-default").innerHTML = beforeYesterday.getMonth() + 1;
    document.getElementById("timeline-year-default").innerHTML = beforeYesterday.getFullYear();

    findCoronic(year, month, date);
};

//--------------------------------------------------------------------------------------------------------------

