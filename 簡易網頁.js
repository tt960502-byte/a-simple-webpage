// 定義城市美食資料的物件 (主要的資料結構)
const cityData = {
    taipei: {
        name: "台北",
        foods: [
            {
                name: "鼎泰豐",
                desc: "以小籠包聞名全球，皮薄湯多、口感細膩，是台北的代表美食之一。"
            },
            {
                name: "永康牛肉麵",
                desc: "香濃湯頭、彈牙牛肉麵，是在地人最愛的經典風味。"
            }
        ]
    },
    taichung: {
        name: "台中",
        foods: [
            {
                name: "宮原眼科冰淇淋",
                desc: "融合復古建築與創意甜點的冰淇淋天堂。"
            },
            {
                name: "逢甲夜市小吃",
                desc: "全台最有名的夜市之一，炸雞排、珍奶、地瓜球應有盡有！"
            }
        ]
    },
    tainan: {
        name: "台南",
        foods: [
            {
                name: "牛肉湯",
                desc: "使用溫體牛現沖湯頭，肉質鮮嫩、湯頭香甜。"
            },
            {
                name: "蝦捲",
                desc: "炸得酥脆的蝦捲配上蒜蓉醬，是台南經典小吃之一。"
            }
        ]
    },
    kaohsiung: {
        name: "高雄",
        foods: [
            {
                name: "鴨肉珍",
                desc: "鴨肉飯與乾麵的完美結合，深受當地人喜愛。"
            },
            {
                name: "六合夜市",
                desc: "各式海鮮、滷味與甜品，是高雄夜生活的代表。"
            }
        ]
    }
};

const homePage = document.getElementById("home");
const cityPage = document.getElementById("cityPage");
const subtitle = document.getElementById("subtitle");

// 找出所有 .city 按鈕
document.querySelectorAll(".city").forEach(btn => {
    // 監聽使用者的點擊事件
    btn.addEventListener("click", () => {
        //取出 data-city（例如 "taipei"）
        const cityKey = btn.dataset.city; 
        //呼叫 showCity() 函式，顯示對應內容。
        showCity(cityKey); 
    });
});

// 根據傳入的城市 key 顯示該城市的美食頁面
function showCity(cityKey) {
    //根據城市代號（如 "tainan"）取出資料
    const city = cityData[cityKey];
    homePage.style.display = "none";  //隱藏首頁
    cityPage.style.display = "block"; //顯示城市內容
    subtitle.textContent = `${city.name}美食推薦 `; //改變上方副標題

// 建立 HTML 字串，用於填充 cityPage 區域
    let html = `
        <a href="#" class="back-btn" onclick="goHome()">← 回首頁</a>
        <h2>${city.name}必吃美食</h2>
    `;

// 迴圈遍歷該城市的美食清單
    city.foods.forEach(food => {
        // 將每個美食的 HTML 結構附加到 html 字串中
        html += `
        <div class="food">
            <h3>${food.name}</h3>
            <p>${food.desc}</p>
        </div>`;
    });

    // 將產生的 HTML 字串設定為 cityPage 區域的內容
    cityPage.innerHTML = html;
}

// 切換回首頁畫面的函式
function goHome() {
    homePage.style.display = "block";
    cityPage.style.display = "none";
    subtitle.textContent = "點選縣市看看有哪些必吃美食！";
}