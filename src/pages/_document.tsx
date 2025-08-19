import Document, { Html, Head, Main, NextScript } from 'next/document'
import i18nextConfig from '@/next-i18next.config'
import { Logo } from '../app/elements/icons/Logo'

class MyDocument extends Document {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale
    return (
      <Html lang={currentLocale}>
        <Head>
          <meta charSet='utf-8' />
          <link rel='icon' href='images/icon.svg' />
        </Head>
        <body>
          <div
            id='preloader'
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 2147483647,
              display: 'grid',
              placeItems: 'center',
              transition: 'opacity 200ms ease'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
                color: '#c454ae'
              }}
            >
              <div>{Logo ? <Logo size={74} /> : null}</div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  /* Theme-aware background (no opacity) */
                  #preloader { background: #fefeff; }
                  @media (prefers-color-scheme: dark) { #preloader { background: #0e162a; } }
                  .dark #preloader { background: #0e162a !important; }
                  .light #preloader { background: #fefeff !important; }

                  /* Draw the paths progressively */
                  #preloader svg path {
                    stroke-dasharray: 60;
                    stroke-dashoffset: 60;
                    animation: path-draw 2s ease-in-out infinite;
                  }
                  @keyframes path-draw {
                    0% { stroke-dashoffset: 60; }
                    50% { stroke-dashoffset: 0; }
                    100% { stroke-dashoffset: 60; }
                  }
                `
              }}
            />
          </div>

          <Main />
          <NextScript />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(){
                function hide(){
                  var el = document.getElementById('preloader');
                  if(!el) return;
                  el.style.opacity = '0';
                  setTimeout(function(){ if(el && el.parentNode){ el.parentNode.removeChild(el); } }, 220);
                }
                if (document.readyState === 'complete') {
                  // already loaded (from cache) -> wait a couple frames, then a longer delay so it's clearly visible
                  requestAnimationFrame(function(){
                    requestAnimationFrame(function(){ setTimeout(hide, 1500); });
                  });
                } else {
                  window.addEventListener('load', function(){ setTimeout(hide, 1200); });
                  // safety timeout in case 'load' never fires
                  setTimeout(hide, 7000);
                }
              })();
            `
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
