/*
Bài tập 1:
Mô hình 3 khối : 
+ Đầu vào : người dùng nhập vào số ngày, số tháng, số năm của hiện tại 
+ Xử lí : 
* xử lí tính ngày hôm qua :
    - Số tháng có 31 ngày là tháng 1,3,5,7,8,10.12 nên soNgay >=2 && soNgay <= 31 thì soNgay = soNgay -1 
        Nếu soNgay = 1 thì => soNgay =31 và soThang = soThang -1
         Số tháng có 30 ngày là tháng 4,6,9,11 nên soNgay >=2 && soNgay <= 30 thì soNgay = soNgay -1 
         Số tháng có 28 ngày là tháng 2 nên soNgay >=2 && soNgay <= 28 thì soNgay = soNgay -1 
     đặc biệt : số tháng bằng 1 số ngày 1 => số ngày = 30 và số tháng =12 số năm -1
* xử lí tính ngày mai :
    - Số tháng có 31 ngày là tháng 1,3,5,7,8,10.12 nên soNgay >=1 && soNgay < 31 thì soNgay = soNgay +1 
        số ngày bằng 31 thì => songay =1 và tháng +1 
         Số tháng có 30 ngày là tháng 4,6,9,11 nên soNgay >=1 && soNgay <= 30 thì soNgay = soNgay +1 
         số ngày bằng 30 thì => songay =1 và tháng +1 
         Số tháng có 28 ngày là tháng 2 nên soNgay >=1 && soNgay <= 28 thì soNgay = soNgay +1 
         số ngày bằng 28 thì => songay =1 và tháng +1 
        đặc biệt : số tháng bằng 12 số ngày 30 => số ngày =1 và số tháng =1 số năm +1

+ Đầu ra : Xuất ra màn hình ngày hôm qua hoặc ngày hôm nay tùy theo ý của người dùng

*/
//CODE ngày tính ngày hôm qua
 document.getElementById('ngayHomQua').onclick = function () {
    var soNgay = Number(document.getElementById('soNgay').value);
    var soThang = Number(document.getElementById('soThang').value);
    var soNam = Number(document.getElementById('soNam').value);
    var ketqua1 = '';
    // Tháng 1
    if (soThang == 1 && soNgay <= 31 && soNgay >= 2 && soNam > 0) {
        soNgay = soNgay - 1;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 1 && soNgay == 1 && soNam > 0) {
        soNgay = 31;
        soThang = 12;
        soNam = soNam - 1;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 2
    else if (soThang == 2 && soNgay <= 28 && soNgay >= 2 && soNam > 0) {
        soNgay = soNgay - 1;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 2 && soNgay == 1 && soNam > 0) {
        soNgay = 31;
        soThang = 1;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 3
    else if (soThang == 3 && soNgay <= 31 && soNgay >= 2 && soNam > 0) {
        soNgay = soNgay - 1;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 3 && soNgay == 1 && soNam > 0) {
        soNgay = 28;
        soThang = 2;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 4
    else if (soThang == 4 && soNgay <= 30 && soNgay >= 2 && soNam > 0) {
        soNgay = soNgay - 1;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 4 && soNgay == 1 && soNam > 0) {
        soNgay = 31;
        soThang = 3;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 5
    else if (soThang == 5 && soNgay <= 31 && soNgay >= 2 && soNam > 0) {
        soNgay = soNgay - 1;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 5 && soNgay == 1 && soNam > 0) {
        soNgay = 30;
        soThang = 4;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 6
    else if (soThang == 6 && soNgay <= 30 && soNgay >= 2 && soNam > 0) {
        soNgay = soNgay - 1;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 6 && soNgay == 1 && soNam > 0) {
        soNgay = 31;
        soThang = 5;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 7
    else if (soThang == 7 && soNgay <= 31 && soNgay >= 2 && soNam > 0) {
        soNgay = soNgay - 1;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 7 && soNgay == 1 && soNam > 0) {
        soNgay = 30;
        soThang = 6;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 8
    else if (soThang == 8 && soNgay <= 31 && soNgay >= 2 && soNam > 0) {
        soNgay = soNgay - 1;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 8 && soNgay == 1 && soNam > 0) {
        soNgay = 31;
        soThang = 7;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 9
    else if (soThang == 9 && soNgay <= 30 && soNgay >= 2 && soNam > 0) {
        soNgay = soNgay - 1;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 9 && soNgay == 1 && soNam > 0) {
        soNgay = 31;
        soThang = 8;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 10
    else if (soThang == 10 && soNgay <= 31 && soNgay >= 2 && soNam > 0) {
        soNgay = soNgay - 1;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 10 && soNgay == 1 && soNam > 0) {
        soNgay = 30;
        soThang = 9;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 11
    else if (soThang == 11 && soNgay <= 30 && soNgay >= 2 && soNam > 0) {
        soNgay = soNgay - 1;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 11 && soNgay == 1 && soNam > 0) {
        soNgay = 31;
        soThang = 10;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 12
    else if (soThang == 12 && soNgay <= 31 && soNgay >= 2 && soNam > 0) {
        soNgay = soNgay - 1;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 12 && soNgay == 1 && soNam > 0) {
        soNgay = 30;
        soThang = 11;
        ketqua1 = 'Ngày hôm qua là: ' + soNgay + '/' + soThang + '/' + soNam;
    }

    // Không có kết quả
    else {
        ketqua1 = 'Bạn đã nhập không hợp lệ';
    }

    document.getElementById('ketQua_b1').innerHTML = ketqua1;
}
// CODE Tính ngày mai
document.getElementById('ngayMai').onclick = function () {
    var soNgay = Number(document.getElementById('soNgay').value);
    var soThang = Number(document.getElementById('soThang').value);
    var soNam = Number(document.getElementById('soNam').value);
    var ketqua1 = '';
    // Tháng 1
    if (soThang == 1 && soNgay < 31 && soNgay >= 1 && soNam > 0) {
        soNgay = soNgay + 1;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 1 && soNgay == 31 && soNam > 0) {
        soNgay = 1;
        soThang = 2;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 2
    else if (soThang == 2 && soNgay < 28 && soNgay >= 1 && soNam > 0) {
        soNgay = soNgay + 1;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 2 && soNgay == 28 && soNam > 0) {
        soNgay = 1;
        soThang = 3;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 3
    else if (soThang == 3 && soNgay < 31 && soNgay >= 1 && soNam > 0) {
        soNgay = soNgay + 1;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 3 && soNgay == 31 && soNam > 0) {
        soNgay = 1;
        soThang = 4;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 4
    else if (soThang == 4 && soNgay < 30 && soNgay >= 1 && soNam > 0) {
        soNgay = soNgay + 1;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 4 && soNgay == 30 && soNam > 0) {
        soNgay = 1;
        soThang = 5;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 5
    else if (soThang == 5 && soNgay < 31 && soNgay >= 1 && soNam > 0) {
        soNgay = soNgay + 1;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 5 && soNgay == 31 && soNam > 0) {
        soNgay = 1;
        soThang = 6;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 6
    else if (soThang == 6 && soNgay < 30 && soNgay >= 1 && soNam > 0) {
        soNgay = soNgay + 1;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 6 && soNgay == 30 && soNam > 0) {
        soNgay = 1;
        soThang = 7;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 7
    else if (soThang == 7 && soNgay < 31 && soNgay >= 1 && soNam > 0) {
        soNgay = soNgay + 1;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 7 && soNgay == 31 && soNam > 0) {
        soNgay = 1;
        soThang = 8;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 8
    else if (soThang == 8 && soNgay < 31 && soNgay >= 1 && soNam > 0) {
        soNgay = soNgay + 1;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 8 && soNgay == 31 && soNam > 0) {
        soNgay = 1;
        soThang = 9;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 9
    else if (soThang == 9 && soNgay < 30 && soNgay >= 1 && soNam > 0) {
        soNgay = soNgay + 1;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 9 && soNgay == 30 && soNam > 0) {
        soNgay = 1;
        soThang = 10;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 10
    else if (soThang == 10 && soNgay < 31 && soNgay >= 1 && soNam > 0) {
        soNgay = soNgay + 1;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 10 && soNgay == 31 && soNam > 0) {
        soNgay = 1;
        soThang = 11;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 11
    else if (soThang == 11 && soNgay < 30 && soNgay >= 1 && soNam > 0) {
        soNgay = soNgay + 1;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 11 && soNgay == 30 && soNam > 0) {
        soNgay = 1;
        soThang = 12;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Tháng 12
    else if (soThang == 12 && soNgay < 31 && soNgay >= 1 && soNam > 0) {
        soNgay = soNgay + 1;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    else if (soThang == 12 && soNgay == 31 && soNam > 0) {
        soNgay = 1;
        soThang = 1;
        soNam = soNam+1;
        ketqua1 = 'Ngày mai là: ' + soNgay + '/' + soThang + '/' + soNam;
    }
    // Không có kết quả
    else {
        ketqua1 = ' Bạn đã nhập không hợp lệ';
    }
    document.getElementById('ketQua_b1').innerHTML = ketqua1;
}
//  BÀI TẬP 2
/*
Mô hình 3 khôi :
đầu vào : Nhập vào số tháng và số năm
xử lí : 
+ Nếu tháng đó rơi vào tháng 1,3,5,7,8,10,12 thì xuất ra số ngày là 31
+ Nêu tháng đó rơi vào tháng 4,6,9,11 thì xuất ra số ngày trong tháng đó là 30
+ Nếu tháng đó là tháng 2 :
- TH1 : nếu năm đó % 4 = 0 và năm đó % 100 !== 0 thì tháng 2 năm đó có 29 ngày
- TH2 : trường hợp còn lại in ra tháng 2 năm đó có 28 ngày
*/
document.getElementById('btnTinhNgay').onclick = function () {
    var thang = Number(document.getElementById('nhapThang').value);
    var nam = Number(document.getElementById('nhapNam').value);
    var ketqua = 0;
    if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
        ketqua = 30;
    } else if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 10 || thang == 12) {
        ketqua = 31;

    } else if (thang == 2 && nam % 4 === 0 && nam % 100 !== 0 || nam % 400 === 0) {
        ketqua = 29;
    } else {
        ketqua = 28;
    }
    document.getElementById('ketQua_b2').innerHTML = 'Số ngày của tháng ' + thang + ' là : ' + ketqua + ' ngày.';

}

//BÀI TẬP 3
/*
Sơ đồ 3 khối :
Đầu vào : nhập vào 1 số nguyên có 3 chữ số 
Xử lí : ví dụ số nhập vào là N 
Bước 1 : tiến hành tách số N thành 3 số hàng trăm, chục, đơn vị bằng cách : 
* tram = Math.floor(N/100)
* chuc = Math.floor(N %100 /10)
* donvi = Math.floor(N %100 %10)  
Bước 2 : sử dụng switch case để tiến hành đọc lần lượt các số hàng trăm, hàng chục và đơn vị
- Trường hợp đặc biệt khi người dùng nhập vào số có hàng chục = 0 và đơn vị = 0  tiến hành xuất ra màn hình chỉ đọc số hàng trăm
- Trường hợp số hàng chục = 0 gán chục bằng "lẻ"
- Trường hợp số hàng đơn vị  = 0 gán dơn vị bằng "" (bỏ qua đơn vị)
- Trường hợp người dùng nhập sai số N >999 || N<99 thì xuất ra màn hình người dùng nhập sai số  
Đầu ra : xuất ra màn hình cách đọc của số vừa nhập vào 
*/

document.getElementById('btnDemSo').onclick = function () {
    var demso = Number(document.getElementById('nhapSo').value);
    var docSoTram = '';
    var docSoChuc = '';
    var docSoDonVi = '';
    var temp = ''; // gán giá trị khi nhập sai
    var tram = Math.floor(demso / 100);
    var chuc = Math.floor(demso % 100 / 10);
    var donvi = demso % 100 % 10;
    switch (tram) {
        case 1: {
            docSoTram = 'một trăm'
        }; break;
        case 2: {
            docSoTram = 'hai trăm'
        }; break;
        case 3: {
            docSoTram = 'ba trăm'
        }; break;
        case 4: {
            docSoTram = 'bốn trăm'
        }; break;
        case 5: {
            docSoTram = 'năm trăm'
        }; break;
        case 6: {
            docSoTram = 'sáu trăm'
        }; break;
        case 7: {
            docSoTram = 'bảy trăm'
        }; break;
        case 8: {
            docSoTram = 'tám trăm'
        }; break;
        case 9: {
            docSoTram = 'chín trăm'
        }; break;
        default: {
            docSoTram = ''
        }; break;
    }
    switch (chuc) {
        case 1: {
            docSoChuc = 'một mươi'
        }; break;
        case 2: {
            docSoChuc = 'hai mươi'
        }; break;
        case 3: {
            docSoChuc = 'ba mươi'
        }; break;
        case 4: {
            docSoChuc = 'bốn mươi'
        }; break;
        case 5: {
            docSoChuc = 'năm mươi'
        }; break;
        case 6: {
            docSoChuc = 'sáu mươi'
        }; break;
        case 7: {
            docSoChuc = 'bảy mươi'
        }; break;
        case 8: {
            docSoChuc = 'tám mươi'
        }; break;
        case 9: {
            docSoChuc = 'chín mươi'
        }; break;
        default: {
            docSoChuc = ' lẻ'
        }; break;
    }
    switch (donvi) {
        case 1: {
            docSoDonVi = 'một '
        }; break;
        case 2: {
            docSoDonVi = 'hai '
        }; break;
        case 3: {
            docSoDonVi = 'ba '
        }; break;
        case 4: {
            docSoDonVi = 'bốn '
        }; break;
        case 5: {
            docSoDonVi = 'năm '
        }; break;
        case 6: {
            docSoDonVi = 'sáu '
        }; break;
        case 7: {
            docSoDonVi = 'bảy '
        }; break;
        case 8: {
            docSoDonVi = 'tám '
        }; break;
        case 9: {
            docSoDonVi = 'chín '
        }; break;
        default: {
            docSoDonVi = '';
        }; break;
    }
    if(demso>999 || demso <99){
        temp = 'Nhập sai số ! Vui lòng nhập lại'
        document.getElementById('ketQua_b3').innerHTML = temp;
        return 0;
    }
    if (donvi === 0 && chuc === 0) {
        document.getElementById('ketQua_b3').innerHTML = docSoTram;
    }
    else {
        document.getElementById('ketQua_b3').innerHTML = docSoTram + ' ' + docSoChuc + ' ' + docSoDonVi;
    }
}
/*
BÀI TẬP 4:
Mô hình 3 khối : 
Đầu vào : Nhập vào tọa độ (X,Y) của 3 sinh viên và của trường học
Xử lí : Tính tọa độ d của 3 sinh viên bằng công thức : Math.sqrt((Math.pow(xTruong-xSV,2))+(Math.pow(yTruong-ySV,2)))
    + Đem so sánh tọa độ d của 3 sinh viên ai là người lớn nhất => Người đó xa trường nhất
Đầu ra : Xuất ra màn hình sinh viên xa trường nhất
*/

document.getElementById('btnTinhToaDo').onclick = function(){
var SV1 = tinhToaDo('nhapX1','nhapY1','nhapXTruong','nhapYTruong');
var SV2 = tinhToaDo('nhapX2','nhapY2','nhapXTruong','nhapYTruong');
var SV3 = tinhToaDo('nhapX3','nhapY3','nhapXTruong','nhapYTruong');
var HS1 = document.getElementById('tenHS1').value;
var HS2 = document.getElementById('tenHS2').value;
var HS3 = document.getElementById('tenHS3').value;
var soSanh = Math.max(SV1,SV2,SV3);
if(soSanh === SV1){
    document.getElementById('ketQua_b4').innerHTML = "Sinh viên xa trường nhất là bạn : "+ HS1 ;
}else if(soSanh === SV2){
    document.getElementById('ketQua_b4').innerHTML = "Sinh viên xa trường nhất là bạn: "+ HS2 ;
}else if(soSanh === SV3){
    document.getElementById('ketQua_b4').innerHTML = "Sinh viên xa trường nhất là bạn: "+ HS3 ;
}
// hàm sử dụng 
function tinhToaDo(id1,id2,id3,id4){
    var xSV = Number(document.getElementById(id1).value);
    var ySV = Number(document.getElementById(id2).value);
    var xTruong = Number(document.getElementById(id3).value);
    var yTruong = Number(document.getElementById(id4).value);
     var duongDi = 0;
     duongDi = Math.sqrt((Math.pow(xTruong-xSV,2))+(Math.pow(yTruong-ySV,2)))
     return duongDi;
    }
}
