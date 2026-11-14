/**
 * CƠ SỞ DỮ LIỆU SẢN PHẨM CHUẨN NHÀ XINH HƯNG YÊN
 * TẬP TRUNG 3 MẶT HÀNG CỐT LÕI: SOFA - GIƯỜNG NGỦ - BÀN ĂN
 * Đồ án 2 - Sinh viên: Phạm Trọng Nam (MSSV: 12524034, Lớp 12524W.3, UTEHY)
 */
const NHA_XINH_CATALOG = {
  // ==========================================
  // CỐT LÕI 1: SOFA (SOFA & ARMCHAIR)
  // ==========================================
  "sofa": {
    name: "Sofa",
    group: "Sofa & Armchair",
    desc: "Bộ sưu tập sofa Nhà Xinh: Êm ái, sang trọng & đẳng cấp. Đầy đủ sofa băng, sofa góc, sofa da Ý nhập khẩu và armchair thư giãn.",
    badge: "BÁN CHẠY",
    products: [] // Sẽ được tự động gộp từ các danh mục con bên dưới
  },

  "sofa-bang": {
    name: "Sofa Băng",
    group: "Sofa & Armchair",
    desc: "Sofa băng 2-3 chỗ thiết kế đương đại, tối ưu diện tích và mang lại cảm giác êm ái hoàn hảo cho phòng khách.",
    badge: "MỚI",
    products: [
      {
        id: "sb-1",
        name: "Sofa Penny 3 Chỗ Vải Cao Cấp",
        cat: "Sofa Băng",
        price: "27,900,000 VND",
        numPrice: 27900000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/09/sofa-penny-2.webp",
        material: "Vải dệt cao cấp",
        badge: "MỚI",
        sku: "NX-SB-001",
        dimensions: "D2180 x R920 x C820 mm"
      },
      {
        id: "sb-2",
        name: "Sofa Cabo 3 Chỗ Xanh Rêu Scandinavia",
        cat: "Sofa Băng",
        price: "35,200,000 VND",
        numPrice: 35200000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/09/sofa-cabo-xanh-la-2-1.webp",
        material: "Vải bố dệt sợi đôi",
        badge: "HOT",
        sku: "NX-SB-002",
        dimensions: "D2260 x R950 x C800 mm"
      },
      {
        id: "sb-3",
        name: "Sofa Combo 3 Chỗ Tinh Tế",
        cat: "Sofa Băng",
        price: "24,900,000 VND",
        numPrice: 24900000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/09/Sofa-Combo-3-cho.webp",
        material: "Vải nỉ chống thấm",
        badge: "ƯU ĐÃI",
        sku: "NX-SB-003",
        dimensions: "D2100 x R900 x C830 mm"
      },
      {
        id: "sb-4",
        name: "Sofa Flow Beige 3 Chỗ Đệm Lông Vũ",
        cat: "Sofa Băng",
        price: "25,900,000 VND",
        numPrice: 25900000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/08/sofa-flow-be-1.webp",
        material: "Vải thô mộc Linen",
        badge: "MỚI",
        sku: "NX-SB-004",
        dimensions: "D2200 x R940 x C810 mm"
      }
    ]
  },

  "sofa-goc": {
    name: "Sofa Góc",
    group: "Sofa & Armchair",
    desc: "Sofa góc chữ L rộng rãi, tối ưu không gian và mang lại trải nghiệm quây quần ấm cúng cho cả gia đình.",
    badge: "SANG TRỌNG",
    products: [
      {
        id: "sg-1",
        name: "Sofa Valencia Góc Phải Da Bò Mastrotto Ý",
        cat: "Sofa Góc",
        price: "99,900,000 VND",
        numPrice: 99900000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/09/Sofa-Valencia-GP-AB1356-2-1.webp",
        material: "Da bò Mastrotto Ý 100%",
        badge: "CAO CẤP",
        sku: "NX-SG-001",
        dimensions: "D2950 x R1750 x C850 mm"
      },
      {
        id: "sg-2",
        name: "Sofa Valencia Góc Trái Da Thật Nhập Khẩu",
        cat: "Sofa Góc",
        price: "99,900,000 VND",
        numPrice: 99900000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/09/Sofa-Valencia-Goc-Trai-AB1357-5-1.webp",
        material: "Da bò Mastrotto Ý 100%",
        badge: "CAO CẤP",
        sku: "NX-SG-002",
        dimensions: "D2950 x R1750 x C850 mm"
      },
      {
        id: "sg-3",
        name: "Sofa Góc L Victoria Vải Country Chic",
        cat: "Sofa Góc",
        price: "48,500,000 VND",
        numPrice: 48500000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/07/nha-xinh-victoria-phong-khach-tong-quan-1200x800.webp",
        material: "Vải nỉ thêu nổi",
        badge: "HOT",
        sku: "NX-SG-003",
        dimensions: "D2800 x R1650 x C840 mm"
      },
      {
        id: "sg-4",
        name: "Sofa Góc Elegance Chữ L Nhập Khẩu",
        cat: "Sofa Góc",
        price: "52,000,000 VND",
        numPrice: 52000000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/07/sofa-moretti-xam-dam-4.webp",
        material: "Da công nghiệp Microfiber",
        badge: "MỚI",
        sku: "NX-SG-004",
        dimensions: "D2750 x R1600 x C820 mm"
      }
    ]
  },

  "sofa-da-y": {
    name: "Sofa Da Ý Cao Cấp",
    group: "Sofa & Armchair",
    desc: "Đẳng cấp đỉnh cao từ những xưởng thuộc da lừng danh nước Ý, mang lại sự êm ái vượt thời gian.",
    badge: "ĐẲNG CẤP",
    products: [
      {
        id: "sy-1",
        name: "Sofa Băng Da Bò Master Masterpiece Ý",
        cat: "Sofa Da Ý",
        price: "85,000,000 VND",
        numPrice: 85000000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/07/sofa-moretti-xam-dam-4.webp",
        material: "Da bò Full Grain Ý",
        badge: "MASTER",
        sku: "NX-SY-001",
        dimensions: "D2300 x R980 x C840 mm"
      },
      {
        id: "sy-2",
        name: "Sofa Góc Chữ L Da Ý Mastrotto Milano",
        cat: "Sofa Da Ý",
        price: "128,000,000 VND",
        numPrice: 128000000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/09/Sofa-Valencia-GP-AB1356-2-1.webp",
        material: "Da bò thuộc Mastrotto",
        badge: "LUXURY",
        sku: "NX-SY-002",
        dimensions: "D3100 x R1850 x C860 mm"
      },
      {
        id: "sy-3",
        name: "Sofa Đôi Da Ý Tân Cổ Điển Roma",
        cat: "Sofa Da Ý",
        price: "68,000,000 VND",
        numPrice: 68000000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/05/thuong-hieu-calligaris.webp",
        material: "Da thuộc tự nhiên Ý",
        badge: "MỚI",
        sku: "NX-SY-003",
        dimensions: "D1950 x R920 x C830 mm"
      },
      {
        id: "sy-4",
        name: "Sofa Văng 3 Chỗ Da Thật Tuscany",
        cat: "Sofa Da Ý",
        price: "76,500,000 VND",
        numPrice: 76500000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/09/Sofa-Valencia-Goc-Trai-AB1357-5-1.webp",
        material: "Da bò thuộc thảo mộc",
        badge: "ĐỘC BẢN",
        sku: "NX-SY-004",
        dimensions: "D2250 x R960 x C820 mm"
      }
    ]
  },

  "armchair": {
    name: "Armchair Thư Giãn",
    group: "Sofa & Armchair",
    desc: "Ghế đơn thư giãn phong cách Bắc Âu và Mỹ, tạo điểm nhấn cá nhân hoàn hảo bên cạnh sofa phòng khách.",
    badge: "THƯ GIÃN",
    products: [
      {
        id: "ac-1",
        name: "Armchair Thư Giãn Penny Xanh Pastel",
        cat: "Armchair",
        price: "12,500,000 VND",
        numPrice: 12500000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/07/sofa-moretti-xam-dam-4.webp",
        material: "Vải nỉ nhung cao cấp",
        badge: "MỚI",
        sku: "NX-AC-001",
        dimensions: "D850 x R820 x C840 mm"
      },
      {
        id: "ac-2",
        name: "Armchair Thư Giãn La-Z-Boy Nhập Mỹ",
        cat: "Armchair",
        price: "32,000,000 VND",
        numPrice: 32000000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/05/thuong-hieu-la-z-boy.webp",
        material: "Da bò thật & Khung thép",
        badge: "BÁN CHẠY",
        sku: "NX-AC-002",
        dimensions: "D900 x R950 x C1020 mm"
      },
      {
        id: "ac-3",
        name: "Armchair Bọc Vải Nỉ Peak Bắc Âu",
        cat: "Armchair",
        price: "14,200,000 VND",
        numPrice: 14200000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/08/Sofa-3-Cho-Vintage-Mansion-Hoa-1.webp",
        material: "Vải bố dệt sợi tự nhiên",
        badge: "HOT",
        sku: "NX-AC-003",
        dimensions: "D880 x R840 x C850 mm"
      },
      {
        id: "ac-4",
        name: "Armchair Thư Giãn Da Thật Calligaris Roma",
        cat: "Armchair",
        price: "28,500,000 VND",
        numPrice: 28500000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/05/thuong-hieu-calligaris.webp",
        material: "Da bò thuộc Mastrotto Ý",
        badge: "CAO CẤP",
        sku: "NX-AC-004",
        dimensions: "D860 x R830 x C820 mm"
      }
    ]
  },

  "ghe-dai-don": {
    name: "Ghế Dài & Đôn Sofa",
    group: "Sofa & Armchair",
    desc: "Đôn ngồi phụ và ghế dài bench phối hợp đồng bộ với bộ ghế sofa, tăng công năng tiếp khách linh hoạt.",
    badge: "TIỆN ÍCH",
    products: [
      {
        id: "gd-1",
        name: "Đôn Tròn Penny Bọc Nỉ Nhung",
        cat: "Đôn Sofa",
        price: "3,500,000 VND",
        numPrice: 3500000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/09/sofa-penny-2.webp",
        material: "Vải nỉ nhung cao cấp",
        badge: "MỚI",
        sku: "NX-GD-001",
        dimensions: "D500 x R500 x C420 mm"
      },
      {
        id: "gd-2",
        name: "Ghế Dài Bench Miami Gỗ Sồi Bọc Đệm",
        cat: "Ghế Dài Sofa",
        price: "8,900,000 VND",
        numPrice: 8900000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/05/giuong-victoria-II-2-1.webp",
        material: "Gỗ sồi tự nhiên & Đệm vải",
        badge: "HOT",
        sku: "NX-GD-002",
        dimensions: "D1400 x R450 x C450 mm"
      },
      {
        id: "gd-3",
        name: "Đôn Vuông Đa Năng Elegance",
        cat: "Đôn Sofa",
        price: "4,200,000 VND",
        numPrice: 4200000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/07/Sofa-Loveseats-Vintage-Mansion-2.webp",
        material: "Vải dệt chống bám bẩn",
        badge: "TIỆN LỢI",
        sku: "NX-GD-003",
        dimensions: "D600 x R600 x C420 mm"
      },
      {
        id: "gd-4",
        name: "Ghế Dài Đôn Sofa Da Bò Mastrotto",
        cat: "Ghế Dài Sofa",
        price: "15,500,000 VND",
        numPrice: 15500000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/09/Sofa-Valencia-GP-AB1356-2-1.webp",
        material: "Da bò thuộc Mastrotto Ý",
        badge: "SANG TRỌNG",
        sku: "NX-GD-004",
        dimensions: "D1500 x R500 x C450 mm"
      }
    ]
  },

  // ==========================================
  // CỐT LÕI 2: GIƯỜNG NGỦ
  // ==========================================
  "giuong-ngu": {
    name: "Giường Ngủ",
    group: "Giường Ngủ",
    desc: "Bộ sưu tập giường ngủ Nhà Xinh: Cho giấc ngủ an lành trọn vẹn. Khung gỗ tự nhiên vững chắc, bọc nỉ êm ái hoặc da bò Ý sang trọng.",
    badge: "AN LÀNH",
    products: [] // Sẽ được tự động gộp từ các danh mục con bên dưới
  },

  "giuong-boc-da-ni": {
    name: "Giường Bọc Nỉ / Da",
    group: "Giường Ngủ",
    desc: "Đầu giường êm ái bọc đệm lông vũ hoặc nỉ nhung cao cấp, tạo điểm tựa thoải mái khi đọc sách trước giờ ngủ.",
    badge: "MỚI",
    products: [
      {
        id: "gn-1",
        name: "Giường Ngủ Bọc Nỉ Đương Đại Victoria II",
        cat: "Giường Ngủ",
        price: "44,900,000 VND",
        numPrice: 44900000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/05/giuong-victoria-II-2-1.webp",
        material: "Vải nỉ cao cấp & Khung gỗ sồi",
        badge: "BÁN CHẠY",
        sku: "NX-GN-001",
        dimensions: "D2150 x R1950 x C1250 mm"
      },
      {
        id: "gn-2",
        name: "Giường Ngủ Khung Gỗ Bọc Da Ý Milano",
        cat: "Giường Ngủ",
        price: "56,000,000 VND",
        numPrice: 56000000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/10/giuong-nha-xinh.jpg",
        material: "Da bò Mastrotto Ý & Gỗ tự nhiên",
        badge: "SANG TRỌNG",
        sku: "NX-GN-002",
        dimensions: "D2200 x R2000 x C1280 mm"
      },
      {
        id: "gn-3",
        name: "Giường Bọc Vải Cao Cấp Đệm Êm Scandinavia",
        cat: "Giường Ngủ",
        price: "36,500,000 VND",
        numPrice: 36500000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/07/giuong-may-1.webp",
        material: "Vải bố dệt & Mút D40",
        badge: "MỚI",
        sku: "NX-GN-003",
        dimensions: "D2100 x R1900 x C1180 mm"
      },
      {
        id: "gn-4",
        name: "Giường Đôi Master Hạng Sang Masterpiece",
        cat: "Giường Ngủ",
        price: "68,000,000 VND",
        numPrice: 68000000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/10/giuong-nha-xinh.jpg",
        material: "Da bò thuộc 100% & Khung sồi",
        badge: "CAO CẤP",
        sku: "NX-GN-004",
        dimensions: "D2250 x R2050 x C1320 mm"
      }
    ]
  },

  "giuong-go": {
    name: "Giường Ngủ Gỗ Tự Nhiên",
    group: "Giường Ngủ",
    desc: "Giường ngủ chế tác từ gỗ sồi tự nhiên, gỗ óc chó Bắc Mỹ với vân gỗ tinh tế và độ bền hàng chục năm.",
    badge: "BỀN VỮNG",
    products: [
      {
        id: "gn-5",
        name: "Giường Mây II Khung Gỗ Sồi Tự Nhiên",
        cat: "Giường Ngủ",
        price: "24,900,000 VND",
        numPrice: 24900000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/07/giuong-may-1.webp",
        material: "Gỗ sồi tự nhiên & Mây đan thủ công",
        badge: "HOT",
        sku: "NX-GN-005",
        dimensions: "D2080 x R1880 x C1150 mm"
      },
      {
        id: "gn-6",
        name: "Giường Ngủ Gỗ Sồi Tự Nhiên Oslo",
        cat: "Giường Ngủ",
        price: "28,500,000 VND",
        numPrice: 28500000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/05/giuong-victoria-II-2-1.webp",
        material: "Gỗ sồi Bắc Mỹ xử lý sấy khô",
        badge: "MỚI",
        sku: "NX-GN-006",
        dimensions: "D2120 x R1920 x C1100 mm"
      },
      {
        id: "gn-7",
        name: "Giường Ngủ Gỗ Óc Chó Bắc Mỹ Hiện Đại",
        cat: "Giường Ngủ",
        price: "49,000,000 VND",
        numPrice: 49000000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/10/giuong-nha-xinh.jpg",
        material: "Gỗ óc chó Walnut tự nhiên",
        badge: "CAO CẤP",
        sku: "NX-GN-007",
        dimensions: "D2200 x R2000 x C1200 mm"
      },
      {
        id: "gn-8",
        name: "Giường Ngủ Tối Giản Scandinavian Zen",
        cat: "Giường Ngủ",
        price: "22,900,000 VND",
        numPrice: 22900000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/07/giuong-may-1.webp",
        material: "Gỗ tự nhiên sơn bóng mờ",
        badge: "ƯA CHUỘNG",
        sku: "NX-GN-008",
        dimensions: "D2050 x R1850 x C1050 mm"
      }
    ]
  },

  "tu-dau-giuong": {
    name: "Tủ Đầu Giường",
    group: "Giường Ngủ",
    desc: "Tủ đầu giường gọn gàng đặt đèn ngủ, sách báo và vật dụng cá nhân, đồng bộ chất liệu và phong cách với giường ngủ.",
    badge: "ĐỒNG BỘ",
    products: [
      {
        id: "tdg-1",
        name: "Tủ Đầu Giường 2 Ngăn Gỗ Sồi Victoria",
        cat: "Tủ Đầu Giường",
        price: "6,500,000 VND",
        numPrice: 6500000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/05/giuong-victoria-II-2-1.webp",
        material: "Gỗ sồi tự nhiên sơn bóng mờ",
        badge: "HOT",
        sku: "NX-TDG-001",
        dimensions: "D550 x R420 x C520 mm"
      },
      {
        id: "tdg-2",
        name: "Tủ Đầu Giường Mặt Đá Marble Sang Trọng",
        cat: "Tủ Đầu Giường",
        price: "8,200,000 VND",
        numPrice: 8200000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/10/giuong-nha-xinh.jpg",
        material: "Mặt đá marble & Khung gỗ óc chó",
        badge: "CAO CẤP",
        sku: "NX-TDG-002",
        dimensions: "D580 x R450 x C550 mm"
      },
      {
        id: "tdg-3",
        name: "Tủ Kê Giường Tối Giản Bắc Âu",
        cat: "Tủ Đầu Giường",
        price: "4,500,000 VND",
        numPrice: 4500000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/07/giuong-may-1.webp",
        material: "Gỗ tự nhiên & Ray giảm chấn",
        badge: "MỚI",
        sku: "NX-TDG-003",
        dimensions: "D500 x R400 x C480 mm"
      },
      {
        id: "tdg-4",
        name: "Tủ Đầu Giường 1 Ngăn Kéo Gỗ Óc Chó",
        cat: "Tủ Đầu Giường",
        price: "5,900,000 VND",
        numPrice: 5900000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/05/giuong-victoria-II-2-1.webp",
        material: "Gỗ óc chó Bắc Mỹ",
        badge: "TINH TẾ",
        sku: "NX-TDG-004",
        dimensions: "D520 x R420 x C500 mm"
      }
    ]
  },

  // ==========================================
  // CỐT LÕI 3: BÀN ĂN (BÀN ĂN & GHẾ ĂN)
  // ==========================================
  "ban-an": {
    name: "Bàn Ăn",
    group: "Bàn Ăn",
    desc: "Bộ sưu tập bàn ăn Nhà Xinh: Khoảnh khắc sum vầy gia đình. Đa dạng mẫu bàn ăn thông minh mở rộng, bàn mặt đá cao cấp và ghế ăn êm ái.",
    badge: "SUM VẦY",
    products: [] // Sẽ được tự động gộp từ các danh mục con bên dưới
  },

  "ban-an-mo-rong": {
    name: "Bàn Ăn Mở Rộng Thông Minh",
    group: "Bàn Ăn",
    desc: "Thiết kế cơ chế mở rộng thông minh từ Ý, dễ dàng biến đổi từ 4-6 chỗ thành 8-10 chỗ khi có khách ghé thăm.",
    badge: "THÔNG MINH",
    products: [
      {
        id: "ba-1",
        name: "Bàn Ăn Mở Rộng Orbital Calligaris (Ý)",
        cat: "Bàn Ăn Mở Rộng",
        price: "86,000,000 VND",
        numPrice: 86000000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/05/thuong-hieu-calligaris.webp",
        material: "Kính cường lực & Khung kim loại Ý",
        badge: "CALLIGARIS",
        sku: "NX-BA-001",
        dimensions: "D1650-2550 x R1050 x C750 mm"
      },
      {
        id: "ba-2",
        name: "Bàn Ăn Mở Rộng Levante Kính Cường Lực",
        cat: "Bàn Ăn Mở Rộng",
        price: "45,000,000 VND",
        numPrice: 45000000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/10/nha-xinh-ban-an-26.jpg",
        material: "Mặt kính chống trầy & Chân gỗ sồi",
        badge: "BÁN CHẠY",
        sku: "NX-BA-002",
        dimensions: "D1600-2200 x R900 x C760 mm"
      },
      {
        id: "ba-3",
        name: "Bàn Ăn Thông Minh Gỗ Óc Chó Connubia",
        cat: "Bàn Ăn Mở Rộng",
        price: "52,500,000 VND",
        numPrice: 52500000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/05/ban-an-victoria-II-1m8-3-1.webp",
        material: "Gỗ óc chó phủ Melamine chống trầy",
        badge: "MỚI",
        sku: "NX-BA-003",
        dimensions: "D1400-2000 x R900 x C750 mm"
      },
      {
        id: "ba-4",
        name: "Bàn Ăn Chân Kim Loại Gấp Gọn Modern",
        cat: "Bàn Ăn Mở Rộng",
        price: "38,000,000 VND",
        numPrice: 38000000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/10/nha-xinh-ban-an-26.jpg",
        material: "Khung thép sơn tĩnh điện & Gỗ sồi",
        badge: "TIỆN ÍCH",
        sku: "NX-BA-004",
        dimensions: "D1500-2100 x R850 x C750 mm"
      }
    ]
  },

  "ban-an-mat-da": {
    name: "Bàn Ăn Mặt Đá Cao Cấp",
    group: "Bàn Ăn",
    desc: "Bàn ăn mặt đá Ceramic chống trầy, chống ố, chịu nhiệt độ cao kết hợp khung chân Inox mạ PVD vàng đồng sang trọng.",
    badge: "SANG TRỌNG",
    products: [
      {
        id: "ba-5",
        name: "Bàn Ăn Mặt Đá Marble Trắng Vân Mây Khung Inox PVD",
        cat: "Bàn Ăn Mặt Đá",
        price: "42,000,000 VND",
        numPrice: 42000000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/10/nha-xinh-ban-an-26.jpg",
        material: "Đá Marble tự nhiên & Chân inox mạ PVD",
        badge: "CAO CẤP",
        sku: "NX-BA-005",
        dimensions: "D1800 x R900 x C760 mm"
      },
      {
        id: "ba-6",
        name: "Bàn Ăn Mặt Đá Ceramic Chống Xước Milan",
        cat: "Bàn Ăn Mặt Đá",
        price: "29,900,000 VND",
        numPrice: 29900000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/05/thuong-hieu-calligaris.webp",
        material: "Đá Ceramic nhập khẩu & Khung thép",
        badge: "BỀN BỈ",
        sku: "NX-BA-006",
        dimensions: "D1600 x R850 x C750 mm"
      },
      {
        id: "ba-7",
        name: "Bàn Ăn Victoria II 1M8 Gỗ Sồi Tự Nhiên",
        cat: "Bàn Ăn Gỗ Sồi",
        price: "34,500,000 VND",
        numPrice: 34500000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/05/ban-an-victoria-II-1m8-3-1.webp",
        material: "Gỗ sồi tự nhiên chạm khắc tinh xảo",
        badge: "COUNTRY CHIC",
        sku: "NX-BA-007",
        dimensions: "D1800 x R900 x C760 mm"
      },
      {
        id: "ba-8",
        name: "Bàn Ăn Gỗ Óc Chó Nguyên Tấm Bắc Mỹ",
        cat: "Bàn Ăn Gỗ Óc Chó",
        price: "58,000,000 VND",
        numPrice: 58000000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/10/nha-xinh-ban-an-26.jpg",
        material: "Gỗ óc chó Walnut nguyên tấm cao cấp",
        badge: "ĐỘC BẢN",
        sku: "NX-BA-008",
        dimensions: "D2000 x R950 x C760 mm"
      }
    ]
  },

  "ghe-an": {
    name: "Ghế Ăn Bọc Đệm",
    group: "Bàn Ăn",
    desc: "Ghế ăn êm ái bọc da hoặc nỉ cao cấp, form dáng chuẩn công thái học giúp bữa cơm gia đình kéo dài thoải mái.",
    badge: "ÊM ÁI",
    products: [
      {
        id: "ga-1",
        name: "Ghế Ăn Bọc Đệm Annie Calligaris (Ý)",
        cat: "Ghế Ăn",
        price: "8,500,000 VND",
        numPrice: 8500000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/05/thuong-hieu-calligaris.webp",
        material: "Vải bọc cao cấp & Chân gỗ sồi Ý",
        badge: "CALLIGARIS",
        sku: "NX-GA-001",
        dimensions: "D510 x R580 x C840 mm"
      },
      {
        id: "ga-2",
        name: "Ghế Ăn Gỗ Sồi Bọc Nỉ Basil Connubia",
        cat: "Ghế Ăn",
        price: "4,200,000 VND",
        numPrice: 4200000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/05/ban-an-victoria-II-1m8-3-1.webp",
        material: "Khung gỗ sồi & Đệm mút D40",
        badge: "HOT",
        sku: "NX-GA-002",
        dimensions: "D490 x R540 x C820 mm"
      },
      {
        id: "ga-3",
        name: "Ghế Ăn Bọc Da Bò Chân Kim Loại Milan",
        cat: "Ghế Ăn",
        price: "6,800,000 VND",
        numPrice: 6800000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/10/nha-xinh-ban-an-26.jpg",
        material: "Da bò nhân tạo cao cấp & Chân thép sơn đen",
        badge: "MỚI",
        sku: "NX-GA-003",
        dimensions: "D520 x R560 x C850 mm"
      },
      {
        id: "ga-4",
        name: "Ghế Ăn Đệm Êm Scandinavia Cozy",
        cat: "Ghế Ăn",
        price: "3,900,000 VND",
        numPrice: 3900000,
        img: "https://nhaxinh.com/wp-content/uploads/2026/07/nha-xinh-victoria-phong-khach-tong-quan-1200x800.webp",
        material: "Vải dệt thoáng khí & Gỗ tự nhiên",
        badge: "ƯA CHUỘNG",
        sku: "NX-GA-004",
        dimensions: "D480 x R530 x C810 mm"
      }
    ]
  }
};

// Tự động gộp sản phẩm vào 3 danh mục cha cốt lõi (sofa, giuong-ngu, ban-an)
(function initCorePillars() {
  const sofaSubs = ["sofa-bang", "sofa-goc", "sofa-da-y", "armchair", "ghe-dai-don"];
  const giuongSubs = ["giuong-boc-da-ni", "giuong-go", "tu-dau-giuong"];
  const banAnSubs = ["ban-an-mo-rong", "ban-an-mat-da", "ghe-an"];

  sofaSubs.forEach(slug => {
    if (NHA_XINH_CATALOG[slug]) {
      NHA_XINH_CATALOG["sofa"].products.push(...NHA_XINH_CATALOG[slug].products);
    }
  });

  giuongSubs.forEach(slug => {
    if (NHA_XINH_CATALOG[slug]) {
      NHA_XINH_CATALOG["giuong-ngu"].products.push(...NHA_XINH_CATALOG[slug].products);
    }
  });

  banAnSubs.forEach(slug => {
    if (NHA_XINH_CATALOG[slug]) {
      NHA_XINH_CATALOG["ban-an"].products.push(...NHA_XINH_CATALOG[slug].products);
    }
  });
})();
