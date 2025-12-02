# Halloween Stories Web App 🎃

A spooky web platform where users can **read**, **upload**, and **subscribe** to daily scary stories.  
Built with **Node.js**, **Gemini AI**, and **file-based storage**, this project delivers a complete Halloween experience with AI-powered scary story detection.

---

## 📖 Features

- **Home Page**: Welcome users and showcase featured stories.  
- **Read Page**: Browse and read uploaded stories.  
- **Upload Page**: Users can submit their own stories.  
  - AI-powered **scary story detection** ensures only scary stories are accepted.  
- **Mailing List**: Subscribe to receive **daily AI-generated scary stories** via email.  
- **Real-time Story Generation**: Gemini AI generates daily scary stories.  
- **Scheduled Story Delivery**: Stories are automatically emailed to subscribers daily using `node-cron`.  

---

## 🛠 Tech Stack

- **Node.js**: Server-side runtime  
- **HTTP Server**: Built with `http` module, no external backend  
- **File System (fs)**: Stores stories and subscriber data in JSON files  
- **Gemini AI (Google Generative AI)**: Detects scary stories and generates new ones  
- **node-cron**: Schedules daily story emails  
- **dotenv**: Environment variable management  
- **Jest**: Unit testing  

