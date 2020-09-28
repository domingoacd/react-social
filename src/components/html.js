const html = (body, styles, title ) => {
  return `<!DOCTYPE  html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${title}</title>
        ${styles}
      </head>
      <body>
        ${body}
      </body>
    </html>`
  
}

export default html;