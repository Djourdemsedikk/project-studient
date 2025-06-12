let chart; // للاحتفاظ بالرسم الحالي

// استمع لجميع الخلايا التي تحتوي على الطالب
document.querySelectorAll(".student").forEach(cell => {
    cell.addEventListener("click", () => {
        const name = cell.dataset.name;
        const values = cell.dataset.values.split(",").map(Number);

        // عرض المربع
        document.getElementById("chartBox").style.display = "block";
        document.getElementById("studentName").textContent = "تقييم " + name;

        // إذا كان هناك رسم سابق، امسحه
        if (chart) {
            chart.destroy();
        }

        // إنشاء دائرة إلكترونية
        const ctx = document.getElementById("studentChart").getContext("2d");
        chart = new Chart(ctx, {
            type: "radar",
            data: {
                labels: ["السلوك", "الامتحان", "الشخصية", "الذكاء"],
                datasets: [{
                    label: "التقييم",
                    data: values,
                    fill: true,
                    backgroundColor: "rgba(0, 123, 255, 0.2)",
                    borderColor: "rgba(0, 123, 255, 1)",
                    pointBackgroundColor: "rgba(0, 123, 255, 1)"
                }]
            },
            options: {
                responsive: false,
                animation: {
                    duration: 1000,
                    easing: 'easeInOutCubic'
                },
                scales: {
                    r: {
                        angleLines: { display: true },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            }
        });
    });
});