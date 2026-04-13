# Design Spec: Section 2 - Media Analytic Connection & Quality Control

## Understanding Summary
- **Mục tiêu:** Tạo 1 Slide trình bày nội bộ dành cho team Account (nằm trong App React hiện tại).
- **Ý nghĩa:** Giải thích sự kết nối giữa việc phân tích số liệu Media (Media Analytics) và việc kiểm soát chất lượng Kênh đích (Website, Fanpage).
- **Đối tượng đọc:** Team Account Executive (cần hiểu logic, không cần code).
- **Ràng buộc:** Trình bày trên 1 file Component Component (ví dụ `Slide33.tsx`), dùng chung UI Component của Project (Tailwind, Lucide, TabbedSlide). Ngôn ngữ trực quan, dễ hiểu.
- **Không phải là:** Một dashboard/tool Analytics thực sự.

## Assumptions (Giả định)
- Tận dụng `TabbedSlide.tsx` để chia làm 2 phần nội dung rõ rệt nhằm tránh nhồi nhét chữ trên một màn hình.
- Theme dark mode/light mode tương đồng với các slide trước.

## Decision Log
1. **Quyết định:** Gộp cả 2 hướng tiếp cận (Hành trình phễu + Checklist rủi ro).
   - **Lý do:** Cách 1 mổ xẻ "Tại sao" giúp bám bản chất, Cách 2 mổ xẻ "Làm gì" mang tính thực chiến cao.
2. **Quyết định:** Sử dụng Component Tabbed.
   - **Lý do:** Giúp slide không bị lộn xộn, người thuyết trình điều hướng tốt hơn.

## Final Design (Cấu trúc Nội dung Slide)

### Tab 1: Sơ đồ Hành trình Khách hàng (Customer Journey Pipeline)
- **Visual Flow:** [Tiếp cận Quảng Cáo] ➔ [Cầu Nối Dữ Liệu] ➔ [Kênh Đích] ➔ [Chuyển Đổi].
- **Chi tiết giao diện:**
  - **Ads/Traffic (🔊):** Khách hàng nhấp vào QC.
  - **Analytics Connection (🔗):** Pixel, GA4, UTM. Nút thắt sinh tử. Bị đứt = Media mù.
  - **Destination Quality (🏠):** Giao diện Web / Dịch vụ Fanpage. Nút thắt thể lực. Load chậm = Rớt khách.
  - **Conversion (💰):** Kết quả cuối cùng.
- **Key Message:** *"Media dắt khách đến bờ suối. Có uống nước hay không là do dòng nước (Tracking/Nội dung)."*

### Tab 2: Checklist "Chốt chặn" (Bắt buộc kiểm tra)
- **Cấu trúc:** 2 nhóm Card tương phản nhau. Đi kèm checkbox và icon cảnh báo.
- **Card 1: Cầu nối Data (Màu tím/xanh)**
  - Mã tracking đã cài trùng khớp ID chưa?
  - Sự kiện (Event) có nhảy chuẩn khi test không?
  - Link Ads đã gắn UTM phân nguồn chưa?
- **Card 2: Kênh đích Website/Fanpage (Màu cam/đỏ)**
  - Tốc độ trang < 3s (test tốc độ).
  - Trải nghiệm Mobile UI (Form hoạt động tốt).
  - Kịch bản kịch bản trực page/Telesale trong 2h.
- **Key Message:** *"Setup là Kỹ thuật, kiểm tra chốt chặn là Trách nhiệm của Account để bảo vệ ngân sách."*
