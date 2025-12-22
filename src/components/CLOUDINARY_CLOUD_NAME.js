const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
        // Step 1: Upload the file to Cloudinary
        const uploadFormData = new FormData();
        uploadFormData.append('file', resumeFile);
        uploadFormData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

        // Add this line
        console.log("Attempting to upload to URL:", `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/raw/upload`);

        const cloudinaryResponse = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/raw/upload`,
            {
                method: 'POST',
                body: uploadFormData
            }
        );

        if (!cloudinaryResponse.ok) {
            const errorData = await cloudinaryResponse.text();
            console.error("Cloudinary Error Details:", errorData);
            throw new Error('File upload to Cloudinary failed.');
        }

        const fileData = await cloudinaryResponse.json();
        const resumeUrl = fileData.secure_url;

        // Step 2: Send the email with the file URL
        const formElement = formRef.current;
        const templateParams = {
            from_name: formElement['fullName'].value,
            from_email: formElement['email'].value,
            phone: formElement['phone'].value,
            job_title: formElement['DesiredJobTitle'].value,
            linkedin: formElement['linkedInProfile'].value,
            cover_letter: formElement['coverLetter'].value,
            resume_url: resumeUrl,
        };

        console.log("Sending email with these parameters:", templateParams);

        await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
        );

        console.log("Email sent successfully!");
        setIsSubmitted(true);
        setFormData({ fullName: '', email: '', phone: '', DesiredJobTitle: '', linkedInProfile: '', coverLetter: '' });
        setResumeFile(null);
        formRef.current.reset();

        setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
        console.error("Submission error:", error);
        setErrors({ submit: 'Failed to submit resume. Please check the console for details.' });
    } finally {
        setIsSubmitting(false);
    }
};