exports.passwordUpdated = (email, name) => {
	return `<!DOCTYPE html>
    <html>
    <body>
        <div class="container">
           
            <div class="body">
                <p>Hey ${name},</p>
                <p>Your password has been successfully updated for the email <span class="highlight">${email}</span>.
                </p>
                <p>If you did not request this password change, please contact us immediately to secure your account.</p>
            </div>
            div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a
            href="mailto:adarshappatel@gmail.com">adarshappatel@gmail.com</a>. We are here to help!</div>
        </div>
    </body>
    
    </html>`;
};