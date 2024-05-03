const drinks = ["五十嵐", "來買", "迷克夏", "珍煮母", "茶湯會", "五同號", "德政", "摳摳", "進發家", "有飲", "大名", "方最", "龜祭", "屋弄", "一沐日", "上雨林"];

document.getElementById("pickButton").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * drinks.length);
    const drink = drinks[randomIndex];
    document.getElementById("result").innerText = "建議你今天喝：" + drink;
});

