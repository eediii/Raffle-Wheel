# Real-Time Raffle Wheel / Canlı Çarkıfelek Sistemi 🎡

**[English]** An interactive, real-time raffle application designed for events, classrooms, and presentations. Participants scan a QR code with their phones to join the list instantly. The host spins the wheel on the main screen to pick a winner!

**[Türkçe]** Etkinlikler, sınıflar ve sunumlar için tasarlanmış, gerçek zamanlı ve etkileşimli bir çekiliş uygulaması. Katılımcılar telefonlarıyla QR kodu okutarak anında listeye dahil olur. Sunucu ana ekrandaki çarkı çevirerek kazananı belirler!

---

## 🌟 Features / Özellikler

* **Real-Time Connection:** Names appear on the screen instantly as users join (Socket.io).
* **Mobile Friendly:** Participants join via a simple mobile interface.
* **Dynamic QR Code:** Automatically generates a QR code for the current session.
* **Smooth Animation:** High-performance CSS Conic Gradient wheel animation.

* **Gerçek Zamanlı Bağlantı:** Kullanıcılar katıldığında isimler anında ekrana düşer (Socket.io).
* **Mobil Uyumlu:** Katılımcılar basit bir mobil arayüz ile katılır.
* **Dinamik QR Kod:** Oturum için otomatik QR kod oluşturur.
* **Akıcı Animasyon:** Yüksek performanslı CSS Conic Gradient çark animasyonu.

---

## 🚀 Installation / Kurulum

1.  **Clone the project / Projeyi indirin:**
    ```bash
    git clone https://github.com/eediii/Raffle-Wheel.git
    cd Raffle-Wheel
    ```

2.  **Install dependencies / Paketleri yükleyin:**
    ```bash
    npm install
    ```

3.  **Start the server / Sunucuyu başlatın:**
    ```bash
    node server.js
    ```

4.  **Open in Browser / Tarayıcıda açın:**
    Go to `http://localhost:3000`

---

## 🌍 Public Access (For Events) / Dışarıya Açma (Etkinlikler İçin)

To allow users to join from different networks (e.g., via 4G), use a tunnel service like Cloudflare Tunnel or Ngrok.

Farklı ağlardaki (örn: mobil veri) kullanıcıların katılabilmesi için Cloudflare Tunnel veya Ngrok gibi bir tünel servisi kullanın.

**Example with Cloudflare / Cloudflare Örneği:**
```bash
cloudflared tunnel --url http://localhost:3000
