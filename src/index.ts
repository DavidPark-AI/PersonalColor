// Cloudflare Worker 타입 정의
interface ExecutionContext {
  waitUntil(promise: Promise<any>): void;
  passThroughOnException(): void;
}

interface ExportedHandler<Env = unknown> {
  fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> | Response;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    
    // CORS 헤더 설정
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // OPTIONS 요청 처리 (CORS preflight)
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    // 루트 경로
    if (url.pathname === '/') {
      const html = `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Color Finder</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
        }
        .api-info {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 5px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎨 Personal Color Finder</h1>
        <p>개인 컬러를 찾아주는 서비스입니다.</p>
        
        <div class="api-info">
            <h3>Available API Endpoints:</h3>
            <ul>
                <li><strong>GET /api/colors</strong> - 개인 컬러 타입 목록 조회</li>
                <li><strong>POST /api/analyze</strong> - 개인 컬러 분석</li>
                <li><strong>GET /api/health</strong> - 서비스 상태 확인</li>
            </ul>
        </div>
    </div>
</body>
</html>`;
      
      return new Response(html, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          ...corsHeaders,
        },
      });
    }

    // API 엔드포인트들
    if (url.pathname === '/api/health') {
      return new Response(JSON.stringify({ 
        status: 'ok', 
        timestamp: new Date().toISOString(),
        service: 'PersonalColor API'
      }), {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    }

    if (url.pathname === '/api/colors') {
      const colorTypes = [
        { id: 1, name: '봄 웜톤', description: '밝고 따뜻한 톤' },
        { id: 2, name: '여름 쿨톤', description: '부드럽고 시원한 톤' },
        { id: 3, name: '가을 웜톤', description: '깊고 따뜻한 톤' },
        { id: 4, name: '겨울 쿨톤', description: '선명하고 시원한 톤' }
      ];

      return new Response(JSON.stringify({ colors: colorTypes }), {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    }

    if (url.pathname === '/api/analyze' && request.method === 'POST') {
      try {
        const data = await request.json();
        
        // 간단한 분석 로직 (실제로는 더 복잡한 알고리즘 필요)
        const analysis = {
          result: '봄 웜톤',
          confidence: 85,
          recommendations: [
            '코랄 핑크',
            '피치 오렌지',
            '아이보리',
            '라이트 그린'
          ],
          timestamp: new Date().toISOString()
        };

        return new Response(JSON.stringify(analysis), {
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        });
      }
    }

    // 404 처리
    return new Response(JSON.stringify({ error: 'Not Found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });
  },
} satisfies ExportedHandler<Env>;

interface Env {
  // 환경 변수들이 필요하면 여기에 추가
}