export function buildScaryEmail(storyObject) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${storyObject.title}</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        background: linear-gradient(180deg, #0a0a0a 0%, #1a0a0a 50%, #0a0a0a 100%);
        color: #e6e6e6;
        font-family: 'Georgia', 'Times New Roman', serif;
        line-height: 1.7;
        padding: 0;
        margin: 0;
      }
      
      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background: #0d0d0d;
        box-shadow: 0 0 40px rgba(255, 51, 0, 0.3);
      }
      
      .header {
        background: linear-gradient(135deg, #1a0000 0%, #330000 100%);
        padding: 40px 20px;
        text-align: center;
        border-bottom: 3px solid #ff3300;
        position: relative;
        overflow: hidden;
      }
      
      .header::before {
        content: '👻';
        position: absolute;
        font-size: 100px;
        opacity: 0.05;
        left: -20px;
        top: -20px;
        transform: rotate(-15deg);
      }
      
      .header::after {
        content: '🎃';
        position: absolute;
        font-size: 100px;
        opacity: 0.05;
        right: -20px;
        bottom: -20px;
        transform: rotate(15deg);
      }
      
      h1 {
        color: #ff3300;
        font-size: 2.5em;
        text-shadow: 0 0 10px rgba(255, 51, 0, 0.8),
                     0 0 20px rgba(255, 51, 0, 0.5),
                     2px 2px 5px #000;
        margin-bottom: 10px;
        letter-spacing: 2px;
        position: relative;
        z-index: 1;
      }
      
      .subtitle {
        color: #ffcc00;
        font-size: 1.1em;
        font-style: italic;
        text-shadow: 1px 1px 3px #000;
      }
      
      .meta-info {
        display: flex;
        justify-content: space-around;
        padding: 25px 20px;
        background: linear-gradient(90deg, #1a1a1a 0%, #2a1a1a 50%, #1a1a1a 100%);
        border-bottom: 1px solid #333;
      }
      
      .meta-item {
        text-align: center;
        flex: 1;
      }
      
      .meta-label {
        color: #ff6600;
        font-size: 0.85em;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 5px;
        font-weight: bold;
      }
      
      .meta-value {
        color: #ffcc00;
        font-size: 1.1em;
        font-weight: bold;
        text-shadow: 0 0 5px rgba(255, 204, 0, 0.5);
      }
      
      .story-container {
        padding: 40px 30px;
        background: #0d0d0d;
        position: relative;
      }
      
      .story-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, 
          transparent 0%, 
          #ff3300 50%, 
          transparent 100%);
      }
      
      .story-box {
        background: linear-gradient(135deg, #1a1a1a 0%, #2a1515 100%);
        border: 2px solid #ff3300;
        border-radius: 10px;
        padding: 30px;
        box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.5),
                    0 0 20px rgba(255, 51, 0, 0.2);
        position: relative;
      }
      
      .story-box::before {
        content: '"';
        position: absolute;
        top: 10px;
        left: 15px;
        font-size: 80px;
        color: #ff3300;
        opacity: 0.1;
        font-family: Georgia, serif;
        line-height: 0;
      }
      
      .story-text {
        font-size: 1.05em;
        color: #e6e6e6;
        text-align: justify;
        line-height: 1.8;
        position: relative;
        z-index: 1;
      }
      
      .story-text::first-letter {
        font-size: 3em;
        float: left;
        line-height: 0.8;
        margin: 5px 10px 0 0;
        color: #ff3300;
        text-shadow: 0 0 10px rgba(255, 51, 0, 0.8);
      }
      
      .divider {
        text-align: center;
        margin: 30px 0;
        color: #ff3300;
        font-size: 1.5em;
        opacity: 0.5;
      }
      
      .footer {
        padding: 30px 20px;
        background: linear-gradient(180deg, #0d0d0d 0%, #1a0000 100%);
        border-top: 2px solid #ff3300;
        text-align: center;
      }
      
      .footer-message {
        font-size: 1.2em;
        color: #ffcc00;
        margin-bottom: 15px;
        text-shadow: 0 0 10px rgba(255, 204, 0, 0.5);
        font-weight: bold;
      }
      
      .footer-tagline {
        font-size: 0.9em;
        color: #999;
        font-style: italic;
      }
      
      .skull-divider {
        margin: 20px 0;
        opacity: 0.3;
        font-size: 1.2em;
        letter-spacing: 10px;
      }
      
      @media only screen and (max-width: 600px) {
        h1 {
          font-size: 1.8em;
        }
        
        .story-container {
          padding: 30px 20px;
        }
        
        .story-box {
          padding: 20px;
        }
        
        .meta-info {
          flex-direction: column;
          gap: 15px;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <!-- Header -->
      <div class="header">
        <h1>👻 ${storyObject.title} 👻</h1>
        <div class="subtitle">A Haunting Tale from the Shadows</div>
      </div>
      
      <!-- Meta Information -->
      <div class="meta-info">
        <div class="meta-item">
          <div class="meta-label">📍 Origin</div>
          <div class="meta-value">${storyObject.country}</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">🕐 Time</div>
          <div class="meta-value">${storyObject.timeStamp}</div>
        </div>
      </div>
      
      <!-- Story Content -->
      <div class="story-container">
        <div class="story-box">
          <div class="story-text">
            ${storyObject.story}
          </div>
        </div>
        
        <div class="divider skull-divider">💀 💀 💀</div>
      </div>
      
      <!-- Footer -->
      <div class="footer">
        <div class="footer-message">🎃 Happy Halloween 🎃</div>
        <div class="footer-tagline">Beware the night... for not all stories are merely tales.</div>
      </div>
    </div>
  </body>
  </html>
  `;
}
