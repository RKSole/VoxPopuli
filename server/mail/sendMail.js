const mjmlUtils = require("mjml-utils");
const transporter = require("./transporterGmail");
const path = require("path");
const pathToHtmlEmailTemplate = path.join(
  __dirname,
  "./mail/welcome_mail.html"
);

const sendAwesomeMail = (to, variables, from = "VoxPopuli") => {
  return mjmlUtils
    .inject(pathToHtmlEmailTemplate, variables)
    .then(finalTemplate => {
      return transporter
        .sendMail({
          from: `"testingemailnano@gmail.com <${from}>`,
          to,
          subject: "Welcome to VoxPopuli", // Asunto
          html: ``
        })
        .then(info => console.log(info));
    });
};
module.exports = sendAwesomeMail;
