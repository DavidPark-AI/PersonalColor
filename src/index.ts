export interface Env {
  // Define your environment variables here
}

declare global {
  interface ExecutionContext {
    waitUntil(promise: Promise<any>): void;
    passThroughOnException(): void;
  }
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Handle CORS for browser requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Simple routing
    if (url.pathname === '/') {
      return new Response(getHomePage(), {
        headers: {
          'Content-Type': 'text/html',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    if (url.pathname === '/api/analyze' && request.method === 'POST') {
      try {
        const data = await request.json();
        const result = analyzePersonalColor(data);
        
        return new Response(JSON.stringify(result), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: 'Invalid request data' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    }

    return new Response('Not Found', { status: 404 });
  },
};

function analyzePersonalColor(data: any) {
  // Placeholder logic for personal color analysis
  // In a real implementation, this would analyze skin tone, hair color, eye color, etc.
  const { skinTone, hairColor, eyeColor } = data;
  
  // Simple color season determination logic
  let season = 'Spring';
  let palette = ['#FFB6C1', '#98FB98', '#87CEEB', '#F0E68C'];
  
  if (skinTone === 'cool' && hairColor === 'dark') {
    season = 'Winter';
    palette = ['#000000', '#FFFFFF', '#FF0000', '#0000FF'];
  } else if (skinTone === 'warm' && hairColor === 'light') {
    season = 'Summer';
    palette = ['#E6E6FA', '#F0F8FF', '#FFF8DC', '#E0E0E0'];
  } else if (skinTone === 'warm' && hairColor === 'dark') {
    season = 'Autumn';
    palette = ['#8B4513', '#A0522D', '#CD853F', '#DEB887'];
  }
  
  return {
    season,
    palette,
    description: `Based on your features, you are a ${season} type.`,
    recommendations: [
      `Wear colors from the ${season} palette to enhance your natural beauty`,
      'Avoid colors that clash with your undertones',
      'Consider these colors for your wardrobe and makeup choices'
    ]
  };
}

function getHomePage(): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Color Finder</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: #333;
        }
        .container {
            background: white;
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        h1 {
            text-align: center;
            color: #5a67d8;
            margin-bottom: 30px;
            font-size: 2.5em;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #4a5568;
        }
        select, button {
            width: 100%;
            padding: 12px;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s;
        }
        select:focus {
            outline: none;
            border-color: #5a67d8;
        }
        button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            cursor: pointer;
            font-weight: 600;
            margin-top: 20px;
            transition: transform 0.2s;
        }
        button:hover {
            transform: translateY(-2px);
        }
        .result {
            margin-top: 30px;
            padding: 25px;
            background: #f7fafc;
            border-radius: 12px;
            border-left: 5px solid #5a67d8;
        }
        .palette {
            display: flex;
            gap: 10px;
            margin: 15px 0;
            flex-wrap: wrap;
        }
        .color-swatch {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 3px solid #fff;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .recommendations {
            list-style-type: none;
            padding: 0;
        }
        .recommendations li {
            background: #e2e8f0;
            margin: 8px 0;
            padding: 10px;
            border-radius: 6px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎨 Personal Color Finder</h1>
        <p style="text-align: center; color: #666; margin-bottom: 30px;">
            Discover your color season and find the perfect palette for you!
        </p>
        
        <form id="colorForm">
            <div class="form-group">
                <label for="skinTone">Skin Tone:</label>
                <select id="skinTone" required>
                    <option value="">Select your skin tone</option>
                    <option value="cool">Cool (pink/blue undertones)</option>
                    <option value="warm">Warm (yellow/golden undertones)</option>
                    <option value="neutral">Neutral (mix of undertones)</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="hairColor">Hair Color:</label>
                <select id="hairColor" required>
                    <option value="">Select your hair color</option>
                    <option value="light">Light (blonde, light brown)</option>
                    <option value="medium">Medium (medium brown, auburn)</option>
                    <option value="dark">Dark (dark brown, black)</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="eyeColor">Eye Color:</label>
                <select id="eyeColor" required>
                    <option value="">Select your eye color</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="brown">Brown</option>
                    <option value="hazel">Hazel</option>
                    <option value="gray">Gray</option>
                </select>
            </div>
            
            <button type="submit">Find My Colors ✨</button>
        </form>
        
        <div id="result" class="result" style="display: none;">
            <h2>Your Color Analysis</h2>
            <div id="resultContent"></div>
        </div>
    </div>

    <script>
        document.getElementById('colorForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = {
                skinTone: document.getElementById('skinTone').value,
                hairColor: document.getElementById('hairColor').value,
                eyeColor: document.getElementById('eyeColor').value
            };
            
            try {
                const response = await fetch('/api/analyze', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                const result = await response.json();
                displayResult(result);
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while analyzing your colors.');
            }
        });
        
        function displayResult(result) {
            const resultDiv = document.getElementById('result');
            const contentDiv = document.getElementById('resultContent');
            
            const paletteHtml = result.palette.map(color => 
                \`<div class="color-swatch" style="background-color: \${color}" title="\${color}"></div>\`
            ).join('');
            
            const recommendationsHtml = result.recommendations.map(rec => 
                \`<li>\${rec}</li>\`
            ).join('');
            
            contentDiv.innerHTML = \`
                <h3>🌟 You are a \${result.season} type!</h3>
                <p>\${result.description}</p>
                
                <h4>Your Color Palette:</h4>
                <div class="palette">\${paletteHtml}</div>
                
                <h4>Recommendations:</h4>
                <ul class="recommendations">\${recommendationsHtml}</ul>
            \`;
            
            resultDiv.style.display = 'block';
            resultDiv.scrollIntoView({ behavior: 'smooth' });
        }
    </script>
</body>
</html>
  `;
}