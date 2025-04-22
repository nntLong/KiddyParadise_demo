// Function to format the current date
// Function to format the current date
function getCurrentDate() {
    var today = new Date();
    var weekday = today.toLocaleDateString('vi-VN', { weekday: 'long' });
    var day = today.getDate();
    var month = today.toLocaleDateString('vi-VN', { month: 'long' });
    var year = today.getFullYear();
    
    // Return full date and time
    return `${weekday}, ${day} ${month} ${year}`;
}

// Update date on page load
window.onload = function () {
    var currentDate = getCurrentDate();
    document.getElementById("dateNow").textContent = currentDate;
};

// Countdown function
document.addEventListener('DOMContentLoaded', function () {
    var countdownElement = document.getElementById('countdown');
    var progressBar = document.querySelector('.progress-bar');

    // Lấy thời gian hiện tại
    var currentTime = new Date();

    // Thiết lập thời gian bắt đầu đếm ngược đến giờ mới
    var targetTime = new Date(currentTime);
    targetTime.setHours(currentTime.getHours() + 1, 0, 0, 0); // Thiết lập giờ mới là giờ tiếp theo, phút và giây là 0

    // Function to update countdown
    function updateCountdown() {
        var now = new Date();
        var timeRemaining = targetTime - now;

        // If time is over, set progress bar to 100% and show message
        if (timeRemaining <= 0) {
            progressBar.style.width = "100%";
            countdownElement.innerHTML = `<i class="fas fa-bolt"></i> Thời gian đã hết!`;
        } else {
            // Calculate hours, minutes, seconds left
            var hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Update countdown display
            countdownElement.innerHTML = `
                <i class="fas fa-bolt"></i>
                <span>Thời gian còn lại:</span>
                <span class="time">${hours} giờ</span>
                <span class="time">${minutes} phút</span>
                <span class="time">${seconds} giây</span>
            `;

            // Calculate progress bar percentage
            var progress = (timeRemaining / (60 * 60 * 1000)) * 100; // Based on hours
            progressBar.style.width = `${100 - progress}%`;
        }
    }

    // Initial countdown update
    updateCountdown();

    // Update countdown every second
    setInterval(updateCountdown, 1000);
});





var itemsPerPage = 9;
var productList = [

    // Đầm
    {
        name: "Đầm váy thô ngắn tay - Mẫu 1",
        image: "../images/Đầm/Dam1.png",
        category: "Đầm",
        description: "Đầm thô ngắn tay cho bé gái, chất vải mềm, thoáng mát, thiết kế dễ thương.",
        price: 300000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đầm váy thô ngắn tay - Mẫu 2",
        image: "../images/Đầm/Dam2.png",
        category: "Đầm",
        description: "Chất vải mềm, thoáng mát, thiết kế đơn giản mà dễ thương.",
        price: 300000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đầm váy thô ngắn tay - Mẫu 3",
        image: "../images/Đầm/Dam3.png",
        category: "Đầm",
        description: "Chân váy xòe nhẹ, thiết kế sát nách, dễ thương.",
        price: 300000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đầm váy voan ngắn tay - Mẫu 4",
        image: "../images/Đầm/Dam4.png",
        category: "Đầm",
        description: "Kiểu dáng điệu đà, màu sắc đáng yêu",
        price: 300000,
        discountPercent: 30,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đầm váy voan ngắn tay - Mẫu 5",
        image: "../images/Đầm/Dam5.png",
        category: "Đầm",
        description: "Đầm thô ngắn tay thêu hoa, đáng yêu, kết hợp với màu sắc tươi sáng, hài hòa.",
        price: 250000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đầm váy thô ngắn tay - Mẫu 6",
        image: "../images/Đầm/Dam6.png",    
        category: "Đầm",
        description: "Kiểu dáng điệu đà, màu sắc hồng, trắng đáng yêu.",
        price: 300000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đầm váy thô ngắn tay - Mẫu 7",
        image: "../images/Đầm/Dam7.png",
        category: "Đầm",
        description: "Họa tiết hoa nhí vintage, đáng yêu, kết hợp với màu sắc tươi sáng, hài hòa.",
        price: 300000,
        discountPercent: 30,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đầm váy thô ngắn tay - Mẫu 8",
        image: "../images/Đầm/Dam8.png",
        category: "Đầm",
        description: "Họa tiết kẻ caro đáng yêu, màu sắc tươi sáng nổi bật với nơ đính hai bên.",
        price: 300000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đầm váy thô ngắn tay - Mẫu 9",
        image: "../images/Đầm/Dam9.png",
        category: "Đầm",
        description: "form váy vừa vặn, công chúa nhỏ có thể mặc đi học, đi tiệc hay dạo phố xinh xắn.",
        price: 300000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },

    // Đồ bộ bé gái
    {
        name: "Đồ bộ thun ngắn tay Gấu dâu Lotso",
        image: "../images/DB_begai/DBG_losto.png",
        category: "Đồ bộ bé gái",
        description: "Đồ bộ thun bé gái với chất liệu co giãn, thấm hút tốt và thoải mái cho bé vận động suốt cả ngày.",
        price: 200000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Set bộ áo váy thô ngắn tay",
        image: "../images/DB_begai/DBG_no.png",
        category: "Đồ bộ bé gái",
        description: "Set áo thun và chân váy in hình nơ hot trend sắc nét, đáng yêu.",
        price: 300000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đồ Bộ thun ngắn tay Baby Three",
        image: "../images/DB_begai/DBG_3.png",
        category: "Đồ bộ bé gái",
        description: "Đồ bộ thun bé gái với chất liệu co giãn, thấm hút tốt và thoải mái.",
        price: 200000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Bộ thun ngắn tay Modal",
        image: "../images/DB_begai/DBG_4.png",
        category: "Đồ bộ bé gái",
        description: "Đồ bộ thun bé gái với chất liệu co giãn, đáng yêu.",
        price: 200000,
        discountPercent: 15,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đồ bộ pijama ngắn tay",
        image: "../images/DB_begai/DBG_5.png",
        category: "Đồ bộ bé gái",
        description: "Đồ bộ mặc nhà pijama ngắn tay in hình các hoạt tiết gấu, thỏ sắc nét, đáng yêu.",
        price: 200000,
        discountPercent: 30,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đồ bộ thun ngắn tay Labubu",
        image: "../images/DB_begai/DBG_6.png",
        category: "Đồ bộ bé gái",
        description: "Đồ bộ thun ngắn tay in hình Labubu, hình in to sắc nét, đáng yêu.",
        price: 250000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đồ bộ thun ngắn tay Stitch",
        image: "../images/DB_begai/DBG_7.png",
        category: "Đồ bộ bé gái",
        description: "Đồ bộ mặc nhà, đi học in hình nhân vật Stitch bản quyền hợp tác Quốc Tế.",
        price: 200000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đồ bộ thun dài tay",
        image: "../images/DB_begai/DBG_8.png",
        category: "Đồ bộ bé gái",
        description: "Bộ dài Minnie màu đỏ, màu tím xinh xắn với khả năng giữ ấm ngày gió về.",
        price: 250000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đồ bộ thun dài tay",
        image: "../images/DB_begai/DBG_9.png",
        category: "Đồ bộ bé gái",
        description: "Bộ dài Minnie màu đỏ, màu tím xanh xắn với khả năng giữ ấm ngày gió về",
        price: 250000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },

// Đồ bộ bé trai
    {
        name: "Đồ bộ thun ngắn tay",
        image: "../images/DB_betrai/DBT_3.png",
        category: "Đồ bộ bé trai",
        description: "Đồ bộ thun ngắn tay in hình sắc nét, đáng yêu và màu sắc hài hòa. ",
        price: 200000,
        discountPercent: 15,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đồ bộ thun ngắn tay Spider-Man",
        image: "../images/DB_betrai/DB_spiderMan.png",
        category: "Đồ bộ bé trai",
        description: "Đồ bộ thun ngắn tay với hình Spider-Man đầy phong cách.",
        price: 300000,
        discountPercent: 30,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đồ bộ thun ngắn tay",
        image: "../images/DB_betrai/DBT_4.png",
        category: "Đồ bộ bé trai",
        description: "Đồ bộ thun ngắn tay họa tiết biển cả dễ thương.",
        price: 200000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đồ bộ thun ngắn tay Spider-Man - Mẫu 2",
        image: "../images/DB_betrai/DB_spiderMan2.png",
        category: "Đồ bộ bé trai",
        description: "Đồ bộ thun ngắn tay với hình Spider-Man đầy phong cách.",
        price: 300000,
        discountPercent: 30,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đồ bộ thun ngắn tay Stitch",
        image: "../images/DB_betrai/DBT_5.png",
        category: "Đồ bộ bé trai",
        description: "Đồ bộ thun ngắn tay với hình Stitch đáng yêu.",
        price: 200000,
        discountPercent: 25,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đồ bộ thun ngắn tay xe hơi",
        image: "../images/DB_betrai/DBT_6.png",
        category: "Đồ bộ bé trai",
        description: "Đồ bộ thun ngắn tay với hình xe hoạt hình đáng yêu, nhưng đầy phong cách.",
        price: 200000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đồ bộ thun ngắn tay mặc nhà",
        image: "../images/DB_betrai/DBT_7.png",
        category: "Đồ bộ bé trai",
        description: "Đồ bộ thun ngắn tay đáng yêu và màu sắc hài hòa, phù hợp cho bé diện nhà hay đi ngủ..",
        price: 200000,
        discountPercent: 15,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Đồ bộ thun ngắn tay mặc nhà",
        image: "../images/DB_betrai/DBT_8.png",
        category: "Đồ bộ bé trai",
        description: "Đồ bộ thun ngắn tay đáng yêu và màu sắc hài hòa, phù hợp cho bé diện nhà hay đi ngủ.",
        price: 210000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },

   // Áo bé gái
    {
        name: "Áo thun ngắn tay",
        image: "../images/ao_begai/Ao_G_1.png",
        category: "Áo bé gái",
        description: "Áo thun ngắn tay, màu sác dễ thương.",
        price: 100000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Áo thun ngắn tay Baby three",
        image: "../images/ao_begai/Ao_G_2.png",
        category: "Áo bé gái",
        description: "Áo thun ngắn tay, có hình Baby three đáng yêu.",
        price: 100000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Áo thun ngắn tay Elsa",
        image: "../images/ao_begai/Ao_G_3.png",
        category: "Áo bé gái",
        description: "Áo thun ngắn tay, có hình Else đáng yêu.",
        price: 150000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Áo thun ngắn tay Stitch",
        image: "../images/ao_begai/Ao_G_4.png",
        category: "Áo bé gái",
        description: "Áo thun ngắn tay, có hình Stitch đáng yêu.",
        price: 150000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Áo thun ngắn tay in bản đồ Việt Nam",
        image: "../images/ao_begai/Ao_G_5.png",
        category: "Áo bé gái",
        description: "Áo thun ngắn tay in bản đồ Việt Nam, màu sác đáng yêu, nhí nhảnh.",
        price: 100000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Áo thun ngắn tay",
        image: "../images/ao_begai/Ao_G_7.png",
        category: "Áo bé gái",
        description: "Áo thun ngắn tay họa tiết Capypara, màu sác đáng yêu, nhí nhảnh.",
        price: 100000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất lượng vải: 100% cotton",
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },

// Áo thun bé trai
    {
        name: "Ao thun ngắn tay",
        image: "../images/ao_betrai/Ao_T_1.png",
        category: "Áo bé trai",
        description: "Áo thun ngắn tay kiểu dáng dễ phối nhiều outfit lịch sự cho bé diện đi học, đi tiệc.",
        price: 100000,
        discountPercent: 10,    
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Áo thun polo ngắn tay",
        image: "../images/ao_betrai/Ao_T_2.png",
        category: "Áo bé trai",
        description: "Áo thun ngắn tay họa tiết khủng long, hình in sắc nét và màu sắc hài hòa.",
        price: 150000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Áo thun ngắn tay anh hùng Avengers Marvel",
        image: "../images/ao_betrai/Ao_T_3.png",
        category: "Áo bé trai",
        description: "Áo thun ngắn tay in hình anh hùng Avengers Marvel vô cùng phong cách.",
        price: 100000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Áo thun ngắn tay phi hành",
        image: "../images/ao_betrai/Ao_T_4.png",
        category: "Áo bé trai",
        description: "Áo thun ngắn tay in hình phi hành gia cá tính, năng động, hình in sắc nét và màu sắc hài hòa",
        price: 100000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Áo thun polo ngắn tay",
        image: "../images/ao_betrai/Ao_T_5.png",
        category: "Áo bé trai",
        description: "Kiểu dáng dễ phối nhiều outfit lịch sự cho bé diện đi học, đi tiệc hay dạo phố.",
        price: 150000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Áo thun polo ngắn tay",
        image: "../images/ao_betrai/Ao_T_6.png",
        category: "Áo bé trai",
        description: "Áo thun ngắn tay họa tiết khủng long, hình in sắc nét và màu sắc hài hòa.",
        price: 150000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Áo thun ngắn tay anh hùng Avengers Marvel",
        image: "../images/ao_betrai/Ao_T_7.png",
        category: "Áo bé trai",
        description: "Áo thun ngắn tay in hình anh hùng Avengers Marvel vô cùng phong cách.",
        price: 150000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },  


    // quần bé gái
    {
        name: "Quần short thô",
        image: "../images/quan_begai/quan_G_1.png",
        category: "Quần bé gái",
        description: "Phong cách thời thượng, thanh lịch, tinh tế với những kiểu dáng đang thịnh hành.",
        price: 150000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Quần short thô",
        image: "../images/quan_begai/quan_G_2.png",
        category: "Quần bé gái",
        description: "có thể dễ dàng kết hợp với nhiều áo thun để cho bé đi học, dạo phố, thể thao và hơn thế nữa.",
        price: 150000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Quần short thô",
        image: "../images/quan_begai/quan_G_3.png",
        category: "Quần bé gái",
        description: "Phong cách thời thượng, thanh lịch, tinh tế với những kiểu dáng đang thịnh hành.",
        price: 150000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Quần legging lửng Kuromi",
        image: "../images/quan_begai/quan_G_4.png",
        category: "Quần bé gái",
        description: "có thể dễ dàng kết hợp với nhiều áo thun để cho bé đi học, dạo phố, thể thao và hơn thế nữa.",
        price: 100000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Quần jean dài",
        image: "../images/quan_begai/quan_G_5.png",
        category: "Quần bé gái",
        description: "Quần jean dài bé gái kiểu dáng dáng sành điệu, màu sắc trung tính dễ phối đồ.",
        price: 200000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Quần yếm jean",
        image: "../images/quan_begai/quan_G_6.png",
        category: "Quần bé gái",
        description: "Quần yếm bé gái năng động, đáng yêu với họa tiết trái tim, màu sắc dễ phối nhiều trang phục dễ thương cho bé.",
        price: 200000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Quần short thô",
        image: "../images/quan_begai/quan_G_7.png",
        category: "Quần bé gái",
        description: "Phong cách thời thượng, thanh lịch, tinh tế với những kiểu dáng đang thịnh hành.",
        price: 100000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Quần jean dài",
        image: "../images/quan_begai/quan_G_8.png",
        category: "Quần bé gái",
        description: "Quần jean dài bé gái kiểu dáng dáng sành điệu, màu sắc trung tính dễ phối đồ.",
        price: 200000,
        discountPercent: 5,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Quần dài legging",
        image: "../images/quan_begai/quan_G_9.png",
        category: "Quần bé gái",
        description: "MQuần dài legging bé gái kiểu dáng sành điệu, màu sắc dễ phối đồ đa dạng outfits cho các bé.",
        price: 150000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },

    // quần bé trai
    {
        name: "Quần short kaki Mickey",
        image: "../images/quan_betrai/quan_T_1.png",
        category: "Quần bé trai",
        description: "Quần short kaki đứng form, lưng chun co giãn thoải mái kèm 2 túi phía trước tiện lợi cho bé.",
        price: 150000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Quần short thô",
        image: "../images/quan_betrai/quan_T_2.png",
        category: "Quần bé trai",
        description: " Quần short thô, bo chun để điều chỉnh với dòng chữ hiện đại, bắt mắt.",
        price: 150000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Quần short kaki Spider-Man",
        image: "../images/quan_betrai/quan_T_3.png",
        category: "Quần bé trai",
        description: "KQuần short kaki đứng form, lưng chun co giãn thoải mái kèm 2 túi phía trước tiện lợi cho bé.",
        price: 200000,
        discountPercent: 15,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Quần kaki dài",
        image: "../images/quan_betrai/quan_T_4.png",
        category: "Quần bé trai",
        description: "Kiểu dáng dễ phối, lịch sự cho bé diện đi học, đi tiệc hay đi chơi.",
        price: 200000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Quần short kaki túi hộp",
        image: "../images/quan_betrai/quan_T_5.png",
        category: "Quần bé trai",
        description: "Quần short kaki đứng form, lưng chun co giãn thoải mái kèm 2 túi 2 bên tiện lợi cho bé.",
        price: 150000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Quần nỉ dài",
        image: "../images/quan_betrai/quan_T_6.png",
        category: "Quần bé trai",
        description: "kiểu dáng thời trang và màu sắc phong phú, giúp các bé tự tin và nổi bật trong mọi hoàn cảnh.",
        price: 150000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
    {
        name: "Quần sooc thô",
        image: "../images/quan_betrai/quan_T_7.png",
        category: "Quần bé trai",
        description: "Kính mũ bảo hiểm sang trọng, đem lại phong cách cá tính.",
        price: 150000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);

        },
        details: [
            "- Size S: 23 - 26kg",
            "- Size M: 27 - 31kg",
            "- Size L: 33 - 36kg",
            "- Size XL: 38 - 40kg"
        ]
    },
];



//hien thi san pham
function displayProducts(productList, categoryName) {
    var itemsPerPage = 12;
    var currentPage = 1;

    // Lọc danh sách sản phẩm theo danh mục nếu categoryName không phải là 'all'
    var filteredProducts = categoryName === 'all' ? productList : productList.filter(function (product) {
        return product.category === categoryName;
    });

    // Function to render products based on pagination
    function renderProducts(page) {
        $('#productList').empty();

        var startIndex = (page - 1) * itemsPerPage;
        var endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);
        var productListHtml = '';

        for (var i = startIndex; i < endIndex; i++) {
            var product = filteredProducts[i];
            var hasDiscount = product.discountPercent > 0;

            var productHtml = `
                <div class="col-md-4 col-lg-3 col-6 my-1 px-1">
                    <div class="product-card" data-product='${JSON.stringify(product)}'>
                        <img src="${product.image}" alt="${product.name}" class="product-image img-fluid">
                        <div class="product-content d-flex flex-column">
                            <div class="product-title">${product.name}</div>
                            <div class="product-description">${product.description}</div>
                            <div class="product-price-container">
                                ${hasDiscount ? `<div class="product-discount">${product.price.toLocaleString()}₫</div>` : ''}
                                <div class="product-price">${product.discountPrice.toLocaleString()}₫</div>
                            </div>
                        </div>
                        <div class="btn-discount ${hasDiscount ? '' : 'd-none'}">${hasDiscount ? `-${product.discountPercent.toLocaleString()}%` : ''}</div>
                    </div>
                </div>
            `;

            productListHtml += productHtml;
        }

        $('#productList').html(productListHtml);

        // Create pagination
        var totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        $('#pagination').empty();
        for (var i = 1; i <= totalPages; i++) {
            var activeClass = i === currentPage ? 'active' : '';
            $('#pagination').append(`
                <li class="page-item ${activeClass}"><a class="page-link" href="#" data-page="${i}">${i}</a></li>
            `);
        }
    }

    // Display initial products
    renderProducts(currentPage);

    // Handle pagination click
    $(document).on('click', '#pagination .page-link', function (e) {
        e.preventDefault();
        currentPage = $(this).data('page');
        renderProducts(currentPage);
        // Scroll to top of the page
        $('html, body').animate({ scrollTop: $('#top').offset().top }, 'slow');
    });

}





// Khai báo hàm khi tài liệu đã sẵn sàng hiển thị modal
$(document).ready(function () {
    // Sự kiện click vào .product-card
    $(document).on('click', '.product-card', function () {
        var product = $(this).data('product');
        showModal(product);
    });

    function showModal(product) {
        $('#productModalLabel').text(product.name);

        var modalContent = `
            <div class="row">
                <div class="col-md-6 col-lg-4 col-12">
                    <div class="zoomImg p-4">
                        <img src="${product.image}" alt="${product.name}" class="img-fluid">
                    </div>
                </div>
                <div class="col-md-6 col-lg-8 col-12">
                    <p><strong>Loại sản phẩm:</strong> ${product.category}</p>
                    <p><strong>Mô tả:</strong> ${product.description}</p>
                
        `;

        console.log(product.discountPercent + 'và' + product.discountPrice);

        // Kiểm tra và hiển thị chi tiết sản phẩm nếu có
        if (product.details && product.details.length > 0) {
            modalContent += `<p><strong>Chi tiết sản phẩm:</strong></p>`;
            modalContent += `<ul style="list-style:none">`;
            product.details.forEach(detail => {
                modalContent += `<li>${detail}</li>`;
            });
            modalContent += `</ul>`;
        }


        if (product.discountPercent > 0) {
            modalContent += `
            <div class="product-price-container">
                <div class="product-discount"><strong>Giá gốc:</strong>  ${product.price.toLocaleString()}₫</div>
                <div class="product-price"><strong>Giá khuyến mãi:</strong> ${product.discountPrice.toLocaleString()}₫</div>
                <div class="btn-discount"><strong>Giảm giá:</strong> ${product.discountPercent}%</div>
           </div>
            `;
        } else {
            // Kiểm tra và xử lý phần trăm giảm giá
            if (!isNaN(product.discountPercent)) {
                modalContent += `
                        <div class="product-price-container">
                            <div class="product-price "><strong>Giá bán: </strong> ${product.discountPrice.toLocaleString()} ₫</div>
                        </div>
                `;
            }
        }


        modalContent += `
            <div class="input-group mt-3">
                <span class="input-group-btn">
                    <button type="button" class="btn btn-outline-secondary btn-minus">-</button>
                </span>
                <input type="number" class="form-control text-center product-quantity" value="1">
                <span class="input-group-btn">
                    <button type="button" class="btn btn-outline-secondary btn-plus">+</button>
                </span>
            </div>
            <div class="d-flex flex-column flex-md-row  justify-content-between">
            <button class="btn btn-info  btn-add-to-cart m-2 w-100" data-name="${product.name}" data-price="${product.discountPrice}"> <i class="fa-solid fa-cart-plus text-light"></i> Thêm vào giỏ hàng</button>
            <button class="btn btn-warning  btn-buy-now m-2 w-100" data-name="${product.name}" data-price="${product.discountPrice}">Mua ngay</button>
            </div>
        </div>
        </div>`;

        $('#productModalBody').html(modalContent);
        $('#productModal').modal('show');


        // xử lý các nút bấm
        // Xử lý sự kiện click nút thêm số lượng
        $(document).on('click', '.btn-plus', function () {
            var input = $(this).closest('.input-group').find('input.product-quantity');
            var value = parseInt(input.val());
            input.val(value + 1);
        });

        // Xử lý sự kiện click nút trừ số lượng
        $(document).on('click', '.btn-minus', function () {
            var input = $(this).closest('.input-group').find('input.product-quantity');
            var value = parseInt(input.val());
            if (value > 1) {
                input.val(value - 1);
            }
        });





        //demo gpt

        function displayAddToCartAlert(name, discountPrice, quantity) {
            var alertHtml = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>${quantity} x ${name}</strong> đã được thêm vào giỏ hàng với đơn giá ${discountPrice.toLocaleString()} VND.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `;

            // Hiển thị thông báo trong phần tử có id là 'alertContainer'
            $('#alertContainer').html(alertHtml);
        }



        // Xử lý sự kiện thêm sản phẩm vào giỏ hàng trong modal
        $(document).on('click', '#productModal .btn-add-to-cart', function () {
            // Lấy thông tin sản phẩm từ thuộc tính data-product trong modal

            // Lấy thông tin sản phẩm
            var name = product.name;
            var price = product.price; // Sử dụng giá khuyến mãi
            var discountPrice = product.discountPrice;
            var discountPercent = product.discountPercent;
            var image = product.image;
            var quantity = parseInt($('#productModal .product-quantity').val());

            // Thêm sản phẩm vào giỏ hàng
            addToCart(name, price, discountPrice, discountPercent, image, quantity);

            // Hiển thị thông báo khi sản phẩm được thêm vào giỏ hàng
            displayAddToCartAlert(name, discountPrice, quantity);

            // Cập nhật dropdown menu giỏ hàng
            updateCartDropdown();
        });




        // // Hàm cập nhật dropdown menu giỏ hàng
        // function updateCartDropdown() {
        //     // Lấy giỏ hàng từ localStorage
        //     var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        //     // Lấy phần tử chứa danh sách sản phẩm trong giỏ hàng
        //     var cartItemsContainer = $('.cart-items-container');

        //     // Kiểm tra nếu giỏ hàng rỗng
        //     if (cartItems.length === 0) {
        //         // Ẩn danh sách sản phẩm trong giỏ hàng và hiển thị thông báo "Chưa có sản phẩm nào trong giỏ hàng"
        //         cartItemsContainer.hide();
        //         $('.empty-cart-message').show();
        //     } else {
        //         // Hiển thị danh sách sản phẩm trong giỏ hàng và ẩn thông báo
        //         $('.empty-cart-message').hide();
        //         cartItemsContainer.empty(); // Xóa nội dung hiện tại của danh sách sản phẩm trong giỏ hàng

        //         // Duyệt qua từng sản phẩm trong giỏ hàng và hiển thị
        //         cartItems.forEach(function (item) {
        //             var productHtml = `
        //         <div class="dropdown-item">
        //             <div class="d-flex justify-content-between align-items-center">
        //                 <div class="d-flex align-items-center">
        //                     <img src="${item.image}" alt="${item.name}" class="mr-3" style="width: 50px;">
        //                     <div>
        //                         <div class="font-weight-bold">${item.name}</div>
        //                         <div>${item.quantity} x ${item.discountPrice.toLocaleString()} VND</div>
        //                     </div>
        //                 </div>
        //                 <button class="btn btn-danger btn-sm remove-from-cart" data-name="${item.name}">Xóa</button>
        //             </div>
        //         </div>
        //     `;
        //             // Thêm sản phẩm vào danh sách sản phẩm trong giỏ hàng
        //             cartItemsContainer.append(productHtml);
        //         });
        //         // Hiển thị danh sách sản phẩm trong giỏ hàng
        //         cartItemsContainer.show();
        //     }
        //     // Thêm sự kiện cho nút "Xóa" để loại bỏ sản phẩm khỏi giỏ hàng khi nhấn
        //     // Thay đổi phần gán sự kiện cho nút "Xóa" trong hàm updateCartDropdown()
        //     $('body').on('click', '.remove-from-cart', function () {
        //         var productName = $(this).data('name');
        //         removeFromCart(productName);
        //     });



        //     // Cập nhật số lượng sản phẩm trong biểu tượng giỏ hàng
        //     updateCartIcon(cartItems.length);
        // }

        // $(document).ready(function () {
        //     updateCartDropdown();
        // });


        // // Hàm loại bỏ sản phẩm khỏi giỏ hàng
        // function removeFromCart(productName) {
        //     // Lấy giỏ hàng từ localStorage
        //     var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        //     // Lọc sản phẩm có tên trùng khớp với tên được chọn để loại bỏ
        //     var updatedCartItems = cartItems.filter(function (item) {
        //         return item.name !== productName;
        //     });

        //     // Lưu giỏ hàng đã được cập nhật vào localStorage
        //     localStorage.setItem('cart', JSON.stringify(updatedCartItems));

        //     // Cập nhật dropdown menu giỏ hàng
        //     updateCartDropdown();
        // }



        // function updateCartIcon(numItems) {
        //     // Cập nhật số lượng sản phẩm trong biểu tượng giỏ hàng
        //     $('.num-item-in-cart').text(numItems);
        // }




        // Function to add product to cart
        function addToCart(name, price, discountPrice, discountPercent, image, quantity) {
            var product = {
                name: name,
                price: price,
                discountPrice: discountPrice,
                discountPercent: discountPercent,
                image: image,
                quantity: quantity
            };

            // Lấy giỏ hàng từ localStorage
            var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

            // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
            var existingProductIndex = cartItems.findIndex(item => item.name === name);
            if (existingProductIndex !== -1) {
                // Nếu sản phẩm đã tồn tại trong giỏ hàng, chỉ cập nhật số lượng
                cartItems[existingProductIndex].quantity += quantity;
            } else {
                // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm vào giỏ hàng
                cartItems.push(product);
            }

            // Lưu giỏ hàng vào localStorage
            localStorage.setItem('cart', JSON.stringify(cartItems));

            // Cập nhật số lượng sản phẩm trong biểu tượng giỏ hàng
            updateCartIcon(cartItems.length);

            // Log để kiểm tra
            console.log('Đã thêm sản phẩm vào giỏ hàng:', product);
        }



        // Handle "Mua ngay" button click
        $(document).on('click', '.btn-buy-now', function () {
            // Lấy thông tin sản phẩm
            var name = product.name;
            var price = product.price; // Sử dụng giá khuyến mãi
            var discountPrice = product.discountPrice;
            var discountPercent = product.discountPercent;
            var image = product.image;
            var quantity = parseInt($('#productModal .product-quantity').val());

            // Thêm sản phẩm vào giỏ hàng
            addToCart(name, price, discountPrice, discountPercent, image, quantity);
            displayCheckoutRedirectAlert(name, discountPrice, quantity);
            updateCartIcon(cartItems.length);

            // Log để kiểm tra
            console.log('Đã thêm sản phẩm vào giỏ hàng:', product);
            console.log('Đang mua sản phẩm và chuyển hướng sang thanh toán');

        });

        // Hàm hiển thị thông báo khi mua ngay và chuyển hướng sang trang thanh toán
        function displayCheckoutRedirectAlert(name, discountPrice, quantity) {
            var total = discountPrice * quantity; // Tính tổng giá
            var alertHtml = `
                <div class="alert alert-primary alert-dismissible fade show" role="alert">
                    <strong>${quantity} x ${name}</strong> đã được mua với giá ${discountPrice.toLocaleString()} VND.
                    <br>
                    <strong>Total: ${total.toLocaleString()} VND</strong>
                    <div class="spinner-border"></div>
                    <p> Đang chuyển hướng sang trang thanh toán ...</p>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `;

           
          
            // Hiển thị thông báo trong phần tử có id là 'alertContainer'
            $('#alertContainer').html(alertHtml);

            // Tự động đóng thông báo sau 10 giây
            setTimeout(function () {
                $('.alert').alert('close');

                // Chuyển hướng người dùng sang trang thanh toán sau 1 giây ...
                window.location.href = '../html/gio-hang.html'; // Thay 'trang-thanh-toan.html' bằng đường dẫn đến trang thanh toán của bạn
            }, 1000); // 1 giây
        }

    }

});


$(document).ready(function () {
    var images = $('.image-container img');
    var currentIndex = 0;

    function showImage(index) {
        images.removeClass('active');
        images.eq(index).addClass('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Tự động chuyển ảnh sau mỗi 5 giây
    setInterval(nextImage, 5000);
});


$(document).ready(function () {
    // Lấy dữ liệu thành viên từ localStorage nếu có, nếu không thì tạo dữ liệu mặc định
    var users = JSON.parse(localStorage.getItem('users')) || [
        { username: 'minhat05', password: btoa('Nhat761312'), fullName: 'Khưu Minh Nhật', email: 'khuuminhnhat@gmail.com', phone: '123456789', dob: '25/02/2005', address: 'Đại học công nghiệp thành phố HCM' },
        { username: 'ngothanhlong123', password: btoa('ngothanhlong123'), fullName: 'Ngô Thành Long', email: 'ngothanhlong@gmail.com', phone: '123456789', dob: '01/01/2005', address: 'Đại học công nghiệp thành phố HCM' }
    ];

    // Hiển thị danh sách thành viên (nếu cần)
    function displayMembers() {
      var memberTable = $('#memberList');
      memberTable.empty();
      users.forEach(function(user) {
        var row = $('<tr>');
        row.append('<td>' + user.fullName + '</td>');
        row.append('<td>' + user.username + '</td>');
        row.append('<td>' + user.email + '</td>');
        row.append('<td>' + user.phone + '</td>');
        row.append('<td>' + user.dob + '</td>');
        row.append('<td>' + user.address + '</td>');
        memberTable.append(row);
      });
    }

    displayMembers();

    $('#registerForm').submit(function (e) {
        e.preventDefault();
        console.log('Đã bấm đăng ký');  // Kiểm tra sự kiện đã được kích hoạt
    
        if (this.checkValidity()) {
            var formData = $(this).serializeArray();
            var userObject = {};
            $.each(formData, function (i, field) {
                userObject[field.name] = field.value;
            });
    
            // Kiểm tra xem tên đăng nhập đã tồn tại chưa
            var existingUser = users.find(function(user) {
                return user.username === userObject.username;
            });
    
            if (existingUser) {
                alert('Tên đăng nhập đã tồn tại!');
            } else {
                // Mã hóa mật khẩu trước khi lưu vào localStorage
                userObject.password = btoa(userObject.password); // Mã hóa mật khẩu (Base64)
                users.push(userObject);
                localStorage.setItem('users', JSON.stringify(users)); // Lưu vào localStorage
                displayMembers(); // Hiển thị lại danh sách thành viên
                alert('Đăng ký thành công!');
                $('#registerForm')[0].reset();
            }
        } else {
            e.stopPropagation();
            $(this).addClass('was-validated');
        }
    });


    $('#loginForm').submit(function (e) {
        e.preventDefault();
        var username = $('#loginUsername').val();
        var password = btoa($('#loginPassword').val()); // Mã hóa mật khẩu nhập vào
        var foundUser = users.find(function(user) {
          return user.username === username && user.password === password;
        });
        if (foundUser) {
          alert('Đăng nhập thành công!');
          // Thực hiện các hành động sau khi đăng nhập thành công
        } else {
          alert('Tên đăng nhập hoặc mật khẩu không đúng!');
        }
      });

  });


// Hàm cập nhật dropdown menu giỏ hàng
function updateCartDropdown() {
    // Lấy giỏ hàng từ localStorage
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Lấy phần tử chứa danh sách sản phẩm trong giỏ hàng
    var cartItemsContainer = $('.cart-items-container');

    // Kiểm tra nếu giỏ hàng rỗng
    if (cartItems.length === 0) {
        // Ẩn danh sách sản phẩm trong giỏ hàng và hiển thị thông báo "Chưa có sản phẩm nào trong giỏ hàng"
        cartItemsContainer.hide();
        $('.empty-cart-message').show();
    } else {
        // Hiển thị danh sách sản phẩm trong giỏ hàng và ẩn thông báo
        $('.empty-cart-message').hide();
        cartItemsContainer.empty(); // Xóa nội dung hiện tại của danh sách sản phẩm trong giỏ hàng

        // Duyệt qua từng sản phẩm trong giỏ hàng và hiển thị
        cartItems.forEach(function (item) {
            var productHtml = `
        <div class="dropdown-item">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <img src="${item.image}" alt="${item.name}" class="mr-3" style="width: 50px;">
                    <div>
                        <div class="font-weight-bold">${item.name}</div>
                        <div>${item.quantity} x ${item.discountPrice.toLocaleString()} VND</div>
                    </div>
                </div>
                <button class="btn btn-danger btn-sm remove-from-cart" data-name="${item.name}">Xóa</button>
            </div>
        </div>
    `;
            // Thêm sản phẩm vào danh sách sản phẩm trong giỏ hàng
            cartItemsContainer.append(productHtml);
        });
        // Hiển thị danh sách sản phẩm trong giỏ hàng
        cartItemsContainer.show();
    }
    // Cập nhật số lượng sản phẩm trong biểu tượng giỏ hàng
    updateCartIcon(cartItems.length);
}

$(document).ready(function () {
    updateCartDropdown();
});

// Gán sự kiện cho nút "Xóa" bằng cách sử dụng $(document).on()
$(document).on('click', '.remove-from-cart', function () {
    var productName = $(this).data('name');
    removeFromCart(productName);
});

// Hàm loại bỏ sản phẩm khỏi giỏ hàng
function removeFromCart(productName) {
    // Lấy giỏ hàng từ localStorage
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Lọc sản phẩm có tên trùng khớp với tên được chọn để loại bỏ
    var updatedCartItems = cartItems.filter(function (item) {
        return item.name !== productName;
    });

    // Lưu giỏ hàng đã được cập nhật vào localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));

    // Cập nhật dropdown menu giỏ hàng
    updateCartDropdown();
}

function updateCartIcon(numItems) {
    // Cập nhật số lượng sản phẩm trong biểu tượng giỏ hàng
    $('.num-item-in-cart').text(numItems);
}


$(document).ready(function () {
    // Trích xuất dữ liệu từ Local Storage
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Lấy phần tử chứa danh sách sản phẩm trong giỏ hàng
    var cartItemsContainer = $('#cart-items-container');

    // Hiển thị danh sách sản phẩm trong giỏ hàng
    if (cartItems.length === 0) {
        cartItemsContainer.html('<p>Giỏ hàng của bạn đang trống.</p>');
    } else {
        cartItemsContainer.empty();
        cartItems.forEach(function (item) {
            // Tính tổng cộng
            var total = item.discountPrice * item.quantity;
            var discountPercent = ((item.price - item.discountPrice) / item.price) * 100;

            var productHtml = `
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${item.image}" alt="${item.name}" class="img-fluid rounded-start">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="product-discount">Giá gốc: ${item.price.toLocaleString()} VND</p>
                                <p class="product-price">Giá giảm: ${item.discountPrice.toLocaleString()} VND</p>
                                <p class="btn btn-danger text-center">-${discountPercent}%</p>   <span class="card-text">Số lượng: ${item.quantity}</span>
                              
                            </div>
                        </div>
                    </div>
                </div>
            `;
            cartItemsContainer.append(productHtml);
        });
    }
});

$(document).ready(function () {
    // Trích xuất dữ liệu từ Local Storage
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Lấy phần tử chứa bảng hóa đơn
    var billTable = $('#bill-table');

    // Hiển thị bảng hóa đơn
    if (cartItems.length === 0) {
        billTable.html('<p>Không có sản phẩm nào trong giỏ hàng.</p>');
    } else {
        // Tạo header cho bảng hóa đơn
        var tableHtml = `
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá gốc (VND)</th>
                        <th scope="col">Giá giảm (VND)</th>
                        <th scope="col">Phần trăm khuyến mãi (%)</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Tổng cộng (VND)</th>
                    </tr>
                </thead>
                <tbody id="bill-body">
                </tbody>
            </table>
        `;

        billTable.html(tableHtml);

        var billBody = $('#bill-body');

        // Duyệt qua từng sản phẩm và thêm vào bảng hóa đơn
        cartItems.forEach(function (item, index) {
            var total = item.discountPrice * item.quantity;
            var discountPercent = ((item.price - item.discountPrice) / item.price) * 100;

            var rowHtml = `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${item.name}</td>
                    <td>${item.price.toLocaleString()}</td>
                    <td>${item.discountPrice.toLocaleString()}</td>
                    <td>${discountPercent.toFixed(2)}</td>
                    <td>${item.quantity}</td>
                    <td>${total.toLocaleString()}</td>
                </tr>
            `;
            billBody.append(rowHtml);
        });
    }
});
