function getPrice(originPrice, typePromotion = "default") {
  // Giảm giá khi người dùng đặt trước 1 sp cuả VINFAST
  if (typePromotion === "preOrder") {
    return originPrice * 0.8; // giảm 20%
  } // Ở giai đoạn này nếu như bạn đã biết về SOLID thì nó đã phá vỡ nguyên tắt đầu tiên.
  // Đó là nguêyn tắc trách nhiệm duy nhất

  // Tiếp tục thêm tính năng khuyến mãi thông thường, ví dụ nếu giá gốc < 200 thì giảm 10% , còn > thì giảm tối đa 30
  if (typePromotion === "promotion") {
    return originPrice <= 200 ? originPrice * 0.9 : originPrice - 30;
  }

  // đến ngày black Friday
  if (typePromotion === "blackFriday") {
    return originPrice <= 200 ? originPrice * 0.8 : originPrice - 50;
  }

  if (typePromotion === "11/11/2011") {
    return originPrice <= 200 ? originPrice * 0.8 : originPrice - 50;
  }

  if (typePromotion === "default") {
    return originPrice;
  }
}

console.log(`PRICE:::`, getPrice(200, "blackFriday"));
