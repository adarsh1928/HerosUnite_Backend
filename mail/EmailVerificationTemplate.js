const otpTemplate = (otp) => {
	return `<!DOCTYPE html>
	<html>

	
	<body>
		<div class="container">
			
			<div class="body">
				<p>Dear User,</p>
				<p>Thank you for registering with HerosUnite. To complete your registration, please use the following OTP
					(One-Time Password) to verify your account:</p>
				<h2 class="highlight">${otp}</h2>
				
			</div>
			<div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a
					href="mailto:adarshappatel@gmail.com">adarshappatel@gmail.com</a>. We are here to help!</div>
		</div>
	</body>
	
	</html>`;
};
module.exports = otpTemplate;