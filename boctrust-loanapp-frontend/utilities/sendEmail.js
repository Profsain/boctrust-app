const sendEmail = async (options) => {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  
    const { email, subject, html, firstname, lastname } = options;

     await fetch(`${apiUrl}/api/email/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email || "profsainhm@gmail.com",
        subject: subject || "Salary Check",
        html: html || `<h1>Salary Check</h1>
        <p>Dear ${firstname} ${lastname},</p>
        <p>Your salary check has been completed.</p>
        <p>Kindly login to your account to view the details.</p>
        <p>Thank you.</p>
        `,
      }),
    });
}

export default sendEmail;