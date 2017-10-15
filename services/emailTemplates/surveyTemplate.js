const keys = require('../../config/keys');

module.exports = survey => {
  const {body} = survey;
  const {redirectDomain} = keys;
  return `
    <html>
      <body>
        <div style="text-align:center;">
          <h3>I'd like your input!<h3>
          <p>Please answer the following question.</p>
          <p>${body}</p>
          <div>
            <a href="${redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${redirectDomain}/api/surveys/${survey.id}/no">No</a>
          </div>
        </div>
      </body>
    </html>    
  `;
};