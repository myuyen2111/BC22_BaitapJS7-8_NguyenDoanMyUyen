//Thêm số
var numberList = [];
function add_number() {
  var n = getEle("txt_number").value * 1;
  numberList.push(n);
  console.log(numberList);
}
//Rút gọn gọi hàm document.getElementByID
function getEle(id) {
  return document.getElementById(id);
}
//Hiện mảng đã nhập
function show_array() {
  var array_result =
    "<div class='alert alert-success'>" + numberList.join(" ") + "</div>";
  getEle("array_result").innerHTML = array_result;
}
//Bài 1. Tổng số dương
/* Đầu vào: các số trong mảng
*Xử lý: 
-Tạo biến tích luỹ sum_p=0;
-Duyệt mảng bằng vòng lặp, xét xem số đó có phải là số dương hay không (>0)
-Nếu là số dương thì cộng vào sum_positive
-Đầu ra: Hiện ra kết quả tổng số dương*/
function action_sum_positive(numberList) {
  var sum_p = 0;
  var result;
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
      sum_p += numberList[i];
    }
  }
  result = sum_p;
  return result;
}
function sum_positive() {
  var result =
    "<div class='alert alert-success'>" +
    action_sum_positive(numberList) +
    "</div>";
  getEle("positive_sum_result").innerHTML = result;
}
//Bài 2. Đếm các số dương
/*Đầu vào: các số trong mảng
 *Xử lí:
-Tạo biến tích luỹ count_p=0;
-Duyệt mảng bằng vòng lặp, xét xem số đó có phải là số dương hay không (>0)
-Nếu là số dương thì cộng 1 vào count_p
-Đầu ra: Hiện ra kết quả số các số dương */
function action_count_positive(numberList) {
  var count_p = 0;
  var result;
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
      count_p++;
    }
  }
  result = count_p;
  return result;
}
function count_positive() {
  var result =
    "<div class='alert alert-success'>" +
    action_count_positive(numberList) +
    "</div>";
  getEle("positive_count_result").innerHTML = result;
}
//Bài 3: Tìm số nhỏ nhất
/*Đầu vào: các số trong mảng;
*Xử lý:
- Khai báo biến temp là biến trung gian để so sánh các phần tử trong mảng
- Gán temp với giá trị phần tử đầu tiên
- Dùng vòng lặp for để so sánh temp với các phần tử trong mảng
- Cứ khi nào có giá trị nào nhỏ hơn temp thì temp sẽ được thay thế bằng giá trị đó.
*Đầu ra: hiện số nhỏ nhất trong mảng */
function action_find_min(numberList) {
  var temp = numberList[0];
  var result;
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] < temp) {
      temp = numberList[i];
    }
  }
  result = temp;
  return result;
}
function find_min() {
  var result =
    "<div class='alert alert-success'>" +
    action_find_min(numberList) +
    "</div>";
  getEle("find_min_result").innerHTML = result;
}
//Bài 4: Tìm số dương nhỏ nhất
/*Đầu vào: các số trong mảng;
*Xử lí:
- Khai báo biến temp là biến trung gian để so sánh các phần tử trong mảng
- Biến temp sẽ dùng vòng lặp để tìm giá trị dương đầu tiên trong mảng để gán vào.
- Dùng vòng lặp for để so sánh temp với các phần tử trong mảng, lưu ý chỉ so sánh temp
- Nếu các phần tử còn lại có giá trị bé hơn min thì min = giá trị bé đó
 * - Đầu ra: Số dương nhỏ nhất trong mảng*/
function action_find_pmin(numberList) {
  var temp;
  var result;
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
      temp = numberList[i];
      break;
    }
  }
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] < temp && numberList[i] > 0) {
      temp = numberList[i];
    }
  }
  result = temp;
  return result;
}
function find_pmin() {
  var result =
    "<div class='alert alert-success'>" +
    action_find_pmin(numberList) +
    "</div>";
  getEle("find_pmin_result").innerHTML = result;
}
//Bài5: Tìm số chẵn cuối cùng
/* Đầu vào: Các số trong mảng
 * Xử lí:
 - Duyệt mảng bằng vòng lặp;
 -Đặt biến temp là biến trung gian để lưu lần lượt giá trị chẵn được duyệt;
 -Đặt biến k để đếm số các số chẵn (nếu k=0 thì mảng ko có số chẵn, trả về -1)
 *Đầu ra: xuất ra kết quả
*/
function action_find_finaleven(numberList) {
  var temp;
  var k = 0;
  var result;
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 == 0) {
      temp = numberList[i];
      k++;
    }
  }
  if (k == 0) {
    result = -1;
  } else {
    result = temp;
  }
  return result;
}
function finaleven() {
  result =
    "<div class='alert alert-success'>" +
    action_find_finaleven(numberList) +
    "</div>";
  getEle("final_even_result").innerHTML = result;
}
//Bài 6: Đổi chỗ 2 vị trí
/*
- Đầu vào: số trong mảng, hai vị trí cần đổi (vị trí (1) và vị trí (2))
- Xử lí:
+Tạo biến temp là biến trung gian, gán với vị trí (1)
+Gán vị trí (1) với giá trị của vị trí (2)
+Gán vị trí (2) với giá trị của temp
-Đầu ra: 2 vị trí được thay đổi trong mảng.
 */
function action_changei(numberList) {
  var i1 = getEle("txt_i1").value * 1;
  var i2 = getEle("txt_i2").value * 1;
  var result;
  var temp = numberList[i1];
  if (i1 >= numberList.length && i1 < 0) {
    result = -1;
  }
  if (i2 >= numberList.length && i2 < 0) {
    result = -1;
  }
  if (i1 < numberList.length && i1 >= 0 && i2 < numberList.length && i2 >= 0) {
    numberList[i1] = numberList[i2];
    numberList[i2] = temp;
    result = numberList.join(" ");
  }
  return result;
}
function changei() {
  result =
    "<div class='alert alert-success'>" + action_changei(numberList) + "</div>";
  getEle("change_i_result").innerHTML = result;
}
//Bài 7: Xếp mảng tăng dần
/*Đầu vào: các số trong mảng.
*Xử lý:
-Gán giá trị temp cho giá trị đầu, rồi sau đó dùng vòng lặp lồng để xét giá trị này với tất cả phần tử trong dãy
-Sau khi xét xong temp0 thì vòng lặp sẽ chuyển sang cho temp 1 và tiếp tục so sánh đến temp cuối cùng
*Đầu ra: mảng tăng dần*/
function arrange_stobig(numberList) {
  var temp = 0;
  var result;
  for (var i = 0; i < numberList.length - 1; i++) {
    for (var j = i + 1; j < numberList.length; j++) {
      if (numberList[j] < numberList[i]) {
        var temp = numberList[i];
        numberList[i] = numberList[j];
        numberList[j] = temp;
      }
    }
  }
  result = numberList;
  return result;
}
function smalltobig() {
  result =
    "<div class='alert alert-success'>" +
    arrange_stobig(numberList).join(" ") +
    "</div>";
  getEle("stob_result").innerHTML = result;
}
// Bài 8: Tìm số nguyên tố đầu tiên trong mảng:
/* Đầu vào: các số trong mảng
*Xử lý:
-Dùng vòng lặp để duyệt từng phần tử trong mảng.
-Đặt biến prime_check=true (true khi đó là snt), biến count để đếm số không phải là snt
-Biến j nhằm để tìm ước cho số numberList[i], nếu numberList[i] chia hết cho j thì prime_check=false và count++;
(Lưu ý j<= căn bậc hai của numberList[i], Ta biết rằng: số nguyên >= 2 bất kỳ sẽ luôn có số ước ở nửa đầu căn bậc 2 của nó bằng số ước ở nửa sau căn bậc 2 của nó (nên chỉ cần tìm ở phía trước căn bậc hai là đủ)
-Nếu prime_check=true sau khi kết thúc vòng lặp j thì vòng lặp i cũng dừng lại
-Nếu count == numberList.length (count=số các phần tử trong mảng) thì mảng này không có snt nào, giá trị trả về -1;
*Đầu ra: xuất ra snt đầu tiên trong dãy hoặc giá trị -1 nếu ko có snt nào.
*/
function find_prime(numberList) {
  var result = "";
  var count = 0;
  for (var i = 0; i < numberList.length; i++) {
    var prime_check = true;
    if (numberList[i] <= 1) {
      prime_check = false;
      count++;
    } else {
      for (var j = 2; j <= Math.sqrt(numberList[i]); j++) {
        if (numberList[i] % j == 0) {
          prime_check = false;
          count++;
          break;
        }
      }
      if (prime_check == true) {
        result = numberList[i];
        return result;
      } else if (count == numberList.length) {
        result = -1;
        return result;
      }
    }
  }
}
function find_first_prime() {
  var first_prime =
    "<div class='alert alert-success'>" + find_prime(numberList) + "</div>";
  getEle("prime_result").innerHTML = first_prime;
}
// Bài 9: Nhập mảng số thực; tìm xem mảng có bao nhiêu số nguyên
/*Đầu vào: 2 mảng (ban đầu và thực)
 *Xử lí:
 -Push giá trị nhập vào mảng ban đầu
 -Tạo biến đếm count
-dùng vòng lặp kiểm tra các số nguyên trong mảng
- nếu là số nguyên thì biến count++
*Đầu ra: số các số nguyên có trong mảng gộp
 */
function add_real_number() {
  var n = getEle("txt_realnumber").value * 1;
  numberList.push(n);
  console.log(numberList);
}
function action_count_int(numberList) {
  var result = "";
  var count = 0;
  for (var i = 0; i < numberList.length; i++) {
    if (Number.isInteger(numberList[i]) == true) {
      count++;
    }
  }
  result = count;
  return result;
}
function int_count() {
  result =
    "<div class='alert alert-success'>" +
    action_count_int(numberList) +
    "</div>";
  getEle("int_count_result").innerHTML = result;
}
// Bài 10: So sánh số lượng dương, âm
/*  
 * Đầu vào: các số của mảng
 * Xử lí:
 + count_p; count_n (p:số dương; n: số âm)
 + Duyệt các phần tử của mảng, nếu là số dương thì count_p++,số âm thì count_n.
 Riêng số 0 ko được tính là số âm hay dương.
 * Đầu ra: kết quả
 */
function action_compare(numberList) {
  var count_p = 0;
  var count_n = 0;
  var result = "";
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
      count_p++;
    } else if (numberList[i] < 0) {
      count_n++;
    }
  }
  if (count_p > count_n) {
    result = "<div class='alert alert-success'> Số các số dương lớn hơn </div>";
  } else if (count_p < count_n) {
    result = "<div class='alert alert-success'> Số các số âm lớn hơn </div>";
  } else if ((count_p = count_n)) {
    result = "<div class='alert alert-success'> Số các số bằng nhau </div>";
  }
  return result;
}
function p_ncompare() {
  result = action_compare(numberList);
  getEle("compare_result").innerHTML = result;
}
