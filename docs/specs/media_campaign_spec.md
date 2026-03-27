# Executive Summary: Media Campaign Plan

Tài liệu này đóng vai trò là "Bản đồ tư duy chi tiết" (Spec) nhằm kết nối giữa Business (Khách hàng/Account) và Technical (Media Team). Cấu trúc tuân theo chuẩn `/plan` từ Vibe Capture đến Logic Flow, đảm bảo không bỏ sót bất kỳ biến số nào ảnh hưởng đến việc phân bổ tiền mặt quảng cáo.

---

## 1. Giai đoạn 1: Vibe & Goal Capture (Giải mã nhu cầu thật)
**Account hỏi Khách hàng:**
- "Chiến dịch sắp tới anh/chị kỳ vọng điều gì nhất?" (Số lượng Lead, Tăng tải App, hay chỉ muốn phủ sóng thương hiệu ra mắt sản phẩm?)
- "Sản phẩm này điểm ăn tiền nhất (USP) so với đối thủ là gì?"
- "Ngân sách tổng (Total Budget) và thời gian ra trận (Timeline) là bao nhiêu?"

=> Tức là: Không thể "đốt tiền" vô nghĩa. Phải biết đạn bắn đi nhằm giải quyết chính xác bài toán gì của kinh doanh.

## 2. Giai đoạn 2: Basic Requirements (Yêu cầu cơ bản để lên Media Plan)
**Account cần clear với Khách hàng:**
- **Chân dung Target Audience (TA):** Độ tuổi, vị trí địa lý, sở thích, thiết bị sử dụng.
- **Nguồn lực Creative (Tài nguyên):**
  - Có sẵn Fanpage/Tài khoản QC chưa?
  - Có sẵn ảnh, video, banner (HTML5) chưa? Hay cần team làm thêm?
  - Kênh đích (Destination): Landing Page hay Fanpage Inbox?
- **Historical Data (Dữ liệu cũ):**
  - Đã từng chạy chưa? CPA/CPL cũ là bao nhiêu để lấy làm Benchmark.
  - Có tệp CRM (Danh sách SĐT/Email cũ) để cắm vào luồng Lookalike Audience không?

## 3. Giai đoạn 3: Advanced Discovery (Những thứ rủi ro dễ "bể" Plan)
**Account cần làm rõ với Khách hàng & Media:**
- **Tracking / Đo lường:** Lập trình viên đã gắn Meta Pixel, Google Analytics (GA4), TikTok Pixel chưa? Nếu chưa, Media sẽ "mù" khi tối ưu chuyển đổi.
- **Luồng chăm sóc (Flow chăm sóc KH sau khi ra số):** Lead về thì Sale sẽ gọi liền hay 2 ngày sau mới gọi? (Tốc độ gọi quyết định tỉ lệ chốt, tránh đổ thừa Media chạy Lead "rác").
- **Tình trạng Tài khoản Quảng cáo:** Sản phẩm có bị vi phạm tiêu chuẩn cộng đồng không (VD: Thực phẩm chức năng, Tài chính, Crypto)? Nếu có, cần tài khoản Agency bao (Whitelist/Invoice).

## 4. Giai đoạn 4: Kiến trúc Ngân Sách (Database & Scale)
**Account cần lấy thông tin từ Media Team để "bán" cho khách:**
- **Media Mix (Phân bổ ngân sách):** 
  - Tại sao lại là 60% FB (Ra Lead) - 20% Google Search (Vợt người có nhu cầu) - 20% TikTok (Mở phễu tiếp cận)? Account cần câu chuyện đằng sau tỷ lệ này.
- **KPI Projection (Dự phóng cam kết):**
  - "Với 100 triệu này, Media ước tính mang về 1.000,000 Reach, 5,000 Clicks và 200 Leads, giá CPA dự kiến là 500k/Lead".
- **Phasing (Lộ trình chi tiêu):**
  - Tuần 1: Testing A/B chiếm 15% budget.
  - Tuần 2-3: Scale Up (Vít ngân sách) chiếm 60% budget.
  - Tuần 4: Retargeting (Bám đuổi) chiếm 25% budget.

## 5. Giai đoạn 5: Edge Cases & Contingency (Quản trị rủi ro)
**Media cần chuẩn bị cho Account vũ khí "đỡ đạn":**
- **Giá thầu biến động mạnh:** Chạy vào mùa Black Friday giá CPM đắt gấp đôi, phương án giải quyết (Plan B) là gì?
- **Creative bị "cháy" (Fatigue):** Chạy 2 tuần thì video bị giảm tương tác, ai sẽ chịu trách nhiệm sản xuất tệp thay thế?
- **Chết Tài Khoản QC (Policy Issue):** Cách phản ứng và backup trong 24h.

---

## 6. Specification Output: MEDIA BRIEF CHECKLIST
Để chuyển từ Account sang Media trơn tru, đây là Contract Checklist:

1. **Campaign Name:** [Tên chiến dịch]
2. **Main Objective:** [Brand Awareness / Lead Gen / E-commerce Sale]
3. **KPIs Cam Kết:** [Số lượng & Cost Per Result]
4. **Ngân sách tổng:** [VNĐ] - **Duration:** [Ngày bắt đầu - kết thúc]
5. **Target Audience (Chi tiết):** [Core Demo & Interest]
6. **Key Message / Promo Offer (Vũ khí bán hàng):** [Giảm giá 50%, Quà tặng...]
7. **Destination Link:** [Link Landing page đã chèn UTM tracking]
8. **Danh sách nội dung:** [Drive link chứa Video 15s, Banner, Content Text]

---
*Bản Spec này giúp Account "nói có sách, mách có chứng" trước Khách Hàng, đồng thời biến Media Optimizer thành những kỹ sư thực thi chính xác cao.*
