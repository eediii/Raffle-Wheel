# 🎡 Real-Time Raffle Wheel

An interactive, real-time raffle application designed for events, classrooms, and presentations. Participants scan a QR code with their mobile phones to join the list instantly. The host spins the wheel on the main screen to pick a winner!

![Wheel Preview](https://via.placeholder.com/800x400?text=Interactive+Raffle+Wheel+Preview)

## 🌟 Features

* **Real-Time Connection:** Names appear on the host screen instantly as users join (powered by Socket.io).
* **Mobile Friendly:** Participants join via a simple, no-app-required mobile interface.
* **Dynamic QR Code:** Automatically generates a QR code for the current session URL.
* **Smooth Animation:** High-performance CSS Conic Gradient wheel animation.
* **Fair Play:** Random selection algorithm.

## 🛠️ Prerequisites

Before you begin, ensure you have met the following requirements:
* **Node.js** installed on your machine.

## 🚀 Installation & Setup

Since this repository does not include heavy dependency files, you need to install them first.

1.  **Clone or Download the Repository**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_PROJECT_NAME.git](https://github.com/YOUR_USERNAME/YOUR_PROJECT_NAME.git)
    cd YOUR_PROJECT_NAME
    ```

2.  **Install Dependencies (Crucial Step)**
    This command will download all necessary libraries (Express, Socket.io, etc.) based on the `package.json` file.
    ```bash
    npm install
    ```

3.  **Start the Server**
    ```bash
    node server.js
    ```

4.  **Open in Browser**
    Go to `http://localhost:3000` to see the host screen.

## 🌍 How to Use in Public (Classroom/Events)

To allow participants to join from different networks (e.g., 4G/LTE or School Wi-Fi), you need to expose your local server to the internet using a tunnel service.

### Option 1: Using Cloudflare Tunnel (Recommended)
1.  Download `cloudflared` from [here](https://github.com/cloudflare/cloudflared/releases).
2.  Open a new terminal in the project folder and run:
    ```bash
    ./cloudflared tunnel --url http://localhost:3000
    ```
3.  Copy the generated `.trycloudflare.com` link and open it in your browser. The QR code will update automatically.

### Option 2: Using Ngrok
1.  Install Ngrok.
2.  Run the following command:
    ```bash
    ngrok http 3000
    ```

## 💻 Tech Stack

* **Backend:** Node.js, Express
* **Real-Time Communication:** Socket.io
* **Frontend:** HTML5, CSS3 (Conic Gradients), JavaScript

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Made with ❤️ by [Your Name]
