let num = 1;
      let q = {
        1: { "title": "동물원, 놀이공원 갈 때 가능한 코스프레 범위는?", "type": "EI", "A": "골룸, 개코원숭이, 티라노사우르스, 요술램프 지니", "B": "토끼 머리띠, 원숭이 꼬리, 요정 가방, 공주 요술봉" },
        2: { "title": "친구가 갑자기 모르는 친구를 부른다고 전화기를 꺼내면?", "type": "EI", "A": "호우~ 인맥 늘려야지! 같이 놀자! 렛츠고우~ 뿌이뿌이뿌이잉", "B": "왓더? 동공지진과 함께 신발 끈 묶고 도망가기" },
        3: { "title": "모르는 사람에게 성대모사 가능?", "type": "EI", "A": "이선균 : 아아~ 봉골레 파스타 하나~", "B": "모기 목소리로 거부" },
        4: { "title": "12시간 공복으로 첫끼를 먹는데 친구가 '만약에~'라는 말을 꺼내면?", "type": "SN", "A": "친구 입에 물티슈 집어넣으며 자물쇠 채우기", "B": "뒷말을 상상하며 두눈 반짝거리기" },
        5: { "title": "자고 일어나면 내가 좋아하는 아이돌이 남편으로?", "type": "SN", "A": "절대 네버에버 그럴 일 없으니 침이나 닦고 잠이나 자기를", "B": "개이득~ 이미 그대와 함께할 미래를 그려나가는 중" },
        6: { "title": "알록달록한 꽃과 푸른 나무가 가득한 풍경을 볼 때", "type": "SN", "A": "꽃은 알록달록하고 나무는 초록색인디", "B": "마치 영화 속에 들어와 있는 나... 내가 바로 로맨스 영화 주인공?" },
        7: { "title": "지나가는 사람이 갑자기 눈물을 흘리는데...", "type": "TF", "A": "뭐야? 힐끔 보고 쌩 지나가기", "B": "무슨 일일까? 궁금한데... 휴지라도 건내볼까?" },
        8: { "title": "누가 날 싫어한다고 뒷담과 앞담을 동시에 하면?", "type": "TF", "A": "피식 썩소 날리면서 조용히 연장 챙기기", "B": "울분이 차오르면서 날 왜 싫어할까? 대체 왜? 100가지 생각하기" },
        9: { "title": "친구가 천하의 쓸데없는 부탁을 한다면?", "type": "TF", "A": "조용히 가운데 손가락 치켜올리기", "B": "거절하면 상처입지 않을까... 마음 졸이며 고개 끄덕이기" },
        10: { "title": "여행을 계획하는 시작 단계는?", "type": "JP", "A": "여행은 엑셀부터가 시작이지!", "B": "무슨? 여행은 당일에 검색이지~ 아, 황남빵 먹고싶다아" },
        11: { "title": "캘린더를 볼 때 나의 상황은?", "type": "JP", "A": "음... 한 달 스케줄이 꽉 차 있군... 이번주는 바쁘겠어", "B": "왓더? 오늘이 아빠 생일인데 왜 몰랐지? 급히 전화 돌리기" },
        12: { "title": "오늘이 과제 제출 날짜일 때", "type": "jp", "A": "과제는 이미 제출했고~ 이제 힙합댄스학원 갈 시간이네?", "B": "엥? 오늘까지 전공과제 제출이었어?!! 나 왜 모름? 에라이~ 그냥 내일 제출해야지~" },
      };

      let result = {
        "ISTJ": {"animal":"ISTJ - 악어", "explain": "당신은 세렝게티에서 같은 종족이 가만히 있는 걸 견딜 수 없어 매일 날카로운 이빨로 으드득으드득 잔소리를 하는 악어네요~ 웁스! 이런 걸 현실세계에서 틀딱이라고 하죠~ 딱딱딱딱 그럼, 화이팅!! 안녕~", "img": "./images/crocodile.png"},
        "ISFJ": {"animal":"ISFJ - 토끼", "explain": "당신은 세렝게티에서 절대 살아남을 수 없는 소심 그잡채 토끼네요~ 지금도 이 글을 인정할 수 없어서 입만 대빵 삐죽 내밀고 있죠? 웁스! 이런 걸 현실세계에서 극소심충이라고 하죠~ 인정해~ 인정하라고~ 그럼, 화이팅!! 안녕~", "img": "./images/rabbit.png"},
        "ISTP": {"animal":"ISTP - 치타", "explain": "당신은 세렝게티에서 인생 개썅마이웨이로 살아가는 공감능력 제로 노답 치타네요~ 웁스! 이런 걸 현실세계에서 충고를 해도 처듣지를 않는 정신승리 닝겐이라고 하죠~ 답이 없어~ 답이! 그럼, 화이팅!! 안녕~", "img": "./images/cheetah.png"},
        "ISFP": {"animal":"ISFP - 곰", "explain": "당신은 세렝게티에서 만사 귀찮음을 이기지 못하고 다른 동물들이 답답해서 한대 쥐어박고 싶은 멍텅구리 곰이네요~ 웁스! 이런 걸 현실세계에서 융통성 제로 콜라라고 하죠~ 근데 탄산이 없는?ㅋ 그럼, 화이팅!! 안녕~", "img": "./images/bear.png"},
        "INTJ": {"animal":"INTJ - 표범", "explain": "당신은 세렝게티에서 자신의 이익을 위해 사자와 호랑이를 이간질하는 간사한 표범이네요~ 그러다 둘에게 잡아먹히고 말텐데~ 웁스! 이런 걸 현실세계에서 주둥이만 나불거리는 정치질이라고 하죠~ 나불나불~ 그럼, 화이팅!! 안녕~", "img": "./images/leopard.png"},
        "INFJ": {"animal":"INFJ - 원숭이", "explain": "당신은 세렝게티에서 큰 동물 뒤에 비겁하게 숨어다니는 그림자 원숭이네요~ 어쩔 때 한 번, 지나가는 동료 원숭이에게 썩은 바나나를 강요해요~ 웁스! 이런 걸 현실세계에서 음침한 오타쿠라고 하죠~ 니코니코니~ 모에모에 뀽! 그럼, 화이팅!! 안녕~", "img": "./images/monkey.png"},
        "INTP": {"animal":"INTP - 라쿤", "explain": "당신은 세렝게티에서 잡아먹힐까 하루종일 쓸데없는 고민만 하고 있는 라쿤이네요~ 웁스! 이런 걸 현실세계에서 자기합리화 개쩌는 귀차니즘 AI휴먼이라고 할 수 있죠~ 사람인 척 하지마세요~ 그럼, 화이팅!! 안녕~", "img": "./images/raccoon.png"},
        "INFP": {"animal":"INFP - 다람쥐", "explain": "당신은 세렝게티에서 다양한 동물과 인사를 하고 지내지만, 존재감이 1도 없는 다람쥐네요~ 웁스! 이런 걸 현실세계에서 1년 365일 행복하지만 찐따라고 하죠~ 찐찐찐찐찐이야~ 그럼, 화이팅!! 안녕~", "img": "./images/squirrel.png"},
        "ESTJ": {"animal":"ESTJ - 호랑이", "explain": "당신은 세렝게티에서 가오잡기 위해 대장인 척 하다 결국, 사자에게 밟혀서 주르륵 피똥 싸는 호랑이네요~ 웁스! 이런 걸 현실세계에서 자의식 과잉 잘난체만 하는 젊은 꼰대라고 하죠~ 어? 기분 나쁘나요? 그래도 어쩔 수 없어요~ 그럼, 화이팅!! 안녕~", "img": "./images/tiger.png"},
        "ESFJ": {"animal":"ESFJ - 개구리", "explain": "당신은 세렝게티에서 말 많고 여기저기 참견하고 다니면서 일만 벌려놓는 개구리네요~ 웁스! 이런 걸 현실세계에서 남에게 지나친 관심을 가지는 오지라퍼 TMI 설명충이라고 하죠~ 개굴개굴 인정? 그럼, 화이팅!! 안녕~", "img": "./images/frog.png"},
        "ESTP": {"animal":"ESTP - 오랑우탄", "explain": "당신은 세렝게티에서 무조건 말싸움을 이겨야하고 이것저것 찔러보며 매사에 즉흥적인 오랑우탄이네요~ 웁스! 이런 걸 현실세계에서 인생은 노계획 욜로 폼생폼사라고 생각하는 월급 받자마자 탕진족이라고 하죠~ 탕진잼~ 그럼, 화이팅!! 안녕~", "img": "./images/orangutan.png"},
        "ESFP": {"animal":"ESFP - 독수리", "explain": "당신은 세렝게티에서 매일 파티를 열며 금사빠에 상대에게 끼를 부리며 자기주장이 강한 변덕스러운 독수리네요~ 웁스! 이런 걸 현실세계에서 밈과 사랑에 빠져버린 낙천적 개관종이라고 하죠~ 날아올라~ 그럼, 화이팅!! 안녕~", "img": "./images/eagle.png"},
        "ENTJ": {"animal":"ENTJ - 사자", "explain": "당신은 세렝게티에서 무조건 대장 노릇을 해야하는 최강 자존심과 말로 동료를 뚜드려패는 사자네요~ 웁스! 이런 걸 현실세계에서 감정 기복이 롤러코스터인데 정이라고는 1도 없는 나르시스 일중독자라고 하죠~ 월킹~ 킹받쥬~ 라이언킹~ 그럼, 화이팅!! 안녕~", "img": "./images/lion.png"},
        "ENFJ": {"animal":"ENFJ - 말", "explain": "당신은 세렝게티에서 머릿속에 잡생각이 많고 완벽한 척만 하는 열정과다 덤벙쟁이 말이네요~ 웁스! 이런 걸 현실세계에서 고집세게 일 벌려놓고 마무리 못해서 눈치보며 감정이 격하게 요동치는 우유부단 이상주의자라고 하죠~ 다그닥 이히힝~ 그럼, 화이팅!! 안녕~", "img": "./images/horse.png"},
        "ENTP": {"animal":"ENTP - 펜서", "explain": "당신은 세렝게티에서 공감 능력이 떨어지고 뭘 해도 이겨야 하며 시비걸기 좋아하고 종종 공격적인 퓨마네요~ 웁스! 이런 걸 현실세계에서 자아도취에 빠진 모순덩어리 + 뒤끝 심한 쿨병말기 상테라고 하죠~ 그대에게 시건방춤 추천~ 그럼, 화이팅!! 안녕~", "img": "./images/panther.png"},
        "ENFP": {"animal":"ENFP - 얼룩말", "explain": "당신은 세렝게티에서 가만히 있는 게 제일 힘들고 주의가 산만해서 자주 혼나는 아싸 중에 핵인싸 얼룩말이네요~ 웁스! 이런 걸 현실세계에서는 하고 싶은 건 다 해야하고 자유로운 영혼을 가진 대가리 꽃밭이라고 하죠~ 지금도 산만하게 움직이고 있네~ 그럼, 화이팅!! 안녕~", "img": "./images/zebra.png"}
      }

      function start() {
        $(".start").hide();
        $(".question").show();
        next();
      }

      $("#A").click(function () {
        let type = $("#type").val();
        let preValue = $("#" + type).val();
        $("#" + type).val(parseInt(preValue) + 1);
        next();
      });

      $("#B").click(function () {
        next();
      });

      function next() {
        if (num == 13) {
          $(".question").hide();
          $(".result").show();

          let mbti = "";
          ($("#EI").val() < 2) ? mbti+="I" : mbti+="E";
          ($("#SN").val() < 2) ? mbti+="N" : mbti+="S";
          ($("#TF").val() < 2) ? mbti+="F" : mbti+="T";
          ($("#JP").val() < 2) ? mbti+="P" : mbti+="J";
          $("#img").attr("src",result[mbti]["img"]);
          $("#animal").html(result[mbti]["animal"]);
          $("#explain").html(result[mbti]["explain"]);

        } else{
        $(".progress-bar").attr("style",'width: calc(100/12*'+num+'%)');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
        }       
      }