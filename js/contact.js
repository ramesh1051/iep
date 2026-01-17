const btn = document.getElementById('button');
const contactForm = document.getElementById('form');

contactForm.addEventListener('submit', function(event) {
   event.preventDefault();

   // UI feedback
   btn.value = 'Sending...';
   btn.disabled = true;

   const serviceID = 'service_4bgpjhq'; // Using your Service ID from previous prompts
   const templateID = 'template_nxyc1f3';

   // "this" refers to the form element
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Message';
      btn.disabled = false;
      
      // Success Notification
      showToast("Message sent successfully!", "success");
      
      // Reset form
      contactForm.reset();
    }, (err) => {
      btn.value = 'Send Message';
      btn.disabled = false;
      
      // Error Notification
      showToast("Failed to send. Please try again.", "error");
      console.error(JSON.stringify(err));
    });
});

// Reusable Disappearing Message Function
function showToast(message, type) {
    const toast = document.createElement("div");
    toast.innerText = message;
    
    // Styling the message
    toast.className = "fixed bottom-10 left-1/2 -translate-x-1/2 px-8 py-3 rounded-full text-white font-bold shadow-2xl z-[100] transition-opacity duration-500";
    
    // Brand Orange for success, Red for error
    toast.style.backgroundColor = (type === "success") ? "#ff7a3d" : "#ef4444";

    document.body.appendChild(toast);

    // Fade out and remove
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}