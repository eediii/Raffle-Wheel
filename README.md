# Real-Time Raffle Wheel 🎡

## 🌟 Features 

* **Real-Time Connection:** Names appear on the screen instantly as users join (Socket.io).
* **Mobile Friendly:** Participants join via a simple mobile interface.
* **Dynamic QR Code:** Automatically generates a QR code for the current session.
* **Smooth Animation:** High-performance CSS Conic Gradient wheel animation.

---

## 🚀 Installation

1.  **Clone the project:**
    ```bash
    git clone https://github.com/eediii/Raffle-Wheel.git
    cd Raffle-Wheel
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the server:**
    ```bash
    node server.js
    ```

4.  **Open in Browser:**
    Go to `http://localhost:3000`

---

## 🌍 Public Access (For Events)

To allow users to join from different networks (e.g., via 4G), use a tunnel service like Cloudflare Tunnel or Ngrok.

**Example with Cloudflare:**
```bash
cloudflared tunnel --url http://localhost:3000
