export default (html, preloadedState = {}) => `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8"/>
                <title>ReactJS lessons</title>
            <link href="/static/main.css" rel="stylesheet"></head>
            <body>
                <div id="app">${html}</div>
                <script></script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c',
  )}
                </script>
            <script type="text/javascript" src="/static/bundle.js"></script>
            </body>
        </html>
      `;
